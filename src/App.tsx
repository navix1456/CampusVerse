import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Subjects from "./pages/Subjects";
import Perks from "./pages/Perks";
import Placement from "./pages/Placement";
import AboutUs from "./pages/AboutUs";
import Contribute from "./pages/Contribute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import WhatsAppPopup from "./components/WhatsAppPopup";
import ContributeInstructions from "./pages/ContributeInstructions";
import CGPACalculator from "./pages/CGPACalculator";
import GradeCalculator from "./pages/GradeCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/contribute-instructions" element={<ContributeInstructions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cgpa-calculator" element={<CGPACalculator />} />
          <Route path="/grade-calculator" element={<GradeCalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
