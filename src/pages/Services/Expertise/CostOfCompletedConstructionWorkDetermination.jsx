import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/contruction_and_technical_expert/cost_of_completed_construction_work_determination.jpeg";
import Title from "../../../components/Typography/Title";
import Description from "../../../components/Typography/Description";
import LiColored from "../../../components/Typography/LiColored";
import DTable from "../../../components/DTable";
import Ul from "../../../components/Typography/Ul";
import Email from "../../../components/Typography/Email";

const CostOfCompletedConstructionWorkDetermination = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Экспертиза",
          },
          {
            title: "Строительно-техническая",
          },
          {
            title: "Строительно-техническая экспертиза",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        description="Оценка качества, объемов и стоимости работ — вид строительной экспертизы, направленный на определение количества и реальной цены выполненных строительно-монтажных мероприятий. Результаты исследования помогают найти подтверждения правоты одной из сторон и решить спорные вопросы. Основываясь на них, заказчик может вернуть средства, которые были потрачены на некачественную работу, или обязать исполнителя доделать ее в полном объеме.        "
        title="Определение стоимости выполненных строительно-технических работ"
      />

      <Title>
        Когда необходимо определение видов и качества выполненных работ?
      </Title>
      <Description>
        Исследование может быть проведено в следующих случаях:
      </Description>
      <LiColored>
        Заказчик не удовлетворен качеством выполненных ремонтных работ: не
        полностью произведена отделка, присутствуют явные или скрытые недочеты,
        использованы материалы и комплектующие сомнительного качества, нарушены
        технологии прокладки инженерных коммуникаций, установки конструкций и т.
        д.
      </LiColored>
      <LiColored>
        Присутствуют претензии к определенным видам строительно-монтажных работ,
        наблюдается несоответствие проведенных мероприятий утвержденным
        требованиям.
      </LiColored>
      <LiColored>
        После того как объект был сдан в эксплуатацию, выявлены дефекты, которые
        привели к аварийной ситуации.
      </LiColored>
      <LiColored>
        Присутствуют разногласия между заказчиком и исполнителем относительно
        перечня выполненных задач либо наблюдается несоответствие между
        отраженным в проектно-сметной документации и реально сделанным
        количеством строительно-ремонтных работ.
      </LiColored>
      <LiColored>
        Необходимо выяснить причины увеличения расходов, которые изначально были
        заложены в смете.
      </LiColored>
      <LiColored>
        Присутствует подозрение в неоправданном завышении фактической стоимости
        стройматериалов, используемых при выполнении строительно-ремонтных
        мероприятий.
      </LiColored>
      <LiColored>
        Произошла замена исполнителем утвержденных в сметной документации
        материалов на аналоги худшего качества.
      </LiColored>
      <LiColored>
        Требуется проанализировать проектно-сметную документацию для выявления
        ошибок в разных видах работ и определения общей стоимости выполненных
        мероприятий.
      </LiColored>
      <LiColored>
        Заказчик не соглашается подписывать акт приемки работ, не приводя
        объективных аргументов в пользу такого решения.
      </LiColored>
      <Description>
        Как показывает практика, исследование, направленное на определение видов
        и объемов выполненных работ, требуется при обнаружении явных недочетов
        во внутренней отделке и инженерных коммуникациях в жилых помещениях
        после ремонта. К ним относятся трещины на стенах и гипсокартонных
        конструкциях, различие в высоте полов и потолков, протечки в системах
        водоснабжения, неграмотная установка отопительных приборов, кранов и т.
        д. Причиной обращения к независимым экспертам может стать чрезмерно
        большая усадка фундамента, а также некачественное обустройство кровли.
        Кроме того, оценочные мероприятия могут быть необходимы при приемке
        участником долевого строительства жилого помещения от
        компании-застройщика. Исследование поможет установить не только
        фактический объем сделанных работ, но и причины появления дефектов,
        точность выполнения условий договора и т. д.
      </Description>
      <Description>
        Оценочные мероприятия могут проводиться как в досудебном, так и в
        судебном порядке. Часто результаты исследования помогают разрешить
        конфликт между участниками до обращения в суд. При подтверждении правоты
        одной из сторон другое заинтересованное лицо может добровольно устранить
        выявленные дефекты, в полной мере выполнить взятые на себя обязательства
        и компенсировать расходы. Если конфликт будет доведен до суда,
        экспертное заключение станет весомым аргументом в деле.
      </Description>
      <Title>
        От чего зависит стоимость экспертизы, направленной на определение видов
        и качества выполненных работ?
      </Title>
      <Description>Стоимость исследования зависит от:</Description>
      <LiColored>срочности проведения оценочных мероприятий;</LiColored>
      <LiColored>объема работ, которые потребуется оценить эксперту;</LiColored>
      <LiColored>
        количества вопросов, на которые предстоит дать ответ;
      </LiColored>
      <LiColored>
        месторасположения объекта исследования и других параметров.
      </LiColored>
      <Title>Документы, необходимые для проведения исследования</Title>
      <Description>
        Заказчику исследования потребуется предоставить:
      </Description>
      <LiColored>проектно-сметную документацию;</LiColored>
      <LiColored>
        лицензию, дающую право на выполнение строительно-ремонтных мероприятий;
      </LiColored>
      <LiColored>чеки на покупку стройматериалов;</LiColored>
      <LiColored>заключенные договоры с подрядчиком;</LiColored>
      <LiColored>
        журналы проведения специальных работ (исполнительные документы);
      </LiColored>
      <LiColored>акт сдачи-приемки работ и т. д.</LiColored>
      <Description>
        Перечень документов может меняться в зависимости от типа и особенностей
        объекта исследования.
      </Description>
      <Title>Какие вопросы могут быть поставлены перед экспертом?</Title>
      <Description>
        Независимая экспертиза позволяет специалистам дать ответ на следующие
        вопросы:
      </Description>
      <LiColored>
        Соответствует ли перечень и цена фактически выполненных строительных
        мероприятий проектно-сметной документации, прописанным в соглашении
        условиям, актам о приемке работ (КС-2, КС-3), журналу выполненных работ?
        Если не соответствует, то насколько велика выявленная разница?
      </LiColored>
      <LiColored>
        Какие работы были полностью закончены исполнителем к моменту проведения
        исследования и какова их фактическая стоимость?
      </LiColored>
      <LiColored>
        Соответствует ли цена используемых стройматериалов и работ установленным
        на рынке расценкам с учетом региональных коэффициентов?
      </LiColored>
      <LiColored>
        Был ли фактически выполнен перечень работ, указанный в акте
        сдачи-приемки?
      </LiColored>
      <LiColored>
        Обоснована ли указанная в документах цена строительно-ремонтных работ?
      </LiColored>
      <LiColored>
        Какова рыночная (внедоговорная) цена реализованных работ?
      </LiColored>
      <LiColored>
        Насколько корректно были выполнены расчеты стоимости
        строительно-ремонтных мероприятий?
      </LiColored>
      <LiColored>
        Соответствуют ли проведенные на объекте работы плану, который был
        подписан перед началом сотрудничества?
      </LiColored>
      <LiColored>
        Соответствует ли возведенное сооружение проектному плану? Если нет, то
        насколько велики отклонения и в чем они выражаются?
      </LiColored>
      <LiColored>
        Насколько объективна (не завышена и не занижена) стоимость конкретного
        вида работ?
      </LiColored>
      <LiColored>
        Какое количество стройматериалов было действительно использовано
        подрядчиком? Какова их реальная стоимость?
      </LiColored>
      <LiColored>
        Соответствуют ли рассматриваемые этапы выполненных работ аналогичным
        пунктам сметы?
      </LiColored>
      <LiColored>
        Каково техническое состояние конструктивных элементов строения?
      </LiColored>
      <Title>
        Как проводится исследование, направленное на определение видов и
        стоимости выполненных работ?
      </Title>
      <Description>
        Оценочные мероприятия осуществляются в несколько этапов:
      </Description>
        <DTable
          dataSource={[
            {
              key: "1",
              row_one: <b>Первичная консультация</b>,
              row_two:
                "На данном этапе формулируется перечень вопросов, на которые эксперту предстоит дать ответ в процессе исследования, а также определяются цели оценочных мероприятий.",
            },
            {
              key: "2",
              row_one: <b>Сбор и изучение данных </b>,
              row_two:
                "После предоставления необходимых документов эксперты приступают к анализу. Они проверяют сметно-проектную документацию, накладные, соглашения, акты выполненных работ, подписанные заказчиком и исполнителем. Подробно изучаются отчеты, сопоставляется фактическое положение дел с утвержденным планом.",
            },
            {
              key: "3",
              row_one: <b>Выезд на объект</b>,
              row_two:
                "Независимый эксперт выезжает на объект для проведения визуального осмотра. На данном этапе выполняются необходимые замеры, выявляются недочеты и нарушения, допущенные при реализации строительно-ремонтных работ. Специалист оценивает состояние конструктивных элементов строения, кровли, фасада, отделки, инженерных коммуникаций и т. д. Осуществляется фото- и видеофиксация объекта. В случае необходимости эксперт использует дополнительные приспособления, которые позволяют выявить малозаметные недочеты (например, для определения степени наклона пола применяется строительный уровень).",
            },
            {
              key: "4",
              row_one: (
                <b>Проведение дополнительных изысканий и анализ данных</b>
              ),
              row_two:
                "Для оценки качества используемых стройматериалов могут использоваться лабораторные методики анализа. Они позволяют точно установить, соответствуют ли материалы данным, указанным в сертификатах качества, из безопасного ли сырья они изготовлены, соответствуют ли санитарно-экологическим требованиям, госстандартам и техусловиям и т. д.",
            },
            {
              key: "5",
              row_one: (
                <b>Обобщение выводов и оформление экспертного заключения</b>
              ),
              row_two: (
                <div className="p-2 flex flex-col text-sm gap-4">
                  <p>
                    Выводы, сделанные экспертами в процессе исследования,
                    оформляются в итоговый отчет. Этот документ включает
                    следующие данные:
                  </p>
                  <ul className="list-disc flex flex-col gap-2">
                    <li>
                      Копии документов, которые были предоставлены заказчиком
                      исследования, начиная от лицензии на допуск к выполнению
                      строительно-ремонтных работ и заканчивая чеками на покупку
                      материалов.
                    </li>
                    <li>
                      Протокол осмотра объекта. Эксперт прикладывает видео- и
                      фотоматериалы, в случае необходимости вносятся поясняющие
                      комментарии.
                    </li>
                    <li>
                      Акт, составленный по результатам осмотра, с указанием
                      выявленных дефектов. Все обнаруженные недочеты подробно
                      описываются, к ним прикрепляются ссылки на соответствующие
                      ГОСТы, СНиПы, техусловия, нормативно-правовые документы.
                    </li>
                    <li>
                      Описание изысканий, проведенных в лабораторных условиях, с
                      полученными результатами. Прилагаются расчеты, графики и
                      другие наглядные материалы.
                    </li>
                    <li>
                      Заключительные выводы эксперта по результатам проведенного
                      исследования. В этом разделе представлены рекомендации по
                      устранению недочетов, замене стройматериалов, проведению
                      повторного ремонта всего объекта или его отдельных
                      элементов и т. д.
                    </li>
                  </ul>
                  <p>
                    Также в экспертном заключении указывается информация о
                    специалистах, которые выполнили исследование. Все указанные
                    данные заверяются печатями компании, которая проводила
                    оценочные мероприятия. Отчет имеет юридическую ценность и в
                    случае необходимости может быть предоставлен по запросу
                    контролирующих инстанций.
                  </p>
                </div>
              ),
            },
          ]}
          columns={[
            {
              dataIndex: "row_one",
              key: "row_one",
              width: "20%",
            },
            {
              dataIndex: "row_two",
              key: "row_two",
            },
          ]}
          bordered
          showHeader={false}
        />
      <Title>Обращайтесь к профессионалам и вы не пожалеете!</Title>
      <Description>
        Эксперты компании «АИС ПЕРЕВОДЧИК» проведут независимую оценку,
        направленную на определение видов и стоимости выполненных
        строительно-ремонтных работ в соответствии с нормами законодательства
        РФ. Мы работаем на результат и гарантируем соблюдение сроков.
      </Description>
      <Description>Нам доверяют клиенты, потому что мы:</Description>
      <Ul>
        <li>
          работаем с судебными инстанциями, отделами внутренних дел, финансовыми
          и коммерческими предприятиями, арбитражными управляющими и частными
          заказчиками;
        </li>
        <li>
          располагаем действующей лицензией ФСБ на проведение работ, связанных с
          использованием сведений, относящихся к государственной тайне;
        </li>
        <li>
          самостоятельно доставляем экспертное заключение по адресу клиента и в
          судебные инстанции в согласованный срок;
        </li>
        <li>
          предоставляем весь перечень услуг, которые могут потребоваться
          собственнику любого имущества;
        </li>
        <li>
          при необходимости защищаем результаты работы в судах, комиссиях,
          инспекциях, перед проверяющими, экспертами СРО, акционерами;
        </li>
        <li>
          имеем в штате дипломированных экспертов, оценщиков и специалистов с
          подтверждением ученой степени, которые состоят в крупнейших
          профессиональных СРО и имеют персональные страховые полисы на сумму 15
          000 000 рублей.
        </li>
      </Ul>
      <Description>
        <i>
          Если вы заинтересованы в определении видов и качества выполненных
          строительно-ремонтных работ, вы можете обратиться к нашим специалистам
          по указанному на сайте телефону. Заявки также принимаются по адресу
          электронной почты <Email />. Наш специалист свяжется с вами для
          обсуждения деталей сотрудничества.
        </i>
      </Description>
    </div>
  );
};

export default CostOfCompletedConstructionWorkDetermination;
