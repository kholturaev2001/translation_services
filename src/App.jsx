import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { consultModalAC } from "./app/slices/app";
import Main from "./pages/Main";
import Navbar from "./components/Navbar/Navbar";
import Vacancies from "./pages/Vacancies";
import Contacts from "./pages/Contacts";
import { Modal } from "antd";
import Consultation from "./components/Consultation/Consultation";
import BackBtn from "./components/BackBtn";
import Services from "./components/Services";
import Prices from "./pages/Prices";
import TechnicalTranslation from "./pages/Services/Translating/TechnicalTranslation";
import EconomicTextsTranslation from "./pages/Services/Translating/EconomicTextsTranslation";
import FinancialTranslation from "./pages/Services/Translating/FinancialTranslation";
import ITTranslation from "./pages/Services/Translating/ITTranslation";
import LegalTranslation from "./pages/Services/Translating/LegalTranslation";
import MedicalTranslation from "./pages/Services/Translating/MedicalTranslation";
import LiteraryTranslation from "./pages/Services/Translating/LiteraryTranslation";
import PublicisticTranslation from "./pages/Services/Translating/PublicisticTranslation";
import AdvertisingTextsTranslation from "./pages/Services/Translating/AdvertisingTextsTranslation";
import PharmaceuticalTranslation from "./pages/Services/Translating/PharmaceuticalTranslation";
import ForNegotiationsTranslation from "./pages/Services/Translating/ForNegotiationsTranslation";
import ForExhibitionTranslation from "./pages/Services/Translating/ForExhibitionTranslation";
import ForMeetingsAndConferenceTranslation from "./pages/Services/Translating/ForMeetingsAndConferenceTranslation";
import DelegationAccompanying from "./pages/Services/Translating/DelegationAccompanying";
import NotarialActionsTranslation from "./pages/Services/Translating/NotarialActionsTranslation";
import InProductionTranslation from "./pages/Services/Translating/InProductionTranslation";
import GuideInterpreter from "./pages/Services/Translating/GuideInterpreter";
import SynchronicTranslation from "./pages/Services/Translating/SynchronicTranslation";
import SpecificTranslation from "./pages/Services/Translating/SpecificTranslation";
import PassportTranslation from "./pages/Services/Translating/PassportTranslation";
import DriversLicensesAndPtsTranslation from "./pages/Services/Translating/DriversLicensesAndPtsTranslation";
import SealsAndApostillesTranslation from "./pages/Services/Translating/SealsAndApostillesTranslation";
import ReferencesCertificatesTranslation from "./pages/Services/Translating/ReferencesCertificatesTranslation";
import DepartureOfChildConsentsTranslationAndNotarization from "./pages/Services/Translating/DepartureOfChildConsentsTranslationAndNotarization";
import CertificatesAndApplicationsTranslation from "./pages/Services/Translating/CertificatesAndApplicationsTranslation";
import DiplomasAndApplicationsTranslation from "./pages/Services/Translating/DiplomasAndApplicationsTranslation";
import TranscriptsTranslation from "./pages/Services/Translating/TranscriptsTranslation";
import CorporateDocumentsTranslation from "./pages/Services/Translating/CorporateDocumentsTranslation";
import BirthCertificateApostilleTranslation from "./pages/Services/Translating/BirthCertificateApostilleTranslation";
import ContractsAndApplicationsTranslation from "./pages/Services/Translating/ContractsAndApplicationsTranslation";
import DocumentTranslationServices from "./pages/Services/Translating/DocumentTranslationServices";
import NotaryServices from "./pages/Services/Translating/NotaryServices";

function App() {
  const {consultModal} = useSelector(state => state.app)
  const dispatch = useDispatch()


  
  const showModal = () => {
    dispatch(consultModalAC(true));
  };

  const handleOk = () => {
    dispatch(consultModalAC(false));
  };
  
  const handleCancel = () => {
    dispatch(consultModalAC(false));
  };
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services/" element={<Services />}>

           {/* ============   TRANSLATING  ===============  */}
          <Route path="technical_translation" element={<TechnicalTranslation />} />
          <Route path="economic_texts_translation" element={<EconomicTextsTranslation />} />
          <Route path="financial_translation" element={<FinancialTranslation />} />
          <Route path="it_translation" element={<ITTranslation />} />
          <Route path="legal_translation" element={<LegalTranslation />} />
          <Route path="medical_translation" element={<MedicalTranslation />} />
          <Route path="literary_translation" element={<LiteraryTranslation />} />
          <Route path="publicistic_translation" element={<PublicisticTranslation />} />
          <Route path="advertising_texts_translation" element={<AdvertisingTextsTranslation />} />
          <Route path="pharmaceutical_translation" element={<PharmaceuticalTranslation />} />
          <Route path="for_negotiations_translation" element={<ForNegotiationsTranslation />} />
          <Route path="for_exhibition_translation" element={<ForExhibitionTranslation />} />
          <Route path="for_meetings_and_conference_translation" element={<ForMeetingsAndConferenceTranslation />} />
          <Route path="delegation_accompanying" element={<DelegationAccompanying />} />
          <Route path="notarial_actions_translation" element={<NotarialActionsTranslation />} />
          <Route path="in_production_translation" element={<InProductionTranslation />} />
          <Route path="guide_interpreter" element={<GuideInterpreter />} />
          <Route path="synchronic_translation" element={<SynchronicTranslation />} />
          <Route path="specific_translation" element={<SpecificTranslation />} />
          <Route path="passport_translation" element={<PassportTranslation />} />
          <Route path="drivers_licenses_and_pts_translation" element={<DriversLicensesAndPtsTranslation />} />
          <Route path="seals_and_apostilles_translation" element={<SealsAndApostillesTranslation />} />
          <Route path="references_certificates_translation" element={<ReferencesCertificatesTranslation />} />
          <Route path="departure_of_child_consents_translation_and_notarization" element={<DepartureOfChildConsentsTranslationAndNotarization />} />
          <Route path="certificates_and_applications_translation" element={<CertificatesAndApplicationsTranslation />} />
          <Route path="diplomas_and_applications_translation" element={<DiplomasAndApplicationsTranslation />} />
          <Route path="transcripts_translation" element={<TranscriptsTranslation />} />
          <Route path="corporate_documents_translation" element={<CorporateDocumentsTranslation />} />
          <Route path="birth_certificate_apostille_translation" element={<BirthCertificateApostilleTranslation />} />
          <Route path="contracts_and_applications_translation" element={<ContractsAndApplicationsTranslation />} />
          <Route path="document_translation_services" element={<DocumentTranslationServices />} />
          <Route path="notary_services" element={<NotaryServices />} />
        </Route>
      </Routes>
      <Modal
        open={consultModal}
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
