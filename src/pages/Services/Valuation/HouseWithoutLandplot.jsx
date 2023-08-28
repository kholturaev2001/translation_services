import ServiceCard from "../../../components/Card/ServiceCard"
import HeadBreadcrumb from "../../../components/HeadBreadcrumb"
import s_img from "../../../assets/images/services/valuation/house_without_landplot.jpeg";


const HouseWithoutLandplot = () => {
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
            title: "Дом без земельного участка",
          },
        ]}
      />

      <ServiceCard
        img={s_img}
        title="Оценка дома без земельного участка"
      />
    </div>
  )
}

export default HouseWithoutLandplot