import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Make sure file name matches exactly
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
/* import Tours from "./pages/Tours";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact"; */

function App() {
  return (
    <Router>
      {/* Header is outside Routes so it shows on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth/Login" element={<Login />} />
        <Route path="/Auth/Register" element={<Register />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Uncomment when other pages are ready
        
        
       
       
        */}
      </Routes>
    </Router>
  );
}

export default App;
