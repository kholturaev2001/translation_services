import ServiceCard from "../../../components/Card/ServiceCard"
import HeadBreadcrumb from "../../../components/HeadBreadcrumb"
import s_img from "../../../assets/images/services/expertise/land_management_expert.jpeg";

const LandManagementExpert = () => {
  return (
    <div>
 <HeadBreadcrumb
        items={[
          {
            title: 'Главная'
          },
          {
            title: "Экспертиза",
          },
          {
            title: "Товароведческая",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 10 дней"
        price={25000}
        title="Товароведческая экспертиза"
      />
    </div>
  )
}

export default LandManagementExpert