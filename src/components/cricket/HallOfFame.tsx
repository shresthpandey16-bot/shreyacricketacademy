import { motion } from "framer-motion";

const players = [
  {
    name: "Sachin Tendulkar",
    title: "God of Cricket",
    emoji: "🏏",
    country: "🇮🇳",
    stat: "100 international centuries",
    quote: "Don't stop chasing your dreams.",
    gradient: "from-golden/20 to-golden/5",
    border: "border-golden/30 hover:border-golden/60",
    textColor: "text-golden",
  },
  {
    name: "MS Dhoni",
    title: "Captain Cool",
    emoji: "🚁",
    country: "🇮🇳",
    stat: "3 ICC trophies as captain",
    quote: "You don't play for the crowd, you play for the country.",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/30 hover:border-primary/60",
    textColor: "text-primary",
  },
  {
    name: "Virat Kohli",
    title: "Chase Master",
    emoji: "🔥",
    country: "🇮🇳",
    stat: "80+ international centuries",
    quote: "Self-belief and hard work will always earn you success.",
    gradient: "from-destructive/20 to-destructive/5",
    border: "border-destructive/30 hover:border-destructive/60",
    textColor: "text-destructive",
  },
  {
    name: "Smriti Mandhana",
    title: "Stylish Southpaw",
    emoji: "⭐",
    country: "🇮🇳",
    stat: "Fastest Indian woman to 2000 ODI runs",
    quote: "Cricket is not about gender, it's about passion.",
    gradient: "from-secondary/20 to-secondary/5",
    border: "border-secondary/30 hover:border-secondary/60",
    textColor: "text-secondary",
  },
  {
    name: "Harmanpreet Kaur",
    title: "Power Hitter",
    emoji: "💥",
    country: "🇮🇳",
    stat: "171* vs Australia in 2017 WC",
    quote: "Never let anyone tell you that you can't do something.",
    gradient: "from-accent/20 to-accent/5",
    border: "border-accent/30 hover:border-accent/60",
    textColor: "text-accent",
  },
  {
    name: "Ellyse Perry",
    title: "Ultimate All-rounder",
    emoji: "🌟",
    country: "🇦🇺",
    stat: "Represented Australia in both cricket & football",
    quote: "Be the hardest worker in the room.",
    gradient: "from-primary/20 to-secondary/5",
    border: "border-primary/30 hover:border-secondary/60",
    textColor: "text-primary",
  },
];

const HallOfFame = () => {
  return (
    <section id="fame" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-golden/30 to-transparent" />
      <div className="absolute top-20 left-0 w-[300px] h-[300px] rounded-full bg-golden/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-golden font-display font-semibold text-sm uppercase tracking-widest">⭐ Legends</span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Hall of <span className="bg-clip-text text-transparent bg-gradient-to-r from-golden to-destructive">Fame</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ye hain wo legends jinse tum inspire ho sakti ho, Shreya! 🌟
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, i) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, rotateY: 3 }}
              className={`rounded-2xl border bg-gradient-to-b ${player.gradient} ${player.border} p-6 transition-all duration-300 cursor-pointer`}
              style={{ perspective: "800px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{player.emoji}</span>
                <div>
                  <h3 className={`font-display font-bold text-lg ${player.textColor}`}>{player.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    {player.country} {player.title}
                  </p>
                </div>
              </div>
              <div className="glass rounded-xl p-3 mb-4">
                <p className="text-sm text-foreground font-semibold">📊 {player.stat}</p>
              </div>
              <p className="text-sm text-muted-foreground italic">"{player.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
