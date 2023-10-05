import DTable from "../DTable";
import TableContainer from "../TableContainer";

const OralTranslation = ({
  four_hours = "от 11000",
  eight_hours = "от 19000",
  extra_hours = "от 2500",
  discountVal = "10%",
}) => {
  return (
    <TableContainer>
      <br />
      <DTable
        dataSource={[
          {
            key: "1",
            tr_in_negotiation: "Четыре часа",
            price: four_hours,
          },
          {
            key: "2",
            tr_in_negotiation: "Восемь часов",
            price: eight_hours,
          },
          {
            key: "3",
            tr_in_negotiation: "Переработка за один час",
            price: extra_hours,
          },
        ]}
        columns={[
          {
            dataIndex: "tr_in_negotiation",
            key: "tr_in_negotiation",
            title: "Устный перевод на переговорах",
          },
          {
            dataIndex: "price",
            key: "price",
            width: "25%",
            title: "Цена",
          },
        ]}
        bordered
      />
      <DTable
        dataSource={[
          {
            key: "1",
            discount_name: "Пять дней",
            percent: discountVal,
          },
        ]}
        columns={[
          {
            dataIndex: "discount_name",
            key: "discount_name",
            title: "Скидки",
          },
          {
            dataIndex: "percent",
            key: "percent",
            width: "25%",
            title: "Процент",
          },
        ]}
      />
    </TableContainer>
  );
};

export default OralTranslation;
