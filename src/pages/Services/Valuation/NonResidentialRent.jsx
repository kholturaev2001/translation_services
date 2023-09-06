import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/non_residential_rent_valuation.jpeg";

const NonResidentialRent = () => {
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
            title: "Арендная плата",
          },
          {
            title: "Оценка арендной платы нежилого помещения",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка арендной платы нежилого помещения"
      />
    </div>
  );
};

export default NonResidentialRent;
