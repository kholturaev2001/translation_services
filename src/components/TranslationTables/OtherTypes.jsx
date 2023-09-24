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
  
    var content;

//   if (translationEdit && nativeTranslationEdit && urgent && layout) {
//     content = <TableContainer>
//         <br />
//         <DTable
//           dataSource={[
//             {
//               key: "1",
//               service_name: "Редактура перевода",
//               price: "от 50%",
//             },
//             {
//               key: "2",
//               service_name: "Наценка за срочность",
//               price: "от 70%",
//             },
//             {
//               key: "3",
//               service_name: "Верстка",
//               price: "25-50%",
//             },
//           ]}
//           columns={[
//             {
//               dataIndex: "service_name",
//               key: "service_name",
//             },
//             {
//               dataIndex: "price",
//               key: "price",
//               width: "25%",
//             },
//           ]}
//           bordered
//           showHeader={false}
//         />
//     </TableContainer>
//   } else if 
    return <TableContainer></TableContainer>;
};

export default OtherTypes;
