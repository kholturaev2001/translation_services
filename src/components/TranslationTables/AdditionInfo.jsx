import LiColored from "../Typography/LiColored"
import Title2 from "../Typography/Title2"

const AdditionInfo = () => {
  return (
    <div>
        <Title2>Дополнительная информация о переводе:</Title2>
        <LiColored>
          По желанию перевод может быть отредактирован и вычитан
          квалифицированным носителем языка;
        </LiColored>
        <LiColored>
          Мы можем выполнить форматирование и верстку переведенного документа,
          например, сделать перевод надписей схем и диаграмм;
        </LiColored>
        <LiColored>
          Если у Вас уже есть перевод, но Вы сомневаетесь в его качестве, мы
          можем его отредактировать;
        </LiColored>
        <LiColored>Если верстка документа несложная, мы сделаем её бесплатно;</LiColored>
        <LiColored>Мы бесплатно поможем оформить перевод в двуязычном виде.</LiColored>
   
    </div>
  )
}

export default AdditionInfo