import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    if (!mq.matches) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const t = e.target;
      if (t.closest && t.closest("a,button,[data-cursor='hover'],input,textarea,select,label")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot bg-foreground"
        animate={{ x: pos.x, y: pos.y, scale: hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 900, damping: 40, mass: 0.2 }}
        style={{ width: 8, height: 8 }}
        data-testid="cursor-dot"
      />
      <motion.div
        className="cursor-ring border border-foreground"
        animate={{
          x: pos.x,
          y: pos.y,
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
        data-testid="cursor-ring"
      />
    </>
  );
};
