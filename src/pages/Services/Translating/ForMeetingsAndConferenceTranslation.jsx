import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/for_meetings_and_conference_translation.jpg";
import ServiceCard from "../../../components/Card/ServiceCard";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import Title from "../../../components/Typography/Title";
import OralTranslation from "../../../components/TranslationTables/OralTranslation";
import DemandsOfService from "../../../components/TranslationTables/DemandsOfService";

const ForMeetingsAndConferenceTranslation = () => {
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
            title: "Перевод на собраниях, конференциях",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Переводческие услуги на собраниях, конференциях"
      />
      <Title2>Особенность:</Title2>
      <Ul>
        <li>Последовательный перевод;</li>
        <li>Бизнес-тематика;</li>
        <li>Использование экономических терминов;</li>
        <li>Перевод для группы людей.</li>
      </Ul>
      <Title2>Требования к переводчику:</Title2>
      <Ul>
        <li>Высокий уровень владения экономическими терминами;</li>
        <li>Специальная подготовка к переводу;</li>
        <li>Быстрое ориентирование в ситуации;</li>
        <li>Большой опыт перевода;</li>
        <li>Стрессоустойчивость;</li>
        <li>Деловой стиль одежды.</li>
      </Ul>
      <DemandsOfService />
      <Title>Стоимость</Title>
      <OralTranslation />
    </div>
  );
};

export default ForMeetingsAndConferenceTranslation;
