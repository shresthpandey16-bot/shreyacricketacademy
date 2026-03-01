import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const SpecialMessage = () => {
  return (
    <section id="message" className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 relative purple-border"
        >
          {/* Heart icon */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
          >
            <Heart className="w-6 h-6 text-secondary-foreground fill-current" />
          </motion.div>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-8 mt-4">
            <span className="text-gradient">A Special Message</span> 💝
          </h2>

          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Hey Shreya! 💖
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              Maine ye website tumhare liye specially banaya hai kyunki main chahta hoon ki tum cricket ko ek naye nazariye se dekho.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
              Cricket sirf ek game nahi hai — ye <span className="text-primary font-semibold">passion</span>, <span className="text-accent font-semibold">teamwork</span>, aur <span className="text-golden font-semibold">endless fun</span> ka perfect combination hai! 🌟
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
              Mujhe pata hai tum pehle interested nahi thi, but trust me, jab tum isse samjhogi aur khelogi, tumhe bahut maza aayega!
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }}>
              Ye website tumhare liye ek journey hai — basics se lekar advanced techniques tak, sab kuch interactive aur fun way mein!
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }} className="text-foreground font-semibold text-lg md:text-xl">
              Chalo, ek chance do aur dekho kitna amazing hai cricket! 🚀
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
            className="mt-8 text-right text-secondary italic font-display"
          >
            — Your Friend who believes in you! 💪
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMessage;
