import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/valuation_aims/estate_for_bank_valuation.jpeg";

const EstateForBank = () => {
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
            title: "Банк",
          },
          {
            title: "Недвижимость",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка недвижимости для банка"
        description="Выполним оценку недвижимости для банка в короткие сроки, с составлением официального отчёта, определением рыночной, залоговой или ликвидационной стоимости объекта. Данный вид оценочных мероприятий проводится в отношении любой жилой или коммерческой недвижимости, зарегистрированной за правообладателем. Расчёт стоимости здания, сооружения, либо эксплуатируемых помещений позволяет банку оценить степень риска при предоставлении финансовых услуг, назначить оптимальную кредитную ставку, принять решение о выдаче кредита."
      />
    </div>
  );
};

export default EstateForBank;
