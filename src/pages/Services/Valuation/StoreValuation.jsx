import { Breadcrumb } from "antd";
import ServiceCard from "../../../components/Card/ServiceCard";

const StoreValuation = () => {
  return (
    <div>
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
      StoreValuation
    </div>
  );
};

export default StoreValuation;
