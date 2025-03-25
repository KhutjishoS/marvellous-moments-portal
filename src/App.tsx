
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Index from "./pages/Index";
import Venues from "./pages/Venues";
import Photographers from "./pages/Photographers";
import Catering from "./pages/Catering";
import Florists from "./pages/Florists";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ShoppingCartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/photographers" element={<Photographers />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/florists" element={<Florists />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
