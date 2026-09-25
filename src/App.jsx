import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
         <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />

        <Route
          path="/contact"
          element={
            <div className="min-h-screen bg-[#0B0B0B] p-10 text-[#F5F1E8]">
              <h1 className="font-['Bebas_Neue'] text-5xl">CONTACT</h1>
            </div>
          }
        />
        <Route
          path="/booking"
          element={
            <div className="min-h-screen bg-[#0B0B0B] p-10 text-[#F5F1E8]">
              <h1 className="font-['Bebas_Neue'] text-5xl">BOOKING</h1>
            </div>
          }
        />
      </Routes>
       <Footer />
    </>
  );
}

export default App;
