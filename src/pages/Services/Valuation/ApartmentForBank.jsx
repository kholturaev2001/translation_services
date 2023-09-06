import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/apartment_for_bank_valuation.jpeg";

const ApartmentForBank = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Для целей",
          },
          {
            title: "Банк",
          },
          {
            title: "Квартира",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка квартиры для банка" />
    </div>
  );
};

export default ApartmentForBank;
