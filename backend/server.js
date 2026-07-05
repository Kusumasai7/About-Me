import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MESSAGES_FILE = path.join(__dirname, "messages.json");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMessage = {
    id: Date.now().toString(),
    name,
    email,
    subject,
    message,
    receivedAt: new Date().toISOString(),
  };

  try {
    let currentMessages = [];

    try {
      const data = await fs.readFile(MESSAGES_FILE, "utf-8");
      currentMessages = JSON.parse(data);
    } catch (readError) {
      // File doesn't exist yet, we start empty
      if (readError.code !== "ENOENT") {
        console.error("Failed to read messages file", readError);
      }
    }

    currentMessages.push(newMessage);
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(currentMessages, null, 2));

    console.log(`[Message Received] From: ${name} (${email}) - Subject: ${subject}`);

    return res.status(200).json({ success: true, message: "Inquiry saved successfully" });
  } catch (error) {
    console.error("Error writing database contact", error);
    return res.status(500).json({ error: "Failed to save inquiry" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
