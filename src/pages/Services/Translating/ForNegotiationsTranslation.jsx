import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/for_negotiations_translation.jpeg";
import Description from "../../../components/Typography/Description";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import Title from "../../../components/Typography/Title";
import OralTranslation from "../../../components/TranslationTables/OralTranslation";
import DemandsOfService from "../../../components/TranslationTables/DemandsOfService";

const ForNegotiationsTranslation = () => {
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
            title: "Перевод на переговорах",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Перевод на переговорах" />

      <Description>
        Мы готовы предоставить услуги дипломированных специалистов-переводчиков
        на случай, если у Вас или Вашей компании планируются переговоры. Перевод
        на английский язык – наиболее распространенный для таких мероприятий
        формат, но по желанию заказчика перевод может быть осуществлен на любой
        язык.
      </Description>
      <Description>
        На подобных встречах, как правило, применяется устный последовательный
        перевод, расценки на который более демократичны по сравнению со
        стоимостью работы переводчика-синхрониста. Перевод телефонных
        переговоров также выполняется последовательно.
      </Description>
      <Description>
        Для того чтобы переводчик мог качественно выполнить свою работу,
        постарайтесь при оформлении заказа указать максимум информации о
        тематике встречи (юриспруденция, медицина, торговля, строительство и
        т.д.). Мы подберем переводчика, имеющего дополнительную специализацию и
        свободно ориентирующегося в данном вопросе.
      </Description>
      <Description>
        Все сотрудники нашего бюро уполномочены сохранять конфиденциальность и
        всегда придерживаются правил бизнес-этики. Для официального оформления
        документов у нотариуса, после или во время проведения переговоров, может
        понадобиться помощь дипломированного переводчика, бегло переводящего с
        листа.
      </Description>
      <Description>
        Подать заявку лучше за три-пять дней до запланированной встречи, а если
        переговоры будут вестись на языке редкой группы, то еще раньше.
      </Description>
      <Title2>Особенность:</Title2>
      <Ul>
        <li>последовательный перевод;</li>
        <li>бизнес-тематика;</li>
        <li>использование экономических терминов.</li>
      </Ul>
      <Title2>Требования к переводчику:</Title2>
      <Ul>
        <li>понимание экономических терминов;</li>
        <li>умение четко и быстро передать важную информацию;</li>
        <li>быстрое ориентирование в ситуации;</li>
        <li>опыт проведения и перевода деловых переговоров;</li>
        <li>деловой стиль одежды.</li>
      </Ul>
      <DemandsOfService />
      <Title>Стоимость услуги перевода</Title>
      <OralTranslation />
    </div>
  );
};

export default ForNegotiationsTranslation;
