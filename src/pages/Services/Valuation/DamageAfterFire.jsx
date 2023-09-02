import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/damage/damage_after_fire_valuation.jpeg";

const DamageAfterFire = () => {
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
            title: "Оценка после пожара",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка ущерба после пожара"
        deadline="от 15 дней"
        price={6000}
      />
    </div>
  );
};

export default DamageAfterFire;
