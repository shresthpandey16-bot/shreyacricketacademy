import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Question {
  q: string;
  options: string[];
  correct: number;
  fact: string;
}

const questions: Question[] = [
  { q: "How many players are in a cricket team?", options: ["9", "10", "11", "12"], correct: 2, fact: "Each team has 11 players on the field!" },
  { q: "What are the three stumps called together?", options: ["Boundary", "Wicket", "Crease", "Pitch"], correct: 1, fact: "The wicket consists of 3 stumps and 2 bails!" },
  { q: "How many runs is a boundary along the ground worth?", options: ["2", "4", "6", "1"], correct: 1, fact: "A ball reaching the boundary along the ground is 4 runs!" },
  { q: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Kapil Dev"], correct: 2, fact: "Sachin Tendulkar — the Little Master with 100 international centuries!" },
  { q: "What does LBW stand for?", options: ["Left Before Wicket", "Leg Before Wicket", "Long Ball Wide", "Last Ball Win"], correct: 1, fact: "Leg Before Wicket — when the ball hits the pad and would have hit the stumps!" },
  { q: "How many overs in a T20 match (per side)?", options: ["50", "20", "10", "30"], correct: 1, fact: "T20 = Twenty20! Each team gets exactly 20 overs to bat." },
  { q: "Which shot is MS Dhoni famous for?", options: ["Cover Drive", "Helicopter Shot", "Reverse Sweep", "Uppercut"], correct: 1, fact: "The iconic Helicopter Shot — Dhoni rotates the bat like a helicopter blade! 🚁" },
  { q: "What is a 'maiden over'?", options: ["First over", "Over with no runs", "Over with a wicket", "Last over"], correct: 1, fact: "A maiden over is when no runs are scored off the bat in that over!" },
  { q: "How many balls in one over?", options: ["4", "5", "6", "8"], correct: 2, fact: "One over = 6 legal deliveries!" },
  { q: "What is the highest score possible off one ball?", options: ["4", "6", "8", "12"], correct: 1, fact: "A six! Though with overthrows, technically more is possible 😄" },
];

const QuizSection = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === questions[current].correct;
    if (correct) {
      setScore((s) => s + 10 + streak * 5);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
    setShowResult(true);
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setFinished(true);
      }
    }, 2000);
  };

  const restart = () => {
    setStarted(true);
    setCurrent(0);
    setScore(0);
    setStreak(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
  };

  const q = questions[current];
  const percentage = Math.round((score / (questions.length * 10)) * 100);

  return (
    <section id="quiz" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">🎯 Test Yourself</span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Cricket <span className="text-gradient-green">Quiz</span>
          </h2>
          <p className="text-muted-foreground">Kitna cricket jaanti ho? Let's find out, Shreya! 😄</p>
        </motion.div>

        <div className="glass rounded-3xl p-6 md:p-10">
          {!started ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
              <div className="text-6xl mb-6">🏏</div>
              <h3 className="font-display font-bold text-2xl mb-3 text-foreground">Ready for the Challenge?</h3>
              <p className="text-muted-foreground mb-8">10 questions • Earn streak bonuses • Learn fun facts!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={restart}
                className="px-8 py-4 rounded-xl font-display font-bold gradient-success text-accent-foreground neon-border"
                style={{ boxShadow: "0 0 20px hsl(152 100% 50% / 0.3)" }}
              >
                🎯 Start Quiz
              </motion.button>
            </motion.div>
          ) : finished ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="text-6xl mb-4">{percentage >= 70 ? "🏆" : percentage >= 40 ? "👏" : "💪"}</div>
              <h3 className="font-display font-bold text-3xl mb-2 text-foreground">
                {percentage >= 70 ? "Amazing, Shreya!" : percentage >= 40 ? "Good effort!" : "Keep learning!"}
              </h3>
              <div className="my-6">
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-6xl font-display font-black text-gradient"
                >
                  {score}
                </motion.span>
                <p className="text-muted-foreground mt-2">points scored</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={restart}
                className="px-6 py-3 rounded-xl font-display font-semibold glass border border-primary/30 text-primary hover:border-primary/60 transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Try Again
              </motion.button>
            </motion.div>
          ) : (
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground font-display">
                  Question {current + 1}/{questions.length}
                </span>
                <div className="flex items-center gap-4">
                  {streak > 1 && (
                    <span className="text-sm font-display text-golden">🔥 {streak} streak!</span>
                  )}
                  <span className="text-sm font-display text-primary">Score: {score}</span>
                </div>
              </div>
              <div className="w-full h-1.5 rounded-full bg-muted mb-8">
                <motion.div
                  className="h-full rounded-full gradient-success"
                  initial={{ width: 0 }}
                  animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6">{q.q}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt, idx) => {
                      let optClass = "glass border border-border hover:border-primary/50 text-foreground";
                      if (selected !== null) {
                        if (idx === q.correct) optClass = "bg-accent/20 border border-accent text-accent";
                        else if (idx === selected) optClass = "bg-destructive/20 border border-destructive text-destructive";
                        else optClass = "glass border border-border opacity-50 text-muted-foreground";
                      }
                      return (
                        <motion.button
                          key={idx}
                          whileHover={selected === null ? { scale: 1.03 } : {}}
                          whileTap={selected === null ? { scale: 0.97 } : {}}
                          onClick={() => handleAnswer(idx)}
                          className={`p-4 rounded-xl font-body text-left transition-all duration-300 flex items-center gap-3 ${optClass}`}
                        >
                          <span className="font-display font-bold text-sm opacity-50">{String.fromCharCode(65 + idx)}</span>
                          {opt}
                          {selected !== null && idx === q.correct && <CheckCircle className="w-5 h-5 ml-auto text-accent" />}
                          {selected !== null && idx === selected && idx !== q.correct && <XCircle className="w-5 h-5 ml-auto text-destructive" />}
                        </motion.button>
                      );
                    })}
                  </div>
                  {showResult && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-sm text-muted-foreground glass rounded-xl p-3">
                      💡 {q.fact}
                    </motion.p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
