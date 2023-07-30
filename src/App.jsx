import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <div className="relative">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
