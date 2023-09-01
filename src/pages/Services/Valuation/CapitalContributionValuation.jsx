import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/business/capital_contribution_valuation.jpeg";

const CapitalContributionValuation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Недвижимость",
          },
          {
            title: "Квартира",
          },
          {
            title: "Доли",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка доли квартиры" />
    </div>
  );
};

export default CapitalContributionValuation;
