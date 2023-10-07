import DTable from "../DTable";

const DocDiscounts = ({
  twenty_name = "Перевод от 20 документов",
  ten_name = "Перевод от 10 документов",
  twenty_value = "20%",
  ten_value = "10%",
}) => {
  return (
    <div>
      <DTable
        dataSource={[
          {
            key: "1",
            discount_name: twenty_name,
            price: twenty_value,
          },
          {
            key: "2",
            discount_name: ten_name,
            price: ten_value,
          },
        ]}
        columns={[
          {
            dataIndex: "discount_name",
            key: "discount_name",
            title: "Скидки",
          },
          {
            dataIndex: "price",
            key: "price",
            width: "25%",
            title: "Цена",
          },
        ]}
      />
    </div>
  );
};

export default DocDiscounts;
