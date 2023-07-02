import { Route, Routes } from "react-router";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
