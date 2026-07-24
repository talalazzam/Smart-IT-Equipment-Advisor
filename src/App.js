import "./App.css";
import "./styles/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Recommendations from "./pages/Recommendations";
import Equipment from "./pages/Equipment";
import EquipmentCategories from "./pages/EquipmentCategories";
import Environments from "./pages/Environments";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/recommendations" element={<Recommendations />} />

          <Route path="/equipment" element={<Equipment />} />

          <Route path="/categories" element={<EquipmentCategories />} />

          <Route path="/environments" element={<Environments />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
