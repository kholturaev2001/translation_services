import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/damage/bay_expertise_valuation.jpeg";

const BayExpertise = () => {
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
            title: "Экспертиза после залива",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Экспертиза после залива"
        deadline="от 14 дней"
        price={5000}
      />
    </div>
  );
};

export default BayExpertise;
