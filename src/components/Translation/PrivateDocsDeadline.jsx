import LiColored from "../Typography/LiColored";
import Title2 from "../Typography/Title2";

const PrivateDocsDeadline = ({
  days = "1 рабочий день",
  one = true,
  two = true,
  three = true,
  four = false,
}) => {
  return (
    <div>
      <Title2>Сроки:</Title2>
      {one && (
        <LiColored>Стандартный срок перевода документа - {days}.</LiColored>
      )}
      {two && (
        <LiColored>
          Если у нас небольшая занятость, мы можем сделать перевод быстрее без
          наценки за срочность.
        </LiColored>
      )}
      {three && (
        <LiColored>
          Позвоните заранее, и мы примем Вас без очереди, а Ваш заказ будет
          выполнен в самый короткий срок.
        </LiColored>
      )}
      {four && (
        <LiColored>
          Позвоните заранее, обсудите с менеджером детали заказа. Сэкономьте
          время на размещении.
        </LiColored>
      )}
      <br />
    </div>
  );
};

export default PrivateDocsDeadline;
