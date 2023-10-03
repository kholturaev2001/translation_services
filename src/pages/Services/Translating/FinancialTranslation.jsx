import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/financial_translation.jpg";
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

const FinancialTranslation = () => {
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
            title: "Финансовый перевод",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Финансовый перевод текста" />
      <Description>
        Перевод финансовой документации имеет несколько отличий от перевода
        экономической. К примеру, накладные заполняются согласно принятым
        правилам. А перевод банковской документации выполняется по нормативам,
        которых придерживаются платежные системы Visa и MasterCard. Мельчайшие
        нарушения в оформлении грозят тем, что готовый документ не будет принят
        ни одной инстанцией на рассмотрение.
      </Description>
      <Description>
        Финансовый перевод является сухим и четким, в отличие от литературного.
        Здесь также широко используется узконаправленная терминология, поэтому
        работу доверять нужно исключительно профильным специалистам.
      </Description>
      <Description>
        В том же случае, если необходим перевод бухгалтерских документов с
        последующим юридическим заверением, обратиться нужно к специалисту, у
        которого есть разрешение работать с коммерческими бумагами. Также
        следует заметить, что финансово- экономический перевод любого документа
        дополняется оригинальными печатями и подписями.
      </Description>
      <Description>
        Выполнить финансовый перевод можно в ООО «АИС ПЕРЕВОДЧИК». Ее
        специалисты имеют необходимый опыт работы со специализированными
        документами, инструкциями, контрактами, а также их последующим
        заверением. При необходимости перевод может быть заверен нотариально или
        печатью бюро переводов.
      </Description>
      <Title2>Тематика:</Title2>
      <Ul>
        <li>Финансовая отчетность;</li>
        <li>отчеты о прибылях и убытках;</li>
        <li>отчеты об изменениях капитала;</li>
        <li>бухгалтерские балансы;</li>
        <li>налоговые декларации;</li>
        <li>кредитные договора;</li>
        <li>договора лизинга;</li>
        <li>банковская документация;</li>
        <li>аудиторские заключения.</li>
      </Ul>
      <TrDeadline />
      <Title>Стоимость перевода финансовых документов</Title>
      <TranslationFromLang />
      <TranslationToLang
        sng_langs="от 400"
        baltic_langs="от 550"
        easy_langs="от 700"
      />
      <OtherTypes />
      <Discounts />
      <AdditionInfo />
    </div>
  );
};

export default FinancialTranslation;
