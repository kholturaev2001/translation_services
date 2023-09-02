import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/damage/apartment_after_bay_valuation.jpeg";

const ApartmentAfterBay = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Ущерб",
          },
          {
            title: "После залива",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка квартиры после залива"
        deadline="от 14 дней"
        price={5000}
      />
    </div>
  );
};

export default ApartmentAfterBay;
