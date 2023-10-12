import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/certificates_and_applications_translation.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import Attention from "../../../components/Attention";
import Included from "../../../components/Translation/Included";
import PrivateDocsDeadline from "../../../components/Translation/PrivateDocsDeadline";
import TranslationFromLang from "../../../components/TranslationTables/TranslationFromLang";
import DTable from "../../../components/DTable";
import DocDiscounts from "../../../components/TranslationTables/DocDiscounts";
import Title2 from "../../../components/Typography/Title2";
import LiColored from "../../../components/Typography/LiColored";

const CertificatesAndApplicationsTranslation = () => {
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
            title: "Перевод аттестатов и приложений",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Перевод аттестатов и приложений" />
      <Description>
        Бюро переводов ООО АИС «ПЕРЕВЕДЧИК» осуществит перевод аттестата на
        английский язык, немецкий язык и на любые другие языки мира. Мы
        переводим аттестаты с приложениями (вкладышами). Действует специальное
        предложение для студентов и абитуриентов (подробности уточняйте у наших
        специалистов)!
      </Description>
      <Description>
        Для некоторых посольств требуется перевод аттестата с нотариальным
        заверением, в других случаях - с печатью бюро переводов. Мы подскажем
        вам, какое заверение требуется для Вашего посольства. Мы оказываем
        помощь в проведении нотариального заверения. Перевод более 10 документов
        предусматривает скидку. Мы переведем Ваш аттестат за 1 рабочий день.
        Также мы оказываем услуги по переводу дипломов и помогаем подготовить
        документы для подачи на нострификацию.
      </Description>
      <Description>
        Наши специалисты предельно внимательны к каждому документу, поэтому нам
        доверились более 50 корпоративных клиентов. Ваш аттестат о среднем
        образовании будет оформлен качественно и в оговоренный срок.
      </Description>
      <Title>Перевод документов об образовании</Title>
      <Description>
        Если гражданин РФ намерен в дальнейшем получить образование за рубежом,
        ему в обязательном порядке нужно получить студенческую визу. Она дает
        право въезда в иностранное государство. При этом в посольство подается
        перевод школьного аттестата, нотариально заверенная копия паспорта или
        свидетельства о рождении, разрешение от родителей на выезд из страны
        (для несовершеннолетних).
      </Description>
      <Description>
        Выполняется перевод аттестата только специализированным переводчиком,
        имеющим соответствующий сертификат. Компания Lingvo Service занимается
        предоставлением услуг по подготовке документов для последующей их подачи
        в посольство и консульство.
      </Description>
      <Description>
        Во сколько в среднем обходится перевод аттестата на английский? Примерно
        в 2-3 тысяч рублей. В стоимость включены все услуги по юридическому
        сопровождению, переводу и подаче документов в необходимую инстанцию.
      </Description>
      <Description>
        Как долго выполняется перевод аттестата о среднем образовании? Порядка
        1-2 рабочих дней, но клиент может заказать и срочную услугу за
        дополнительную плату. В этом случае стоимость и условия индивидуально
        обсуждаются с заказчиком.
      </Description>
      <Description>
        Кстати, перевод аттестата на русский выполняется быстрее (для
        легализации иностранных документов), но в некоторых случаях
        дополнительно требуется проставить апостиль или пройти процедуру
        косульской легализации документов. Следует заблаговременно учитывать
        подобные аспекты, а лучше – обращаться напрямую к представителям
        компании ООО АИС «Переводчик».
      </Description>
      <Attention
        title=""
        desc="Внимание: для ВУЗов, а также студентов, подающих документы от одного ВУЗа, у нас специальное предложение. Мы будем рады Вашему звонку."
      />
      <Included />
      <PrivateDocsDeadline />
      <Title>Стоимость перевода аттестата и/или приложения</Title>
      <TranslationFromLang
        baltic_langs="от 1000"
        sng_langs="от 900"
        east_langs="от 1200"
        eu_langs="от 1000"
        title="Перевод атестата с нотариальнам заверением"
      />
      <TranslationFromLang
        eu_langs="от 1100"
        sng_langs="от 1000"
        baltic_langs="от 1100"
        east_langs="от 1200"
        title="Перевод приложения к аттестату с нотариальнам заверением"
      />
      <TranslationFromLang
        eu_langs="от 800"
        sng_langs="от 700"
        baltic_langs="от 800"
        east_langs="от 1000"
        title="Перевод атестата с заверением печатью бюро переводов"
      />
      <TranslationFromLang
        eu_langs="от 900"
        sng_langs="от 800"
        baltic_langs="от 1000"
        east_langs="от 1200"
        title="Перевод приложения к аттестату с заверением печатью бюро переводов"
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
      <DocDiscounts twenty={false} />
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
        Мы подскажем, требуется ли Вам подшивать перевод к нотариальной копии
        или достаточно ксерокопии документа.
      </LiColored>
      <LiColored>
        Вместе с переводом мы можем сделать нотариальную копию документа.
      </LiColored>
    </div>
  );
};

export default CertificatesAndApplicationsTranslation;
