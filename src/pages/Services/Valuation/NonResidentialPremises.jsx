import ServiceCard from "../../../components/Card/ServiceCard";
import s_img from "../../../assets/images/services/valuation/non_residential_premises.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import LiColored from "../../../components/Typography/LiColored";

const NonResidentialPremises = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Недвижимость",
          },
          {
            title: "Коммерческая",
          },
          {
            title: "Нежилое помещение",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка нежилого помещения"
        price={15000}
      />
      <Description>
        Под нежилыми помещениями понимаются объекты недвижимости, которые не
        предназначены для проживания, но используются для других целей:
        хранения, производства, офисной работы, торговли, развлечений и др.
        Услуга их оценки столь же популярна, как и оценка жилой недвижимости.
        Наши независимые оценщики работают с оценкой нежилых помещений много
        лет.
      </Description>
      <Title>Наши преимущества</Title>
      <LiColored>
        Проведение оценки по всем требованиям законов в области оценочной
        деятельности;
      </LiColored>
      <LiColored>
        Составление грамотного отчета об оценке, которые будет без нареканий
        принят инстанциями в качестве серьезного официального документа. Наши
        отчеты соответствуют всем стандартам. Если акт заказан для представления
        в банк, то оценщики соблюдают и требования конкретного банка к
        содержанию и оформлению документа;
      </LiColored>
      <LiColored>
        Профессиональный подход к оценке даже сложных объектов.
      </LiColored>
      <LiColored>14 лет - средний стаж наших оценщиков;</LiColored>
      <LiColored>
        Все оценщики компании состоят в крупнейших профессиональных ассоциациях
        (СРО).
      </LiColored>
      <Description>
        Заказчиками услуги оценки нежилой недвижимости могут стать как
        собственники, так и арендаторы.
      </Description>
      <Title>Стоимость оценки нежилого помещения
</Title>
    </div>
  );
};

export default NonResidentialPremises;
