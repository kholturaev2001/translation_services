import { Breadcrumb } from "antd";

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
      StoreValuation
    </div>
  );
};

export default StoreValuation;
