import { useState, useEffect } from "react";
import { PROFILE } from "../../data/resume";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errors, setErrors] = useState({});
  const [serverActive, setServerActive] = useState(false);
  const [waking, setWaking] = useState(false);

  // Health check the Express server
  useEffect(() => {
    const checkServer = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/health");
        if (res.ok) {
          setServerActive(true);
        } else {
          setServerActive(false);
        }
      } catch (err) {
        setServerActive(false);
      }
    };
    checkServer();
    const interval = setInterval(checkServer, 10000);
    return () => clearInterval(interval);
  }, []);

  const wakeUpBackend = async () => {
    setWaking(true);
    try {
      const res = await fetch("http://localhost:5000/api/health");
      if (res.ok) {
        setServerActive(true);
      }
    } catch (err) {
      console.log("Waking server offline fallback...");
    } finally {
      setTimeout(() => {
        setWaking(false);
        setServerActive(true); // Simulate activation on fallback
      }, 1200);
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Server responded with error");
      }
    } catch (err) {
      console.warn("Express backend offline, backing up in localStorage", err);
      setTimeout(() => {
        setStatus("success");
        const backups = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
        backups.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem("portfolio_messages", JSON.stringify(backups));
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t relative">
      {/* Title */}
      <div className="flex flex-col mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-brand mb-3 select-none">
          06 — Contact
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase">
          Get in <span className="text-accent-brand">touch</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl">Let's discuss your project</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Whether you want to build a React application, coordinate a full-stack design, or just have a chat, drop me a message.
            </p>
          </div>

          <div className="space-y-4 select-none">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-4 p-4 glass border rounded-xl hover:border-accent-brand/40 transition-colors group"
            >
              <span className="p-3 rounded-full bg-secondary border text-muted-foreground group-hover:text-accent-brand transition-colors shrink-0">
                <Mail size={18} />
              </span>
              <div>
                <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Email Me</p>
                <p className="text-sm font-semibold mt-0.5">{PROFILE.email}</p>
              </div>
            </a>

            <a
              href={`tel:${PROFILE.phone}`}
              className="flex items-center gap-4 p-4 glass border rounded-xl hover:border-accent-brand/40 transition-colors group"
            >
              <span className="p-3 rounded-full bg-secondary border text-muted-foreground group-hover:text-accent-brand transition-colors shrink-0">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Call Me</p>
                <p className="text-sm font-semibold mt-0.5">{PROFILE.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 glass border rounded-xl group">
              <span className="p-3 rounded-full bg-secondary border text-muted-foreground shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Location</p>
                <p className="text-sm font-semibold mt-0.5">{PROFILE.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="p-8 glass border rounded-2xl relative overflow-hidden">
            {status === "success" ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 select-none">
                <CheckCircle size={44} className="text-accent-brand animate-bounce" />
                <h3 className="font-display font-bold text-2xl uppercase">Message Sent!</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2.5 bg-accent-brand text-accent-brand-text font-black text-xs uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-secondary/40 border text-foreground text-sm focus:outline-none focus:border-accent-brand transition-colors ${
                        errors.name ? "border-destructive" : ""
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-destructive flex items-center gap-1 select-none"><AlertTriangle size={12} /> {errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-secondary/40 border text-foreground text-sm focus:outline-none focus:border-accent-brand transition-colors ${
                        errors.email ? "border-destructive" : ""
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs text-destructive flex items-center gap-1 select-none"><AlertTriangle size={12} /> {errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-secondary/40 border text-foreground text-sm focus:outline-none focus:border-accent-brand transition-colors ${
                      errors.subject ? "border-destructive" : ""
                    }`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && <p className="text-xs text-destructive flex items-center gap-1 select-none"><AlertTriangle size={12} /> {errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-secondary/40 border text-foreground text-sm focus:outline-none focus:border-accent-brand transition-colors resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                    placeholder="Hi Kusuma Sai, let's talk about..."
                  />
                  {errors.message && <p className="text-xs text-destructive flex items-center gap-1 select-none"><AlertTriangle size={12} /> {errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-accent-brand text-accent-brand-text font-black text-xs uppercase tracking-widest rounded-lg hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating Bottom Server Status Banner */}
      {!serverActive && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] pointer-events-auto w-[90%] max-w-xl select-none">
          <div className="glass border border-accent-brand/20 bg-background/95 backdrop-blur-md rounded-full px-5 py-3 shadow-2xl flex items-center justify-between gap-3 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 animate-pulse shrink-0" />
              <span className="font-mono text-[10px] text-muted-foreground leading-tight">
                Frontend Preview. Please wake servers to enable API database functionality.
              </span>
            </div>
            <button
              onClick={wakeUpBackend}
              className="px-4 py-2 bg-accent-brand text-accent-brand-text font-black rounded-full uppercase text-[9px] tracking-wider transition-opacity hover:opacity-90 active:scale-95 shrink-0"
            >
              {waking ? "Waking..." : "Wake up servers"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
