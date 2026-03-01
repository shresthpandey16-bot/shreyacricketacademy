import { motion } from "framer-motion";
import { ArrowLeft, Award, Users, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/cricket/Navbar";
import Footer from "@/components/cricket/Footer";

const PositionsFielding = () => {
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
            <span className="text-6xl mb-4 block">🏆</span>
            <h1 className="font-display font-black text-4xl md:text-6xl mb-4">
              Positions & <span className="text-gradient">Fielding</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Har player ka apna role! Batting order se lekar fielding positions tak! 🎯
            </p>
          </div>

          {/* Batting Order */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-3xl text-primary">
                🏏 Batting Order Explained
              </h2>
            </div>

            <p className="text-lg mb-6">
              11 players hain, lekin sab ek saath bat nahi karte! Order hota hai - 
              sabse strong pehle, phir middle, phir tail-enders! 📊
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-green-500">1️⃣ Openers (Position 1 & 2)</h3>
                <p className="text-lg mb-3">
                  <strong>Role:</strong> Match shuru karte hain! Fresh ball face karte hain!
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Skills:</strong> Solid technique, patience, good defense</li>
                  <li>• <strong>Job:</strong> Foundation banana - wickets bachana, runs banana</li>
                  <li>• <strong>Famous:</strong> Rohit Sharma, David Warner, Virender Sehwag 🔥</li>
                </ul>
                <p className="text-muted-foreground mt-3 italic">
                  "Well begun is half done" - openers ka kaam sabse tough! New ball swing karti hai! 🌪️
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-blue-500">3️⃣ One-Down (Position 3)</h3>
                <p className="text-lg mb-3">
                  <strong>Role:</strong> Team ka sabse reliable batsman! Anchor!
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Skills:</strong> Technique + aggression ka perfect mix</li>
                  <li>• <strong>Job:</strong> Innings ko stabilize karna, big score banana</li>
                  <li>• <strong>Famous:</strong> Virat Kohli, Ricky Ponting, Kumar Sangakkara 👑</li>
                </ul>
                <p className="text-muted-foreground mt-3 italic">
                  Number 3 pe team ka best batsman khelta hai usually! Pressure handle karna aata hai!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-accent">4️⃣5️⃣6️⃣ Middle Order (Position 4, 5, 6)</h3>
                <p className="text-lg mb-3">
                  <strong>Role:</strong> Innings ko build karna ya accelerate karna!
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Position 4:</strong> Second anchor - MS Dhoni, AB de Villiers</li>
                  <li>• <strong>Position 5:</strong> Finisher - Hardik Pandya, Ben Stokes</li>
                  <li>• <strong>Position 6:</strong> All-rounder - Ravindra Jadeja, Shakib Al Hasan</li>
                </ul>
                <p className="text-muted-foreground mt-3 italic">
                  Middle order ka kaam: Situation handle karna! Top order fail = middle order ka pressure! 😰
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-golden">7️⃣8️⃣9️⃣🔟1️⃣1️⃣ Lower Order / Tail (Position 7-11)</h3>
                <p className="text-lg mb-3">
                  <strong>Role:</strong> Mainly bowlers, but batting bhi kar sakte hain!
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Position 7:</strong> Wicket-keeper ya all-rounder</li>
                  <li>• <strong>Position 8-11:</strong> Specialist bowlers (batting bonus hai! 😄)</li>
                  <li>• <strong>Job:</strong> Jitne runs ban sakein, utne banao! Support karo!</li>
                </ul>
                <p className="text-muted-foreground mt-3 italic">
                  "Tail wagging" = jab lower order players accha bat karein! Bonus runs! 🎉
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
              <p className="text-lg">
                <strong>🎯 Fun Fact:</strong> Kabhi kabhi tail-enders match jita dete hain! 
                Remember: India vs Australia 2001 - VVS Laxman (281) aur Rahul Dravid (180) - 
                epic partnership! 🏆
              </p>
            </div>
          </motion.section>

          {/* Bowling Types */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-secondary" />
              <h2 className="font-display font-bold text-3xl text-secondary">
                ⚡ Bowling Types
              </h2>
            </div>

            <p className="text-lg mb-6">
              Bowlers bhi alag alag types ke hote hain! Har ek ka apna style! 🎨
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-red-500">🔥 Fast Bowlers (Pace Bowlers)</h3>
                <p className="text-lg mb-3">
                  <strong>Speed:</strong> 140+ km/h - ball rocket ki tarah aati hai! 🚀
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Types:</strong> Swing bowlers, seam bowlers, express pace</li>
                  <li>• <strong>Weapons:</strong> Bouncers, yorkers, reverse swing</li>
                  <li>• <strong>Famous:</strong> Jasprit Bumrah, Mitchell Starc, Shoaib Akhtar</li>
                  <li>• <strong>Job:</strong> Wickets lena, batsmen ko intimidate karna! 😤</li>
                </ul>
                <p className="text-muted-foreground mt-3 italic">
                  Fast bowlers ka attitude: "Main tujhe out karunga!" Aggression level 💯!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-blue-500">🌀 Spin Bowlers</h3>
                <p className="text-lg mb-3">
                  <strong>Speed:</strong> 80-95 km/h - slow but deadly! Ball ghoomti hai! 🌪️
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Types:</strong> Off-spin, leg-spin, left-arm orthodox</li>
                  <li>• <strong>Weapons:</strong> Turn, flight, variations (doosra, googly)</li>
                  <li>• <strong>Famous:</strong> Ravichandran Ashwin, Shane Warne, Rashid Khan</li>
                  <li>• <strong>Job:</strong> Batsmen ko confuse karna, wickets lena! 🧠</li>
                </ul>
                <p className="text-muted-foreground mt-3 italic">
                  Spinners ka game: Mind games! "Kahan ghoomegi ball?" Batsman sochta rehta hai! 🤔
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 text-accent">🎯 Medium Pacers</h3>
                <p className="text-lg mb-3">
                  <strong>Speed:</strong> 120-135 km/h - balance between pace and control
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Skills:</strong> Swing, seam, variations</li>
                  <li>• <strong>Famous:</strong> Bhuvneshwar Kumar, Tim Southee</li>
                  <li>• <strong>Job:</strong> Control maintain karna, wickets lena</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-golden/10 border border-golden/30">
              <p className="text-lg">
                <strong>💡 Strategy:</strong> Team mein balance chahiye - 2-3 fast bowlers, 
                1-2 spinners! Pitch aur conditions ke hisaab se combination change hota hai! 🎲
              </p>
            </div>
          </motion.section>

          {/* Fielding Positions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-accent" />
              <h2 className="font-display font-bold text-3xl text-accent">
                🎯 Fielding Positions (30+ Positions!)
              </h2>
            </div>

            <p className="text-lg mb-6">
              Cricket mein 30+ fielding positions hain! Har position ka naam aur role! 
              Confusing lagta hai but pattern hai! 🗺️
            </p>

            <div className="space-y-6">
              {/* Close Catching Positions */}
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-4 text-green-500">🧤 Close Catching Positions</h3>
                <p className="text-lg mb-3">
                  Batsman ke paas - catches ke liye! Brave fielders! 💪
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Slips (1st, 2nd, 3rd slip)</h4>
                    <p className="text-muted-foreground">
                      Wicket-keeper ke bagal mein - edges catch karne ke liye! 
                      Reflexes chahiye! ⚡
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Gully</h4>
                    <p className="text-muted-foreground">
                      Slips aur point ke beech - square cuts catch karne ke liye!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Short Leg</h4>
                    <p className="text-muted-foreground">
                      Batsman ke paas, leg side - dangerous position! Helmet compulsory! 🪖
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Silly Point</h4>
                    <p className="text-muted-foreground">
                      Batsman ke paas, off side - "silly" because risky! 😅
                    </p>
                  </div>
                </div>
              </div>

              {/* Inner Ring Positions */}
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-4 text-blue-500">⭕ Inner Ring (30-yard circle)</h3>
                <p className="text-lg mb-3">
                  Circle ke andar - singles rokne ke liye! Quick fielders! 🏃‍♂️
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Cover & Point</h4>
                    <p className="text-muted-foreground">
                      Off side - drives aur cuts rokne ke liye! Athletic fielders!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Mid-wicket & Square Leg</h4>
                    <p className="text-muted-foreground">
                      Leg side - pulls aur flicks rokne ke liye!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Mid-on & Mid-off</h4>
                    <p className="text-muted-foreground">
                      Straight drives rokne ke liye - bowler ke support!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Fine Leg</h4>
                    <p className="text-muted-foreground">
                      Wicket-keeper ke peeche, leg side - glances rokne ke liye!
                    </p>
                  </div>
                </div>
              </div>

              {/* Boundary Positions */}
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-4 text-accent">🏟️ Boundary Positions (Deep Fielding)</h3>
                <p className="text-lg mb-3">
                  Boundary pe - big hits rokne ke liye! Catches aur boundaries save! 🤸
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Long-on & Long-off</h4>
                    <p className="text-muted-foreground">
                      Straight sixes rokne ke liye - lofted shots catch karna!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Deep Mid-wicket</h4>
                    <p className="text-muted-foreground">
                      Leg side boundary - pulls aur sweeps catch karna!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Deep Cover & Deep Point</h4>
                    <p className="text-muted-foreground">
                      Off side boundary - cuts aur drives rokna!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/30">
                    <h4 className="font-bold mb-2">Third Man</h4>
                    <p className="text-muted-foreground">
                      Slips ke peeche, boundary pe - edges aur late cuts!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-golden/10 border border-golden/30">
              <p className="text-lg">
                <strong>🎓 Pro Tip:</strong> Fielding positions ka naam yaad karna mushkil lagta hai, 
                but pattern hai! "Deep" = boundary pe, "Short" = paas mein, "Fine" = peeche, 
                "Square" = side mein! Easy! 😎
              </p>
            </div>
          </motion.section>

          {/* Wicket-keeper Role */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-golden/10 to-golden/5 border border-golden/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-golden" />
              <h2 className="font-display font-bold text-3xl text-golden">
                🧤 Wicket-keeper: The Special One!
              </h2>
            </div>

            <p className="text-lg mb-6">
              Wicket-keeper team ka sabse busy player! Har ball mein involved! 🏃‍♂️💨
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-3">👀 Responsibilities</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Catches:</strong> Edges catch karna - reflexes lightning fast! ⚡</li>
                  <li>• <strong>Stumpings:</strong> Batsman crease se bahar = stumps tod do! 🎯</li>
                  <li>• <strong>Run-outs:</strong> Ball collect karke stumps hit karna!</li>
                  <li>• <strong>Communication:</strong> Fielders ko guide karna - "mine!", "leave it!"</li>
                  <li>• <strong>Strategy:</strong> Captain ko advice dena - field placement, bowling changes</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-3">🛡️ Equipment</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Gloves:</strong> Extra padded - ball catch karne ke liye!</li>
                  <li>• <strong>Pads:</strong> Leg protection - ball fast hoti hai!</li>
                  <li>• <strong>Helmet:</strong> Standing up to stumps = helmet compulsory!</li>
                  <li>• <strong>Inner gloves:</strong> Extra protection - fingers safe!</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-golden/10 border border-golden/30">
                <h3 className="font-bold text-xl mb-3">🌟 Famous Wicket-keepers</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>MS Dhoni:</strong> Captain Cool! Lightning stumpings! 👑</li>
                  <li>• <strong>Adam Gilchrist:</strong> Aggressive batsman + keeper!</li>
                  <li>• <strong>Kumar Sangakkara:</strong> Elegant keeper-batsman!</li>
                  <li>• <strong>Rishabh Pant:</strong> Young gun! Explosive batting! 💥</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/30">
              <p className="text-lg">
                <strong>😂 Fun Fact:</strong> Wicket-keepers ko "stumps ke peeche ka captain" bulate hain! 
                Sab kuch dekhte hain, sab kuch sunte hain! Plus, sledging bhi karte hain - 
                "Come on, bowl him out!" 🗣️
              </p>
            </div>
          </motion.section>

          {/* Fielding Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <h2 className="font-display font-bold text-3xl mb-6 text-primary">
              🤸 Fielding Skills That Matter
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2">🎯 Catching</h3>
                <p className="text-lg">
                  "Catches win matches!" - sabse important skill! 
                  High catches, diving catches, reflex catches - practice makes perfect! 🧤
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2">🎪 Diving Stops</h3>
                <p className="text-lg">
                  Boundaries bachana! Full stretch dive - 4 runs save = 4 runs earned! 
                  Jadeja, Kohli - diving masters! 🤸‍♂️
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2">🎯 Direct Hits</h3>
                <p className="text-lg">
                  Ek throw se stumps hit karna = run-out! 
                  Pressure moment! Crowd goes wild! 🔥
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2">⚡ Quick Reflexes</h3>
                <p className="text-lg">
                  Close-in fielding mein reflexes chahiye! 
                  Ball 150 km/h se aa rahi hai - react karo! 😱
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/30">
              <p className="text-lg">
                <strong>🏆 Modern Cricket:</strong> Fielding standards bahut high hain ab! 
                Pehle fielding ko ignore karte the, ab fielding se matches jeette hain! 
                Fitness, agility, athleticism - sab chahiye! 💪
              </p>
            </div>
          </motion.section>

          {/* Fun Facts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
          >
            <h2 className="font-display font-bold text-3xl mb-6 text-secondary">
              🎉 Fielding Fun Facts!
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>🤸 Best Catch Ever?</strong> Ben Stokes ka catch 2019 World Cup mein - 
                  diving, one-handed, full stretch! Commentators bole "Superman!" 🦸‍♂️
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>⚡ Fastest Stumping:</strong> MS Dhoni - 0.08 seconds! 
                  Blink karo aur miss ho gaya! Dhoni ka magic! ✨
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>🎯 Most Catches:</strong> Rahul Dravid - "The Wall" ne 200+ catches liye! 
                  Slip fielding ka master! Safe hands! 🧤
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>😂 Funny Moment:</strong> Fielder ne boundary pe khade hoke catch pakda, 
                  but uska pair boundary line touch kar gaya = 6 runs! Oops! 🤦‍♂️
                </p>
              </div>
            </div>
          </motion.section>

          {/* Completion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-golden/10 to-primary/10 border"
          >
            <h3 className="font-display font-bold text-2xl mb-4">
              🎉 Congratulations! Cricket Basics Complete! 🏆
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ab tum cricket samajh gaye ho! Basics se lekar advanced positions tak! 
              Ab match dekho aur enjoy karo! 🎊
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#quiz">
                <Button size="lg" className="font-semibold">
                  Test Your Knowledge! 🎯
                </Button>
              </Link>
              <Link to="/#learn">
                <Button size="lg" variant="outline" className="font-semibold">
                  Review All Topics
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

export default PositionsFielding;
