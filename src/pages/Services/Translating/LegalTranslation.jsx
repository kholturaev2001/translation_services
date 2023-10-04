import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/legal_translation.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import TrDeadline from "../../../components/Translation/TrDeadline";
import TranslationFromLang from "../../../components/TranslationTables/TranslationFromLang";
import TranslationToLang from "../../../components/TranslationTables/TranslationToLang";
import OtherTypes from "../../../components/TranslationTables/OtherTypes";
import Discounts from "../../../components/TranslationTables/Discounts";
import AdditionInfo from "../../../components/TranslationTables/AdditionInfo";

const LegalTranslation = () => {
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
            title: "Юридический перевод",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Юридический перевод текста" />
      <Description>
        Перевод юридических документов – одна из самых сложных задач, которую
        бюро переводов ООО АИС «ПЕРЕВОДЧИК» способно выполнить максимально
        ответственно. Юридический перевод также является одним из приоритетных
        направлений деятельности компании. К нему относятся переводы судебных
        исков, решений, тендеров, разрешительной документации, договоров и
        соглашений и т.д.
      </Description>
      <Description>
        Минимальные смысловые искажения в переводе могут обернуться серьезными
        проблемами для Заказчика. Поэтому услугу юридического перевода следует
        заказывать исключительно в специализированных компаниях, имеющих
        необходимую квалификацию и опыт работы.
      </Description>
      <Description>
        Бюро юридического перевода ООО АИС «ПЕРЕВОДЧИК» предлагает не только
        профессиональный перевод, но и помощь в апостилировании/легализации того
        или иного документа. Особенности юридического перевода таковы, что
        перевод практически любого документа необходимо нотариально
        подтверждать, чтобы доказать его легитимность и соответствие оригиналу.
      </Description>
      <Description>
        Следует заметить, что перевод практически любого документа необходимо
        нотариально заверять для придания ему юридической силы.
      </Description>
      <Description>
        В любом офисе бюро переводов ООО АИС «ПЕРЕВОДЧИК» можно заказать
        юридический перевод с одним из двух видов заверения (нотариальное или
        печатью бюро). По запросу скан. копия документа может быть выслана по
        электронной почте. Любые организационные моменты нужно заранее обсуждать
        с менеджером офиса.
      </Description>
      <Title>Юридический перевод: сопутствующие услуги</Title>

      <Description>
        В бюро переводов ООО АИС «ПЕРЕВОДЧИК» можно сделать верстку перевода
        (схемы, графики, диаграммы). Если сложность верстки не высокая, то она
        выполняется бесплатно. Мы также помогаем правильно оформить двуязычный
        юридический перевод. На объемные заказы предоставляем скидки. Перевод
        юридических документов можем осуществить практически на все языки мира.
        Оговоренные сроки соблюдаем всегда. Для скорости выполнения юридического
        перевода существует норматив – min 8 переводческих страниц в день. Рядом
        с офисом бюро переводов ООО АИС «ПЕРЕВОДЧИК» находится нотариальная
        контора, поэтому мы можем делать нотариальный перевод документов в день
        обращения. Данное обстоятельство существенно сэкономит ваше время.
      </Description>
      <Description>
        О качестве услуг бюро переводов «ЛингвоСервис» свидетельствует наличие
        более 100 постоянных корпоративных клиентов. Все наши услуги
        предоставляются строго в оговоренные сроки.
      </Description>
      <Title2>Тематика:</Title2>
      <Ul>
        <li>Учредительные документы;</li>
        <li>Иски;</li>
        <li>Тендерная документация;</li>
        <li>Корпоративная документация;</li>
        <li>Договоры, соглашения;</li>
        <li>Разрешительная документация;</li>
        <li>Бизнес-планы.</li>
      </Ul>

      <TrDeadline />
      <Title>Стоимость перевода юридических документов и бумаг</Title>
      <TranslationFromLang />
      <TranslationToLang east_langs="от 700" />
      <OtherTypes />
      <Discounts />
      <AdditionInfo />
    </div>
  );
};

export default LegalTranslation;
