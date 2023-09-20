import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/statute_of_limitations_for_compiling_a_document_expert.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import Ol from "../../../components/Typography/Ol";
import LiColored from "../../../components/Typography/LiColored";
import Title2 from "../../../components/Typography/Title2";
import Attention from "../../../components/Attention";

const StatuteOfLimitationsForCompilingDocumentExpert = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Экспертиза",
          },
          {
            title: "Срок давности составления документа",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="25 дней"
        price={25000}
        title="Экспертиза срока давности составления документа"
      />
      <Description>
        Часто на практике встречаются ситуации, в которых предметом споров и
        разногласий выступает действительная дата составления. Распространены
        случаи предоставления суду заведомо ложной информации в виде поддельных
        документов, где указана ненастоящая дата. Вследствие этого экспертиза
        давности составления документов пользуется высоким спросом.
      </Description>
      <Description>
        Указанная экспертиза относится к разновидностям технической экспертизы,
        поскольку основным ее методом выступает физико-химический. Однако ввиду
        того, что рассматриваемая экспертиза имеет свои определенные особенности
        проведения, ее принято считать отдельной разновидностью экспертиз.
      </Description>
      <Title>Направления экспертизы давности документов</Title>
      <Ol>
        <li>
          В первом варианте документ проверяется полностью. В заключении по
          результатам проведения экспертизы будет указано, что документ
          составлен «не позднее ... года»;
        </li>
        <li>
          Второе направление заключается в проверке отдельных частей документа,
          чтобы выяснить, является ли время его составления одинаковым, или же
          каждая часть текста создавалась в разное время.
        </li>
      </Ol>
      <Description>
        Чтобы узнать, когда же был создан документ, эксперт изучает:
      </Description>
      <LiColored>чернила струйных принтеров;</LiColored>
      <LiColored>чернила из ручек;</LiColored>
      <LiColored>штемпельные краски.</LiColored>
      <Description>
        Указанные выше материалы имеют в составе специальные растворители,
        испаряющиеся в течение определенного времени. Остатки растворителей на
        бумаге помогают как давно текст был создан. Эксперт наносит на бумагу
        печать, краску, надписи, использованные на исходном документе,
        представленном заказчиком для исследования. После этого эксперт при
        помощи специализированного оборудования, отслеживает степень и скорость
        испарения чернил за сутки. Указанные исследования помогают построить
        график испарения на более длительный срок, и в результате можно
        установить, когда приблизительно был создан документ. В то же время
        оригинал документа параллельно изучается экспертом на предмет динамики
        старения.
      </Description>

      <Attention
        desc="Если заказчик ставит перед экспертом задание установить точную
          (абсолютную) дату, кроме исследуемого текста эксперту необходимо
          получить образцы сравнения с оттисками, выполненными такими же
          чернилами, в период времени, аналогичный тому, который подлежит
          проверке, и с конкретной периодичностью."
      />
      <Title2>На какие вопросы должен ответить эксперт?</Title2>
      <LiColored>когда был составлен документ (примерна дата)?</LiColored>
      <LiColored>
        совпадает ли написанная (заявленная заказчиком) дата создания документа
        с фактической?
      </LiColored>
      <LiColored>
        документ печатался на одном принтере, или одновременно применялись
        различные устройства?
      </LiColored>
      <LiColored>
        применялись ли к документу способы искусственного старения? Какой способ
        искусственного старения применялся?
      </LiColored>

      <Attention
        desc="Выше приведен не полный список вопросов. В каждой отдельно
          рассматриваемой ситуации, могут возникнуть иные вопросы. При
          необходимости постановки новых вопросов, следует обратиться с ними к
          эксперту до момента начала проведения экспертизы."
      />
      <Title>Когда невозможно провести экспертизу?</Title>
      <Description>
        Существуют ситуации, когда эксперт не может выполнить поставленную
        задачу:
      </Description>
      <LiColored>
        документ представлен в виде, не подлежащем экспертизе;
      </LiColored>
      <LiColored>
        отсутствует нужное для сравнения количество образцов;
      </LiColored>
      <LiColored>
        документы не были своевременно предоставлены. Чем больше проходит
        времени, тем труднее становится определить давность текста, ввиду
        испарения летучих веществ чернил и краски;
      </LiColored>
      <LiColored>
        документ был подвержен умышленному старению. Здесь речь идет о
        нагревании утюгом, длительном нахождении документа не солнце,
        воздействие пара, различных веществ и пр.
      </LiColored>
      <Description>
        Кроме того, документ бывает составлен при помощи чернил, у которых
        низкое содержание летучих компонентов. Такие чернила быстро высыхают и
        выявить, когда был создан документ становится невозможным. Применение
        таких чернил осуществляется крайне редко, и обнаружение их применения
        при изучении документа уже может стать поводом для проведения
        дополнительных экспертиз.
      </Description>
      <Title2>Методы проведения экспертизы давности создания документов</Title2>
      <Description>
        Способы, которые применяются в экспертизе давности документов схожи с
        методикой их технического анализа. Но в самой процедуре применения есть
        различия.
      </Description>

      <Description>
        <b>Органолептические</b>
      </Description>
      <Description>
        Предполагают оценку состояния объектов в определённой среде опираясь на
        органы чувств человека. Это зрение, слух, вкус, обоняние и осязание.
        Такие методы помогают дать оценку ряду свойств анализируемого документа:
        по цветовой характеристике, особенностям материала, оттенкам и т.д.
      </Description>
      <Description>
        <b>Микроскопические</b>
      </Description>
      <Description>
        Используются главным образом для выявления очерёдности надписей и
        оттисков.
      </Description>
      <Description>
        <b>Фотографические</b>
      </Description>
      <Description>
        Применяются почти во всех направлениях криминалистики. Этому
        способствует бурное развитие новых технологий в этой области. Некоторые
        разновидности съёмки, например макро, инфракрасная, под ультрафиолетом,
        способ цветоделения давно и успешно применяются в такой экспертизе.
      </Description>
      <Description>
        <b>Химические</b>
      </Description>
      <Description>
        Очень важны при анализе вещества для письма. Химический способ
        определяет главные характеристики веществ, прогнозируются их изменения с
        течением времени.
      </Description>
      <Description>
        <b>Хроматографические</b>
      </Description>
      <Description>
        Помогают определить временное течение испарения растворителя в веществе
        для письма, либо в краске печатной оргтехники или штемпеля.
      </Description>
      <Description>
        <b>Спектрографические</b>
      </Description>
      <Description>
        Применяются в анализе составляющих компонентов вещества для письма и
        выявления в нём компонентов, которые могут оказаться важным поводом для
        итоговых заключений.
      </Description>
      <Description>
        <b>Опирающиеся</b>
      </Description>
      <Description>
        На компьютерные технологии также успешно применяются в проведении данных
        видов экспертиз.
      </Description>
      <Description>
        Достоверность, правильность и результативность проводимой экспертизы
        давности составления документа зависит от уровня квалификации
        специалиста, к которому вы обратитесь. ООО «Оценочная компания «АИС
        ПЕРЕВОДЧИК» предлагает услуги квалифицированных экспертов, обладающих
        опытом сотрудничества с судами, коммерческими организациями и частными
        лицами. Экспертная деятельность, осуществляемая нашими сотрудниками,
        соответствует действующему законодательству.
      </Description>
    </div>
  );
};

export default StatuteOfLimitationsForCompilingDocumentExpert;
