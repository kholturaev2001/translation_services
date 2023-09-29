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
                object: <b className="md:text-base">Объект оценки</b>,
                price_rub: <b className="md:text-base">Цена, руб.</b>,
                deadline: <b className="md:text-base">Срок, дней</b>,
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
                price_rub: "от 18 000",
                deadline: "от 5",
              },
              {
                key: "2",
                object: "до 300 кв.м.",
                price_rub: "от 20 000",
                deadline: "от 5",
              },
              {
                key: "3",
                object: "до 500 кв.м.",
                price_rub: "от 25 000",
                deadline: "от 5",
              },
              {
                key: "4",
                object: "до 1 000 кв.м.",
                price_rub: "от 40 000",
                deadline: "от 5",
              },
              {
                key: "5",
                object: "до 3 000 кв.м.",
                price_rub: "от 50 000",
                deadline: "от 5",
              },
              {
                key: "6",
                object: "до 5 000 кв.м.",
                price_rub: "от 70 000",
                deadline: "от 5",
              },
              {
                key: "7",
                object: "до 10 000 кв.м.",
                price_rub: "от 80 000",
                deadline: "от 7",
              },
              {
                key: "8",
                object: "до 20 000 кв.м.",
                price_rub: "от 100 000",
                deadline: "от 7",
              },
              {
                key: "9",
                object: "до 40 000 кв.м.",
                price_rub: "от 130 000",
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
                price_rub: "от 15 000",
                deadline: "от 3",
              },
              {
                key: "2",
                object: "до 300 кв.м.",
                price_rub: "от 18 000",
                deadline: "от 3",
              },
              {
                key: "3",
                object: "до 500 кв.м.",
                price_rub: "от 25 000",
                deadline: "от 3",
              },
              {
                key: "4",
                object: "до 1 000 кв.м.",
                price_rub: "от 30 000",
                deadline: "от 5",
              },
              {
                key: "5",
                object: "до 3 000 кв.м.",
                price_rub: "от 40 000",
                deadline: "от 5",
              },
              {
                key: "6",
                object: "до 5 000 кв.м.",
                price_rub: "от 60 000",
                deadline: "от 7",
              },
              {
                key: "7",
                object: "до 7 000 кв.м.",
                price_rub: "от 90 000",
                deadline: "от 7",
              },
              {
                key: "8",
                object: "от 7 000 кв.м.",
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
                price_rub: "от 12 000",
                deadline: "от 3",
              },
              {
                key: "2",
                object: "до 25 соток",
                price_rub: "от 15 000",
                deadline: "от 3",
              },
              {
                key: "3",
                object: "до 40 соток",
                price_rub: "от 20 000",
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
                price_rub: "от 25 000",
                deadline: "от 5",
              },
              {
                key: "2",
                object: "до 1 га",
                price_rub: "от 60 000",
                deadline: "от 5",
              },
              {
                key: "3",
                object: "до 5 га",
                price_rub: "от 85 000",
                deadline: "от 7",
              },
              {
                key: "4",
                object: "до 10 га",
                price_rub: "от 120 000",
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
                price_rub: "от 20 000",
                deadline: "от 7",
              },
              {
                key: "3",
                object: "до 10 га",
                price_rub: "от 35 000",
                deadline: "от 10",
              },
              {
                key: "4",
                object: "до 50 га",
                price_rub: "от 65 000",
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
                price_rub: "от 5 500",
                deadline: "от 2",
              },
              {
                key: "2",
                object: "от 100 кв.м.",
                price_rub: "от 10 000",
                deadline: "от 3",
              },
              {
                key: "3",
                object: "доля квартиры, комната",
                price_rub: "от 5 500",
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prices;
