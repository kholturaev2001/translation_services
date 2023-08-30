import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/building_technical_condition_valuation.jpeg";

const BuildingTechnicalCondition = () => {
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
            title: "Оценка технического состояния здания",
          },
        ]}
      />

      <ServiceCard img={s_img} title="Оценка технического состояния здания" />
    </div>
  );
};

export default BuildingTechnicalCondition;
