import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/property/machine_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Ol from "../../../components/Typography/Ol";
import LiColored from "../../../components/Typography/LiColored";
import Title2 from "../../../components/Typography/Title2";
import Title from "../../../components/Typography/Title";

const MachineValuation = () => {
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
            title: "Движимое имущество",
          },
          {
            title: "Станки",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка станков"
        deadline="от 7 дней"
        price={15000}
      />
      <Description>
        Комплекс квалифицированных действий, направленных на объективное
        обследования состояния производственного оборудования и определение
        рыночной стоимости – это процедура оценки станков.
      </Description>
      <Description>
        <b>Станочный парк</b> – это агрегаты, машины, механизмы, которые
        используются на предприятиях, в производственных подразделениях для
        выполнения технологических операций (обработка заготовок, изготовление
        отдельных деталей, штамповка, токарные, фрезерные, сверлильные работы).
        Они являются собственностью владельца (владельцев) предприятий, который
        заинтересованы в их объективной стоимости. Независимая оценка
        выполняется специалистами компании, имеющей государственную аккредитацию
        и соответствующие сертификаты.
      </Description>
      <Title>
        В каких случаях проводится независимая оценка стоимости станков?
      </Title>
      <Description>
        В процессе эксплуатации производственное оборудование, станки, агрегаты
        вырабатывают часть своего рабочего ресурса, изнашиваются, происходит
        амортизация. Следовательно, изменяется и цена, которая является решающим
        показателем при выполнении юридических процедур:
      </Description>
      <LiColored>
        определение эффективности деятельности предприятия, рентабельность
        использования оборудования, определение перспектив развития с целью
        повышения прибыльности;
      </LiColored>
      <LiColored>
        купля-продажа, в результате которой происходит смена собственника;
      </LiColored>
      <LiColored>
        оформление документов на кредит, когда станки позиционируются в качестве
        залогового имущества;
      </LiColored>
      <LiColored>необходимость занести станки в уставной капитал;</LiColored>
      <LiColored>
        вывод производственного оборудования из основных фондов предприятия;
      </LiColored>
      <LiColored>
        определение размера причиненного ущерба оборудованию в силу различных
        причин;
      </LiColored>
      <LiColored>
        проведение переоценки активов производственного подразделения;
      </LiColored>
      <LiColored>
        необходимость рассчитать остаточную стоимость при выполнении процедуры
        списания станков, которые морально, технически, технологически устарели;
      </LiColored>
      <LiColored>
        сдача станков в аренду, для определения величины арендной платы;
      </LiColored>
      <LiColored>
        перед тем, как застраховать станки, промышленные установки.
      </LiColored>
      <Title2>
        Категории промышленного оборудования, подлежащее независимой оценке
      </Title2>
      <Description>Экспертным действиям подвергаются:</Description>
      <Ol>
        <li>
          Станки технологической обработки металлических заготовок. Это
          фрезерное, токарное, шлифовальное, сверлильное, строгальное, разрезное
          оборудование. Кроме того оцениваются с позиций определения стоимости
          механические, гидравлические прессовальные машины, комбинированные и
          многофункциональные агрегаты.
        </li>
        <li>
          Станки деревообработки, которые выполняют распиловку, строгание,
          сверление, раскройку, лущение и все другие операции, связанные с
          действиями с древесными материалами.
        </li>
        <li>
          Технологическое оборудование для выполнения буровых, горных,
          геологоразведочных, типографских работ. Подлежат оценки
          электроэрозионное оборудование, применяющееся на предприятиях по
          изготовлению медицинских пластмассовых изделий, часовых механизмов,
          сложной аэрокосмической техники.
        </li>
        <li>
          Конвейерные, транспортерные машины ленточного, подвесного,
          скребкового, роликового, шагающего конструкционного исполнения,
          обеспечивающие перемещение, транспортировку кусковых, сыпучих,
          малогабаритных грузов.
        </li>
        <li>
          Сложные автоматизированные производственно-технологические комплексы,
          состоящие из нескольких групп станков, специального оборудования,
          объединенные в единую производственную линию.
        </li>
      </Ol>
      <Title2>
        Перечень документов, необходимых для проведения комплексной оценке
        стоимости
      </Title2>
      <LiColored>
        технические характеристики станка, изложенные в инструкции по
        эксплуатации от завода-изготовителя;
      </LiColored>
      <LiColored>
        данные о местоположения станка и о его собственнике вместе с копией
        документов о приобретении;
      </LiColored>
      <LiColored>
        справки с указанием величины балансной и остаточной стоимости, которые
        определены в процессе последней экспертной оценке;
      </LiColored>
      <LiColored>
        сведение о проведенных регламентных, профилактических,
        ремонтно-восстановительных работах.
      </LiColored>
      <Title>Алгоритм проведение оценки стоимости станков</Title>
      <Ol>
        <li>Анализ предоставленной документации;</li>
        <li>
          Проведение тщательного осмотра для определения степени износа
          конкретного станка и его фотографирование для последующего анализа;
        </li>
        <li>
          Исследование состояние рынка и экономической ситуации и в сфере
          деятельности подобного оборудования;
        </li>
        <li>Выполнение расчетов и определение объективной стоимости станка;</li>
        <li>Составление отчета для заказчика с оценкой и выводами.</li>
      </Ol>
      <Title2>Преимущества компании АИС «ПЕРЕВОДЧИК»</Title2>
      <LiColored>
        наличие государственных сертификатов, аккредитации и разрешительных
        документов на выполнение независимой оценки станков;
      </LiColored>
      <LiColored>
        выполнение экспертных действий в полном соответствии с действующим
        российским законодательством;
      </LiColored>
      <LiColored>
        многолетний опыт деятельности в области проведения профессиональных
        оценочных действий;
      </LiColored>
      <LiColored>
        высокий уровень квалификации специалистов позволяет выполнять оценку
        оперативно с гарантированным качеством и ответственностью;
      </LiColored>
      <LiColored>
        оказание спектра услуг для крупных производственных компании и
        государственных организаций, что подчеркивает высокий статус и имидж
        компании.
      </LiColored>
    </div>
  );
};

export default MachineValuation;
