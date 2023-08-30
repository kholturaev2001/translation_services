import ServiceCard from "../../../components/Card/ServiceCard"
import HeadBreadcrumb from "../../../components/HeadBreadcrumb"
import s_img from "../../../assets/images/services/valuation/cost_of_inseparable_improvements.jpeg";

const CostOfInseparableImprovements = () => {
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
            title: "Определение стоимости неотделимых улучшений",
          },
        ]}
      />

      <ServiceCard img={s_img} title="Определение стоимости неотделимых улучшений" />
      
    </div>
  )
}

export default CostOfInseparableImprovements