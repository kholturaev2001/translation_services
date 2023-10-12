import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/departure_of_child_consents_translation_and_notarization.jpg";
import Title from "../../../components/Typography/Title";
import Description from "../../../components/Typography/Description";
import Attention from "./../../../components/Attention";
import Included from "../../../components/Translation/Included";
import Title2 from "../../../components/Typography/Title2";
import LiColored from "../../../components/Typography/LiColored";
import DTable from "../../../components/DTable";
import DocDiscounts from "../../../components/TranslationTables/DocDiscounts";

const DepartureOfChildConsentsTranslationAndNotarization = () => {
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
            title: "Перевод и нотариальное заверение согласий на выезд ребенка",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Перевод и нотариальное заверение согласий на выезд ребенка"
      />
      <Title>Перевод и нотариальное заверение согласий на выезд ребенка</Title>
      <Description>
        Согласно российским законодательным нормам, ребенок до 18 лет имеет
        право выехать за пределы страны (например, при поездке в летний лагерь
        или для участия в спортивных соревнованиях, при выезде на отдых с
        родственниками, не являющимися родителями или опекунами ребенка) только
        в том случае, если на это дал разрешение каждый из родителей (независимо
        от того, в каких отношениях они состоят на данный момент). Обратите
        внимание, что согласно новым правилам выезда детей за границу, для
        выезда в сопровождении одного из родителей согласие на выезд не
        требуется.
      </Description>
      <Description>
        В посольство обязательно подается перевод согласия на выезд ребенка с
        нотариальным заверением. Для этого к оригиналу, нотариально заверенной
        копии или обычной ксерокопии документа должен быть подшит перевод,
        выполненный квалифицированным специалистом, заверенный подписью и
        печатью нотариуса. Для выезда в некоторые страны Вам также потребуется
        проставить на документ апостиль. Полный список необходимых документов и
        требований к ним желательно уточнять в посольстве страны, в которую Вы
        или Ваш ребенок собираетесь с поездкой. В нашем бюро переводов ООО АИС «Переводчик». Вы без труда сможете перевести как согласие, так и любые другие
        необходимые для выезда ребенка за границу документы (такие, как
        свидетельство о рождении) на любые необходимые вам языки, заверить его
        нотариально и проставить, при необходимости, апостиль.
      </Description>
      <Description>
        Срок выполнения перевода – один рабочий день, в случае необходимости
        имеется возможность заказать срочный перевод. Стоимость работы (включая
        нотариальное заверение перевода) – от 1000 рублей, в зависимости от
        языка перевода. Поскольку большая часть наших бюро переводов находится в
        непосредственной близости от нотариальной конторы, Вы можете получить
        как непосредственно согласие, так и его нотариальный перевод в одном
        месте и в сжатые сроки. Качество перевода гарантируется нашими
        специалистами.
      </Description>
      <Attention
        title=""
        desc="Для турагентств, а также компаний, занимающихся отправлением граждан за границу, у нас особые предложения. Мы будем рады Вашему звонку."
      />
      <Included />
      <Title2>Сроки</Title2>
      <LiColored>
        Стандартный срок перевода документа - 1 рабочий день.
      </LiColored>
      <LiColored>
        Если у нас небольшая занятость, мы можем сделать перевод быстрее без
        наценки за срочность.
      </LiColored>
      <LiColored>
        Позвоните заранее, и мы примем Вас без очереди, а Ваш заказ будет
        выполнен в самый короткий срок.
      </LiColored>
      <br />
      <Title>Стоимость перевода согласий на выезд ребенка</Title>
      <DTable
        dataSource={[
          {
            key: "1",
            language_name: "Английский",
            price: "от 1100",
          },
          {
            key: "2",
            language_name: "Языки стран Шенгенского соглашения",
            price: "от 1200",
          },
        ]}
        columns={[
          {
            dataIndex: "language_name",
            key: "language_name",
            title: "Перевод с нотариальнам заверением",
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
            language_name: "Английский",
            price: "от 600",
          },
          {
            key: "2",
            language_name: "Языки стран Шенгенского соглашения",
            price: "от 700",
          },
        ]}
        columns={[
          {
            dataIndex: "language_name",
            key: "language_name",
            title: "Перевод с заверением печатью бюро переводов",
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
            price: "от 600",
          },
          {
            key: "2",
            language_name:
              "Дополнительный экземпляр перевода, заверенного печатью бюро переводов	",
            price: "от 100",
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
      <DocDiscounts ten_value="700" twenty_value="600" />

      <Title2>
        Дополнительная информация об оформлении перевода согласия на выезд
        ребенка
      </Title2>
      <LiColored>
        Перевод можно подшить как к оригиналу, так и к ксерокопии документа.
      </LiColored>
      <LiColored>
        Мы можем подсказать Вам, для какого посольства требуется нотариальное
        удостоверение перевода, а для какого достаточно заверения печатью бюро
        переводов.
      </LiColored>
      <LiColored>
        Вместе с переводом мы можем сделать нотариальную копию с документа.
      </LiColored>
    </div>
  );
};

export default DepartureOfChildConsentsTranslationAndNotarization;
