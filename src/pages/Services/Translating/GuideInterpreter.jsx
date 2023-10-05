import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/guide_interpreter.jpg";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import DemandsOfService from "../../../components/TranslationTables/DemandsOfService";
import Title from "../../../components/Typography/Title";
import OralTranslation from "../../../components/TranslationTables/OralTranslation";

const GuideInterpreter = () => {
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
            title: "Гид-переводчик",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Услуга гида-переводчика" />
      <Title2>Особенность:</Title2>
      <Ul>
        <li>последовательный перевод;</li>
        <li>возможность предоставления своего транспорта;</li>
        <li>хорошее знание Москвы;</li>
        <li>возможность заранее заказать билеты;</li>
        <li>возможны переработки.</li>
      </Ul>
      <Title2>Требования к переводчику:</Title2>
      <Ul>
        <li>хорошее знание Москвы;</li>
        <li>коммуникабельность;</li>
        <li>возможно, наличие своего транспорта.</li>
      </Ul>
      <DemandsOfService />
      <Title>Стоимость</Title>
      <OralTranslation four_hours='от 15000' eight_hours="от 27000" />
    </div>
  );
};

export default GuideInterpreter;
