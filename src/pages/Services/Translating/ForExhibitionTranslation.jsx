import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/for_exhibition_translation.jpg";
import Ul from "../../../components/Typography/Ul";
import OralTranslation from "../../../components/TranslationTables/OralTranslation";
import Title from "../../../components/Typography/Title";
import Title2 from "../../../components/Typography/Title2";
import DemandsOfService from "../../../components/TranslationTables/DemandsOfService";

const ForExhibitionTranslation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Устный перевод",
          },
          {
            title: "Переводчик на выставку",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Услуги перевода на выставках" />
      <Title2>Особенность:</Title2>
      <Ul>
        <li>последовательный перевод;</li>
        <li>общая тематика;</li>
        <li>разговорный английский.</li>
      </Ul>
      <Title2>Требования к переводчику:</Title2>
      <Ul>
        <li>умение легко находить общий язык с посетителями;</li>
        <li>умение четко и быстро передать важную информацию;</li>
        <li>быстрое ориентирование в ситуации;</li>
        <li>опыт работы на выставках;</li>
        <li>презентабельная внешность.</li>
      </Ul>
      <DemandsOfService />

      <Title>Стоимость</Title>
      <OralTranslation />
    </div>
  );
};

export default ForExhibitionTranslation;
