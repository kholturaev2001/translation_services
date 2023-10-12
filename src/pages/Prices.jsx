import DTable from "../components/DTable";
import Footer from "../components/Footer";
import HeadBreadcrumb from "../components/HeadBreadcrumb";
import OralTranslation from "../components/TranslationTables/OralTranslation";
import TranslationFromLang from "../components/TranslationTables/TranslationFromLang";
import TranslationToLang from "../components/TranslationTables/TranslationToLang";
import Title from "../components/Typography/Title";
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
        <Title>Стоимость услуг перевода</Title>
        <div className="overflow-auto">
          <TitleColored>Стоимость перевода технического текста</TitleColored>
          <TranslationFromLang br={false} bordered={false} />
          <TranslationToLang bordered={false} />
          <br />
          <TitleColored>
            Стоимость перевода текста экономической тематики
          </TitleColored>
          <TranslationFromLang br={false} bordered={false} />
          <TranslationToLang />
          <TitleColored>Стоимость перевода финансовых документов</TitleColored>
          <TranslationFromLang br={false} bordered={false} />
          <TranslationToLang
            sng_langs="от 400"
            baltic_langs="от 550"
            east_langs="от 700"
          />
          <br />
          <TitleColored>
            Стоимость перевода программного обеспечения
          </TitleColored>
          <TranslationFromLang br={false} bordered={false} />
          <TranslationToLang east_langs="от 700" />
          <br />
          <TitleColored>
            Стоимость перевода юридических документов и бумаг
          </TitleColored>
          <TranslationFromLang br={false} bordered={false} />
          <TranslationToLang east_langs="от 700" />
          <br />
          <TitleColored>Стоимость перевода медицинских документов</TitleColored>
          <TranslationFromLang
            br={false}
            bordered={false}
            eu_langs="от 500"
            sng_langs="от 500"
            baltic_langs="от 500"
            east_langs="от 600"
          />
          <TranslationToLang
            eu_langs="от 500"
            sng_langs="от 500"
            baltic_langs="от 500"
            east_langs="от 700"
          />
          <br />
          <TitleColored>Стоимость перевода художественного текста</TitleColored>
          <TranslationFromLang
            br={false}
            bordered={false}
            eu_langs="от 500"
            sng_langs="от 500"
          />
          <TranslationToLang
            east_langs="от 700"
            eu_langs="от 500"
            sng_langs="от 500"
          />
          <br />
          <TitleColored>
            Стоимость перевода публицистических текстов
          </TitleColored>
          <TranslationFromLang
            br={false}
            bordered={false}
            eu_langs="от 400"
            sng_langs="от 400"
          />
          <TranslationToLang
            east_langs="от 700"
            eu_langs="от 400"
            sng_langs="от 400"
          />
          <br />

          <TitleColored>Стоимость перевода рекламных текстов</TitleColored>
          <TranslationFromLang br={false} bordered={false} />
          <TranslationToLang east_langs="от 700" />
          <br />
          <TitleColored>Стоимость перевода медицинских документов</TitleColored>
          <TranslationFromLang
            br={false}
            bordered={false}
            eu_langs="от 500"
            sng_langs="от 500"
          />
          <TranslationToLang
            east_langs="от 700"
            eu_langs="от 500"
            sng_langs="от 500"
          />
          <br />
          <TitleColored>Стоимость устного перевода</TitleColored>
          <OralTranslation
            br={false}
            if_discount={false}
            four_hours="от 10000"
            eight_hours="от 18000"
            extra_hours="от 1800"
          />
          <br />
          <TitleColored>Личные документы</TitleColored>
          <DTable
            dataSource={[
              {
                key: "1",
                type: "Перевод европейских паспортов",
                price: "от 1000",
              },
              {
                key: "2",
                type: "Перевод восточных паспортов (Турция, арабские страны)",
                price: "от 1300",
              },
              {
                key: "3",
                type: "Перевод остальных паспортов, с данными на английском языке",
                price: "от 1000",
              },
              {
                key: "4",
                type: "Дополнительный экземпляр перевода",
                price: "от 800",
              },
            ]}
            columns={[
              {
                dataIndex: "type",
                key: "type",
                title: "Перевод паспорта",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
            bordered
          />
          <br />
          <TitleColored>
            Стоимость перевода водительских прав и ПТС
          </TitleColored>
          <DTable
            dataSource={[
              {
                key: "1",
                type: "Европейское водительское удостоверение",
                price: "от 800",
              },
              {
                key: "2",
                type: "Водительские удостоверения стран СНГ",
                price: "от 800",
              },
              {
                key: "3",
                type: "Восточные водительские удостоверения (персидский, китайский)",
                price: "от 1100",
              },
              {
                key: "4",
                type: "Перевод остальных водительские удостоверений, с данными на английском языке",
                price: "от 800",
              },
            ]}
            columns={[
              {
                dataIndex: "type",
                key: "type",
                title: "Водительское удостоверение",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
            bordered
          />
          <br />
          <DTable
            dataSource={[
              {
                key: "1",
                type: "Перевод на английский, немецкий, испанский",
                price: "от 1400",
              },
              {
                key: "2",
                type: "Перевод на итальянский, французский",
                price: "от 2100",
              },
              {
                key: "3",
                type: "Другие языки",
                price: "от 2400",
              },
              {
                key: "4",
                type: "Нотариальная копия ПТС (если возможно)	",
                price: "от 300",
              },
              {
                key: "5",
                type: "Дополнительный экземпляр перевода	",
                price: "от 600",
              },
              {
                key: "6",
                type: "Наценка за срочность	",
                price: "25-50%",
              },
            ]}
            columns={[
              {
                dataIndex: "type",
                key: "type",
                title: "ПТС",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
            bordered
          />
          <br />
          <TitleColored>Стоимость перевода печати, апостиля</TitleColored>
          <DTable
            dataSource={[
              {
                key: "1",
                type: "Европейские печати	",
                price: "от 600",
              },
              {
                key: "2",
                type: "Печати стран СНГ",
                price: "от 600",
              },
              {
                key: "3",
                type: "Восточные печати (персидский, турецкий, иврит)",
                price: "от 900",
              },
              {
                key: "4",
                type: "Перевод остальных печатей, с данными на английском языке",
                price: "от 600",
              },
            ]}
            columns={[
              {
                dataIndex: "type",
                key: "type",
                title: "Печать",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
          />
          <br />
          <DTable
            dataSource={[
              {
                key: "1",
                type: "Английский",
                price: "от 800",
              },
              {
                key: "2",
                type: "Итальянский, испанский, французский, немецкий	",
                price: "от 800",
              },
              {
                key: "3",
                type: "Другие языки	",
                price: "от 900",
              },
              {
                key: "4",
                type: "Дополнительный экземпляр перевода",
                price: "от 600",
              },
              {
                key: "5",
                type: "Наценка за срочность",
                price: "25-50%",
              },
            ]}
            columns={[
              {
                dataIndex: "type",
                key: "type",
                title: "Апостиль",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
          />
          <br />

          <TitleColored>Стоимость перевода справок и свидетельств</TitleColored>
          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Европейские языки",
                price: "от 1000",
              },
              {
                key: "2",
                language_name: "Языки стран СНГ",
                price: "от 1000",
              },
              {
                key: "3",
                language_name: "Балтийские языки",
                price: "от 1400",
              },
              {
                key: "4",
                language_name: "Восточные языки",
                price: "от 1400",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Перевод с нотариальным заверением",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
            bordered
          />
          <br />
          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Европейские языки",
                price: "от 800",
              },
              {
                key: "2",
                language_name: "Языки стран СНГ",
                price: "от 800",
              },
              {
                key: "3",
                language_name: "Балтийские языки",
                price: "от 1000",
              },
              {
                key: "4",
                language_name: "Восточные языки",
                price: "от 1000",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Перевод с нотариальным заверением",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
          />
          <br />
          <TitleColored>
            Стоимость перевода согласий на выезд ребенка
          </TitleColored>
          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Английский",
                price: "от 1100",
              },
              {
                key: "2",
                language_name: "Языки стран Шенгенского соглашения",
                price: "от 1200",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Перевод с нотариальнам заверением",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
            bordered
          />
          <br />
          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Английский",
                price: "от 600",
              },
              {
                key: "2",
                language_name: "Языки стран Шенгенского соглашения",
                price: "от 700",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Перевод с заверением печатью бюро переводов",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
            bordered
          />
          <br />
          <TitleColored>
            Стоимость перевода аттестата и/или приложения
          </TitleColored>
          <TranslationFromLang
            br={false}
            baltic_langs="от 1000"
            sng_langs="от 900"
            east_langs="от 1200"
            eu_langs="от 1000"
            title="Перевод атестата с нотариальнам заверением"
          />
          <TranslationFromLang
            eu_langs="от 1100"
            sng_langs="от 1000"
            baltic_langs="от 1100"
            east_langs="от 1200"
            title="Перевод приложения к аттестату с нотариальнам заверением"
          />
          <br />
          <TitleColored>Стоимость перевода диплома</TitleColored>
          <TranslationFromLang
            br={false}
            baltic_langs="от 1200"
            sng_langs="от 1300"
            east_langs="от 1400"
            eu_langs="от 1500"
            title="Перевод диплома с нотариальнам заверением"
          />
          <TranslationFromLang
            eu_langs="от 2400"
            sng_langs="от 2100"
            baltic_langs="от 2200"
            east_langs="от 2300"
            title="Перевод приложения к диплому с нотариальнам заверением"
          />
          <br />
          <TitleColored>Стоимость перевода зачетной книжки</TitleColored>

          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Европейские языки",
                price: "от 900",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Перевод с нотариальнам заверением",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
          />
          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Европейские языки",
                price: "от 700",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Перевод с заверением печатью бюро переводов",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "",
              },
            ]}
          />
          <br />
          <TitleColored>
            Стоимость перевода корпоративных документов
          </TitleColored>
          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Английский язык	",
                price: "от 800",
              },
              {
                key: "2",
                language_name: "Европейские языки	",
                price: "от 800",
              },
              {
                key: "3",
                language_name: "Греческий язык",
                price: "от 900",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Оффшорные свидетельства",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
          />
          <DTable
            dataSource={[
              {
                key: "1",
                language_name: "Любые языки",
                price: "по договоренности",
              },
            ]}
            columns={[
              {
                dataIndex: "language_name",
                key: "language_name",
                title: "Устав, учредительный договор",
              },
              {
                dataIndex: "price",
                key: "price",
                width: "25%",
                title: "Цена",
              },
            ]}
          />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prices;
