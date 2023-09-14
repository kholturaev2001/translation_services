import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/contruction_and_technical_expert/buildings_and_structures_expert.jpeg";
import Description from "../../../components/Typography/Description";
import LiColored from "../../../components/Typography/LiColored";
import Title from "../../../components/Typography/Title";
import Ol from "../../../components/Typography/Ol";
import DTable from "../../../components/DTable";
import PhoneNumber from "../../../components/Typography/PhoneNumber";

const BuildingsAndStructuresExpert = () => {
  return (
    <div>
<HeadBreadcrumb
        items={[
          {
            title: 'Главная'
          },
          {
            title: "Экспертиза",
          },
          {
            title: "Строительно-техническая",
          },
          {
            title: "Экспертиза зданий и сооружений",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 10 дней"
        price={30000}
        title="Экспертиза зданий и сооружений"
      />
      <Description>
        Экспертиза зданий и сооружений — это процесс оценки состояния и
        технической готовности строительных объектов. Она проводится
        специалистами с целью определения соответствия построек установленным
        нормам, стандартам и требованиям безопасности.
      </Description>
      <Description>Цели проведения экспертизы:</Description>
      <LiColored>
        оценить затраты на устранение обнаруженных конструктивных дефектов;
      </LiColored>
      <LiColored>
        оценить возможность проведения реставрации или перепланировки;
      </LiColored>
      <LiColored>
        рассчитать допустимые изменения в конструкции здания и его составных
        элементах.
      </LiColored>
      <Title>Когда нужна экспертиза?</Title>
      <Description>
        Одной из основных задач строительных объектов является обеспечение
        безопасности. Обязательные требования направлены на обеспечение
        механической прочности зданий и сооружений, пожарной безопасности и
        санитарно-гигиенических условий. Экспертиза помогает оценить, насколько
        эти требования соблюдены и насколько безопасен объект для использования.
      </Description>
      <Description>Проводится в следующих случаях:</Description>
      <Ol>
        <li>
          Перед проведением капитального ремонта или реконструкции, чтобы
          составить план работ.
        </li>
        <li>
          При продаже или покупке строения, чтобы предоставить объективную
          информацию о техническом состоянии объекта.
        </li>
        <li>
          С целью определения ущерба, возникшего в результате аварийных
          ситуаций, таких как наводнения, затопления или пожары.
        </li>
        <li>
          Для выявления причины дефектов, особенно на несущих элементах
          конструкции, чтобы понять, какие меры предпринять для устранения
          повреждений и предотвращения их повторного возникновения.
        </li>
      </Ol>
      <Title>Роль строительной экспертизы в суде</Title>
      <Description>
        Экспертиза играет ключевую роль в судебных процессах уже на
        первоначальном этапе, когда собираются необходимые документы для подачи
        иска. Ее результаты определяют стоимость затрат на устранение дефектов
        здания, что существенно влияет на оплату государственной пошлины при
        подаче искового заявления.
      </Description>
      <Description>
        В процессе рассмотрения дела в суде, экспертиза строений подтверждает
        стоимость расходов или убытков, связанных с данным спором. Судебное
        разбирательство зависит от представленных сторонами доказательств,
        поэтому достоверность, прозрачность и объективность информации,
        содержащейся в заключении экспертизы, играют решающую роль. Именно на
        основе этой информации суд принимает решение по делу.
      </Description>
      <Title>Различные состояния построек</Title>
      <Description>
        Существуют различные категории состояний конструкций, характеризующие
        его состояние и безопасность:
      </Description>
      <DTable
        dataSource={[
          {
            key: "1",
            row_one: <b>Здания, находящиеся в рабочем состоянии</b>,
            row_two:
              "Проблемы, которые могли бы повлиять на их нормальную эксплуатацию, отсутствуют – такие здания полностью пригодны для использования и не вызывают опасений.",
          },
          {
            key: "2",
            row_one: <b>Здания с ограниченной работоспособностью </b>,
            row_two:
              "Хотя здание может быть еще пригодным для использования, необходимы серьезные меры для исправления повреждений, чтобы восстановить его нормальную работоспособность и обеспечить безопасность пользователей.",
          },
          {
            key: "3",
            row_one: <b>Здания в недопустимом состоянии</b>,
            row_two:
              "Техническая экспертиза может показать постоянное снижение их несущей способности, что делает такие здания непригодными для проживания или хранения. В таких случаях требуется немедленное вмешательство для предотвращения потенциальных аварий или несчастных случаев.",
          },
          {
            key: "4",
            row_one: <b>Аварийное состояние </b>,
            row_two:
              "Самая критическая категория состояния зданий. В этом случае оно имеет множество разнообразных повреждений, и его несущая способность исчерпала себя. Требуются срочные противоаварийные меры для предотвращения обрушения и минимизации потенциальных повреждений или жертв.",
          },
        ]}
        columns={[
          {
            dataIndex: "row_one",
            key: "row_one",
            width: "20%",
          },
          {
            dataIndex: "row_two",
            key: "row_two",
          },
        ]}
        bordered
        showHeader={false}
      />
      <Description>
        Наша компания обладает значительной материально-технической базой,
        включая современную лабораторию. Это позволяет нам осуществлять
        различные виды технических экспертиз и проводить исследования зданий и
        сооружений на самом высоком уровне.
      </Description>
      <Description>
        Все наши специалисты обладают знаниями и опытом в области строительства
        и инженерии, что позволяет им всесторонне анализировать объекты и
        предоставлять объективные результаты и рекомендации.
      </Description>
      <Description>
        Если вам требуется заказать строительную экспертизу, свяжитесь с нами по
        телефону <PhoneNumber />. Сотрудники компании “АИС ПЕРЕВОДЧИК” ответят
        на все ваши вопросы, проконсультируют и проведут экспертизу.
      </Description>
    </div>
  );
};

export default BuildingsAndStructuresExpert;
