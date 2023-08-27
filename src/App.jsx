import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Vacancies from "./pages/Vacancies";
import Contacts from "./pages/Contacts";
import { useState } from "react";
import { Modal } from "antd";
import Consultation from "./components/Consultation/Consultation";
import BackBtn from "./components/BackBtn";
import Services from "./components/Services";
import StoreValuation from "./pages/Services/Valuation/StoreValuation";
import NonResidentialPremises from "./pages/Services/Valuation/NonResidentialPremises";
import IndustrialPremises from "./pages/Services/Valuation/IndustrialPremises";

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
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services/" element={<Services />}>
          <Route path="store_valuation" element={<StoreValuation />} />
          <Route
            path="non_residential_premises_valuation"
            element={<NonResidentialPremises />}
          />
          <Route
            path="industrial_premises_valuation"
            element={<IndustrialPremises />}
          />
        </Route>
      </Routes>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="w-[80vw] max-w-[1440px]"
      >
        <Consultation />
      </Modal>
      <BackBtn
        onClick={showModal}
        className="md:w-[210px] w-[120px] leading-3 md:py-1 py-2  bg-[#304150] font-medium text-white  md:text-base text-[12px] md:rounded-xl rounded-[5px] z-10 fixed bottom-5 right-2 border-2 border-[#33a3ed] "
      >
        Бесплатная <br /> консультация
      </BackBtn>
    </div>
  );
}

export default App;
