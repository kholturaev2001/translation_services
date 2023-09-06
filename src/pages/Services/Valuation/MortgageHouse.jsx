import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/mortgage_house_valuation.jpeg";

const MortgageHouse = () => {
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
            title: "Дом для ипотека",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка дома для ипотеки" />
    </div>
  );
};

export default MortgageHouse;
