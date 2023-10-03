import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/economic_texts_translation.jpg";
import Description from "../../../components/Typography/Description";
import Ol from "./../../../components/Typography/Ol";
import Ul from "../../../components/Typography/Ul";
import TrDeadline from "../../../components/Translation/TrDeadline";
import Title2 from "../../../components/Typography/Title2";
import Title from "../../../components/Typography/Title";
import TranslationFromLang from "../../../components/TranslationTables/TranslationFromLang";
import TranslationToLang from "../../../components/TranslationTables/TranslationToLang";
import Discounts from "../../../components/TranslationTables/Discounts";
import OtherTypes from "../../../components/TranslationTables/OtherTypes";
import AdditionInfo from "../../../components/TranslationTables/AdditionInfo";

const EconomicTextsTranslation = () => {
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
            title: "Перевод экономических текстов",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Перевод экономических текстов и статей" />
      <Description>
        Экономическим переводом является перевод контрактов и соглашений
        различного рода, коммерческих предложений и запросов, деклараций и пр.
        На сегодняшний день потребность в таких переводах очень высока, так как
        экономическое сотрудничество между странами постоянно расширяется.{" "}
      </Description>
      <Description>
        Следует заметить, что финансово- экономический перевод выполняется
        специалистами, имеющими необходимые знания как по специальности
        лингвиста, так и экономиста.
      </Description>
      <Description>
        Наша компания выполняет перевод экономических статей и документов всех
        типов:
      </Description>
      <Ol>
        <li>Бизнес-планы;</li>
        <li>аналитические обзоры валютного и фондового рынков;</li>
        <li>технико-экономические прогнозы и обоснования;</li>
        <li>маркетинговые материалы;</li>
        <li>таможенные декларации.</li>
      </Ol>
      <Description>
        Одним из самых популярных направлений перевода в данной тематике
        является перевод с русского языка на английский и наоборот. Подобные
        переводы выполняются нашими специалистами качественно и достаточно
        быстро относительно стандартных сроков. Если у Вас мало времени и
        стандартные сроки не подойдут, мы можем подготовить перевод быстрее при
        наличии физической возможности. В этом случае услуга обойдется несколько
        дороже, но все условия заблаговременно обсуждаются с заказчиком.
      </Description>
      <Description>
        Если Вам необходимо получить не просто перевод, а перевод, заверенный
        нотариально, необходимо заказать его заранее, так как часто заверение
        требует определенного времени, сверх сроков подготовки самого перевода.
      </Description>
      <Description>
        Обращаясь в наше бюро переводов, Вы можете рассчитывать на качественный
        перевод, выполненный в приемлемые сроки, а также помощь в получении
        таких услуг, как нотариальное заверение, апостилирование и консульская
        легализация документов. Подробности Вы можете узнать в офисах компании.
      </Description>
      <Title2>Тематика:</Title2>
      <Ul>
        <li>Договоры, контракты;</li>
        <li>бизнес-планы;</li>
        <li>маркетинговые исследования;</li>
        <li>деловая корреспонденция;</li>
        <li>технико-экономические обоснования;</li>
        <li>любые виды экономического анализа.</li>
      </Ul>
      <TrDeadline />
      <Title>Стоимость перевода текста экономической тематики</Title>
      <TranslationFromLang />
      <TranslationToLang />
      <OtherTypes />
      <Discounts />
      <AdditionInfo />
    </div>
  );
};

export default EconomicTextsTranslation;
