import { motion } from "framer-motion";
import { ArrowLeft, Target, AlertCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/cricket/Navbar";
import Footer from "@/components/cricket/Footer";

const ScoringRules = () => {
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
            <span className="text-6xl mb-4 block">🎯</span>
            <h1 className="font-display font-black text-4xl md:text-6xl mb-4">
              Scoring & <span className="text-gradient">Rules</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Runs kaise bante hain aur OUT kaise hote hain? Sab kuch detail mein! 📊
            </p>
          </div>

          {/* How to Score Runs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-3xl text-primary">
                Runs Kaise Bante Hain? 🏃‍♂️
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 flex items-center gap-2">
                  <span className="text-3xl">1️⃣</span> Single Run
                </h3>
                <p className="text-lg">
                  Ball ko hit karo aur dono batsmen opposite ends tak daudein = <strong>1 run</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Tip: Quick singles se pressure banta hai fielders pe! 😎
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 flex items-center gap-2">
                  <span className="text-3xl">2️⃣</span> Two Runs
                </h3>
                <p className="text-lg">
                  Ball ko gap mein hit karo aur dono batsmen 2 baar daudein = <strong>2 runs</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Pro move: Good running between wickets se 1 run ko 2 bana sakte ho!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3 flex items-center gap-2">
                  <span className="text-3xl">3️⃣</span> Three Runs
                </h3>
                <p className="text-lg">
                  Ball ko boundary ke paas hit karo aur 3 baar daudein = <strong>3 runs</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Rare hai but fitness test hai bhai! 🏃‍♂️💨
                </p>
              </div>

              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                <h3 className="font-bold text-2xl mb-3 flex items-center gap-2 text-green-500">
                  <span className="text-3xl">4️⃣</span> FOUR (Boundary)
                </h3>
                <p className="text-lg">
                  Ball <strong>ground pe touch karke</strong> boundary rope cross kare = <strong>4 runs</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Classic shot! Crowd goes wild! 🎉 No running needed!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-golden/10 border border-golden/30">
                <h3 className="font-bold text-2xl mb-3 flex items-center gap-2 text-golden">
                  <span className="text-3xl">6️⃣</span> SIX (Maximum)
                </h3>
                <p className="text-lg">
                  Ball <strong>hawa mein udke</strong> boundary cross kare = <strong>6 runs</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Ultimate power shot! Sabse exciting moment! 🚀 Crowd ka favorite!
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/30">
              <p className="text-lg">
                <strong>💡 Pro Tip:</strong> T20 mein boundaries important hain - jitne zyada 4s aur 6s, 
                utna better strike rate! IPL mein toh boundary count hi game decide karta hai kabhi kabhi! 😄
              </p>
            </div>
          </motion.section>

          {/* Ways to Get Out */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <h2 className="font-display font-bold text-3xl text-red-500">
                OUT Kaise Hote Hain? ❌
              </h2>
            </div>

            <p className="text-lg mb-6 text-muted-foreground">
              Cricket mein OUT hone ke 10 ways hain! Yahan sabse common ones:
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-red-500">🎯 Bowled</h3>
                <p className="text-lg">
                  Ball stumps ko hit kare aur bails gir jayein = <strong>OUT!</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Bowler ka dream dismissal! "Timber!" 🪵 Stumps udd gaye!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-red-500">🧤 Caught</h3>
                <p className="text-lg">
                  Batsman ball ko hit kare aur fielder catch pakad le (ball ground touch karne se pehle) = <strong>OUT!</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Sabse common dismissal! Slip catches, diving catches - sab exciting! 🤸
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-red-500">🦵 LBW (Leg Before Wicket)</h3>
                <p className="text-lg">
                  Ball batsman ke leg pe lage aur umpire ko lage ki ball stumps ko hit karti = <strong>OUT!</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Controversial! DRS (Decision Review System) se check karte hain. Technology ka kamal! 📱
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-red-500">🏃 Run Out</h3>
                <p className="text-lg">
                  Batsman run le raha ho aur fielder ball se stumps hit kar de (batsman crease mein nahi) = <strong>OUT!</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Risky business! Direct hit ya wicket-keeper ka kamal! Thriller moment! 😱
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-red-500">🧤 Stumped</h3>
                <p className="text-lg">
                  Batsman crease se bahar ho aur wicket-keeper stumps tod de = <strong>OUT!</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Wicket-keeper ka special! MS Dhoni ka favorite! Lightning fast hands! ⚡
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-red-500">🏏 Hit Wicket</h3>
                <p className="text-lg">
                  Batsman khud apne stumps ko hit kar de (bat ya body se) = <strong>OUT!</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Embarrassing! 😅 Rare but funny when it happens!
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-golden/10 border border-golden/30">
              <p className="text-lg">
                <strong>🎭 Drama Alert:</strong> LBW decisions pe sabse zyada controversy hoti hai! 
                Umpire ka decision final tha pehle, ab DRS hai toh technology se check kar sakte hain. 
                Hawk-Eye, Ultra Edge - sab gadgets! 🤖
              </p>
            </div>
          </motion.section>

          {/* Extras & Penalties */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-secondary" />
              <h2 className="font-display font-bold text-3xl text-secondary">
                Extras: Bonus Runs! 🎁
              </h2>
            </div>

            <p className="text-lg mb-6">
              Bowling team ki galti se batting team ko free runs milte hain! Yay! 🎉
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-secondary">🚫 Wide Ball</h3>
                <p className="text-lg">
                  Ball batsman ki reach se bahut door jaye = <strong>1 run penalty</strong> + ball dobara phenki jayegi
                </p>
                <p className="text-muted-foreground mt-2">
                  Bowler ki galti! Batsman ko free run mila! 😄
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-secondary">🦶 No Ball</h3>
                <p className="text-lg">
                  Bowler ki foot crease cross kar jaye ya ball waist se upar jaye = <strong>1 run penalty</strong> + free hit (next ball)
                </p>
                <p className="text-muted-foreground mt-2">
                  Free hit matlab batsman OUT nahi ho sakta (run out chhodke)! Party time! 🎊
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-secondary">🦵 Leg Bye</h3>
                <p className="text-lg">
                  Ball batsman ke body pe lage (bat nahi) aur run le = <strong>Leg bye runs</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Batsman ke score mein nahi count hota, but team ke total mein add hota hai!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-xl mb-2 text-secondary">👋 Bye</h3>
                <p className="text-lg">
                  Ball batsman aur wicket-keeper dono ko miss kar jaye aur run le = <strong>Bye runs</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Wicket-keeper ki galti! Rare but happens! 🤷
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/30">
              <p className="text-lg">
                <strong>😂 Funny Fact:</strong> Kabhi kabhi extras (wides + no balls) hi match jita dete hain! 
                Final over mein 5 wides = game over! Bowler ki toh... 💀
              </p>
            </div>
          </motion.section>

          {/* Boundaries Explained */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
          >
            <h2 className="font-display font-bold text-3xl mb-6 text-accent">
              🏟️ Boundary Rules Explained
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background/50 border">
                <h3 className="font-bold text-2xl mb-3">What is a Boundary?</h3>
                <p className="text-lg">
                  Ground ke edge pe ek rope/line hoti hai - wo boundary hai! Ball us line ko cross kare toh runs milte hain!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                  <h3 className="font-bold text-xl mb-2 text-green-500">4 Runs</h3>
                  <p className="text-lg">
                    Ball <strong>ground touch karke</strong> boundary cross kare
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Ball bounce karke boundary pe gaya = FOUR!
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-golden/10 border border-golden/30">
                  <h3 className="font-bold text-xl mb-2 text-golden">6 Runs</h3>
                  <p className="text-lg">
                    Ball <strong>hawa mein</strong> boundary cross kare
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Ball udke directly boundary cross = SIX!
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                <p className="text-lg">
                  <strong>🎯 Fielder Rule:</strong> Agar fielder boundary pe khada ho aur catch pakde, 
                  toh uske pair boundary line touch nahi hone chahiye! Warna 6 runs mil jayenge! 
                  Acrobatic catches dekhe hain? Wahi scene! 🤸‍♂️
                </p>
              </div>
            </div>
          </motion.section>

          {/* Scoring Examples */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-golden/10 to-golden/5 border border-golden/20"
          >
            <h2 className="font-display font-bold text-3xl mb-6 text-golden">
              📊 Real Match Example
            </h2>

            <div className="p-6 rounded-xl bg-background/50 border">
              <h3 className="font-bold text-xl mb-4">India vs Pakistan, T20 World Cup 2022</h3>
              <p className="text-lg mb-4">
                Virat Kohli ka legendary innings! Dekho kaise runs bane:
              </p>
              
              <div className="space-y-3 ml-4">
                <p className="text-lg">
                  <strong>Ball 1:</strong> Single run (quick running) = 1 run
                </p>
                <p className="text-lg">
                  <strong>Ball 2:</strong> Boundary through covers = 4 runs
                </p>
                <p className="text-lg">
                  <strong>Ball 3:</strong> Dot ball (no run) = 0 runs
                </p>
                <p className="text-lg">
                  <strong>Ball 4:</strong> SIX over long-on! = 6 runs
                </p>
                <p className="text-lg">
                  <strong>Ball 5:</strong> Two runs (good running) = 2 runs
                </p>
                <p className="text-lg">
                  <strong>Ball 6:</strong> Wide ball (bowler ki galti) = 1 extra run
                </p>
                <p className="text-lg">
                  <strong>Ball 7:</strong> Another SIX! = 6 runs
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-golden/20 border border-golden/40">
                <p className="text-xl font-bold">
                  Total in this over: 20 runs! 🔥
                </p>
                <p className="text-muted-foreground mt-2">
                  Aise hi match jeete jaate hain! Pressure situation mein boundaries marna = Champion! 👑
                </p>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border"
          >
            <h3 className="font-display font-bold text-2xl mb-4">
              Scoring samajh gaya? Perfect! 🎯
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ab different match formats ke baare mein seekho - Test, ODI, aur T20!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/match-formats">
                <Button size="lg" className="font-semibold">
                  Next: Match Formats ⚡
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

export default ScoringRules;
