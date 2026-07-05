import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const p = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          data-testid="loader-screen"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-display font-black text-6xl md:text-8xl tracking-tighter">
              TKS
            </span>
            <span className="font-mono text-sm md:text-base text-accent-brand">
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
          <div className="mt-8 h-[2px] w-56 md:w-80 bg-border overflow-hidden">
            <motion.div
              className="h-full bg-accent-brand"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Loading portfolio
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
