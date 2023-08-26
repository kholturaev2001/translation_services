import s_img from "../../assets/images/services/valuation/store.jpg";

const ServiceCard = ({ img = s_img, deadline, price }) => {
  function formattedNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <div className="flex justify-center">
      <div className="md:max-w-[1000px] max-w-[100%] flex flex-col m-auto md:h-[400px] mx-3">
        <p className="text-xl font-semibold py-3">Независимая оценка склада</p>
        <div className="flex md:flex-row flex-col gap-[30px] items-center justify-center bg-gray-100 rounded-lg overflow-hidden h-full md:pb-0 pb-4 shadow-xl">
          <img
            src={img}
            alt="service"
            className="md:w-[50%] w-full h-full object-cover"
          />
          <div className="flex flex-col items-center justify-center text-sm mx-3">
            <p className="text-xl font-semibold text-center">
              Появились вопросы по услуге?
            </p>
            <p className="leading-6 text-center my-2">
              Закажите обратный звонок - специалисты АИС ПЕРЕВОДЧИК в ближайшее
              время свяжутся с Вами для уточнения подробностей по услуге.
            </p>
            <div className="my-2">
              {deadline && (
                <p>
                  Сроки ................ <b>5 дней</b>
                </p>
              )}
              {price && (
                <p>
                  Цена ........... от <b>{formattedNumber(price)}</b> ₽
                </p>
              )}
            </div>
            <button className="my-2 border-2 rounded-3xl hover:border-[#33a3ed] duration-500 ease-in-out  text-center py-3 px-6  bg-[#33a3ed] hover:bg-gray-100 text-white font-semibold hover:text-[#33a3ed]">
              Заказать услугу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
