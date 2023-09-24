import DTable from "../DTable";
import TableContainer from "../TableContainer";

const Discounts = ({
  threeRows = true,
  from_100 = "15%",
  from_50 = "10%",
  from_20 = "5%",
}) => {
  const content = threeRows ? (
    <TableContainer>
      <br />
      <DTable
        dataSource={[
          {
            key: "1",
            discount_name: "от 100 страниц",
            percent: from_100,
          },
          {
            key: "2",
            discount_name: "от 50 страниц",
            percent: from_50,
          },
          {
            key: "3",
            discount_name: "от 20 страниц",
            percent: from_20,
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
  ) : (
    <TableContainer>
      <br />
      <DTable
        dataSource={[
          {
            key: "1",
            discount_name: "от 100 страниц",
            percent: from_100,
          },
          {
            key: "2",
            discount_name: "от 50 страниц",
            percent: from_50,
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
  return content;
};

export default Discounts;
