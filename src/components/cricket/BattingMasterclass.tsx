import { motion } from "framer-motion";

const shots = [
  { name: "Straight Drive", emoji: "🎯", desc: "Classic shot hit straight back past the bowler. Head position and follow-through are key.", difficulty: "Medium" },
  { name: "Cover Drive", emoji: "🌟", desc: "Elegant shot played through the covers. Requires perfect weight transfer and timing.", difficulty: "Hard" },
  { name: "Pull Shot", emoji: "💪", desc: "Power shot to a short ball. Rotate your body and swing through the line.", difficulty: "Medium" },
  { name: "Cut Shot", emoji: "⚡", desc: "Hit a wide delivery square on the off side. All about timing and wrist position.", difficulty: "Easy" },
  { name: "Sweep Shot", emoji: "🔄", desc: "Get down on one knee and sweep the ball to leg side. Great against spin bowling.", difficulty: "Hard" },
  { name: "Helicopter Shot", emoji: "🚁", desc: "MS Dhoni's signature! Flick from low and rotate the bat overhead. Legendary!", difficulty: "Legend" },
];

const difficultyColors: Record<string, string> = {
  Easy: "bg-accent/20 text-accent",
  Medium: "bg-primary/20 text-primary",
  Hard: "bg-secondary/20 text-secondary",
  Legend: "bg-golden/20 text-golden",
};

const BattingMasterclass = () => {
  return (
    <section id="batting" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display font-semibold text-sm uppercase tracking-widest">🏏 Shot Library</span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Batting <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">Masterclass</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Har shot ka apna style hai — learn the technique behind cricket's most beautiful shots! 🏏
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shots.map((shot, i) => (
            <motion.div
              key={shot.name}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="glass rounded-2xl p-6 cursor-pointer group"
              style={{ perspective: "1000px" }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{shot.emoji}</span>
                <span className={`text-xs font-display font-semibold px-3 py-1 rounded-full ${difficultyColors[shot.difficulty]}`}>
                  {shot.difficulty}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{shot.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{shot.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BattingMasterclass;
