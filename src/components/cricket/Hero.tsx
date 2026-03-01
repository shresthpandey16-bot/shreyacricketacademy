import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-stadium.jpg";

const useTypingEffect = (texts: string[], speed = 60, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const text = texts[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
      } else {
        setIndex((i) => (i + 1) % texts.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, texts, speed, pause]);

  return displayed;
};

const FloatingEmoji = ({ emoji, delay, x }: { emoji: string; delay: number; x: number }) => (
  <motion.span
    className="absolute text-3xl md:text-5xl select-none pointer-events-none"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: [0, 1, 1, 0], y: [-20, -80, -140, -200], x: [0, x, -x, 0] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {emoji}
  </motion.span>
);

const Hero = () => {
  const typed = useTypingEffect([
    "Specially crafted for you, Shreya! 💝",
    "Learn cricket the fun way! 🏏",
    "From basics to pro — let's go! 🚀",
  ]);

  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!ballRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      ballRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cricket stadium" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 cricket-grid-bg opacity-20" />
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingEmoji emoji="🏏" delay={0} x={20} />
        <FloatingEmoji emoji="⚾" delay={2} x={-15} />
        <FloatingEmoji emoji="🏆" delay={4} x={25} />
        <FloatingEmoji emoji="⭐" delay={1} x={-30} />
        <FloatingEmoji emoji="🔥" delay={3} x={10} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          ref={ballRef}
          className="mx-auto mb-8 w-20 h-20 md:w-28 md:h-28 rounded-full gradient-primary flex items-center justify-center text-4xl md:text-6xl shadow-2xl cursor-pointer transition-transform duration-200"
          style={{ boxShadow: "0 0 40px hsl(187 100% 50% / 0.3)" }}
        >
          🏏
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
        >
          <span className="text-gradient">SHREYA'S</span>
          <br />
          <span className="text-foreground">CRICKET ACADEMY</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-8 mb-10"
        >
          <span className="text-lg md:text-xl text-muted-foreground font-body">
            {typed}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        <motion.a
          href="#learn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-xl font-display font-bold text-lg gradient-primary text-primary-foreground neon-border hover-lift cursor-pointer"
        >
          🚀 START YOUR CRICKET JOURNEY
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
