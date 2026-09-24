import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-[#0B0B0B] p-10 text-[#F5F1E8]">
              <h1 className="font-['Bebas_Neue'] text-6xl">BLACK & BLADE</h1>

              <p className="mt-4 text-gray-400">
                Precision Cuts. Modern Style.
              </p>
            </div>
          }
        />
        <Route
          path="/services"
          element={
            <div className="min-h-screen bg-[#0B0B0B] p-10 text-[#F5F1E8]">
              <h1 className="font-['Bebas_Neue'] text-5xl">SERVICES</h1>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="min-h-screen bg-[#0B0B0B] p-10 text-[#F5F1E8]">
              <h1 className="font-['Bebas_Neue'] text-5xl">ABOUT</h1>
            </div>
          }
        />

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
    </>
  );
}

export default App;
