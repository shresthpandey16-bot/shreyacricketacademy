import { motion } from "framer-motion";
import { BookOpen, Target, Award, Zap } from "lucide-react";

const modules = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    emoji: "📖",
    title: "Cricket Basics",
    description: "What is cricket? Learn the fundamentals — equipment, pitch, teams, and how the game works.",
    topics: ["11 players per team", "Bat, ball & stumps", "Innings & overs", "Runs & wickets"],
    color: "primary" as const,
  },
  {
    icon: <Target className="w-8 h-8" />,
    emoji: "🎯",
    title: "Scoring & Rules",
    description: "How runs are scored, different ways to get out, and what makes cricket unique.",
    topics: ["1, 2, 3, 4 & 6 runs", "Boundaries explained", "LBW, caught, bowled", "No ball & wide"],
    color: "secondary" as const,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    emoji: "⚡",
    title: "Match Formats",
    description: "Test, ODI, and T20 — understand how each format brings a different flavor of excitement!",
    topics: ["Test: 5 days of strategy", "ODI: 50 overs thrill", "T20: Fast & furious", "IPL & World Cup"],
    color: "accent" as const,
  },
  {
    icon: <Award className="w-8 h-8" />,
    emoji: "🏆",
    title: "Positions & Fielding",
    description: "Every player has a role — learn about batting order, bowling types, and field positions.",
    topics: ["Opener & middle order", "Fast & spin bowlers", "Wicket-keeper role", "30+ field positions"],
    color: "golden" as const,
  },
];

const colorMap = {
  primary: "from-primary/20 to-primary/5 border-primary/30 hover:border-primary/60",
  secondary: "from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary/60",
  accent: "from-accent/20 to-accent/5 border-accent/30 hover:border-accent/60",
  golden: "from-golden/20 to-golden/5 border-golden/30 hover:border-golden/60",
};

const textColorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  golden: "text-golden",
};

const LearnCricket = () => {
  return (
    <section id="learn" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">📚 Start Here</span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Learn <span className="text-gradient">Cricket</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cricket samajhna easy hai! Har module interactive hai — step by step seekho aur enjoy karo. 🎉
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl border bg-gradient-to-b ${colorMap[mod.color]} p-6 cursor-pointer transition-all duration-300`}
            >
              <div className={`text-4xl mb-4`}>{mod.emoji}</div>
              <h3 className={`font-display font-bold text-xl mb-2 ${textColorMap[mod.color]}`}>
                {mod.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{mod.description}</p>
              <ul className="space-y-1.5">
                {mod.topics.map((topic) => (
                  <li key={topic} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${mod.color}`} style={{ backgroundColor: `hsl(var(--${mod.color}))` }} />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnCricket;
