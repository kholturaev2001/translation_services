import ServiceCard from "../../../components/Card/ServiceCard"
import HeadBreadcrumb from "../../../components/HeadBreadcrumb"
import s_img from "../../../assets/images/services/valuation/mansion.jpeg";

const Mansion = () => {
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
            title: "Особняк",
          },
        ]}
      />

      <ServiceCard
        img={s_img}
        title="Оценка особняка"
      />
    </div>
  )
}

export default Mansion