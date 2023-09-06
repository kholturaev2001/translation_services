import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/right_to_lease_land_valuation.jpeg";

const RightToLeaseLand = () => {
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
            title: "Оценка права аренды земельного участка",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка права аренды земельного участка" />
    </div>
  );
};

export default RightToLeaseLand;
