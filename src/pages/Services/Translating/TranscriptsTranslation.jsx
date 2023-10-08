import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/transcripts_translation.jpg";
import Description from "../../../components/Typography/Description";
import Attention from "../../../components/Attention";
import Included from "../../../components/Translation/Included";
import PrivateDocsDeadline from "../../../components/Translation/PrivateDocsDeadline";
import Title from "../../../components/Typography/Title";
import DTable from "../../../components/DTable";
import DocDiscounts from "../../../components/TranslationTables/DocDiscounts";
import Title2 from "../../../components/Typography/Title2";
import LiColored from "../../../components/Typography/LiColored";

const TranscriptsTranslation = () => {
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
            title: "Перевод зачетных книжек",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Перевод зачетных книжек" />
      <Description>
        Жителям многих стран мира, в том числе и гражданам России, открываются
        невиданные ранее возможности получать образование и черпать знания в
        образовательных учреждениях, находящихся в самых разных уголках нашей
        планеты. Однако для успешного перевода в иностранный университет или
        колледж или краткосрочной стажировки за границей необходимо собрать
        определенный пакет документов, который чаще всего включает перевод
        зачетной книжки на целевой язык.
      </Description>
      <Description>
        И вот, представим ситуацию, что Вам необходимо перевести свою зачетную
        книжку на английский язык и произвести нотариальное заверение перевода
        Вашего документа. Вероятнее всего, Вы решите обратиться в какое-нибудь
        бюро переводов, причем обязательно обратите внимание чтобы это бюро
        выполняло нотариальные переводы. Казалось бы, миссия выполнена.
      </Description>
      <Description>
        Однако выполнение лишь этих требований не даст Вам гарантию получения
        перевода в таком виде, в каком Вы его представляете. Дело в том, что
        зачетные книжки включают в себя большое количество образовательных
        терминов, часто не имеющих точных аналогов в иностранных образовательных
        системах. И тут дело сводится к профессионализму, опытности и
        внимательности самих переводчиков.
      </Description>
      <Description>
        Сделать так, чтобы точно отразить успеваемость студента и произвести
        нужное впечатление, не полениться сверить правильное написание названий
        образовательных учреждений и не упустить их традиционное обозначение –
        все это является частью обязанностей и необходимым навыком специалистов,
        работающих в бюро переводов ООО АИС «ПЕРЕВОДЧИК».
      </Description>
      <Description>
        Более того, оформление готового перевода – это фактор, который может
        сыграть не меньшую роль при подаче документов. Наличие у бюро переводов
        широкой базы образцов переводов зачетных книжек с и на разные языки
        станет гарантом эстетического оформления перевода, оперативных сроков
        подготовки документа и, в конечном счете, удовлетворения Ваших
        требований.
      </Description>

      <Description>
        Доверяйте Ваши переводы надежному бюро переводов, которое подтвердило
        свой профессионализм многолетней практикой перевода документов. Бюро
        переводов ООО АИС «ПЕРЕВОДЧИК» радо поделиться с Вами своим опытом и
        подарить Вам an upper hand в Ваших будущих учебных начинаниях.
      </Description>
      <Attention
        title=""
        desc="Внимание: для ВУЗов, а также студентов, подающих документы от одного ВУЗа, у нас специальное предложение. Мы будем рады Вашему звонку."
      />
      <Included />
      <PrivateDocsDeadline />
      <Title>Стоимость перевода зачетной книжки</Title>

      <DTable
        dataSource={[
          {
            key: "1",
            language_name: "Европейские языки",
            price: "от 900",
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
            language_name: "Европейские языки",
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
            title: "",
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
            price: "от 300",
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
      <DocDiscounts twenty={false} />
      <br />
      <Title2>Дополнительная информация:</Title2>
      <LiColored>
        Мы можем подсказать Вам, для какого посольства требуется нотариальное
        удостоверение перевода, а для какого подойдет заверение печатью бюро
        переводов.
      </LiColored>
      <LiColored>
        Вместе с переводом мы можем сделать нотариальную копию с документа.
      </LiColored>
      <LiColored>
        Зачетная книжка заполняется от руки, поэтому мы не всегда можем
        разобрать записи в ней. Мы будем Вам очень благодарны, если Вы заранее
        сделаете расшифровку непонятных записей.
      </LiColored>
    </div>
  );
};

export default TranscriptsTranslation;
