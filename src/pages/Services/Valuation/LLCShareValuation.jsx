import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/business/share_in_llc_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import LiColored from "../../../components/Typography/LiColored";
import Title2 from "../../../components/Typography/Title2";
import DTable from "../../../components/DTable";
import Ol from "../../../components/Typography/Ol";

const LLCShareValuation = () => {
  return (
    <div>
<HeadBreadcrumb
        items={[
          {
            title: 'Главная'
          },
          {
            title: "Оценка",
          },
          {
            title: "Бизнес",
          },
          {
            title: "Стоимость доли в ООО",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка стоимости доли в ООО" />
      <Description>
        Независимая оценка доли в ООО – одна из востребованных услуг от
        оценщиков компании АИС «ПЕРЕВОДЧИК». Ее популярность объясняется тем,
        что в России общества с ограниченной ответственностью являются самой
        распространенной правовой формой организации бизнеса, а доли их
        участников часто становятся предметами сделок и хозяйственных операций.
      </Description>
      <Title>Немного терминологии</Title>
      <Description>
        Доля участника в ООО – это комплекс его имущественных прав, а также
        право на управление и право на получение прибыли от деятельности
        организации. Доля определяется в процентах (например, 25%) или дробях
        (1/4). Доля – это комплекс активов (как материальных, так и
        нематериальных), которые могут продаваться, покупаться и становиться
        предметом других сделок.
      </Description>
      <Description>
        В отношении доли определяется два типа стоимости:
      </Description>
      <LiColored>
        Номинальная. Она зависит от того, какая часть уставного капитала
        принадлежит участнику.
      </LiColored>
      <Title2>Пример!</Title2>
      <Description>
        <i>
          Если размер уставного капитала составляет 50 000 рублей, а участнику
          принадлежит 50%, то номинальная стоимость его доли будет равна 25 000
          рублей.
        </i>
      </Description>
      <LiColored>
        Действительная. Она то и равна рыночной стоимости, которую определяет
        независимый оценщик. В этой ситуации доля рассматривается как комплекс
        активов. Действительную стоимость получают путем деления суммы
        стоимостей чистых активов на процент доли. Учитывая, что цена чистых
        активов – это величина меняющаяся, то и величина доли будет меняться под
        действием тех или иных факторов.
      </LiColored>
      <Description>
        Задача независимого оценщика – определить рыночную (действительную)
        стоимость доли, не упустив ни одного фактора, который бы мог повлиять на
        ее размер.
      </Description>
      <Title>Цена услуг</Title>
      <div className="overflow-auto md:scale-100 scale-[90%]">
        <DTable
          className="my-10"
          dataSource={[
            {
              key: "1",
              llc_share_data: "Для нотариуса при вступлении в наследство",
              price: "от 7 000",
              deadline: "от 5 дней",
            },
            {
              key: "2",
              llc_share_data: "При продаже",
              price: "от 25 000",
              deadline: "от 10 дней",
            },
            {
              key: "3",
              llc_share_data: "При выходе участников",
              price: "от 25 000",
              deadline: "от 10 дней",
            },
            {
              key: "5",
              llc_share_data: "При банкротстве",
              price: "от 25 000",
              deadline: "от 10 дней",
            },
            {
              key: "6",
              llc_share_data: "Для суда",
              price: "от 35 000",
              deadline: "от 10 дней",
            },
            {
              key: "7",
              llc_share_data: "Для налоговой",
              price: "от 45 000",
              deadline: "от 10 дней",
            },
          ]}
          columns={[
            {
              title: "Оценка доли в ООО	",
              dataIndex: "llc_share_data",
              key: "llc_share_data",
            },
            {
              title: "Стоимость",
              dataIndex: "price",
              key: "price",
            },
            {
              title: "Срок выполнения",
              dataIndex: "deadline",
              key: "deadline",
            },
          ]}
        />
      </div>
      <Title>
        Ситуации, требующие оценки стоимости доли в уставном капитале ООО?
      </Title>
      <Description>
        Оценка доли ООО – процедура по определению ее действительной стоимости .
        Она предшествует целому ряду сделок и хозяйственных операций. Зная
        рыночную цену, участник ООО сможет:
      </Description>
      <LiColored>
        Продать либо купить долю. Напомним, что после вступления в силу ФЗ №312
        договора купли-продажи должен быть удостоверен нотариусом.
      </LiColored>
      <LiColored>
        Оформить в наследство. Нотариусу необходимо знать реальную стоимость
        доли для расчета размера госпошлины.
      </LiColored>
      <LiColored>
        Получить кредит под залог активов, которые составляют долю.
      </LiColored>
      <LiColored>Принять правильные решения в сфере менеджмента.</LiColored>
      <LiColored>Разработать эффективные инвестиционные проекты.</LiColored>
      <LiColored>
        Составить бизнес-план для дальнейшего функционирования ООО.
      </LiColored>
      <LiColored>Исполнить решение суда по отчуждению долей.</LiColored>
      <Description>
        Также оценка необходима при реструктуризации организации либо ее
        банкротстве. Во всех перечисленных ситуациях оценка стоимости доли в ООО
        проводится на текущую дату.
      </Description>
      <Title>Какие документы понадобятся при оценке доли?</Title>
      <Description>
        Независимый оценщик сможет начать оценку только после ознакомления с
        следующей информацией и документацией:
      </Description>
      <Ol>
        <li>
          Реквизитами (если заказчик – юридическое лицо) или паспортными данными
          (если услугу заказывает физическое лицо);
        </li>
        <li>Бухгалтерским балансом и отчетностью за последние 2 года;</li>
        <li>Расшифровкой состава ОС (основных средств) компании;</li>
        <li>Сведениях о недвижимости и движимом имуществе.</li>
      </Ol>
      <Description>
        Мы приводим базовый перечень документов, он может быть расширен в
        зависимости от задач, которые поставлены перед оценкой доли в ООО и
        объема предстоящей работы.
      </Description>
      <Title>Из чего складывается стоимость?</Title>
      <Description>
        Стоимость чистых активов - не единственный ценообразующий фактор (хотя
        на ее основе и рассчитывается стоимость доли). Независимым оценщикам
        необходимо учитывать и другие факторы. Среди них:
      </Description>
      <LiColored>Текущая ситуация в экономике региона;</LiColored>
      <LiColored>
        Финансовые показатели и устойчивость самой компании, эффективность
        управленческих решений ее менеджеров;
      </LiColored>
      <LiColored>Рентабельность бизнеса.</LiColored>
      <Description>
        Реальная стоимость доли будет корректироваться с учетом именно этих
        факторов.
      </Description>
      <Title2>Как проводиться оценка?</Title2>
      <Description>
        Работа по оценке доли в уставном капитале компании – это комплекс
        мероприятий, которые следуют друг за другом:
      </Description>
      <Ol>
        <li>
          Сначала независимый оценщик делает анализ состояния рынка в конкретном
          регионе и определяет те моменты, которые влияют на деятельность
          предприятий;
        </li>
        <li>Далее специалист анализирует деловую активность компании;</li>
        <li>
          Определяет стоимость чистых активов и из них высчитывает стоимость
          доли с учетом ее размера в уставном капитале.
        </li>
      </Ol>
      <Description>
        <i>
          Доля в ООО, будучи сложным объектом оценки, требует ответственного
          подхода. Оценочные мероприятия должны проводить только компетентные
          оценщики, которые установят реальную, объективную стоимость.
          Специалисты должны быть готовы рассматривать долю не однобоко (как
          часть уставного капитала), а комплексно (как комплекс активов). Мы в
          оценке используем все традиционные для оценочной деятельности подходы:
          затратный, доходный и сравнительный. Оценщик согласует итоги расчетов
          с применением каждого из подхода, затем делает корректировку стоимости
          с учетом недостаточной ликвидности.
        </i>
      </Description>
      <Description>
        <i>
          Все сведения об объекте оценки, проводимых расчетах и их результатах
          отражаются в отчете об оценке – официальном документе, имеющем
          юридическую силу. Он будет без нареканий принят другими участниками
          ООО, судом, другими структурами и инстанциями.
        </i>
      </Description>
    </div>
  );
};

export default LLCShareValuation;
