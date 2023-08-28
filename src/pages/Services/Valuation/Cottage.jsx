import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/cottage.jpeg";

const Cottage = () => {
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
            title: "Загородная",
          },
          {
            title: "Коттедж",
          },
        ]}
      />

      <ServiceCard
        img={s_img}
        title="Оценка коттеджа"
        price={10000}
        deadline="7 дней"
      />
    </div>
  );
};

export default Cottage;
