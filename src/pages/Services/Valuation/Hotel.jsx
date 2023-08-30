import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/hotel_valuation.jpeg";

const Hotel = () => {
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
            title: "Оценка гостиницы",
          },
        ]}
      />

      <ServiceCard img={s_img} title="Оценка гостиницы" />
    </div>
  );
};

export default Hotel;
