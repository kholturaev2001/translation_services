import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/room_acceptance_valuation.jpeg";

const RoomAcceptance = () => {
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
            title: "Приемка помещений",
          },
        ]}
      />

      <ServiceCard 
        img={s_img} 
        title="Оценка доли квартиры" 
    />
    </div>
  );
};

export default RoomAcceptance;
