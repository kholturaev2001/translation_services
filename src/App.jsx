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
import DamageAfterFire from "./pages/Services/Valuation/DamageAfterFire";
import ApartmentAfterBay from "./pages/Services/Valuation/ApartmentAfterBay";
import BayExpertise from "./pages/Services/Valuation/BayExpertise";
import ActionsInactionOfThirdPartiesDamage from "./pages/Services/Valuation/ActionsInactionOfThirdPartiesDamage";
import LostProfit from "./pages/Services/Valuation/LostProfit";
import NonResidentialRent from "./pages/Services/Valuation/NonResidentialRent";
import RightToLeaseLand from "./pages/Services/Valuation/RightToLeaseLand";
import ApartmentForBank from "./pages/Services/Valuation/ApartmentForBank";
import EstateForBank from "./pages/Services/Valuation/EstateForBank";
import HouseForSberbank from "./pages/Services/Valuation/HouseForSberbank";
import RealEstateForCourt from "./pages/Services/Valuation/RealEstateForCourt";
import ApartmentForCourt from "./pages/Services/Valuation/ApartmentForCourt";
import ApartmentForNotary from "./pages/Services/Valuation/ApartmentForNotary";
import SharesForNotary from "./pages/Services/Valuation/SharesForNotary";
import BusinessForInheritance from "./pages/Services/Valuation/BusinessForInheritance";
import VehicleForInheritance from "./pages/Services/Valuation/VehicleForInheritance";
import MotorcycleForNotary from "./pages/Services/Valuation/MotorcycleForNotary";
import GarageForNotary from "./pages/Services/Valuation/GarageForNotary";
import BoatForInheritance from "./pages/Services/Valuation/BoatForInheritance";
import LandForNotary from "./pages/Services/Valuation/LandForNotary";
import ApartmentForSale from "./pages/Services/Valuation/ApartmentForSale";
import MortgageHouse from "./pages/Services/Valuation/MortgageHouse";
import ForArbitrationManagers from "./pages/Services/Valuation/ForArbitrationManagers";
import ForInsurance from "./pages/Services/Valuation/ForInsurance";
import ApartmentForGuardianship from "./pages/Services/Valuation/ApartmentForGuardianship";
import CollateralValuation from "./pages/Services/Valuation/CollateralValuation";
import CadastralCost from "./pages/Services/Valuation/CadastralCost";
import HouseBalance from "./pages/Services/Valuation/HouseBalance";
import CostOfCompletedConstructionWorkDetermination from "./pages/Services/Expertise/CostOfCompletedConstructionWorkDetermination";
import EstimateDocumentationExpert from "./pages/Services/Expertise/EstimateDocumentationExpert";
import WindowExpert from "./pages/Services/Expertise/WindowExpert";
import ConstructionAndInstallationWorksExpert from "./pages/Services/Expertise/ConstructionAndInstallationWorksExpert";
import QualityOfInteriorDecorationExpert from "./pages/Services/Expertise/QualityOfInteriorDecorationExpert";
import BuildingsAndStructuresExpert from "./pages/Services/Expertise/BuildingsAndStructuresExpert";
import CapitalityOfBuildingsExpert from "./pages/Services/Expertise/CapitalityOfBuildingsExpert";
import DoorBlocksExpert from "./pages/Services/Expertise/DoorBlocksExpert";
import ApartmentContructionExpert from "./pages/Services/Expertise/ApartmentContructionExpert";
import RoofExpert from "./pages/Services/Expertise/RoofExpert";
import IncreaseInConstructionCostsExpert from "./pages/Services/Expertise/IncreaseInConstructionCostsExpert";
import WoodenStructuresExert from "./pages/Services/Expertise/WoodenStructuresExert";
import StatuteOfLimitationsForCompilingDocumentExpert from "./pages/Services/Expertise/StatuteOfLimitationsForCompilingDocumentExpert";
import HandwritingExpert from "./pages/Services/Expertise/HandwritingExpert";
import FinancialAndEconomicExpert from "./pages/Services/Expertise/FinancialAndEconomicExpert";
import AccountingExpert from "./pages/Services/Expertise/AccountingExpert";
import LinguisticExpert from "./pages/Services/Expertise/LinguisticExpert";
import PhonoscopicExpert from "./pages/Services/Expertise/PhonoscopicExpert";
import ComputerAndTechnicalExpert from "./pages/Services/Expertise/ComputerAndTechnicalExpert";
import IntellectualActivityObjectsExpert from "./pages/Services/Expertise/IntellectualActivityObjectsExpert";
import CommodityExpert from "./pages/Services/Expertise/CommodityExpert";
import AutomotiveExpert from "./pages/Services/Expertise/AutomotiveExpert";
import LandManagementExpert from "./pages/Services/Expertise/LandManagementExpert";
import FireExpert from "./pages/Services/Expertise/FireExpert";
import AppraisalExpert from "./pages/Services/Expertise/AppraisalExpert";
import BuildingFacadeExpert from "./pages/Services/Expertise/BuildingFacadeExpert";
import IndependentJudicalExpert from "./pages/Services/Expertise/IndependentJudicalExpert";
import ChallengingCadastralValueOfRealEstate from "./pages/Services/TaxCuts/ChallengingCadastralValueOfRealEstate";
import ApplicationOfTaxIncentives from "./pages/Services/TaxCuts/ApplicationOfTaxIncentives";
import ExclusionOfRealEstateObjectsFrom700PP from "./pages/Services/TaxCuts/ExclusionOfRealEstateObjectsFrom700PP";
import PermittedLandTypeChange from "./pages/Services/LegalService/PermittedLandTypeChange";
import LandCategoryChange from "./pages/Services/LegalService/LandCategoryChange";
import LandRentDecrease from "./pages/Services/LegalService/LandRentDecrease";
import UnauthorizedConstructionLegalization from "./pages/Services/LegalService/UnauthorizedConstructionLegalization";
import CadastralMattersLawyers from "./pages/Services/LegalService/CadastralMattersLawyers";
import RedevelopmentCoordination from "./pages/Services/LegalService/RedevelopmentCoordination";
import EnterpriseFinancialAndEconomicActivitiesAnalysis from "./pages/Services/BusinessPlanning/EnterpriseFinancialAndEconomicActivitiesAnalysis";
import BusinessPlanDevelopment from "./pages/Services/BusinessPlanning/BusinessPlanDevelopment";

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
          {/*  ============   VALUATION  ===============  */}
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
          <Route
            path="damage_after_fire_valuation"
            element={<DamageAfterFire />}
          />
          <Route
            path="apartment_after_bay_valuation"
            element={<ApartmentAfterBay />}
          />
          <Route path="bay_expertise_valuation" element={<BayExpertise />} />
          <Route
            path="actions_inaction_of_third_parties_damage_valuation"
            element={<ActionsInactionOfThirdPartiesDamage />}
          />
          <Route path="lost_profit_valuation" element={<LostProfit />} />
          <Route
            path="non_residential_rent_valuation"
            element={<NonResidentialRent />}
          />
          <Route
            path="right_to_lease_land_valuation"
            element={<RightToLeaseLand />}
          />
          <Route
            path="apartment_for_bank_valuation"
            element={<ApartmentForBank />}
          />
          <Route path="estate_for_bank_valuation" element={<EstateForBank />} />
          <Route
            path="house_for_sberbank_valuation"
            element={<HouseForSberbank />}
          />
          <Route
            path="real_estate_for_court_valuation"
            element={<RealEstateForCourt />}
          />
          <Route
            path="apartment_for_court_valuation"
            element={<ApartmentForCourt />}
          />
          <Route
            path="apartment_for_notary_valuation"
            element={<ApartmentForNotary />}
          />
          <Route
            path="shares_for_notary_valuation"
            element={<SharesForNotary />}
          />
          <Route
            path="business_for_inheritance_valuation"
            element={<BusinessForInheritance />}
          />
          <Route
            path="vehicle_for_inheritance_valuation"
            element={<VehicleForInheritance />}
          />
          <Route
            path="motorcycle_for_notary_valuation"
            element={<MotorcycleForNotary />}
          />
          <Route
            path="garage_for_notary_valuation"
            element={<GarageForNotary />}
          />
          <Route
            path="boat_for_inheritance_valuation"
            element={<BoatForInheritance />}
          />
          <Route path="land_for_notary_valuation" element={<LandForNotary />} />
          <Route
            path="apartment_for_sale_valuation"
            element={<ApartmentForSale />}
          />
          <Route path="mortgage_house_valuation" element={<MortgageHouse />} />
          <Route
            path="for_arbitration_managers_valuation"
            element={<ForArbitrationManagers />}
          />
          <Route path="for_insurance_valuation" element={<ForInsurance />} />
          <Route
            path="apartment_for_guardianship_valuation"
            element={<ApartmentForGuardianship />}
          />
          <Route
            path="collateral_valuation"
            element={<CollateralValuation />}
          />
          <Route path="cadastral_cost_valuation" element={<CadastralCost />} />
          <Route path="house_balance_valuation" element={<HouseBalance />} />

          {/*  ============   EXPERTISE  ===============  */}
          <Route
            path="cost_of_completed_construction_work_determination"
            element={<CostOfCompletedConstructionWorkDetermination />}
          />
          <Route
            path="independent_judical_expert"
            element={<IndependentJudicalExpert />}
          />

          <Route
            path="estimate_documentation_expert"
            element={<EstimateDocumentationExpert />}
          />

          <Route
            path="building_facade_expert"
            element={<BuildingFacadeExpert />}
          />
          <Route path="window_expert" element={<WindowExpert />} />

          <Route
            path="construction_and_installation_works_expert"
            element={<ConstructionAndInstallationWorksExpert />}
          />

          <Route
            path="quality_of_interior_decoration_expert"
            element={<QualityOfInteriorDecorationExpert />}
          />

          <Route
            path="buildings_and_structures_expert"
            element={<BuildingsAndStructuresExpert />}
          />

          <Route
            path="capitality_of_buildings_expert"
            element={<CapitalityOfBuildingsExpert />}
          />

          <Route path="door_blocks_expert" element={<DoorBlocksExpert />} />

          <Route
            path="apartment_contruction_expert"
            element={<ApartmentContructionExpert />}
          />

          <Route path="roof_expert" element={<RoofExpert />} />
          <Route
            path="increase_in_construction_сosts_expert"
            element={<IncreaseInConstructionCostsExpert />}
          />
          <Route
            path="wooden_structures_exert"
            element={<WoodenStructuresExert />}
          />
          <Route
            path="statute_of_limitations_for_compiling_a_document_expert"
            element={<StatuteOfLimitationsForCompilingDocumentExpert />}
          />
          <Route path="handwriting_expert" element={<HandwritingExpert />} />
          <Route
            path="financial_and_economic_expert"
            element={<FinancialAndEconomicExpert />}
          />
          <Route path="accounting_expert" element={<AccountingExpert />} />
          <Route path="linguistic_expert" element={<LinguisticExpert />} />
          <Route path="phonoscopic_expert" element={<PhonoscopicExpert />} />
          <Route
            path="computer_and_technical_expert"
            element={<ComputerAndTechnicalExpert />}
          />
          <Route
            path="intellectual_activity_objects_expert"
            element={<IntellectualActivityObjectsExpert />}
          />
          <Route path="commodity_expert" element={<CommodityExpert />} />
          <Route path="automotive_expert" element={<AutomotiveExpert />} />
          <Route
            path="land_management_expert"
            element={<LandManagementExpert />}
          />
          <Route path="fire_expert" element={<FireExpert />} />
          <Route path="appraisal_expert" element={<AppraisalExpert />} />
          <Route
            path="challenging_the_cadastral_value_of_real_estate"
            element={<ChallengingCadastralValueOfRealEstate />}
          />
          <Route
            path="application_of_tax_incentives"
            element={<ApplicationOfTaxIncentives />}
          />
          <Route
            path="exclusion_of_real_estate_objects_from_700_pp"
            element={<ExclusionOfRealEstateObjectsFrom700PP />}
          />
          <Route
            path="permitted_land_type_change"
            element={<PermittedLandTypeChange />}
          />
          <Route path="land_category_change" element={<LandCategoryChange />} />
          <Route path="land_rent_decrease" element={<LandRentDecrease />} />
          <Route
            path="unauthorized_construction_legalization"
            element={<UnauthorizedConstructionLegalization />}
          />
          <Route
            path="cadastral_matters_lawyers"
            element={<CadastralMattersLawyers />}
          />
          <Route
            path="redevelopment_coordination"
            element={<RedevelopmentCoordination />}
          />
          <Route
            path="enterprise_financial_and_economic_activities_analysis"
            element={<EnterpriseFinancialAndEconomicActivitiesAnalysis />}
          />
          <Route
            path="business_plan_development"
            element={<BusinessPlanDevelopment />}
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
