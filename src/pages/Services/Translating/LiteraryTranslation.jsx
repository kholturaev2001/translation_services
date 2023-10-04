import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/literary_translation.jpg";
import Description from "../../../components/Typography/Description";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import TrDeadline from "../../../components/Translation/TrDeadline";
import Title from "../../../components/Typography/Title";
import TranslationFromLang from "../../../components/TranslationTables/TranslationFromLang";
import TranslationToLang from "../../../components/TranslationTables/TranslationToLang";
import OtherTypes from "../../../components/TranslationTables/OtherTypes";
import Discounts from "../../../components/TranslationTables/Discounts";
import AdditionInfo from "../../../components/TranslationTables/AdditionInfo";

const LiteraryTranslation = () => {
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
            title: "Художественный перевод",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Художественный перевод текста" />
      <Description>
        Перевод художественных текстов сложен тем, что текст оригинала, как
        правило, насыщен культурно-лингвистическими реалиями, которые довольно
        сложно передать при прямом переводе. Поэтому переводчик должен не только
        осуществить грамотную адаптацию текста для читателя перевода, но и
        обладать определенным литературным талантом для передачи особенностей
        стилистики текста оригинала. Текст перевода не должен быть сухим
        изложением содержания оригинала, он должен выполнять ту же сверхзадачу
        или оказывать такое же воздействие, что и оригинал. Именно к этому
        стремятся переводчики, работающие в нашем бюро.
      </Description>
      <Description>
        Где можно увидеть примеры художественного перевода? Это любые романы,
        эссе, рассказы, повести зарубежных писателей, которые издавались на
        русском языке.
      </Description>
      <Description>
        В бюро переводов «ПЕРЕВОДЧИК» клиент дополнительно может заказать
        перевод фильма, создание субтитров, общее описание сюжета. Стоимость
        услуги определяется индивидуально, как и сроки выполнения заказа. Если
        текст действительно небольшой, перевод может быть выполнен в день
        обращения, но, как правило, такой перевод занимает не один день.
        Подробную консультацию можно получить у наших специалистов.
      </Description>
      <Description>
        По желанию заказчика перевод художественной литературы может быть
        дополнительно отредактирован при участии носителя языка. Такая услуга
        поможет тем писателям, которые планируют публиковать свое произведение
        одновременно на нескольких языках в одном издании. Однако стоит учесть,
        что редактура перевода носителем языка занимает немало времени и не
        может быть дешевой. Тем не менее, все затраты в таких случаях оправданы,
        ведь Ваш текст будет максимально приближен к реалиям другой культуры.
      </Description>
      <Description>
        Если вы намерены заказать перевод книги в бюро переводов «Лингво
        Сервис», можете полностью нам довериться. Ведь за нашими плечами более 9
        лет успешной работы и сотни довольных сотрудничеством клиентов.
      </Description>
      <Description>
        Во сколько обойдется художественный перевод в Москве? Все зависит от
        размера текста, а также срочности выполнения заказа. В среднем возможная
        суточная нагрузка переводчиков нашей компании составляет около 8-9
        переводческих страниц (1800 знаков с пробелами). По желанию заказчика и
        при наличии физической возможности этот показатель можно увеличить за
        дополнительную плату. Такие моменты обсуждаются с заказчиком в
        индивидуальном порядке.
      </Description>
      <Title2>Тематика:</Title2>
      <Ul>
        <li>эссе, рассказы, повести;</li>
        <li>транскрипты фильмов.</li>
      </Ul>
      <TrDeadline />
      <Title>Стоимость перевода художественного текста</Title>
      <TranslationFromLang eu_langs="от 500" sng_langs="от 500" />
      <TranslationToLang
        east_langs="от 700"
        eu_langs="от 500"
        sng_langs="от 500"
      />
      <OtherTypes layout={false} />
      <Discounts threeRows={false} from_100="10%" from_50="5%" />
      <AdditionInfo second={false} fourth={false} fifth={false} />
    </div>
  );
};

export default LiteraryTranslation;
