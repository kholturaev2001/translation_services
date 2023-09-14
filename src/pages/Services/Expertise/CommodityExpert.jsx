import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/commodity_expert.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import DTable from "../../../components/DTable";

const CommodityExpert = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Экспертиза",
          },
          {
            title: "Почерковедческая",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 5 дней"
        price={35000}
        title="Почерковедческая экспертиза"
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
      </div>
    </div>
  );
};

export default CommodityExpert;
