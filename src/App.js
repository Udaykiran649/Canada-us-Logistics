import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import LogisticsPage from "./pages/LogisticsPage";
import MedicalBillingPage from "./pages/MedicalBillingPage";
import BookkeepingPage from "./pages/BookkeepingPage";
import TravelPage from "./pages/TravelPage";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
         <Route path="/services/logistics" element={<LogisticsPage />} />
         <Route path="/services/medical-billing" element={<MedicalBillingPage />} />
         <Route path="/services/bookkeeping" element={<BookkeepingPage />} />
         <Route path="/services/travel" element={<TravelPage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;