import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/specific_translation.jpg";
import Description from "../../../components/Typography/Description";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import DemandsOfService from "../../../components/TranslationTables/DemandsOfService";
import OralTranslation from "../../../components/TranslationTables/OralTranslation";

const SpecificTranslation = () => {
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
            title: "Специфический перевод",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Специфический синхронный перевод" />
      <Description>
        В деловой и повседневной деятельности как компании, так и частные лица
        сталкиваются с необходимостью расшифровки видео- и аудионосителей с их
        последующим переводом. Такой нестандартный синхронный перевод необходим
        во время проведения интерактивных шоу, телемостов, различных конференций
        и круглых столов.
      </Description>
      <Description>
        Синхронный перевод зачастую востребован при работе с рекламными
        онлайн-материалами, создании аудиокниг и обучающих программ, для
        проведения открытых судебных заседаний, тренингов и интернет-семинаров.
      </Description>
      <Description>
        Специалисты нашего бюро выполняют синхронный перевод фильмов, перевод
        контента сайта компании (включая базы данных, публикации, инструкции,
        каталоги и т д.), осуществляют расшифровку исходного видео- и
        аудиоматериала и предоставляют его перевод в том виде, который нужен
        заказчику (письменный, устный, синхронный перевод на русский язык).
      </Description>
      <Description>
        К работе с нестандартными переводами мы привлекаем только лучших
        специалистов, отлично зарекомендовавших себя в практическом выполнении
        заказов, требующих знания современных технологий.
      </Description>
      <Description>
        Зачастую работа с видео- и аудиоматериалами сочетает в себе особенности
        синхронного перевода с особенностями узкоспециального письменного
        перевода, а также во многом зависит от качества используемой аппаратуры.
        В любом случае, заказывая специфический перевод у нас, Вы гарантированно
        получаете сервис высокого качества.
      </Description>
      <Title2>Особенность:</Title2>
      <Ul>
        <li>высокая сложность;</li>
        <li>минимальный срок заказа 4 часа;</li>
        <li>требуется специальное оборудование.</li>
      </Ul>
      <Title2>Требования к переводчику:</Title2>
      <Ul>
        <li>очень большой опыт работы;</li>
        <li>длительная подготовка к переводу;</li>
        <li>знание современных технологий.</li>
      </Ul>
      <DemandsOfService />
      <OralTranslation four_hours="от 11000" eight_hours="от 19000" />
    </div>
  );
};

export default SpecificTranslation;
