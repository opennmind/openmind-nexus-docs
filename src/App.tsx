
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Components from "./pages/Components";
import Blog from "./pages/Blog";
import Showcase from "./pages/Showcase";
import NotFound from "./pages/NotFound";
import Templates from "./pages/Templates";
import Screencasts from "./pages/Screencasts";
import Playground from "./pages/Playground";
import Resources from "./pages/Resources";

// Documentation pages
import Installation from "./pages/docs/Installation";
import EditorSetup from "./pages/docs/EditorSetup";
import OptimizingProduction from "./pages/docs/OptimizingProduction";
import BrowserSupport from "./pages/docs/BrowserSupport";
import UpgradeGuide from "./pages/docs/UpgradeGuide";

// First Steps pages
import UtilityFirst from "./pages/docs/UtilityFirst";
import HoverFocus from "./pages/docs/HoverFocus";
import ResponsiveDesign from "./pages/docs/ResponsiveDesign";
import DarkMode from "./pages/docs/DarkMode";
import ReusingStyles from "./pages/docs/ReusingStyles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components" element={<Components />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/screencasts" element={<Screencasts />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/showcase" element={<Showcase />} />
          
          {/* Documentation Routes */}
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/editor-setup" element={<EditorSetup />} />
          <Route path="/docs/optimizing-for-production" element={<OptimizingProduction />} />
          <Route path="/docs/browser-support" element={<BrowserSupport />} />
          <Route path="/docs/upgrade-guide" element={<UpgradeGuide />} />
          
          {/* First Steps Routes */}
          <Route path="/docs/utility-first" element={<UtilityFirst />} />
          <Route path="/docs/hover-focus" element={<HoverFocus />} />
          <Route path="/docs/responsive-design" element={<ResponsiveDesign />} />
          <Route path="/docs/dark-mode" element={<DarkMode />} />
          <Route path="/docs/reusing-styles" element={<ReusingStyles />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
