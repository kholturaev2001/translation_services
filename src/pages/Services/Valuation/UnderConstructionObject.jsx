import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/under_construction_object_valuation.jpeg";

const UnderConstructionObject = () => {
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
            title: "Незавершенное строительство",
          },
        ]}
      />

      <ServiceCard
        img={s_img}
        title="Оценка объектов незавершенного строительства"
        deadline="5 дней"
        price={10000}
      />
    </div>
  );
};

export default UnderConstructionObject;
