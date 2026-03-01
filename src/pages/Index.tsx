import Navbar from "@/components/cricket/Navbar";
import Hero from "@/components/cricket/Hero";
import SpecialMessage from "@/components/cricket/SpecialMessage";
import LearnCricket from "@/components/cricket/LearnCricket";
import BattingMasterclass from "@/components/cricket/BattingMasterclass";
import QuizSection from "@/components/cricket/QuizSection";
import HallOfFame from "@/components/cricket/HallOfFame";
import Footer from "@/components/cricket/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SpecialMessage />
      <LearnCricket />
      <BattingMasterclass />
      <QuizSection />
      <HallOfFame />
      <Footer />
    </div>
  );
};

export default Index;
