import { Breadcrumb } from "antd";
import ServiceCard from "../../../components/Card/ServiceCard";
import s_img from "../../../assets/images/services/valuation/store.jpg";
import Title from "../../../components/Title";

const StoreValuation = () => {
  return (
    <div className="">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Недвижимость",
          },
          {
            title: "Коммерческая",
          },
          {
            title: "Склад",
          },
        ]}
        className="m-auto pb-4"
      />
      <ServiceCard />
      <Title>Наши преимущества</Title>
    </div>
  );
};

export default StoreValuation;
