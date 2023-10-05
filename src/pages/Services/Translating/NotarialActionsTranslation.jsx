import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/notarial_actions_translation.jpg";
import Description from "../../../components/Typography/Description";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import Title from "../../../components/Typography/Title";
import OralTranslation from "../../../components/TranslationTables/OralTranslation";
import DemandsOfService from "../../../components/TranslationTables/DemandsOfService";

const NotarialActionsTranslation = () => {
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
            title: "Перевод при нотариальных действиях",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Перевод при нотариальных действиях" />
      <Description>
        При заключении официальных сделок у нотариуса, взаимодействии с органами
        полиции, прокуратуры, в судах и учреждениях исполнительной власти
        присутствие дипломированного переводчика обязательно, если любые из
        вышеперечисленных действий происходят с участием нерезидента, не
        владеющего русским языком.
      </Description>
      <Description>
        Наше бюро переводов готово предоставить услуги дипломированного
        переводчика-лингвиста, чья квалификация подтверждена официально. И
        перевод при нотариальных действиях (оформление доверенностей, заключение
        контрактов, подписание договоров дарения и купли-продажи, уставных
        документов и т.д.), и перевод-сопровождение в судах и других органах
        власти относятся к последовательному устному переводу и тарифицируются
        соответственно.
      </Description>
      <Description>
        Расценки на такой вид услуг зависят от продолжительности работы
        специалиста, рабочего языка и наличия или отсутствия дополнительных
        требований и пожеланий заказчика.
      </Description>
      <Description>
        При оформлении услуги необходимо указать, кроме места и времени
        проведения мероприятия, тематику перевода (например, материалы судебной
        тяжбы или проект нотариального соглашения), а также сообщить, какие
        личные документы переводчик должен иметь при себе (по процессуальным
        требованиям той или иной организации).
      </Description>

      <Title2>Особенность:</Title2>
      <Ul>
        <li>юридическая тематика;</li>
        <li>перевод с листа;</li>
        <li>требуется подготовка к переводу;</li>
        <li>почасовая оплата.</li>
      </Ul>
      <Title2>Требования к переводчику:</Title2>
      <Ul>
        <li>высшее лингвистическое образование;</li>
        <li>умение быстро и точно передавать все детали;</li>
        <li>деловой вид.</li>
      </Ul>
      <DemandsOfService />
      <Title>Стоимость</Title>
      <OralTranslation />
    </div>
  );
};

export default NotarialActionsTranslation;
