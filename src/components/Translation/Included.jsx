import LiColored from "../Typography/LiColored";
import Title2 from "../Typography/Title2";

const Included = ({ one = true, two = true, three = true }) => {
  return (
    <div>
      <Title2>В стоимость включены:</Title2>

      {one && (
        <LiColored>
          ксерокопия документа (в случае, если перевод подшивается не к
          оригиналу документа);
        </LiColored>
      )}
      {two && <LiColored>перевод документа;</LiColored>}
      {three && (
        <LiColored>
          нотариальное удостоверение перевода, либо удостоверение печатью бюро
          переводов.
        </LiColored>
      )}
      <br />
    </div>
  );
};

export default Included;
