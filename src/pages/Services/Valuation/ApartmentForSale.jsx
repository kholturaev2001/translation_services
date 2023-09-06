import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/apartment_for_sale_valuation.jpeg";

const ApartmentForSale = () => {
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
            title: "Продажа квартиры",
          },
          {
            title: "Квартира",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка квартиры для продажи" />
    </div>
  );
};

export default ApartmentForSale;
