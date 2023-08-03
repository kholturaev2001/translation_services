import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import { useState } from "react";
import { Modal } from "antd";
import Consultation from "./components/Consultation/Consultation";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#3a3330]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="w-[80vw] max-w-[1440px]"
      >
        <Consultation />
      </Modal>
      <button
        onClick={showModal}
        className="md:w-[210px] w-[120px] leading-3 md:py-1 py-2  bg-[#4D4948] font-medium text-white  md:text-base text-[12px] md:rounded-xl rounded-[5px] z-10 fixed bottom-5 right-2 border-2 border-[#ef6f2e] "
      >
        Бесплатная <br /> консультация
      </button>
    </div>
  );
}

export default App;
