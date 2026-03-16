import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";

/**
 * Vixel Media Portfolio Website
 * 
 * Design Philosophy: Premium Modern Agency
 * - Deep Blue (#191BA4) primary color for trust and professionalism
 * - Pure Yellow (#FFFF00) accent for energy and CTAs
 * - Poppins (headings), Inter (body), Playfair Display (taglines)
 * - Minimalist layout with generous spacing and smooth animations
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/portfolio/:id"} component={CaseStudy} />
      <Route path={"/services"} component={Services} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/inquiry"} component={Inquiry} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
