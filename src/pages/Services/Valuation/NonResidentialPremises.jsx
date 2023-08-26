import { Breadcrumb } from "antd";
import ServiceCard from "../../../components/Card/ServiceCard";
import s_img from "../../../assets/images/services/valuation/non_residential_premises.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";

const NonResidentialPremises = () => {
  return (
    <div>
      <Breadcrumb
        separator=">"
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
        className="m-auto pb-4"
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
    </div>
  );
};

export default NonResidentialPremises;
