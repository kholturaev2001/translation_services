import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/commodity_expert.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import DTable from "../../../components/DTable";
import Ul from "./../../../components/Typography/Ul";
import Title2 from "./../../../components/Typography/Title2";

const CommodityExpert = () => {
  return (
    <div>
<HeadBreadcrumb
        items={[
          {
            title: 'Главная'
          },
          {
            title: "Экспертиза",
          },
          {
            title: "Товароведческая",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 5 дней"
        price={35000}
        title="Товароведческая экспертиза"
      />
      <Description>
        В условиях современной торговли между сторонами купли-продажи, а именно
        продавцом и покупателем, не редкостью являются конфликты. В большинстве
        случаев они основаны на претензиях покупателя к качеству предлагаемого
        или приобретенного продукта. Под продуктом здесь понимаются продукты
        питания, одежда, обувь, аксессуары к одежде, предметы интерьера и пр.
        Именно в целях разрешения таких споров применяется товароведческая
        экспертиза.
      </Description>
      <Description>
        Указанная экспертиза помогает найти ответы на вопросы о качестве
        продукта, соответствие заявленных производителем и продавцом
        характеристик с фактическими показателями, выявить эксплуатационные
        повреждения или производственный брак и найти причины его появления.
      </Description>
      <Title>Стоимость услуги</Title>
      <Description>
        Прайс-лист на проведение товароведческой экспертизы различных товаров
      </Description>
      <div className="md:w-full w-full overflow-auto md:scale-100 scale-[90%]">
        <DTable
          dataSource={[
            {
              key: "1",
              product_name: "Экспертиза обуви",
              before_court: "6000",
              for_court: "12000",
            },
            {
              key: "2",
              product_name: "Экспертиза вещей (одежда, сумки, очки, шубы)",
              before_court: "10000",
              for_court: "20000",
            },
            {
              key: "3",
              product_name: "Экспертиза мебели",
              before_court: "10000",
              for_court: "20000",
            },
            {
              key: "4",
              product_name:
                "Экспертиза мобильного телефона (электротехническая)",
              before_court: "10000",
              for_court: "20000",
            },
            {
              key: "5",
              product_name:
                "Экспертиза электроники и бытовой техники (телевизоры, кофемашины, стиральные машины, ноутбуки, холодильники, посудомоечные машины и тд) (электротехническая)",
              before_court: "15000",
              for_court: "30000",
            },
            {
              key: "6",
              product_name: "Экспертиза ювелирных изделий (геммологическая)",
              before_court: "20000",
              for_court: "30000",
            },
            {
              key: "7",
              product_name: "Экспертиза сантехники	",
              before_court: "10000",
              for_court: "20000",
            },
            {
              key: "8",
              product_name:
                "Экспертиза оборудования (электрооборудование, лифтовое оборудование, насосное оборудование и тд.)",
              before_court: "20000",
              for_court: "30000",
            },
          ]}
          columns={[
            {
              dataIndex: "product_name",
              key: "product_name",
              title: "Наименование экспертизы	",
            },
            {
              dataIndex: "before_court",
              key: "before_court",
              width: "20%",
              title: "Стоимость досудебной экспертизы за 1 ед. руб	",
            },
            {
              dataIndex: "for_court",
              key: "for_court",
              width: "20%",
              title: "Стоимость экспертизы для суда за 1 ед. руб",
            },
          ]}
        />
        <Title>Объекты исследования</Title>
        <Description>
          Товароведческая экспертиза рассматривает объекты:
        </Description>
        <Ul>
          <li>
            все продукты из потребительской корзины: мясо, рыба, хлебобулочные и
            кондитерские изделия, молочные продукты, алкогольные,
            слабоалкогольные и безалкогольные напитки, чай, кофе;
          </li>
          <li>любые предметы одежды и обуви;</li>
          <li>кожа и кожгалантерея;</li>
          <li>мех и меховые изделия;</li>
          <li>бытовая, оргтехника и пр.</li>
        </Ul>
        <Description>
          Главной задачей, стоящей перед экспертом, является проверка качества
          предоставленного образца, его соответствие принятым нормативам и
          стандартам. Урегулирование споров между продавцом, покупателем и
          конечным потребителем также является задачей эксперта при проведении
          экспертизы.
        </Description>
        <Title2>Основные методы товароведческих экспертиз</Title2>
        <Ul>
          <li>
            Качественный – исследование свойств объекта без их количественного
            измерения. К примеру, густоты, пышности и цвета ворса, или текстуры
            древесины
          </li>
          <li>
            Количественный – изучение свойств объекта и измерение их численных
            значений путем применения технических средств;
          </li>
          <li>
            Органолептический – выявление характерных свойств объекта по
            признакам их внешнего проявления;
          </li>
          <li>
            Механический – исследования деформационно-прочностных свойств
            (гибкости, вязкости, твердости и др.) объектов.
          </li>
        </Ul>
        <Title2>Важно!</Title2>
        <Description>
          Манипуляции, осуществляемые специалистом в ходе проведения экспертизы
          механическим методом, зачастую сопровождаются разрушением объекта
          экспертизы.
        </Description>
        <Description>
          <b>Вопросы, стоящие перед экспертом:</b>
        </Description>
        <Ul>
          <li>
            Имеется ли факт нарушения, в ходе выполнения экспертного
            исследования, установленных стандартов качества и нормативам?
          </li>
          <li>
            Соответствие товара заявленным производителем характеристикам и
            потребительским свойствам изделия (товара), установленных в
            промышленности для данного типа/вида продукта?
          </li>
          <li>
            Исследуемые объекты являются новыми, или бывшими в
            использовании/эксплуатации?
          </li>
          <li>
            Соблюдались ли определенные нормативы и правила при приемке,
            транспортировке, хранении и продажи объектов исследования?
          </li>
          <li>
            Могли ли перевозка или хранение объекта исследование повлиять на его
            качественные свойства?
          </li>
          <li>
            Были ли при проведении экспертного исследования обнаружены дефекты в
            исследуемом товаре?
          </li>
          <li>
            Характер образования обнаруженных дефектов товара, появившихся в
            следствии эксплуатации, производства, износа материалов или
            компонентов используемых в производстве изделий?
          </li>
        </Ul>
        <Title2>Важно!</Title2>
        <Description>
          Выше приведен не полный список вопросов. В каждой отдельно
          рассматриваемой ситуации, могут возникнуть дополнительные вопросы. При
          необходимости постановки новых вопросов, следует обратиться с ними к
          эксперту до момента начала проведения экспертизы.
        </Description>
      </div>
    </div>
  );
};

export default CommodityExpert;
