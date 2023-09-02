import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/estates/building_technical_condition_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import Ol from "../../../components/Typography/Ol";
import Title3 from "../../../components/Typography/Title3";
import DTable from "../../../components/DTable";
import LiColored from "../../../components/Typography/LiColored";
import Title2 from "../../../components/Typography/Title2";

const BuildingTechnicalCondition = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Недвижимость",
          },
          {
            title: "Оценка технического состояния здания",
          },
        ]}
      />

      <ServiceCard img={s_img} title="Оценка технического состояния здания" />

      <Description>
        Техническое состояние здания — это оценка его физического состояния, в
        том числе конструкций, систем инженерного обеспечения и коммуникаций, а
        также соответствия современным требованиям безопасности, прочности,
        надежности, функциональности и энергоэффективности. Комплексная
        экспертиза включает изучение характеристик всего объекта и его отдельных
        элементов, которые влияют на эксплуатационные параметры. Установление
        технического состояния здания проводится, чтобы определить необходимость
        ремонта, модернизации или реконструкции сооружения. В результате оценки
        выявляются возможные проблемы, которые могут повлиять на безопасность и
        комфортность проживания или работы в здании.
      </Description>
      <Title>Когда требуется установление технического состояния здания?</Title>
      <Description>Процедура необходима в следующих случаях:</Description>
      <Ol>
        <li>
          Покупка или продажа. Позволяет определить реальную стоимость здания и
          выявить возможные скрытые проблемы, которые могут повлиять на цену.
        </li>
        <li>
          Получение кредита на покупку или ремонт. Банки и другие финансовые
          организации могут потребовать оценку здания, чтобы убедиться в его
          стоимости и безопасности.
        </li>
        <li>
          Проектирование ремонта или реконструкции здания. Оценка технического
          состояния поможет определить необходимый объем работ и оценить их
          стоимость.
        </li>
        <li>
          Проведение экспертизы для выявления возможных проблем. Например, при
          обнаружении трещин в стенах или перекрытиях, признаков влажности или
          гниения деревянных конструкций.
        </li>
        <li>
          Проведение регулярных проверок технического состояния здания. Это
          требуется для поддержания его безопасности и функциональности.
        </li>
      </Ol>
      <Title3>Пример 1</Title3>
      <Description>
        <i>
          Компания планирует купить здание для размещения своего офиса. Для
          определения реальной стоимости и выявления возможных проблем она
          заказывает оценку технического состояния здания.
        </i>
      </Description>
      <Title3>Пример 2</Title3>
      <Description>
        <i>
          Семья планирует купить дом, но нуждается в кредите на его покупку.
          Банк потребовал его независимую оценку, чтобы убедиться в его
          стоимости и безопасности.
        </i>
      </Description>
      <Title3>Пример 3</Title3>
      <Description>
        <i>
          Владелец здания планирует провести ремонт фасада. Он заказывает
          оценку, чтобы определить объем работ и оценить их стоимость.
        </i>
      </Description>
      <Title3>Пример 4</Title3>
      <Description>
        <i>
          Жильцы многоэтажного дома обратили внимание на трещины в стенах и
          потолках. Для выявления возможных проблем они заказывают оценку
          технического состояния здания.
        </i>
      </Description>
      <Title3>Пример 5</Title3>
      <Description>
        <i>
          Владелец сооружения проводит ежегодную проверку технического состояния
          здания, чтобы поддерживать его безопасность и функциональность. Оценка
          помогает выявить дефекты и повреждения, а также предотвратить их
          развитие.
        </i>
      </Description>
      <Title>Критерии установления технического состояния здания</Title>
      <Description>
        Определение категории технического состояния объектов производится в
        соответствии с регламентом, указанным в документах СП 13-102-2003 и ГОСТ
        31937-2011. Обследование проводится с учетом грунта, на котором
        построено здание. После сбора информации зданиям присваивается одна из
        пяти категорий:
      </Description>
      <Ol>
        <li>
          исправные — объекты, которые соответствуют требованиям безопасности и
          функциональности, не нуждаются в ремонте или реконструкции;
        </li>
        <li>
          работоспособные — выявляются небольшие дефекты, повреждения, но
          которые не влияют на комфортные условия для проживания или работы
          людей, то есть соответствуют санитарным нормам и правилам
          эксплуатации;
        </li>
        <li>
          ограниченно-работоспособные — в объектах обнаруживаются нарушения,
          которые частично могут снижать эксплуатационный уровень, но не
          провоцируют разрушения строения;
        </li>
        <li>
          предаварийно-недопустимые — это объекты, которые не соответствуют
          требованиям безопасности и не могут использоваться для проживания или
          работы людей, поскольку угрожают их жизни и здоровью, поэтому
          нуждаются в реконструкции или капитальном ремонте;
        </li>
        <li>
          аварийные — представляют угрозу для жизни и здоровья людей,
          находящихся в них или рядом с ними, например, имеющие серьезные
          повреждения, нарушения конструкции, не соответствующие санитарным,
          гигиеническим, пожарным нормам, то есть те объекты, которые запрещены
          к использованию и требуют немедленного принятия мер.
        </li>
      </Ol>
      <Description>
        Категория физического износа здания относится к состоянию его
        конструктивных элементов и инженерных систем, которые со временем
        начинают требовать ремонта или замены. Негативные факторы включают в
        себя степень использования, климатические условия, качество строительных
        материалов и качество выполнения восстановительных работ. Категории
        физического износа зданий могут варьироваться в зависимости от страны и
        региона. Приведем примерные значения в таблице:
      </Description>
      <div className="md:w-full w-screen overflow-auto md:scale-100 scale-[90%]">
        <DTable
          dataSource={[
            {
              key: "1",
              wear_category: "от 0 до 20",
              state_category: "Хорошее",
              characteristics: "Серьезные дефекты отсутствуют.",
            },
            {
              key: "2",
              wear_category: "от 21 до 40	",
              state_category: "Удовлетворительное",
              characteristics:
                "Несущие конструкции не нуждаются в ремонте, но некоторые элементы требуется восстановить.",
            },
            {
              key: "3",
              wear_category: "от 41 до 60",
              state_category: "Неудовлетворительное",
              characteristics: "Неудовлетворительное",
            },
            {
              key: "5",
              wear_category: "от 61 до 80",
              state_category: "Ветхое",
              characteristics:
                "Несущие конструкции относятся к аварийным и требуют восстановления для возобновления эксплуатации.",
            },
            {
              key: "6",
              wear_category: "от 81 до 100",
              state_category: "Негодное",
              characteristics:
                "Полный износ объекта, использование которого строго запрещено.",
            },
          ]}
          columns={[
            {
              title: "Категория износа",
              dataIndex: "wear_category",
              key: "wear_category",
            },
            {
              title: "Категория состояния",
              dataIndex: "state_category",
              key: "state_category",
            },
            {
              title: "Характеристика",
              dataIndex: "characteristics",
              key: "characteristics",
            },
          ]}
        />
      </div>
      <Title>Что содержит отчет об оценке?</Title>
      <Description>
        Итоговое заключение по оценке технического состояния здания содержит:
      </Description>
      <LiColored>общую оценку технического состояния здания;</LiColored>
      <LiColored>
        описание выявленных дефектов, их характеристики и степени влияния на
        безопасность и функциональность здания;
      </LiColored>
      <LiColored>рекомендации по устранению выявленных нарушений;</LiColored>
      <LiColored>
        предложения по проведению дополнительных измерений и исследований;
      </LiColored>
      <LiColored>
        информация о сроках и стоимости проведения работ по устранению
        выявленных недостатков;
      </LiColored>
      <LiColored>фото- и видеоматериалы, графики, расчеты и чертежи.</LiColored>
      <Title>Какое оборудование используется?</Title>
      <Description>
        Для установления технического состояния здания применяются различные
        устройства:
      </Description>
      <LiColored>
        термовизионные камеры для обнаружения тепловых потерь, наличия влаги и
        других дефектов;
      </LiColored>
      <LiColored>
        эндоскопы для осмотра внутренних полостей и скрытых участков
        конструкций;
      </LiColored>
      <LiColored>
        геодезическое оборудование для измерения параметров здания и его
        окружающей территории;
      </LiColored>
      <LiColored>
        анализаторы воздуха и воды для оценки качества внутренней среды объекта;
      </LiColored>
      <LiColored>
        ультразвуковые приборы для обнаружения трещин и других дефектов в
        конструкциях;
      </LiColored>
      <LiColored>
        металлоискатели для обнаружения скрытых металлических элементов
        конструкций и коммуникаций.
      </LiColored>
      <Title>Что влияет на стоимость услуги?</Title>
      <Description>Основные ценообразующие факторы:</Description>
      <LiColored>размер здания;</LiColored>
      <LiColored>сложность конструкции;</LiColored>
      <LiColored>период постройки;</LiColored>
      <LiColored>метод исследования;</LiColored>
      <LiColored>требуемая техника;</LiColored>
      <LiColored>регион;</LiColored>
      <LiColored>срочность выполнения работ.</LiColored>
      <Title>Что еще обязательно входит в услугу?</Title>
      <Description>
        При оценке технического состояния здания необходимо проводить проверку
        инженерных коммуникаций, так как они являются важной частью
        инфраструктуры здания и могут оказывать влияние на его безопасность и
        эффективность эксплуатации. Сюда входит оценка состояния системы
        отопления, вентиляции и кондиционирования воздуха, электрических систем,
        водоснабжения и канализации, пожарной безопасности, газового
        оборудования. Все это позволяет выявить возможные проблемы, которые
        увеличивают риск аварийных ситуаций или негативно влияют на комфортность
        и безопасность эксплуатации.
      </Description>
      <Title2>
        В рамках каких вопросов возможно проведение экспертизы технического
        состояния здания:
      </Title2>
      <LiColored>
        соответствует ли здание (сооружение) требованиям строительных норм и
        правил?
      </LiColored>
      <LiColored>
        имеется ли возможность реального раздела домовладения между
        собственниками?
      </LiColored>
      <LiColored>
        создает ли здание (сооружение) угрозу жизни и здоровью граждан?
      </LiColored>
    </div>
  );
};

export default BuildingTechnicalCondition;