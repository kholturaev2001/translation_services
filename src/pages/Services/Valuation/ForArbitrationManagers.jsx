import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/for_arbitration_managers_valuation.jpeg";

const ForArbitrationManagers = () => {
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
            title: "Независимая оценка для арбитражных управляющих",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Независимая оценка для арбитражных управляющих"
      />
    </div>
  );
};

export default ForArbitrationManagers;
