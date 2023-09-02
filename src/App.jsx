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
import CostOfInseparableImprovements from "./pages/Services/Valuation/CostOfInseparableImprovements";
import UnderConstructionObject from "./pages/Services/Valuation/UnderConstructionObject";
import BuildingTechnicalCondition from "./pages/Services/Valuation/BuildingTechnicalCondition";
import Buildings from "./pages/Services/Valuation/Buildings";
import RoomAcceptance from "./pages/Services/Valuation/RoomAcceptance";
import Hotel from "./pages/Services/Valuation/Hotel";
import BillsValuation from "./pages/Services/Valuation/BillsValuation";
import StockValuation from "./pages/Services/Valuation/StockValuation";
import CompanyPropertyValuation from "./pages/Services/Valuation/CompanyPropertyValuation";
import InvestmentProjectsValuation from "./pages/Services/Valuation/InvestmentProjectsValuation";
import DepositsAndSubsoilValuation from "./pages/Services/Valuation/DepositsAndSubsoilValuation";
import SecuritiesValuation from "./pages/Services/Valuation/SecuritiesValuation";
import AccountsReceivableValuation from "./pages/Services/Valuation/AccountsReceivableValuation";
import LLCShareValuation from "./pages/Services/Valuation/LLCShareValuation";
import CapitalContributionValuation from "./pages/Services/Valuation/CapitalContributionValuation";
import MutualInvestmentFunds from "./pages/Services/Valuation/MutualInvestmentFunds";
import InventionPatent from "./pages/Services/Valuation/InventionPatent";
import DistressedAssets from "./pages/Services/Valuation/DistressedAssets";
import Trademark from "./pages/Services/Valuation/Trademark";
import ResearchAndDevelopmentWork from "./pages/Services/Valuation/ResearchAndDevelopmentWork";
import SpecialEqipment from "./pages/Services/Valuation/SpecialEqipment";
import TruckValuation from "./pages/Services/Valuation/TruckValuation";
import CarValuation from "./pages/Services/Valuation/CarValuation";
import MachineValuation from "./pages/Services/Valuation/MachineValuation";
import OfficeEquipmentValuation from "./pages/Services/Valuation/OfficeEquipmentValuation";
import WeaponValuation from "./pages/Services/Valuation/WeaponValuation";
import ComputerValuation from "./pages/Services/Valuation/ComputerValuation";
import HouseholdAppliancesValuation from "./pages/Services/Valuation/HouseholdAppliancesValuation";
import FurnitureValuation from "./pages/Services/Valuation/FurnitureValuation";

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
          <Route
            path="without_landplot_valuation"
            element={<HouseWithoutLandplot />}
          />
          <Route path="dacha_valuation" element={<Dacha />} />
          <Route
            path="with_landplot_valuation"
            element={<HouseWithLandplot />}
          />
          <Route path="room_share_valuation" element={<RoomShare />} />
          <Route path="new_room_valuation" element={<NewRoom />} />
          <Route
            path="home_mortgage_agency_valuation"
            element={<HomeMortgageAgency />}
          />
          <Route path="apartments_valuation" element={<Apartments />} />
          <Route path="communal_room_valuation" element={<CommunalRoom />} />
          <Route
            path="cost_of_inseparable_improvements"
            element={<CostOfInseparableImprovements />}
          />
          <Route
            path="under_construction_object_valuation"
            element={<UnderConstructionObject />}
          />
          <Route
            path="building_technical_condition_valuation"
            element={<BuildingTechnicalCondition />}
          />
          <Route
            path="room_acceptance_valuation"
            element={<RoomAcceptance />}
          />
          <Route path="hotel_valuation" element={<Hotel />} />
          <Route path="buildings_valuation" element={<Buildings />} />
          <Route path="bills_valuation" element={<BillsValuation />} />
          <Route path="stock_valuation" element={<StockValuation />} />
          <Route
            path="company_property_valuation"
            element={<CompanyPropertyValuation />}
          />
          <Route
            path="investment_projects_valuation"
            element={<InvestmentProjectsValuation />}
          />
          <Route
            path="deposits_and_subsoil_valuation"
            element={<DepositsAndSubsoilValuation />}
          />
          <Route
            path="securities_valuation"
            element={<SecuritiesValuation />}
          />
          <Route
            path="accounts_receivable_valuation"
            element={<AccountsReceivableValuation />}
          />
          <Route
            path="share_in_llc_valuation"
            element={<LLCShareValuation />}
          />
          <Route
            path="capital_contribution_valuation"
            element={<CapitalContributionValuation />}
          />
          <Route
            path="mutual_investment_funds_valuation"
            element={<MutualInvestmentFunds />}
          />
          <Route
            path="invention_patent_valuation"
            element={<InventionPatent />}
          />
          <Route
            path="distressed_assets_valuation"
            element={<DistressedAssets />}
          />
          <Route path="trademark_valuation" element={<Trademark />} />
          <Route
            path="research_and_development_work_valuation"
            element={<ResearchAndDevelopmentWork />}
          />
          <Route
            path="special_equipment_valuation"
            element={<SpecialEqipment />}
          />
          <Route path="truck_valuation" element={<TruckValuation />} />
          <Route path="car_valuation" element={<CarValuation />} />
          <Route path="machine_valuation" element={<MachineValuation />} />
          <Route
            path="office_equipment_valuation"
            element={<OfficeEquipmentValuation />}
          />
          <Route path="weapon_valuation" element={<WeaponValuation />} />
          <Route path="computer_valuation" element={<ComputerValuation />} />
          <Route
            path="household_appliances_valuation"
            element={<HouseholdAppliancesValuation />}
          />
          <Route path="furniture_valuation" element={<FurnitureValuation />} />
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
