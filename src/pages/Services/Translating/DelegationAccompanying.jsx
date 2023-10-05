import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/delegation_accompanying.jpg";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import OralTranslation from "../../../components/TranslationTables/OralTranslation";
import DemandsOfService from "../../../components/TranslationTables/DemandsOfService";

const DelegationAccompanying = () => {
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
            title: "Сопровождение делегации",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Сопровождение делегации переводчиками" />
      <Description>
        Деловые встречи, проведение переговоров, заключение сделок все чаще
        проходят с участием представителей зарубежных фирм. Неудивительно, что
        сопровождение делегации партнеров профессиональным переводчиком стало
        неотъемлемой частью деловой этики отечественных компаний, расширяющих
        свой бизнес за пределами нашей страны.
      </Description>
      <Description>
        Услуги сопровождения перевода могут начинаться прямо у трапа самолета,
        ведь уже в аэропорту иностранные гости начинают общаться с нашими
        соотечественниками. Переводчик помогает в заполнении документов, поиске
        той или иной необходимой информации, в течение всего дня сопровождает
        иностранных гостей, выполняя перевод на английский или любой другой
        язык, таким образом делая возможным свободное общение деловых партнеров.
      </Description>
      <Description>
        Для сопровождения иностранных гостей привлекаются опытные переводчики,
        имеющие широкий кругозор, соблюдающие деловой этикет и политику
        конфиденциальности. Цель сопровождения делегации – перевод, но это также
        создание тёплых доверительных партнёрских отношений между Вами и Вашими
        гостями, поскольку комфортное пребывание в стране способствует успешной
        реализации запланированных мероприятий.
      </Description>
      <Description>
        Если позволяет время, мы также можем предоставить к услугам иностранной
        делегации гида-переводчика, который проведет экскурсию и познакомит
        Ваших гостей с местными достопримечательностями.
      </Description>
      <Title2>Особенность:</Title2>
      <Ul>
        <li>последовательный перевод;</li>
        <li>множество встреч;</li>
        <li>разнообразные тематики;</li>
        <li>большая вероятность переработки.</li>
      </Ul>
      <Title2>Требования к переводчику:</Title2>
      <Ul>
        <li>умение четко и быстро передать важную информацию;</li>
        <li>коммуникабельность;</li>
        <li>деловой вид.</li>
      </Ul>
     <DemandsOfService />
      <Title>Стоимость</Title>
      <OralTranslation />
    </div>
  );
};

export default DelegationAccompanying;
