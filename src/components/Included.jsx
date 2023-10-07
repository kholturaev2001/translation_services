import LiColored from "./Typography/LiColored";
import Title2 from "./Typography/Title2";

const Included = ({
  one = true,
  two = true,
  three = true,
  four = true,
  five = true,
}) => {
  return (
    <div>
      <Title2>В стоимость включено:</Title2>

      {one && <LiColored>ксерокопия документа;</LiColored>}
      {two && (
        <LiColored>перевод страниц с основными паспортными данными;</LiColored>
      )}
      {three && (
        <LiColored>
          при необходимости перевод страниц с пропиской, семейным положением и
          др.;
        </LiColored>
      )}
      {four && (
        <LiColored>
          для оформления гражданства и разрешения на работу мы снимаем копии со
          всех страниц паспорта;
        </LiColored>
      )}
      {five && <LiColored>нотариальное удостоверение перевода.</LiColored>}
    </div>
  );
};

export default Included;
