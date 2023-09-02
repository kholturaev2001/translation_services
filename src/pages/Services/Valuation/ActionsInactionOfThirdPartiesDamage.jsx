import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/damage/actions_inaction_of_third_parties_damage_valuation.jpeg";

const ActionsInactionOfThirdPartiesDamage = () => {
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
            title: "От действий/бездействия третьих лиц",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка ущерба от действий/бездействия третьих лиц"
        deadline="от 14 дней"
        price={5000}
      />
    </div>
  );
};

export default ActionsInactionOfThirdPartiesDamage;
