import ServiceCard from "../../../components/Card/ServiceCard"
import HeadBreadcrumb from "../../../components/HeadBreadcrumb"
import s_img from "../../../assets/images/services/valuation/dacha.jpeg";


const Dacha = () => {
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
            title: "Дача",
          },
        ]}
      />

      <ServiceCard
        img={s_img}
        title="Оценка дачи"
      />
    </div>
  )
}

export default Dacha