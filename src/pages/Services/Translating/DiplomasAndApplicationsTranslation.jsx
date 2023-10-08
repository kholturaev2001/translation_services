import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/diplomas_and_applications_translation.jpeg";
import Description from "../../../components/Typography/Description";
import Attention from "../../../components/Attention";
import Included from "../../../components/Translation/Included";
import PrivateDocsDeadline from "../../../components/Translation/PrivateDocsDeadline";
import Title2 from "../../../components/Typography/Title2";
import TranslationFromLang from "../../../components/TranslationTables/TranslationFromLang";
import DTable from "../../../components/DTable";
import DocDiscounts from "../../../components/TranslationTables/DocDiscounts";
import LiColored from "../../../components/Typography/LiColored";

const DiplomasAndApplicationsTranslation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Личные документы",
          },
          {
            title: "Перевод дипломов и приложений",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Перевод дипломов и приложений" />

      <Description>
        Чтобы студент имел возможность получить второе высшее образование
        заграницей, ему предстоит подать целый пакет документов в посольство.
        Аналогичная процедура выполняется в тех случаях, когда заявитель намерен
        легализировать свой диплом или любой другой документ о получении
        образования на территории другой страны. Обязательно при этом подается
        нотариальный перевод диплома в консульство с заявлением-прошением.
      </Description>
      <Description>
        Далее, выполняется перевод диплома с нотариальным заверением и
        проставлением апостиля (если это необходимо). Российский диплом
        признается без перевода только в странах СНГ, а также союзников РФ
        (Китай, Чехия, Корея и другие). Подробнее о необходимости проставлять
        апостиль и делать перевод диплома вы можете узнать у сотрудников «Лингво
        Сервис».
      </Description>
      <Description>
        Перевод приложения к диплому может выполняться только квалифицированным
        специалистом. Нотариус при этом заверяет либо сам перевод диплома, либо
        нотариально заверяет копию диплома (для дипломов, выданных в РФ).
      </Description>

      <Description>
        Сколько стоит перевод диплома и апостиль? Цена зависит непосредственно
        от объема переводимого документа, а также от необходимости простановки
        апостиля или легализации документа. Перевод диплома - от 1300 руб. (в
        зависимости от языка) / перевод приложения - от 2500 руб. (в зависимости
        от языка). Стоимость апостиля составляет 5000 рублей, а стоимость услуги
        легализации зависит от страны, в консульство которой будут подаваться
        документы. Стоит учитывать, что сроки апостилирования - в среднем 7
        рабочих дней (зависит от загруженности МинЮста, эпидемиологической и
        социально-политической ситуации). Более того, представитель бюро
        отправит заверенный перевод диплома в необходимую инстанцию и окажет
        всяческую юридическую помощь в подаче заявления.
      </Description>
      <Description>
        Если иностранец планирует посетить Россию для продолжения обучения или
        же получения гражданства/вида на жительство, ему также нужен перевод
        диплома на русский язык с последующим нотариальным заверением.
        Заграничный перевод диплома в Москве признается тогда, когда на нем
        проставлен апостиль. Бюро переводов «Лингво Сервис» поможет Вам сделать
        нотариально заверенный перевод и проставить апостиль на документы, если
        это необходимо.
      </Description>
      <Attention
        title=""
        desc="Для ВУЗов, а также студентов, подающих документы от одного ВУЗа, у нас специальное предложение. Мы будем рады Вашему звонку."
      />
      <Included />
      <PrivateDocsDeadline />
      <Title2>Стоимость перевода диплома</Title2>
      <TranslationFromLang
        baltic_langs="от 1200"
        sng_langs="от 1300"
        east_langs="от 1400"
        eu_langs="от 1500"
        title="Перевод диплома с нотариальнам заверением"
      />
      <TranslationFromLang
        eu_langs="от 2400"
        sng_langs="от 2100"
        baltic_langs="от 2200"
        east_langs="от 2300"
        title="Перевод приложения к диплому с нотариальнам заверением"
      />
      <TranslationFromLang
        eu_langs="от 900"
        sng_langs="от 1000"
        baltic_langs="от 1100"
        east_langs="от 1200"
        title="Перевод диплома с заверением печатью бюро переводов"
      />
      <TranslationFromLang
        eu_langs="от 1700"
        sng_langs="от 1800"
        baltic_langs="от 1900"
        east_langs="от 2000"
        title="Перевод приложения к диплому с заверением печатью бюро переводов"
      />

      <DTable
        dataSource={[
          {
            key: "1",
            language_name: "Одна страница	",
            price: "от 100",
          },
        ]}
        columns={[
          {
            dataIndex: "language_name",
            key: "language_name",
            title: "Нотариальная копия",
          },
          {
            dataIndex: "price",
            key: "price",
            width: "25%",
            title: "Цена",
          },
        ]}
        bordered
      />
      <DTable
        dataSource={[
          {
            key: "1",
            language_name:
              "Дополнительный экземпляр нотариально заверенного перевода	",
            price: "от 900",
          },
          {
            key: "2",
            language_name:
              "Дополнительный экземпляр перевода, заверенного печатью бюро переводов	",
            price: "от 200",
          },
          {
            key: "3",
            language_name: "Наценка за срочность",
            price: "25-50%",
          },
        ]}
        columns={[
          {
            dataIndex: "language_name",
            key: "language_name",
            title: "",
          },
          {
            dataIndex: "price",
            key: "price",
            width: "25%",
            title: "",
          },
        ]}
        bordered
      />
      <DocDiscounts ten_value="5%" twenty={false} />
      <br />
      <Title2>Дополнительная информация о переводе аттестата</Title2>
      <LiColored>
        Если Вы собираетесь делать нострификацию (признание) образовательных
        документов, мы подскажем, какие для этого требуются документы и поможем
        Вам их правильно перевести и оформить.
      </LiColored>
      <LiColored>
        Мы можем подсказать Вам, для какого посольства требуется нотариальное
        удостоверение перевода, а для какого достаточно заверения печатью бюро
        переводов.
      </LiColored>
      <LiColored>
        Вместе с переводом мы можем сделать нотариальную копию документа.
      </LiColored>
    </div>
  );
};

export default DiplomasAndApplicationsTranslation;
