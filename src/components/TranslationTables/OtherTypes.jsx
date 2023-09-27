import DTable from "../DTable";
import TableContainer from "../TableContainer";

const OtherTypes = ({
  translationEdit = true,
  nativeTranslationEdit = true,
  urgent = true,
  layout = true,
  translationEditVal = "от 50%",
  nativeTranslationEditVal = "от 70%",
  urgentVal = "25-50%",
  layoutVal = "5-10%",
}) => {
  var dataSourceValue;

  if (translationEdit && nativeTranslationEdit && urgent && layout) {
    dataSourceValue = [
      {
        key: "1",
        service_name: "Редактура перевода",
        price: translationEditVal,
      },
      {
        key: "2",
        service_name: "Редактура перевода носителем",
        price: nativeTranslationEditVal,
      },
      {
        key: "3",
        service_name: "Наценка за срочность",
        price: urgentVal,
      },
      {
        key: "4",
        service_name: "Верстка",
        price: layoutVal,
      },
    ];
  } else if (!translationEdit && nativeTranslationEdit && urgent && layout) {
    dataSourceValue = [
      {
        key: "2",
        service_name: "Редактура перевода носителем",
        price: nativeTranslationEditVal,
      },
      {
        key: "3",
        service_name: "Наценка за срочность",
        price: urgentVal,
      },
      {
        key: "4",
        service_name: "Верстка",
        price: layoutVal,
      },
    ];
  } else if (translationEdit && !nativeTranslationEdit && urgent && layout) {
    dataSourceValue = [
      {
        key: "1",
        service_name: "Редактура перевода",
        price: translationEditVal,
      },
      {
        key: "3",
        service_name: "Наценка за срочность",
        price: urgentVal,
      },
      {
        key: "4",
        service_name: "Верстка",
        price: layoutVal,
      },
    ];
  } else if (translationEdit && nativeTranslationEdit && !urgent && layout) {
    dataSourceValue = [
      {
        key: "1",
        service_name: "Редактура перевода",
        price: translationEditVal,
      },
      {
        key: "2",
        service_name: "Редактура перевода носителем",
        price: nativeTranslationEditVal,
      },
      {
        key: "4",
        service_name: "Верстка",
        price: layoutVal,
      },
    ];
  } else if (translationEdit && nativeTranslationEdit && urgent && !layout) {
    dataSourceValue = [
      {
        key: "1",
        service_name: "Редактура перевода",
        price: translationEditVal,
      },
      {
        key: "2",
        service_name: "Редактура перевода носителем",
        price: nativeTranslationEditVal,
      },
      {
        key: "3",
        service_name: "Наценка за срочность",
        price: urgentVal,
      },
    ];
  } else if (!translationEdit && !nativeTranslationEdit && urgent && layout) {
    dataSourceValue = [
      {
        key: "3",
        service_name: "Наценка за срочность",
        price: urgentVal,
      },
      {
        key: "4",
        service_name: "Верстка",
        price: layoutVal,
      },
    ];
  } else if (!translationEdit && nativeTranslationEdit && !urgent && layout) {
    dataSourceValue = [
      {
        key: "2",
        service_name: "Редактура перевода носителем",
        price: nativeTranslationEditVal,
      },
      {
        key: "4",
        service_name: "Верстка",
        price: layoutVal,
      },
    ];
  } else if (!translationEdit && nativeTranslationEdit && urgent && !layout) {
    dataSourceValue = [
      {
        key: "2",
        service_name: "Редактура перевода носителем",
        price: nativeTranslationEditVal,
      },
      {
        key: "3",
        service_name: "Наценка за срочность",
        price: urgentVal,
      },
    ];
  } else if (translationEdit && !nativeTranslationEdit && !urgent && layout) {
    dataSourceValue = [
      {
        key: "1",
        service_name: "Редактура перевода",
        price: translationEditVal,
      },
      {
        key: "4",
        service_name: "Верстка",
        price: layoutVal,
      },
    ];
  } else if (translationEdit && !nativeTranslationEdit && urgent && !layout) {
    dataSourceValue = [
      {
        key: "1",
        service_name: "Редактура перевода",
        price: translationEditVal,
      },
      {
        key: "3",
        service_name: "Наценка за срочность",
        price: urgentVal,
      },
    ];
  } else {
    // } else if (translationEdit && nativeTranslationEdit && !urgent && !layout) {
    dataSourceValue = [
      {
        key: "1",
        service_name: "Редактура перевода",
        price: translationEditVal,
      },
      {
        key: "2",
        service_name: "Редактура перевода носителем",
        price: nativeTranslationEditVal,
      },
    ];
  }
  return (
    <TableContainer>
      <br />
      <DTable
        dataSource={dataSourceValue}
        columns={[
          {
            dataIndex: "service_name",
            key: "service_name",
          },
          {
            dataIndex: "price",
            key: "price",
            width: "25%",
          },
        ]}
        bordered
        showHeader={false}
      />
    </TableContainer>
  );
};

export default OtherTypes;
