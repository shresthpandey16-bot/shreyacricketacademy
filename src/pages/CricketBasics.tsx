import { motion } from "framer-motion";
import { ArrowLeft, Users, Circle, Timer, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/cricket/Navbar";
import Footer from "@/components/cricket/Footer";

const CricketBasics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <Link to="/#learn">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learn Cricket
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">📖</span>
            <h1 className="font-display font-black text-4xl md:text-6xl mb-4">
              Cricket <span className="text-gradient">Basics</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cricket kya hai? Chalo shuru se samajhte hain! 🏏
            </p>
          </div>

          {/* What is Cricket */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <h2 className="font-display font-bold text-3xl mb-4 text-primary">
              🤔 Cricket Hai Kya Bhai?
            </h2>
            <p className="text-lg mb-4">
              Cricket ek bat-and-ball game hai jisme <strong>2 teams</strong> compete karti hain. 
              Ek team batting karti hai (runs banati hai), aur dusri team bowling aur fielding karti hai (wickets lene ki koshish karti hai).
            </p>
            <p className="text-lg text-muted-foreground">
              Simple hai na? Bas ek team ball ko marti hai aur runs banati hai, dusri team unhe rokne ki koshish karti hai! 
              Jis team ke zyada runs, woh jeet gayi! 🎉
            </p>
          </motion.section>

          {/* The Team */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-secondary" />
              <h2 className="font-display font-bold text-3xl text-secondary">
                11 Players Per Team
              </h2>
            </div>
            <p className="text-lg mb-4">
              Har team mein <strong>11 players</strong> hote hain. Sab ka apna role hota hai:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-lg">
                <strong>🏏 Batsmen:</strong> Runs banate hain (usually 5-6 players)
              </li>
              <li className="text-lg">
                <strong>⚡ Bowlers:</strong> Ball phenkte hain aur wickets lete hain (usually 4-5 players)
              </li>
              <li className="text-lg">
                <strong>🧤 Wicket-keeper:</strong> Stumps ke peeche khada hota hai, catches leta hai (1 player)
              </li>
              <li className="text-lg">
                <strong>🤸 All-rounders:</strong> Batting bhi, bowling bhi! (jack of all trades)
              </li>
            </ul>
            <p className="text-muted-foreground mt-4 italic">
              Pro tip: Ek acchi team mein balance hona chahiye - na sirf batsmen, na sirf bowlers!
            </p>
          </motion.section>

          {/* Equipment */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Circle className="w-8 h-8 text-accent" />
              <h2 className="font-display font-bold text-3xl text-accent">
                Equipment: Bat, Ball & Stumps
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-background/50 border">
                <div className="text-4xl mb-2">🏏</div>
                <h3 className="font-bold text-xl mb-2">Cricket Bat</h3>
                <p className="text-muted-foreground">
                  Willow wood se bana hota hai. Flat surface se ball ko maro aur runs banao!
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-background/50 border">
                <div className="text-4xl mb-2">🔴</div>
                <h3 className="font-bold text-xl mb-2">Cricket Ball</h3>
                <p className="text-muted-foreground">
                  Red (Test), white (ODI/T20). Cork aur leather se bana. Hard hota hai bhai!
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-background/50 border">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="font-bold text-xl mb-2">Stumps & Bails</h3>
                <p className="text-muted-foreground">
                  3 stumps (wickets) aur upar 2 bails. Ball lage toh OUT!
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-golden/10 border border-golden/30">
              <p className="text-lg">
                <strong>🛡️ Protection Gear:</strong> Helmet, pads, gloves, box (important! 😅), chest guard - 
                batsmen aur wicket-keeper ko safety chahiye!
              </p>
            </div>
          </motion.section>

          {/* The Pitch */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-golden/10 to-golden/5 border border-golden/20"
          >
            <h2 className="font-display font-bold text-3xl mb-4 text-golden">
              🏟️ The Cricket Pitch
            </h2>
            <p className="text-lg mb-4">
              Pitch wo rectangular strip hai jahan pe sab action hota hai!
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-lg">
                <strong>Length:</strong> 22 yards (20.12 meters) - ek wicket se dusre wicket tak
              </li>
              <li className="text-lg">
                <strong>Width:</strong> 10 feet (3.05 meters)
              </li>
              <li className="text-lg">
                <strong>Surface:</strong> Grass ya clay - pitch ki condition game ko affect karti hai!
              </li>
            </ul>
            <p className="text-muted-foreground mt-4 italic">
              Fun fact: Pitch ke dono ends pe stumps hote hain. Bowler ek end se ball phenkta hai, 
              batsman dusre end pe khada hota hai!
            </p>
          </motion.section>

          {/* Innings & Overs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Timer className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-3xl text-primary">
                Innings & Overs Kya Hote Hain?
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-2xl mb-2">📊 Innings</h3>
                <p className="text-lg">
                  Ek innings = ek team ki batting turn. Pehle ek team bat karti hai, phir dusri team.
                </p>
                <p className="text-muted-foreground mt-2">
                  Test cricket mein 2 innings per team, ODI/T20 mein sirf 1 innings!
                </p>
              </div>

              <div>
                <h3 className="font-bold text-2xl mb-2">⚡ Overs</h3>
                <p className="text-lg mb-2">
                  1 over = <strong>6 legal balls</strong> (deliveries)
                </p>
                <p className="text-lg">
                  Ek bowler 1 over phenkta hai, phir dusra bowler dusre end se over phenkta hai. 
                  Aise hi game chalta rehta hai!
                </p>
                <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent/30">
                  <p className="font-semibold">Example:</p>
                  <p className="text-muted-foreground">
                    T20 match = 20 overs per team = 120 balls per team. Fast aur furious! 🔥
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Runs & Wickets */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-secondary" />
              <h2 className="font-display font-bold text-3xl text-secondary">
                Runs & Wickets: The Game!
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-green-500">✅ Runs (Points)</h3>
                <p className="text-lg mb-3">Batting team ka goal: Zyada se zyada runs banana!</p>
                <ul className="space-y-2 ml-4">
                  <li>• Ball ko hit karo aur dono batsmen daudein = 1, 2, 3 runs</li>
                  <li>• Ball boundary tak jaye = 4 runs</li>
                  <li>• Ball boundary cross kare (hawa mein) = 6 runs! 🎉</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-red-500">❌ Wickets (Outs)</h3>
                <p className="text-lg mb-3">Bowling team ka goal: Batsmen ko OUT karna!</p>
                <ul className="space-y-2 ml-4">
                  <li>• Ball stumps ko hit kare = Bowled out!</li>
                  <li>• Fielder catch pakde = Caught out!</li>
                  <li>• 10 wickets gir gaye = Innings khatam!</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-golden/10 border border-golden/30">
              <p className="text-lg font-semibold">
                🏆 Winning Formula: Jis team ke zyada runs aur kam wickets, woh jeet gayi!
              </p>
            </div>
          </motion.section>

          {/* Fun Facts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
          >
            <h2 className="font-display font-bold text-3xl mb-6 text-accent">
              🎉 Fun Facts!
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>😂 Longest Test Match:</strong> 1939 mein England vs South Africa - 
                  9 days chala! Players ko ship pakadni thi toh match draw declare karna pada! 🚢
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>🏏 Fastest Ball:</strong> Shoaib Akhtar ne 161.3 km/h ki speed se ball phenki! 
                  Batsman ki toh fatt gayi hogi! 😱
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>🎯 Most Sixes in One Over:</strong> Yuvraj Singh ne Stuart Broad ko 6 balls mein 
                  6 sixes maare! 36 runs in one over! Legend! 👑
                </p>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border"
          >
            <h3 className="font-display font-bold text-2xl mb-4">
              Basics samajh gaye? Awesome! 🎉
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ab aage badho aur scoring rules, match formats aur fielding positions seekho!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/scoring-rules">
                <Button size="lg" className="font-semibold">
                  Next: Scoring & Rules 🎯
                </Button>
              </Link>
              <Link to="/#learn">
                <Button size="lg" variant="outline" className="font-semibold">
                  Back to All Topics
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default CricketBasics;
