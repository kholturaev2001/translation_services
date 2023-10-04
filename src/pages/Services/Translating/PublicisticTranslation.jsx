import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/publicistic_translation.jpg";
import Description from "../../../components/Typography/Description";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import TrDeadline from "../../../components/Translation/TrDeadline";
import TranslationFromLang from "../../../components/TranslationTables/TranslationFromLang";
import Title from "../../../components/Typography/Title";
import TranslationToLang from "../../../components/TranslationTables/TranslationToLang";
import OtherTypes from "../../../components/TranslationTables/OtherTypes";
import Discounts from "../../../components/TranslationTables/Discounts";
import AdditionInfo from "../../../components/TranslationTables/AdditionInfo";

const PublicisticTranslation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Письменный перевод",
          },
          {
            title: "Публицистический перевод",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Публицистический перевод" />
      <Description>
        Публицистику можно отнести к особой разновидности литературного
        творчества. Авторы, работающие в публицистическом жанре, обычно
        высказываются по наиболее актуальным проблемам общественной и
        политической жизни.
      </Description>
      <Description>
        Труды многих публицистов получают широкое распространение благодаря
        работе переводчиков. Взгляды, идеи, представления по поводу той или ной
        проблемы реализуются в книгах, которые издаются на многих языках мира.
      </Description>
      <Description>
        Особенность перевода публицистических текстов заключается в их адаптации
        для носителей другого языка. Критерием успешного перевода будет
        максимальная понятность и передача содержания.
      </Description>
      <Description>
        Где в Москве можно заказать услугу по публицистическому переводу?
        Надежнее всего обратиться в бюро переводов ООО АИС «ПЕРЕВОДЧИК». У нас
        также можно заказать срочный перевод или корректуру уже существующего
        перевода.
      </Description>
      <Title2>Тематика:</Title2>
      <Ul>
        <li>эссе, рассказы, повести;</li>
        <li>статьи;</li>
        <li>доклады;</li>
        <li>презентации;</li>
        <li>новостные сводки;</li>
        <li>информационные сообщения;</li>
        <li>пресс-релизы.</li>
      </Ul>
      <TrDeadline />
      <Title>Стоимость перевода публицистических текстов</Title>
      <TranslationFromLang eu_langs="от 400" sng_langs="от 400" />
      <TranslationToLang
        east_langs="от 700"
        eu_langs="от 400"
        sng_langs="от 400"
      />
      <OtherTypes layout={false} />
      <Discounts threeRows={false} from_100="10%" from_50="5%" />
      <AdditionInfo second={false} fourth={false} fifth={false} />
    </div>
  );
};

export default PublicisticTranslation;
