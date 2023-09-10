import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/real_estate_for_court_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import LiColored from "../../../components/Typography/LiColored";
import DTable from "../../../components/DTable";
import Ol from "../../../components/Typography/Ol";

const RealEstateForCourt = () => {
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
            title: "Суд",
          },
          {
            title: "Недвижимость",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Судебная экспертиза недвижимости"
        deadline="от 2 дней"
        price={5500}
      />
      <Description>
        Выполняем оценку недвижимости для суда с учетом комплекса таких
        факторов, как износ конструкций, расположение, форма собственности
        правообладателя, особенности эксплуатации и др. С высокой точностью
        определяем рыночную или ликвидационную стоимость имущества, размер
        ущерба. Подробный отчет может быть использован в качестве доказательства
        в рамках уголовного, гражданского, арбитражного процессов, а также при
        оспаривании налоговых отчислений.
      </Description>
      <Title>Какие задачи решает судебная оценка недвижимости</Title>
      <Description>Услуга позволяет определить:</Description>
      <LiColored>
        рыночную стоимость для разрешения споров и конфликтов между сторонами;
      </LiColored>
      <LiColored>
        размер ущерба, причиненного объекту недвижимости в результате различных
        обстоятельств, например, стихийных бедствий или действий третьих лиц;
      </LiColored>
      <LiColored>
        стоимость для независимой оценки кадастровой стоимости объекта;
      </LiColored>
      <LiColored>
        стоимость для целей налогообложения или приобретения имущества в
        судебном порядке;
      </LiColored>
      <LiColored>
        стоимость для страхования, финансирования или залога;
      </LiColored>
      <LiColored>стоимость для продажи или аренды;</LiColored>
      <LiColored>стоимость при распределении долей собственности;</LiColored>
      <LiColored>стоимость при ликвидации организации;</LiColored>
      <LiColored>
        юридическую чистоту объекта недвижимости и его соответствие требованиям
        законодательства;
      </LiColored>
      <LiColored>
        техническую готовность и необходимость проведения ремонтных работ;
      </LiColored>
      <LiColored>
        экономическую эффективность использования объекта недвижимости в
        различных сферах деятельности.
      </LiColored>
      <Title>Сколько стоит оценка недвижимости для суда</Title>
      <DTable
        className="my-10"
        dataSource={[
          {
            key: "1",
            service: "Оценка нежилого здания",
            price: "от 18 000 руб, от 5 дней",
          },
          {
            key: "2",
            service: "Оценка нежилого помещения	",
            price: "от 15 000 руб, от 3 дней",
          },
          {
            key: "3",
            service: "Оценка земельного участка",
            price: "от 12 000 руб, от 3 дней",
          },
          {
            key: "5",
            service: "Оценка квартиры",
            price: "от 5500 руб., от 2 дней",
          },
          {
            key: "6",
            service: "Оценка жилого дома с участком",
            price: "от 15 000 руб, от 5 дней",
          },
        ]}
        columns={[
          {
            title: "Услуга",
            dataIndex: "service",
            key: "service",
          },
          {
            title: "Стоимость",
            dataIndex: "price",
            key: "price",
          },
        ]}
      />
      <Title>
        Кто и как назначает оценочную экспертизу недвижимости для суда
      </Title>
      <Description>
        В частном порядке услугу может заказать любое физическое или юридическое
        лицо. Для этого заключается договор, в котором закрепляются условия
        сотрудничества и обязанности сторон.
      </Description>
      <Description>
        Экспертиза недвижимости для суда в рамках уголовного дела может быть
        назначена дознавателем или следователем для разрешения споров, связанных
        с правами на имущество, определения его, оценки ущерба от преступления,
        а также для выявления фактов, связанных с использованием в целях
        противоправных действий. Это позволяет вынести справедливое решение и
        привлечь к ответственности виновных.
      </Description>
      <Description>
        Федеральная налоговая служба может назначить экспертизу недвижимости для
        определения судебной стоимости, если возникают споры по налоговым
        вопросам, а также при проведении проверок налоговой декларации
        налогоплательщиков, имеющих доходы от продажи объектов. Это позволяет
        определить объективную рыночную стоимость недвижимости и выявить
        возможные нарушения.
      </Description>
      <Description>
        В гражданских и арбитражных разбирательствах экспертизу может назначить
        суд по собственной инициативе или на основании заявления одной из
        сторон. Кроме того, что уполномоченные органы и должностные лица
        привлекают специалистов в указанных случаях, заинтересованное лицо может
        составить ходатайство. Рассмотрим, как это сделать.
      </Description>
      <Description>
        Ходатайство на судебно-оценочную экспертизу недвижимости можно составить
        следующим образом:
      </Description>
      <Ol>
        <li>
          Заголовок: указывается название суда или арбитражного суда,
          наименование сторон, номер дела и дата подачи документа.
        </li>
        <li>
          Вступительная часть: указывается краткое изложение существа спора и
          необходимость проведения экспертизы для его разрешения.
        </li>
        <li>
          Основания: указываются все причины, по которым необходимо провести
          судебно-оценочную экспертизу недвижимости, например, спор о стоимости
          имущества, оценка качества строительных работ и др.
        </li>
        <li>Перечисление всех объектов, которые подлежат оценке.</li>
        <li>
          Предложения по проведению экспертизы: указывается, каким образом
          должна быть проведена процедура (например, с участием независимых
          экспертов, с использованием специализированного оборудования и др.), а
          также предлагается назначить конкретных экспертов.
        </li>
        <li>
          Заключение: указывается мотивированное обоснование необходимости
          проведения экспертизы недвижимости для разрешения спора, а также
          просьба о назначении экспертизы.
        </li>
        <li>
          Подпись: документ подписывается заявителем или его представителем
        </li>
      </Ol>
      <Description>
        Ходатайство следует направить в суд по почте или через электронную
        систему подачи документов.
      </Description>
      <Title>Преимущества услуг оценочной компании «АИС ПЕРЕВОДЧИК»</Title>
      <Description>Нам доверяют, потому что:</Description>
      <Ol>
        <li>
          Осуществляем деятельность в соответствии с профильными стандартами и
          актуальными требованиями законодательства. Заказчик получает отчет об
          оценке недвижимости, который может быть использован в судебном
          процессе.
        </li>
        <li>
          Гарантируем точные и обоснованные результаты экспертизы. Средний стаж
          наших оценщиков — 14 лет. Все они состоят в крупнейших СРО. Суммы
          возмещения составляют 1 100 000 000 руб. — по полису страхования
          ответственности компании, 15 000 000 руб. — по персональным страховым
          полисам оценщиков.
        </li>
        <li>
          Обеспечиваем удобный сервис. Система менеджмента качества
          сертифицирована по ISO 9001-2015.
        </li>
        <li>
          Входим в ТОПы лидеров рынка по версиям таких ведущих рейтинговых
          агентств, как «Эксперт РА», «РАЭКС-Аналитика».
        </li>
      </Ol>
      <Title>Этапы оценки недвижимости</Title>
      <Description>
        Услуга представляет собой комплекс правовых и аналитических мероприятий:
      </Description>
      <Ol>
        <li>
          Изучение документации от заказчика: свидетельство о государственной
          регистрации права, кадастровый паспорт объекта, договор передачи
          собственности.
        </li>
        <li>
          Определение оснований для экспертизы, подписания официального
          соглашения о сотрудничестве с клиентом.
        </li>
        <li>
          Выезд оценщика на объект в согласованное время. Проведение визуального
          осмотра недвижимости на предмет износа конструкций, инженерных систем,
          необходимости ремонтных работ и др.
        </li>
        <li>
          Определение стоимости: эксперт оценивает недвижимость в соответствии с
          требованиями, указанными в ходатайстве.
        </li>
        <li>
          Подготовка отчета: специалист формирует заключение, в котором
          содержатся информация об объектах, которые были оценены, методика
          оценки, а также ее результаты.
        </li>
        <li>
          Выдача отчета заказчику. Вы предоставляете экспертное заключение в
          суд, который рассматривает его и принимает решение на основе
          полученных результатов.
        </li>
      </Ol>
      <Title>Что включает в себя отчет об оценке недвижимости для суда?</Title>
      <Description>
        Документ составляется в соответствии с требованиями законодательства и
        профессиональных стандартов. Его содержание включает:
      </Description>
      <LiColored>введение;</LiColored>
      <LiColored>исследовательскую часть;</LiColored>
      <LiColored>выводы;</LiColored>
      <LiColored>приложение с фотоматериалами;</LiColored>
      <LiColored>подпись эксперта.</LiColored>
      <Title>На какие вопросы отвечает специалист по оценке недвижимости</Title>
      <Ol>
        <li>Какова рыночная стоимость объекта недвижимости?</li>
        <li>Какая кадастровая стоимость объекта?</li>
        <li>
          Какие факторы влияют на стоимость квартиры, дома, гаража, земельного
          участка и др.?
        </li>
        <li>
          Каковы характеристики объекта недвижимости? Например: расположение,
          площадь, техническое состояние, возраст и др.
        </li>
        <li>
          Каков показатель, который отражает изменение стоимости недвижимости на
          определенном рынке за определенный период времени?
        </li>
        <li>Каковы перспективы доходности?</li>
        <li>Какие улучшения необходимы и сколько они будут стоить?</li>
        <li>Какова стоимость объекта недвижимости при налогообложении?</li>
        <li>Какая была использована методика оценки?</li>
        <li>Каковы результаты оценки?</li>
      </Ol>
      <Description>
        Чтобы заказать оценку для суда Москвы и других регионов обратитесь по
        телефону, указанному на сайте, или воспользуйтесь онлайн-формой. Наш
        сотрудник проконсультирует вас по всем вопросам, а также при
        необходимости согласует время встречи в офисе.
      </Description>
    </div>
  );
};

export default RealEstateForCourt;