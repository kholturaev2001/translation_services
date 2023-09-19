import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/independent_judical_expert.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import DTable from "../../../components/DTable";
import { useNavigate } from "react-router-dom";

const IndependentJudicalExpert = () => {
  const navigate = useNavigate();

  const goTo = (url) => {
    navigate(url);
  };

  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Экспертиза",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 5 дней"
        price={15000}
        title="Независимая судебная экспертиза"
      />
      <Description>
        Обратитесь к нам для проведения судебных экспертиз и внесудебных
        исследований, составления рецензий на заключения сторонних экспертных
        компаний и частных экспертов. Получите исчерпывающую информацию по
        вопросам назначения и проведения экспертиз на консультации в «АИС
        ПЕРЕВОДЧИК».
      </Description>
      <Description>
        <b>ОЦЕНОЧНАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Оценка недвижимости, земельных участков, незавершенного строительства,
        ценных бумаг, бизнеса, предприятия, транспорта, объектов
        интеллектуальной собственности, сервитута, прав; оценка ущерба после
        пожара или залива.
      </Description>
      <br />
      <Description>
        <b>СТРОИТЕЛЬНАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Экспертиза зданий и сооружений, фундамента, кровли, окон, материалов;
        качества, стоимости и объема работ; проектов и смет; квартиры от
        застройщика. Экспертиза для сноса или легализации самовольной постройки,
        для определения вариантов раздела дома. Экспертиза размеров ущерба после
        залива или пожара. Экспертиза дорог и дорожных покрытий, газопроводов и
        нефтепроводов.
      </Description>
      <br />
      <Description>
        <b>ИНЖЕНЕРНО-ТЕХНИЧЕСКАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Экспертиза холодильного, производственного, промышленного,
        электрического, медицинского, котлового, лифтового, измерительного
        оборудования и техники; инженерных сетей; технологического процесса.
        Технологическая пожарно-техническая, электротехническая экспертиза.
      </Description>
      <br />
      <Description>
        <b>ЗЕМЛЕУСТРОИТЕЛЬНАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Экспертиза кадастровой ошибки; экспертиза для определения границ или
        площади, вариантов раздела участка; для установления сервитута.
      </Description>
      <br />
      <Description>
        <b>КРИМИНАЛИСТИЧЕСКИЕ ЭКСПЕРТИЗЫ</b>
      </Description>
      <Description>
        Почерковедческая, портретная, трасологическая,
        технико-криминалистическая, фототехническая, дактилоскопическая,
        экспертиза давности создания документов.
      </Description>
      <br />
      <Description>
        <b>ФОНОСКОПИЧЕСКАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Установление личности и состояния говорящего по признакам голоса и речи;
        установление дословного содержания записи, факта стирания, перезаписи,
        монтажа, фрагментарности записи; идентификация записывающего устройства.
      </Description>
      <br />
      <Description>
        <b>ХИМИЧЕСКАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Экспертиза объектов волокнистой природы, лакокрасочных материалов и
        покрытий, металлов, нефтепродуктов, горюче-смазочных материалов, стекла,
        полимерных материалов, пластмасс, резин и изделий из них, алкоголя и
        спиртосодержащих жидкостей, косметики, пищевых продуктов.
      </Description>
      <br />
      <Description>
        <b>АВТОТЕХНИЧЕСКАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Экспертиза инженерных механизмов транспорта, состояния транспортных
        средств, обстоятельств ДТП, дорожных условий; автооценочная экспертиза.
      </Description>
      <br />
      <Description>
        <b>ТОВАРОВЕДЧЕСКАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Экспертиза непродовольственных товаров и бытовой техники для определения
        характеристик и потребительских свойств, выявления механизма
        возникновения дефектов.
      </Description>
      <br />
      <Description>
        <b>ЭКОНОМИЧЕСКАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Бухгалтерская, финансово-экономическая, налоговая экспертиза; экспертиза
        по делу о банкротстве; экспертиза обоснованности заработной платы.
      </Description>
      <br />
      <Description>
        <b>КОМПЬЮТЕРНО-ТЕХНИЧЕСКАЯ ЭКСПЕРТИЗА</b>
      </Description>
      <Description>
        Экспертиза средств связи; обстоятельств создания и использования файлов
        и баз данных, компьютерных средств, сетей.
      </Description>
      <br />
      <Description>
        <b>РЕЧЕВЕДЧЕСКИЕ ЭКСПЕРТИЗЫ</b>
      </Description>
      <Description>
        Лингвистическая экспертиза; экспертиза по делам, затрагивающим деловую
        репутацию; по установлению степени сходства объектов интеллектуальной
        собственности. Установление смыслового содержания устной речи и текстов
        документов; выявление завуалированной информации, признаков плагиата,
        клеветы, угрозы, экстремизма.
      </Description>
      <br />
      <Description>
        <b>ПРОЧИЕ ЭКСПЕРТИЗЫ</b>
      </Description>
      <Description>
        Правовая и юридическая; искусствоведческая и культурологическая;
        сельскохозяйственная, биологическая, экологическая, почвоведческая,
        сельскохозяйственная, минералогическая; психологическая и
        психиатрическая, видеотехническая и автороведческая. Экспертиза объектов
        интеллектуальной собственности. Комиссионные и комплексные экспертизы.
      </Description>
      <Title>Стоимость проведения судебных экспертиз</Title>
      <DTable
        onRow={(record) => {
          return {
            onClick: () => {
              if (record.url) {
                goTo(record.url);
              }
            },
          };
        }}
        dataSource={[
          {
            key: "1",
            type: "Строительно-техническая экспертиза",
            price: "от 35 000 руб",
            deadline: "от 10 дней",
          },
          {
            key: "2",
            type: "Техническая экспертиза документов",
            url: "/services/statute_of_limitations_for_compiling_a_document_expert",
            price: "от 25 000 руб",
            deadline: "от 25 дней",
          },
          {
            key: "3",
            type: "Почерковедческая экспертиз",
            url: "/services/handwriting_expert",
            price: "от 15 000 руб",
            deadline: "от 7 дней",
          },
          {
            key: "4",
            type: "Финансово-экономическая экспертиза",
            url: "/services/financial_and_economic_expert",
            price: "от 50 000 руб",
            deadline: "от 10 дней",
          },
          {
            key: "5",
            type: "Бухгалтерская экспертиза",
            url: "/services/accounting_expert",
            price: "от 50 000 руб",
            deadline: "от 10 дней",
          },
          {
            key: "6",
            type: "Лингвистическая экспертиза",
            url: "/services/linguistic_expert",
            price: "от 40 000 руб",
            deadline: "от 15 дней",
          },
          {
            key: "7",
            type: "Фоноскопическая экспертиза",
            url: "/services/phonoscopic_expert",
            price: "от 40 000 руб",
            deadline: "от 10 дней",
          },
          {
            key: "8",
            type: "Компьютерно-техническая экспертиза",
            url: "/services/computer_and_technical_expert",
            price: "от 35 000 руб",
            deadline: "от 10 дней",
          },
          {
            key: "9",
            type: "Экспертиза интеллектуальной собственности",
            url: "/services/intellectual_activity_objects_expert",
            price: "от 50 000 руб",
            deadline: "от 10 дней",
          },
          {
            key: "10",
            type: "Товароведческая экспертиза",
            url: "/services/commodity_expert",
            price: "от 35 000 руб",
            deadline: "от 5 дней",
          },
          {
            key: "11",
            type: "Автотехническая экспертиза",
            url: "/services/automotive_expert",
            price: "от 25 000 руб",
            deadline: "от 10 дней",
          },
          {
            key: "12",
            type: "Землеустроительная экспертиза",
            url: "/services/land_management_expert",
            price: "от 30 000 руб",
            deadline: "от 15 дней",
          },
          {
            key: "13",
            type: "Пожарная экспертиза",
            url: "/services/fire_expert",
            price: "от 45 000 руб",
            deadline: "от 5 дней",
          },
          {
            key: "14",
            type: "Оценочная экспертиза",
            url: "/services/appraisal_expert",
            price: "от 15 000 руб",
            deadline: "от 10 дней",
          },
        ]}
        columns={[
          {
            title: "Тип",
            dataIndex: "type",
            key: "type",
          },
          {
            title: "Цена",
            dataIndex: "price",
            key: "price",
          },
          {
            title: "Сроки",
            dataIndex: "deadline",
            key: "deadline",
          },
        ]}
        bordered
      />
    </div>
  );
};

export default IndependentJudicalExpert;
