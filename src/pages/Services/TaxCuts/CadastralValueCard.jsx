const CadastralValueCard = ({
  object,
  service,
  region,
  cadastralPrice,
  price,
  taxPeriod,
  taxEconomy,
  percent
}) => {
  return (
    <div className="relative p-7 m-2 text-[12px] md:text-sm shadow-xl flex flex-col gap-3 uppercase max-w-[330px] min-h-[400px]">
      <div className="absolute flex  items-center justify-center w-[50px] h-[50px] md:w-[70px] md:-right-[30px] right-[10px] -top-[5px] md:h-[70px] bg-[#33a3ed] text-white font-semibold rounded-full md:text-2xl text-base">
        {percent}%
      </div>
      <div className="flex flex-col">
        <p>Объект:</p>
        <p className="font-semibold ">{object}</p>
      </div>
      <div className="flex flex-col">
        <p>Услуга:</p>
        <p className="font-semibold ">{service}</p>
      </div>
      <div className="flex flex-col">
        <p>Регион:</p>
        <p className="font-semibold ">{region}</p>
      </div>
      <div className="flex flex-col">
        <p>КАДАСТРОВАЯ СТОИМОСТЬ:</p>
        <p className="font-semibold ">{cadastralPrice} руб.</p>
      </div>
      <div className="flex flex-col">
        <p>РЫНОЧНАЯ СТОИМОСТЬ:</p>
        <p className="font-semibold ">{price} руб.</p>
      </div>
      <div className="flex flex-col">
        <p>ПЕРИОД НАЛОГОВОЙ ЭКОНОМИИ:</p>
        <p className="font-semibold ">{taxPeriod}</p>
      </div>
      <div className="flex flex-col">
        <p>НАЛОГОВАЯ ЭКОНОМИЯ: :</p>
        <p className="font-semibold ">{taxEconomy} руб.</p>
      </div>
    </div>
  );
};

export default CadastralValueCard;
