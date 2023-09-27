import Footer from "../components/Footer";
import HeadBreadcrumb from "../components/HeadBreadcrumb";
import Title from "../components/Typography/Title";

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
        <Title>Стоимость услуг - прайс на независимую оценку, экспертизу, снижение налогов и юридические услуги
</Title>
      </div>
      <Footer />
    </>
  );
};

export default Prices;
