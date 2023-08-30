import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/buildings_valuation.jpg";

const Buildings = () => {
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

      <ServiceCard
        deadline="5 дней"
        img={s_img}
        price={15000}
        title="Оценка доли квартиры"
      />
    </div>
  );
};

export default Buildings;
