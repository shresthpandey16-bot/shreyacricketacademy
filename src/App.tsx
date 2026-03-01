import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CricketBasics from "./pages/CricketBasics";
import ScoringRules from "./pages/ScoringRules";
import MatchFormats from "./pages/MatchFormats";
import PositionsFielding from "./pages/PositionsFielding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cricket-basics" element={<CricketBasics />} />
          <Route path="/scoring-rules" element={<ScoringRules />} />
          <Route path="/match-formats" element={<MatchFormats />} />
          <Route path="/positions-fielding" element={<PositionsFielding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
