import DTable from "../components/DTable";
import Footer from "../components/Footer";
import HeadBreadcrumb from "../components/HeadBreadcrumb";
import Title from "../components/Typography/Title";
import Title2Colored from "../components/Typography/Title2Colored";
import TitleColored from "../components/Typography/TitleColored";

const Prices = () => {
  return (
    <>
      <div className="md:max-w-[1280px] mx-auto md:px-0 px-3 flex flex-col ">
        <HeadBreadcrumb
          items={[
            {
              title: "Главная",
            },
            {
              title: "Цены",
            },
          ]}
        />
        <Title>
          Стоимость услуг - прайс на независимую оценку, экспертизу, снижение
          налогов и юридические услуги
        </Title>
        <div className="overflow-auto">
          <TitleColored>
            Независимая оценка стоимости имущества, активов
          </TitleColored>
          <DTable
            bordered
            showHeader={false}
            dataSource={[
              {
                key: "1",
                object: (
                  <b className="md:text-base text-[12px] ">Объект оценки</b>
                ),
                price_rub: (
                  <b className="md:text-base text-[12px]">Цена, руб.</b>
                ),
                deadline: (
                  <b className="md:text-base text-[12px] ">Срок, дней</b>
                ),
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
          />
          <Title2Colored>Нежилое здание</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 50 кв.м.",
                price_rub: "от 18000",
                deadline: "от 5",
              },
              {
                key: "2",
                object: "до 300 кв.м.",
                price_rub: "от 20000",
                deadline: "от 5",
              },
              {
                key: "3",
                object: "до 500 кв.м.",
                price_rub: "от 25000",
                deadline: "от 5",
              },
              {
                key: "4",
                object: "до 1000 кв.м.",
                price_rub: "от 40000",
                deadline: "от 5",
              },
              {
                key: "5",
                object: "до 3000 кв.м.",
                price_rub: "от 50000",
                deadline: "от 5",
              },
              {
                key: "6",
                object: "до 5000 кв.м.",
                price_rub: "от 70000",
                deadline: "от 5",
              },
              {
                key: "7",
                object: "до 10000 кв.м.",
                price_rub: "от 80000",
                deadline: "от 7",
              },
              {
                key: "8",
                object: "до 20000 кв.м.",
                price_rub: "от 100000",
                deadline: "от 7",
              },
              {
                key: "9",
                object: "до 40000 кв.м.",
                price_rub: "от 130000",
                deadline: "от 7",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Нежилое помещение</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 50 кв.м.",
                price_rub: "от 15000",
                deadline: "от 3",
              },
              {
                key: "2",
                object: "до 300 кв.м.",
                price_rub: "от 18000",
                deadline: "от 3",
              },
              {
                key: "3",
                object: "до 500 кв.м.",
                price_rub: "от 25000",
                deadline: "от 3",
              },
              {
                key: "4",
                object: "до 1000 кв.м.",
                price_rub: "от 30000",
                deadline: "от 5",
              },
              {
                key: "5",
                object: "до 3000 кв.м.",
                price_rub: "от 40000",
                deadline: "от 5",
              },
              {
                key: "6",
                object: "до 5000 кв.м.",
                price_rub: "от 60000",
                deadline: "от 7",
              },
              {
                key: "7",
                object: "до 7000 кв.м.",
                price_rub: "от 90000",
                deadline: "от 7",
              },
              {
                key: "8",
                object: "от 7000 кв.м.",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Земельный участок ИЖС, СНТ</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 10 соток",
                price_rub: "от 12000",
                deadline: "от 3",
              },
              {
                key: "2",
                object: "до 25 соток",
                price_rub: "от 15000",
                deadline: "от 3",
              },
              {
                key: "3",
                object: "до 40 соток",
                price_rub: "от 20000",
                deadline: "от 5",
              },
              {
                key: "4",
                object: "от 40 соток",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>
            Земельный участок промышленного назначения
          </Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 0,5 га",
                price_rub: "от 25000",
                deadline: "от 5",
              },
              {
                key: "2",
                object: "до 1 га",
                price_rub: "от 60000",
                deadline: "от 5",
              },
              {
                key: "3",
                object: "до 5 га",
                price_rub: "от 85000",
                deadline: "от 7",
              },
              {
                key: "4",
                object: "до 10 га",
                price_rub: "от 120000",
                deadline: "от 10",
              },
              {
                key: "5",
                object: "от 10 га",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>
            Земельный участок сельскохозяйственного назначения
          </Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "2",
                object: "до 1 га",
                price_rub: "от 20000",
                deadline: "от 7",
              },
              {
                key: "3",
                object: "до 10 га",
                price_rub: "от 35000",
                deadline: "от 10",
              },
              {
                key: "4",
                object: "до 50 га",
                price_rub: "от 65000",
                deadline: "от 14",
              },
              {
                key: "5",
                object: "от 50 га",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Квартира</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 100 кв.м.",
                price_rub: "от 5500",
                deadline: "от 2",
              },
              {
                key: "2",
                object: "от 100 кв.м.",
                price_rub: "от 10000",
                deadline: "от 3",
              },
              {
                key: "3",
                object: "доля квартиры, комната",
                price_rub: "от 5500",
                deadline: "от 2",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Жилой дом с земельным участком</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 100 кв.м. (ЗУ до 10 соток)",
                price_rub: "от 15000",
                deadline: "от 5",
              },
              {
                key: "2",
                object: "до 300 кв.м. (ЗУ до 25 соток)",
                price_rub: "от 18000",
                deadline: "от 5",
              },
              {
                key: "3",
                object: "от 300 кв.м. (ЗУ до 40 соток)",
                price_rub: "от 25000",
                deadline: "от 5",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Гараж</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "гараж некапитальный, бокс, машиноместо",
                price_rub: "от 6000",
                deadline: "от 3",
              },
              {
                key: "2",
                object: "гараж капитальный",
                price_rub: "от 6500",
                deadline: "от 5",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Серийное оборудование</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 10 единиц",
                price_rub: "от 15000",
                deadline: "от 5",
              },
              {
                key: "2",
                object: "10-100 единиц",
                price_rub: "от 28000",
                deadline: "от 10",
              },
              {
                key: "3",
                object: "100-500 единиц",
                price_rub: "от 30000",
                deadline: "от 14",
              },
              {
                key: "4",
                object: "более 500 единиц	",
                price_rub: "от 200 за 1 ед.",
                deadline: "от 14",
              },
              {
                key: "5",
                object: "технологическая линия",
                price_rub: "от 25000",
                deadline: "от 7",
              },
              {
                key: "6",
                object: "технологический комплекс",
                price_rub: "от 45000",
                deadline: "от 7",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Транспорт</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "автотранспортные средства	",
                price_rub: "от 6000",
                deadline: "от 2",
              },
              {
                key: "2",
                object: "автотранспортные средства элитные	",
                price_rub: "от 10000",
                deadline: "от 3",
              },
              {
                key: "3",
                object: "специализированная техника	",
                price_rub: "от 10000",
                deadline: "от 5",
              },
              {
                key: "4",
                object: "железнодорожный транспорт	",
                price_rub: "от 10000",
                deadline: "от 7",
              },
              {
                key: "5",
                object: "плавательные суда	",
                price_rub: "от 30000",
                deadline: "от 7",
              },
              {
                key: "6",
                object: "воздушный транспорт",
                price_rub: "от 40000",
                deadline: "от 14",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Ущерб</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "от залива, пожара квартиры (отделка)	",
                price_rub: "от 40000",
                deadline: "от 14",
              },
              {
                key: "2",
                object: "от залива, пожара нежилого помещения (отделка)",
                price_rub: "от 40000",
                deadline: "от 14",
              },
              {
                key: "3",
                object: "от залива, пожара за каждую единицу имущества	",
                price_rub: "по запросу",
                deadline: "от 14",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Бизнес и нематериальные активы</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object:
                  "малые организации (балансовая стоимость активов до 5 млн. рублей)	",
                price_rub: "от 40000",
                deadline: "от 10",
              },
              {
                key: "2",
                object:
                  "средние организации (балансовая стоимость активов до 50 млн. рублей)",
                price_rub: "от 60000",
                deadline: "от 14",
              },
              {
                key: "3",
                object:
                  "крупные организации (балансовая стоимость активов от 50 млн. рублей)",
                price_rub: "по запросу",
                deadline: "от 20",
              },
              {
                key: "4",
                object: "долговые обязательства	",
                price_rub: "от 20000",
                deadline: "по запросу",
              },
              {
                key: "5",
                object: "интеллектуальная собственность	",
                price_rub: "от 35000",
                deadline: "по запросу",
              },
              {
                key: "6",
                object: "ценные бумаги	",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
              {
                key: "7",
                object: "акции котируемые	",
                price_rub: "от 5000	",
                deadline: "от 2",
              },
              {
                key: "8",
                object: "акции некотируемые	",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <br />
          <TitleColored>
            Оценка рыночной стоимости недвижимости для оспаривания кадастровой
            стоимости
          </TitleColored>
          <DTable
            bordered
            showHeader={false}
            dataSource={[
              {
                key: "1",
                object: (
                  <b className="md:text-base text-[12px] ">Объект оценки</b>
                ),
                price_rub: (
                  <b className="md:text-base text-[12px]">Цена, руб.</b>
                ),
                deadline: (
                  <b className="md:text-base text-[12px] ">Срок, дней</b>
                ),
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
          />
          <Title2Colored>Нежилое здание</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 50 кв.м.",
                price_rub: "от 25000",
                deadline: "от 7",
              },
              {
                key: "2",
                object: "до 300 кв.м.",
                price_rub: "от 30000",
                deadline: "от 7",
              },
              {
                key: "3",
                object: "до 500 кв.м.",
                price_rub: "от 45000",
                deadline: "от 7",
              },
              {
                key: "4",
                object: "до 1000 кв.м.",
                price_rub: "от 60000",
                deadline: "от 7",
              },
              {
                key: "5",
                object: "до 3000 кв.м.",
                price_rub: "от 80000",
                deadline: "от 14",
              },
              {
                key: "6",
                object: "до 5000 кв.м.",
                price_rub: "от 100000",
                deadline: "от 14",
              },
              {
                key: "7",
                object: "до 10000 кв.м.",
                price_rub: "от 150000",
                deadline: "от 14",
              },
              {
                key: "8",
                object: "до 20000 кв.м.",
                price_rub: "от 160000",
                deadline: "от 14",
              },
              {
                key: "9",
                object: "до 40000 кв.м.",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Нежилое помещение</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 50 кв.м.",
                price_rub: "от 15000",
                deadline: "от 7",
              },
              {
                key: "2",
                object: "до 300 кв.м.",
                price_rub: "от 25000",
                deadline: "от 7",
              },
              {
                key: "3",
                object: "до 500 кв.м.",
                price_rub: "от 40000",
                deadline: "от 7",
              },
              {
                key: "4",
                object: "до 1000 кв.м.",
                price_rub: "от 50000",
                deadline: "от 10",
              },
              {
                key: "5",
                object: "до 3000 кв.м.",
                price_rub: "от 70000",
                deadline: "от 14",
              },
              {
                key: "6",
                object: "до 5000 кв.м.",
                price_rub: "от 95000",
                deadline: "от 14",
              },
              {
                key: "7",
                object: "до 7000 кв.м.",
                price_rub: "от 120000",
                deadline: "от 14",
              },
              {
                key: "8",
                object: "от 7000 кв.м.",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>
            Земельный участок промышленного назначения
          </Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 0,5 га",
                price_rub: "от 30000",
                deadline: "от 7",
              },
              {
                key: "2",
                object: "до 1 га",
                price_rub: "от 60000",
                deadline: "от 7",
              },
              {
                key: "3",
                object: "до 5 га",
                price_rub: "от 10000",
                deadline: "от 10",
              },
              {
                key: "4",
                object: "до 10 га",
                price_rub: "от 130000",
                deadline: "от 14",
              },
              {
                key: "5",
                object: "от 10 га",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>
            Земельный участок сельскохозяйственного назначения
          </Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "2",
                object: "до 1 га",
                price_rub: "от 20000",
                deadline: "от 7",
              },
              {
                key: "3",
                object: "до 10 га",
                price_rub: "от 35000",
                deadline: "от 10",
              },
              {
                key: "4",
                object: "до 50 га",
                price_rub: "от 65000",
                deadline: "от 14",
              },
              {
                key: "5",
                object: "от 50 га",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Земельный участок ИЖС, СНТ</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 10 соток",
                price_rub: "от 20000",
                deadline: "по запросу",
              },
              {
                key: "2",
                object: "до 25 соток",
                price_rub: "от 30000",
                deadline: "по запросу",
              },
              {
                key: "3",
                object: "до 40 соток",
                price_rub: "от 50000",
                deadline: "по запросу",
              },
              {
                key: "4",
                object: "от 40 соток",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Квартира</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 100 кв.м.",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
              {
                key: "2",
                object: "от 100 кв.м.",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
              {
                key: "3",
                object: "доля квартиры, комната",
                price_rub: "по запросу",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Жилой дом с земельным участком</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "до 100 кв.м. (ЗУ до 10 соток)",
                price_rub: "от 17000",
                deadline: "от 10",
              },
              {
                key: "2",
                object: "до 300 кв.м. (ЗУ до 25 соток)",
                price_rub: "от 20000",
                deadline: "от 10",
              },
              {
                key: "3",
                object: "от 300 кв.м. (ЗУ до 40 соток)",
                price_rub: "от 25000",
                deadline: "от 10",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <Title2Colored>Гараж</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "гараж некапитальный, бокс, машиноместо",
                price_rub: "от 15000",
                deadline: "от 7",
              },
              {
                key: "2",
                object: "гараж капитальный",
                price_rub: "от 1500",
                deadline: "от 7",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <br />
          <TitleColored>
            Оспаривание кадастровой стоимости недвижимости
          </TitleColored>
          <DTable
            bordered
            showHeader={false}
            dataSource={[
              {
                key: "1",
                object: "",
                price_rub: (
                  <b className="md:text-base text-[12px]">Цена, руб.</b>
                ),
                deadline: (
                  <b className="md:text-base text-[12px] ">Срок, дней</b>
                ),
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
          />
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object:
                  "Юридическое сопровождение процедуры оспаривания кадастровой стоимости	",
                price_rub: "от 70000",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <TitleColored>Исключение недвижимости из перечня 700-ПП</TitleColored>
          <DTable
            bordered
            showHeader={false}
            dataSource={[
              {
                key: "1",
                object: (
                  <b className="md:text-base text-[12px] ">Объект оценки</b>
                ),
                price_rub: (
                  <b className="md:text-base text-[12px]">Цена, руб.</b>
                ),
                deadline: (
                  <b className="md:text-base text-[12px] ">Срок, дней</b>
                ),
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
          />
          <Title2Colored>Здание</Title2Colored>
          <DTable
            bordered
            dataSource={[
              {
                key: "4",
                object: "до 1000 кв.м.",
                price_rub: "от 75000",
                deadline: "по запросу",
              },
              {
                key: "5",
                object: "до 5000 кв.м.",
                price_rub: "от 90000",
                deadline: "по запросу",
              },
              {
                key: "6",
                object: "до 10000 кв.м.",
                price_rub: "от 105000",
                deadline: "по запросу",
              },
              {
                key: "7",
                object: "от 10000 кв.м.",
                price_rub: "от 125000",
                deadline: "по запросу",
              },
            ]}
            columns={[
              {
                dataIndex: "object",
                key: "object",
              },
              {
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
            showHeader={false}
          />
          <TitleColored>Судебные экспертизы</TitleColored>
          <DTable
            bordered
            dataSource={[
              {
                key: "1",
                object: "Строительно-техническая экспертиза",
                price_rub: "от 35000",
                deadline: "от 10",
              },
              {
                key: "2",
                object: "Техническая экспертиза документов",
                price_rub: "от 25000",
                deadline: "от 25",
              },
              {
                key: "3",
                object: "Почерковедческая экспертиза",
                price_rub: "от 15000",
                deadline: "от 7",
              },
              {
                key: "4",
                object: "Финансово-экономическая экспертиза",
                price_rub: "от 50000",
                deadline: "от 10",
              },
              {
                key: "5",
                object: "Бухгалтерская экспертиза",
                price_rub: "от 50000",
                deadline: "от 10",
              },
              {
                key: "6",
                object: "Лингвистическая экспертиза",
                price_rub: "от 40000",
                deadline: "от 15",
              },
              {
                key: "7",
                object: "Фоноскопическая экспертиза",
                price_rub: "от 40000",
                deadline: "от 10",
              },
              {
                key: "8",
                object: "Компьютерно-техническая экспертиза",
                price_rub: "от 35000",
                deadline: "от 10",
              },
              {
                key: "9",
                object: "Экспертиза интеллектуальной деятельности",
                price_rub: "от 50000",
                deadline: "от 10",
              },
              {
                key: "10",
                object: "Товароведческая экспертиза",
                price_rub: "от 35000",
                deadline: "от 5",
              },
              {
                key: "11",
                object: "Автотехническая экспертиза",
                price_rub: "от 25000",
                deadline: "от 10",
              },
              {
                key: "12",
                object: "Землеустроительная экспертиза",
                price_rub: "от 30000",
                deadline: "от 15",
              },
              {
                key: "13",
                object: "Пожарная экспертиза",
                price_rub: "от 45000",
                deadline: "от 5",
              },
              {
                key: "14",
                object: "Оценочная экспертиза",
                price_rub: "от 15000",
                deadline: "от 10",
              },
            ]}
            columns={[
              {
                title: "",
                dataIndex: "object",
                key: "object",
              },
              {
                title: "Цена, руб.",
                dataIndex: "price_rub",
                key: "price_rub",
                width: "20%",
              },
              {
                title: "Срок, дней",
                dataIndex: "deadline",
                key: "deadline",
                width: "20%",
              },
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prices;
