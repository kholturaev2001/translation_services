import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/house_balance_valuation.jpeg";

const CostOfCompletedConstructionWorkDetermination = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Экспертиза",
          },
          {
            title: "Строительно-техническая",
          },
          {
            title: "Строительно-техническая экспертиза",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Определение стоимости выполненных строительно-технических работ"
      />
    </div>
  );
};

export default CostOfCompletedConstructionWorkDetermination;
