import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/damage/lost_profit_valuation.jpeg";

const LostProfit = () => {
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
            title: "Упущенная выгода",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка упущенной выгоды"
        deadline="от 10 дней"
        price={4500}
      />
    </div>
  );
};

export default LostProfit;
