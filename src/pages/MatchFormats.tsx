import { motion } from "framer-motion";
import { ArrowLeft, Clock, Zap, Trophy, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/cricket/Navbar";
import Footer from "@/components/cricket/Footer";

const MatchFormats = () => {
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
            <span className="text-6xl mb-4 block">⚡</span>
            <h1 className="font-display font-black text-4xl md:text-6xl mb-4">
              Match <span className="text-gradient">Formats</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Test, ODI, aur T20 - har format ka apna maza! 🏏
            </p>
          </div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <h2 className="font-display font-bold text-3xl mb-4 text-primary">
              🤔 Teen Formats Kyun?
            </h2>
            <p className="text-lg mb-4">
              Cricket mein 3 main formats hain - har ek ka apna style, apna excitement! 
              Koi slow aur strategic, koi fast aur furious! 🎢
            </p>
            <p className="text-lg text-muted-foreground">
              Chalo ek ek karke samajhte hain - kaunsa format kab dekhna hai! 😄
            </p>
          </motion.section>

          {/* Test Cricket */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-red-500" />
              <h2 className="font-display font-bold text-3xl text-red-500">
                🏏 Test Cricket: The Ultimate Test!
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">⏰ Duration</h3>
                <p className="text-lg">
                  <strong>5 days</strong> tak chalta hai! Haan bhai, 5 din! 😱
                </p>
                <p className="text-muted-foreground mt-2">
                  Har din 90 overs (540 balls) - total 450 overs possible!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">📊 Format</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>2 innings per team</strong> - har team 2 baar bat karti hai</li>
                  <li>• <strong>Red ball</strong> use hoti hai (white clothes)</li>
                  <li>• <strong>Unlimited overs</strong> - jab tak 10 wickets na gir jayein</li>
                  <li>• <strong>Result:</strong> Win, Loss, ya Draw (5 din mein finish nahi hua toh)</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">🎯 Strategy</h3>
                <p className="text-lg mb-3">
                  Patience ka game! Slow aur steady wins the race! 🐢
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• Batsmen ghanto tak khel sakte hain</li>
                  <li>• Bowlers ko stamina chahiye</li>
                  <li>• Pitch condition change hoti hai 5 days mein</li>
                  <li>• Mental strength sabse important!</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                <h3 className="font-bold text-xl mb-2">🏆 Famous Test Matches</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>The Ashes:</strong> England vs Australia - oldest rivalry! 🔥</li>
                  <li>• <strong>India vs Australia 2001:</strong> Kolkata Test - VVS Laxman & Rahul Dravid ka epic partnership!</li>
                  <li>• <strong>Headingley 2019:</strong> Ben Stokes ka superhuman innings!</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-golden/10 border border-golden/30">
                <p className="text-lg">
                  <strong>😴 Boring hai kya?</strong> Nahi bhai! Test cricket purists ka favorite hai! 
                  Real skill test hai - technique, patience, strategy sab chahiye! 
                  Plus, 5 din ka drama - twists aur turns guaranteed! 🎭
                </p>
              </div>
            </div>
          </motion.section>

          {/* ODI Cricket */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-blue-500" />
              <h2 className="font-display font-bold text-3xl text-blue-500">
                🌍 ODI: One Day International
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">⏰ Duration</h3>
                <p className="text-lg">
                  <strong>1 din</strong> mein khatam! Subah shuru, shaam tak result! 🌅➡️🌆
                </p>
                <p className="text-muted-foreground mt-2">
                  Approx 7-8 hours - lunch aur tea breaks ke saath!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">📊 Format</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>50 overs per team</strong> - total 300 balls per team</li>
                  <li>• <strong>1 innings per team</strong> - ek hi chance!</li>
                  <li>• <strong>White ball</strong> use hoti hai (colored clothes)</li>
                  <li>• <strong>Powerplay rules:</strong> First 10 overs mein sirf 2 fielders boundary ke bahar</li>
                  <li>• <strong>Result:</strong> Win, Loss, ya Tie (rare!)</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">🎯 Strategy</h3>
                <p className="text-lg mb-3">
                  Balance ka game! Attack bhi, defense bhi! ⚖️
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• First 10 overs: Powerplay - boundaries maro!</li>
                  <li>• Middle overs (11-40): Singles leke score build karo</li>
                  <li>• Death overs (41-50): All-out attack! 🚀</li>
                  <li>• Bowling: Variations important - yorkers, slower balls</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <h3 className="font-bold text-xl mb-2">🏆 Famous ODI Tournaments</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Cricket World Cup:</strong> Har 4 saal mein - biggest tournament! 🌍</li>
                  <li>• <strong>Champions Trophy:</strong> Top 8 teams ka mini World Cup</li>
                  <li>• <strong>Asia Cup:</strong> Asian teams ka battle!</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-golden/10 border border-golden/30">
                <p className="text-lg">
                  <strong>🎉 Epic Moments:</strong> 2011 World Cup Final - MS Dhoni ka winning six! 
                  2019 World Cup Final - Super Over drama! 2023 World Cup - India ka unbeaten run (final tak 😢)! 
                  ODI mein emotions high hote hain! 💙
                </p>
              </div>
            </div>
          </motion.section>

          {/* T20 Cricket */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-accent" />
              <h2 className="font-display font-bold text-3xl text-accent">
                ⚡ T20: Fast & Furious!
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">⏰ Duration</h3>
                <p className="text-lg">
                  <strong>3 hours</strong> - movie dekhne jitna time! 🎬
                </p>
                <p className="text-muted-foreground mt-2">
                  Perfect for evening entertainment! Dinner ke baad chill karo aur match dekho! 🍿
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">📊 Format</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>20 overs per team</strong> - sirf 120 balls!</li>
                  <li>• <strong>1 innings per team</strong> - quick finish!</li>
                  <li>• <strong>White ball</strong> (colored clothes - stylish! 😎)</li>
                  <li>• <strong>Powerplay:</strong> First 6 overs - only 2 fielders outside circle</li>
                  <li>• <strong>Result:</strong> Win, Loss, ya Super Over (if tie)!</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">🎯 Strategy</h3>
                <p className="text-lg mb-3">
                  Attack! Attack! Attack! 💥
                </p>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• <strong>Batting:</strong> Boundaries chahiye har over mein!</li>
                  <li>• <strong>Strike rate > Average:</strong> 150+ strike rate = good!</li>
                  <li>• <strong>Bowling:</strong> Yorkers, slower balls, variations!</li>
                  <li>• <strong>Fielding:</strong> Athletic fielders - diving catches, direct hits!</li>
                  <li>• <strong>Death overs:</strong> 16-20 overs = match deciding!</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-accent/10 border border-accent/30">
                <h3 className="font-bold text-xl mb-2">🏆 Famous T20 Leagues</h3>
                <ul className="space-y-3 ml-4 text-lg">
                  <li>
                    <strong>🇮🇳 IPL (Indian Premier League):</strong> Duniya ka sabse bada T20 league! 
                    Paisa, glamour, entertainment - sab kuch! 💰✨
                  </li>
                  <li>
                    <strong>🇦🇺 Big Bash League (BBL):</strong> Australia ka party league!
                  </li>
                  <li>
                    <strong>🇵🇰 PSL (Pakistan Super League):</strong> Pakistan ka exciting league!
                  </li>
                  <li>
                    <strong>🏴󠁧󠁢󠁥󠁮󠁧󠁿 The Hundred:</strong> England ka unique 100-ball format!
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-golden/10 border border-golden/30">
                <p className="text-lg">
                  <strong>🎪 Entertainment Overload:</strong> T20 mein sirf cricket nahi - 
                  cheerleaders, music, fireworks, celebrities! IPL toh festival hai bhai! 
                  Plus, last-ball finishes, super overs - heart attack guaranteed! 💓😱
                </p>
              </div>
            </div>
          </motion.section>

          {/* Comparison Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
          >
            <h2 className="font-display font-bold text-3xl mb-6 text-secondary">
              📊 Quick Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="p-4 font-bold text-lg">Feature</th>
                    <th className="p-4 font-bold text-lg text-red-500">Test</th>
                    <th className="p-4 font-bold text-lg text-blue-500">ODI</th>
                    <th className="p-4 font-bold text-lg text-accent">T20</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Duration</td>
                    <td className="p-4">5 days</td>
                    <td className="p-4">1 day (7-8 hrs)</td>
                    <td className="p-4">3 hours</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Overs</td>
                    <td className="p-4">Unlimited</td>
                    <td className="p-4">50 per team</td>
                    <td className="p-4">20 per team</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Innings</td>
                    <td className="p-4">2 per team</td>
                    <td className="p-4">1 per team</td>
                    <td className="p-4">1 per team</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Ball Color</td>
                    <td className="p-4">Red</td>
                    <td className="p-4">White</td>
                    <td className="p-4">White</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Pace</td>
                    <td className="p-4">Slow & Strategic</td>
                    <td className="p-4">Balanced</td>
                    <td className="p-4">Fast & Aggressive</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4">Purists</td>
                    <td className="p-4">Everyone</td>
                    <td className="p-4">Entertainment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Which Format to Watch */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-golden/10 to-golden/5 border border-golden/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-golden" />
              <h2 className="font-display font-bold text-3xl text-golden">
                🤔 Kaunsa Format Dekhen?
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-red-500">🏏 Test Cricket Dekho Agar:</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• Tumhe patience hai aur strategy pasand hai</li>
                  <li>• Real cricket skills dekhni hain</li>
                  <li>• 5-day drama enjoy kar sakte ho</li>
                  <li>• Ashes ya India-Australia series chal rahi ho! 🔥</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-blue-500">🌍 ODI Dekho Agar:</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• World Cup chal raha ho (must watch! 🏆)</li>
                  <li>• Pura din free ho aur cricket mood mein ho</li>
                  <li>• Balance chahiye - thoda strategy, thoda action</li>
                  <li>• India-Pakistan match ho (ratings break! 📺)</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-accent">⚡ T20 Dekho Agar:</h3>
                <ul className="space-y-2 ml-4 text-lg">
                  <li>• Quick entertainment chahiye (3 hours)</li>
                  <li>• IPL season ho (party time! 🎉)</li>
                  <li>• Friends ke saath chill karna ho</li>
                  <li>• Non-stop action aur boundaries chahiye! 💥</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
              <p className="text-lg">
                <strong>💡 Pro Tip:</strong> Naye ho cricket mein? T20 se shuru karo! 
                Fast, exciting, aur samajhne mein easy! Phir ODI, phir Test! 
                Sab formats ka apna maza hai! 🎊
              </p>
            </div>
          </motion.section>

          {/* Fun Facts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <h2 className="font-display font-bold text-3xl mb-6 text-primary">
              🎉 Format Fun Facts!
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>🏏 Test Cricket:</strong> Pehla Test match 1877 mein khela gaya tha - 
                  Australia vs England! 147 saal purana format! 👴
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>🌍 ODI:</strong> First ODI World Cup 1975 mein hua - West Indies jeeti thi! 
                  White clothes aur red ball use hoti thi tab! 🏆
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>⚡ T20:</strong> 2003 mein introduce hua - sabse young format! 
                  Pehle log bole "ye cricket nahi hai", ab sabse popular! 😂
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border">
                <p className="text-lg">
                  <strong>💰 IPL:</strong> Duniya ki sabse rich cricket league! 
                  Players ko crores milte hain! Virat Kohli = 17 crore per season! 🤑
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
              Formats samajh gaye? Awesome! ⚡
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ab fielding positions aur player roles ke baare mein seekho!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/positions-fielding">
                <Button size="lg" className="font-semibold">
                  Next: Positions & Fielding 🏆
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

export default MatchFormats;
