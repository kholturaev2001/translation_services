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
import BuildingValuation from "./pages/Services/Valuation/BuildingValuation";
import PropertyComplexes from "./pages/Services/Valuation/PropertyComplexes";
import CommercialEstate from "./pages/Services/Valuation/CommercialEstate";
import Office from "./pages/Services/Valuation/Office";
import AgricultureLand from "./pages/Services/Valuation/AgricultureLand";
import EasementLand from "./pages/Services/Valuation/EasementLand";
import PrivateHouse from "./pages/Services/Valuation/PrivateHouse";
import Townhouse from "./pages/Services/Valuation/Townhouse";
import Cottage from "./pages/Services/Valuation/Cottage";
import Mansion from "./pages/Services/Valuation/Mansion";
import HouseWithoutLandplot from "./pages/Services/Valuation/HouseWithoutLandplot";
import Dacha from "./pages/Services/Valuation/Dacha";
import HouseWithLandplot from "./pages/Services/Valuation/HouseWithLandplot";
import RoomShare from "./pages/Services/Valuation/RoomShare";
import NewRoom from "./pages/Services/Valuation/NewRoom";
import HomeMortgageAgency from "./pages/Services/Valuation/HomeMortgageAgency";
import Apartments from "./pages/Services/Valuation/Apartments";
import CommunalRoom from "./pages/Services/Valuation/CommunalRoom";

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
          <Route path="building_valuation" element={<BuildingValuation />} />
          <Route
            path="property_complexes_valuation"
            element={<PropertyComplexes />}
          />
          <Route
            path="commercial_estate_valuation"
            element={<CommercialEstate />}
          />
          <Route path="office_valuation" element={<Office />} />
          <Route
            path="agriculture_land_valuation"
            element={<AgricultureLand />}
          />
          <Route path="easement_land_valuation" element={<EasementLand />} />
          <Route path="private_house_valuation" element={<PrivateHouse />} />
          <Route path="townhouse_valuation" element={<Townhouse />} />
          <Route path="cottage_valuation" element={<Cottage />} />
          <Route path="mansion_valuation" element={<Mansion />} />
          <Route path="without_landplot_valuation" element={<HouseWithoutLandplot />} />
          <Route path="dacha_valuation" element={<Dacha />} />
          <Route path="with_landplot_valuation" element={<HouseWithLandplot />} />
          <Route path="room_share_valuation" element={<RoomShare />} />
          <Route path="new_room_valuation" element={<NewRoom />} />
          <Route path="home_mortgage_agency_valuation" element={<HomeMortgageAgency />} />
          <Route path="apartments_valuation" element={<Apartments />} />
          <Route path="communal_room_valuation" element={<CommunalRoom />} />
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
