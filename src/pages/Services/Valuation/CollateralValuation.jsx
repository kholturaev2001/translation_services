import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/collateral_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import LiColored from "../../../components/Typography/LiColored";
import Ol from "../../../components/Typography/Ol";

const CollateralValuation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Для целей",
          },
          {
            title: "Оценка стоимости залога",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка стоимости залога" />
      <Description>
        Финансовые организации предлагают наиболее выгодные условия кредитования
        по тем услугам, которые обеспечиваются поручительством. Такие банковские
        продукты отличаются сниженными ставками, увеличенными лимитами и более
        лояльными требованиями к клиентам. При оформлении кредита с обеспечением
        важно провести оценку предмета залога. Эта процедура является
        обязательной для каждого заемщика, будь то организация или частный
        клиент. Она позволяет узнать фактическую стоимость залога, убедиться в
        безопасности сделки и снизить риски невозврата выданных средств. Чтобы
        избежать разногласий в данном вопросе, для получения объективных
        сведений приглашаются независимые эксперты. Специалисты компании «АИС
        ПЕРЕВОДЧИК» выполнят оценку стоимости залога в соответствии с
        требованиями действующего российского законодательства. По результатам
        проведенной работы составляется официальный отчет, который имеет
        юридическую силу. Документ содержит критерии анализа, обоснование цены,
        а также подробный расчет.
      </Description>
      <Title>Преимущества обращения в компанию “АИС ПЕРЕВОДЧИК”</Title>
      <Description>Нам доверяют заказчики, потому что мы:</Description>
      <LiColored>
        сотрудничаем с судебными органами, отделами внутренних дел, банками,
        арбитражными управляющими, коммерческими организациями и частными
        лицами;
      </LiColored>
      <LiColored>
        имеем лицензию ФСБ на проведение работ, связанных с использованием
        данных, составляющих государственную тайну;
      </LiColored>
      <LiColored>
        самостоятельно доставляем отчеты по адресу клиента и в суды в
        установленное время;
      </LiColored>
      <LiColored>
        предлагаем полный перечень услуг, которые могут потребоваться
        собственнику любого имущества;
      </LiColored>
      <LiColored>
        при необходимости защищаем результаты работы в судах, комиссиях,
        инспекциях, перед проверяющими, экспертами СРО, акционерами;
      </LiColored>
      <LiColored>
        в нашем штате дипломированные эксперты, оценщики и специалисты с
        подтверждением ученой степени, которые состоят в крупнейших
        профессиональных СРО и имеют персональные страховые полисы на сумму 15
        000 000 рублей;
      </LiColored>
      <LiColored>
        персональный менеджер всегда на связи, оперативно отвечает на любые
        интересующие вопросы;
      </LiColored>
      <Title>В каких случаях проводится оценка залога?</Title>
      <Description>Процедура осуществляется:</Description>
      <LiColored>
        если необходимо сопоставить стоимость залогового имущества с размером
        займа;
      </LiColored>
      <LiColored>
        если нужно определить фактическую цену объекта с целью передачи его в
        залог для гарантии платежеспособности клиента финансовой организации;
      </LiColored>
      <LiColored>для оценки активов юрлиц;</LiColored>
      <LiColored>
        с целью определения стоимости имущества заемщика перед проведением
        сделок купли-продажи, а также при инициации процедуры банкротства и т.д.
      </LiColored>
      <Description>
        Объект, который выступает в качестве обеспечения, должен:
      </Description>
      <LiColored>
        покрывать затраты, которые несет владелец при его продаже;
      </LiColored>
      <LiColored>
        превышать по стоимости размер займа, который можно получить;
      </LiColored>
      <LiColored>
        компенсировать возможные дополнительные выплаты и проценты за первые 12
        месяцев кредитования;
      </LiColored>
      <LiColored>находиться в собственности заемщика.</LiColored>
      <Description>
        Залоговое имущество не может быть продано или подарено. При наличии
        совладельца необходимо его письменное разрешение на использование
        объекта в качестве обеспечения.
      </Description>
      <Title>Какое имущество подлежит оценке?</Title>
      <Description>Эксперты оценивают:</Description>
      <LiColored>квартиры, дома и другие строения;</LiColored>
      <LiColored>земельные участки;</LiColored>
      <LiColored>транспортные средства, оборудование и спецтехнику;</LiColored>
      <LiColored>нематериальные активы;</LiColored>
      <LiColored>продукцию и материалы и т.д.</LiColored>
      <Title>Какие документы необходимы для оценки залогового имущества?</Title>
      <Description>Экспертам потребуется:</Description>
      <LiColored>
        паспорт — для физлиц, реквизиты организации — для юрлиц;
      </LiColored>
      <LiColored>технический и кадастровый паспорт объекта;</LiColored>
      <LiColored>правоустанавливающая документация;</LiColored>
      <LiColored>сведения о совладельцах залогового имущества;</LiColored>
      <LiColored>данные о наличии обременений;</LiColored>
      <LiColored>
        для транспортных средств — ПТС, свидетельство о регистрации, данные о
        проведенных ранее ремонтных работах и техобслуживании;
      </LiColored>
      <LiColored>
        для оборудования и спецтехники — данные о балансовой стоимости,
        документы на поставку, платежная документация.
      </LiColored>
      <Title>Какие параметры влияют на рыночную стоимость залога?</Title>
      <Description>Цена зависит от:</Description>
      <LiColored>типа залогового имущества;</LiColored>
      <LiColored>индивидуальных характеристик и специфики объекта;</LiColored>
      <LiColored>
        особенностей расположения и близости транспортных путей (для недвижимого
        имущества);
      </LiColored>
      <LiColored>
        соотношения спроса и предложения на подобные объекты на рынке;
      </LiColored>
      <LiColored>
        технического состояния имущества на момент проведения оценочных
        мероприятий и т.д.
      </LiColored>
      <Title>Как осуществляется оценка залога?</Title>
      <Description>Процесс сотрудничества включает 5 этапов:</Description>
      <Ol>
        <li>
          <b>Изучение информации, предоставленной клиентом.</b>
        </li>
        <li>
          <b>Подготовка персонального предложения.</b> На основании
          предоставленных данных об объекте независимый оценщик формирует
          стратегию работы и прогнозирует результат.
        </li>
        <li>
          <b> Заключение договора.</b> В нем подробно описываются все условия
          сотрудничества. Также в соглашении указывается окончательная стоимость
          услуг.
        </li>
        <li>
          <b>Выполнение расчетов.</b> Мы организуем выезд на объект для осмотра.
          Определяется стоимость имущества с учетом износа, после чего согласно
          полученным данным рассчитывается рыночная цена.
        </li>
        <li>
          <b> Подготовка заключения.</b> Отчет заверяется личной подписью
          эксперта и печатью компании «АИС ПЕРЕВОДЧИК». В соответствии с ФЗ №
          135 «Об оценочной деятельности в РФ», срок действия заключения — 6
          месяцев.
        </li>
      </Ol>
      <Description>
        Получить консультацию специалиста по оценке залогового имущества и
        заказать услуги вы можете, позвонив по указанному на сайте телефону.
        Также можно отправить запрос по адресу электронной почты urdis@urdis.ru.
        Наш специалист свяжется с вами для обсуждения деталей сотрудничества.
      </Description>
    </div>
  );
};

export default CollateralValuation;
