import ServiceCard from "../../../components/Card/ServiceCard"
import HeadBreadcrumb from "../../../components/HeadBreadcrumb"
import s_img from "../../../assets/images/services/valuation/house_with_landplot.jpeg";


const HouseWithLandplot = () => {
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
            title: "Дом с земельным участком",
          },
        ]}
      />

      <ServiceCard
        img={s_img}
        title="Оценка дома с земельным участком"
        price={7000}
        deadline="5 дней"
      />
    </div>
  )
}

export default HouseWithLandplot