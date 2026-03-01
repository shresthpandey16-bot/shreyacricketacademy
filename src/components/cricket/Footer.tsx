import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl">🏏</span>
        <h3 className="font-display font-bold text-xl text-gradient mt-2 mb-3">
          Shreya's Cricket Academy
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
          Made with 💝 just for Shreya. Cricket seekho, enjoy karo, aur champion bano!
        </p>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <span className="floating" style={{ animationDelay: "0s" }}>🏏</span>
          <span className="floating" style={{ animationDelay: "1s" }}>⚾</span>
          <span className="floating" style={{ animationDelay: "2s" }}>🏆</span>
          <span className="floating" style={{ animationDelay: "3s" }}>⭐</span>
          <span className="floating" style={{ animationDelay: "4s" }}>💝</span>
        </div>
        <p className="text-xs text-muted-foreground mt-8">
          © 2026 Shreya's Cricket Academy • All rights reserved with love
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
