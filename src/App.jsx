import { Route, Routes } from "react-router";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-family-Akzidenz-Ext font-helvetica font-arial font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
