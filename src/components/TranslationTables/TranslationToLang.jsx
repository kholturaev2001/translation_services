import DTable from "../DTable";
import TableContainer from "../TableContainer";

const TranslationToLang = ({
  eu_langs = "от 450",
  sng_langs = "от 450",
  baltic_langs = "от 500",
  easy_langs = "от 600",
}) => {
  return (
    <TableContainer>
      <br />
      <DTable
        dataSource={[
          {
            key: "1",
            language_name: "Европейские языки",
            price: eu_langs,
          },
          {
            key: "2",
            language_name: "Языки СНГ",
            price: sng_langs,
          },
          {
            key: "3",
            language_name: "Балтийские языки",
            price: baltic_langs,
          },
          {
            key: "4",
            language_name: "Восточные языки",
            price: easy_langs,
          },
        ]}
        columns={[
          {
            dataIndex: "language_name",
            key: "language_name",
            title: "Перевод на язык",
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
    </TableContainer>
  );
};

export default TranslationToLang;
