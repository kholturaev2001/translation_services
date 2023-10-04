import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/advertising_texts_translation.jpeg";
import Description from "../../../components/Typography/Description";
import Title2 from "../../../components/Typography/Title2";
import Ul from "../../../components/Typography/Ul";
import TrDeadline from "../../../components/Translation/TrDeadline";
import Title from "../../../components/Typography/Title";
import TranslationFromLang from "./../../../components/TranslationTables/TranslationFromLang";
import TranslationToLang from "../../../components/TranslationTables/TranslationToLang";
import OtherTypes from "../../../components/TranslationTables/OtherTypes";
import Discounts from "../../../components/TranslationTables/Discounts";
import AdditionInfo from "../../../components/TranslationTables/AdditionInfo";

const AdvertisingTextsTranslation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Письменный перевод",
          },
          {
            title: "Перевод рекламных текста",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Перевод рекламных текста" />
      <Description>
        Выполняя перевод рекламных текстов, в первую очередь нужно учитывать
        целевую аудиторию. К примеру, если это витринная вывеска, она должна
        привлекать внимание. Если же это телевизионная реклама, нужно
        использовать маркетинговые приемы по привлечению клиентов. Так или
        иначе, перевод рекламных текстов нужно доверять специалистам, которые
        смогут провести качественную их адаптацию.
      </Description>
      <Description>
        Особенности перевода рекламных текстов предполагают определение
        созвучности того или иного названия. К примеру, прямой перевод «BeeZoo»
        (популярная в Британии сеть товаров для пасеки) звучит как «пчелиный
        зоопарк». Но гораздо лучше в русской адаптации применить «пчелиный
        (медовый) дом». Маркетинговый перевод по большей части именно этим и
        сложен.
      </Description>
      <Description>
        Если выполняется перевод рекламной листовки, важно правильно составить
        заголовок, ведь именно он привлекает внимание, провоцирует на дальнейшее
        прочтение информации. Таким образом, рекламный перевод – это не просто
        перевод, а профессиональная переработка текста с учетом интересов и
        потребностей целевой аудитории.
      </Description>
      <Title2>Тематика:</Title2>
      <Ul>
        <li>рекламные тексты;</li>
        <li>рекламные слоганы.</li>
      </Ul>
      <Title2>Особенности перевода рекламных текстов:</Title2>
      <Ul>
        <li>частотное употребление глаголов в повелительном наклонении;</li>
        <li>
          большое количество эмоционально окрашенных прилагательных и наречий;
        </li>
        <li>обращение к покупателю;</li>
        <li>использование различных стилистических приемов.</li>
      </Ul>
      <TrDeadline />
      <Title>Стоимость перевода рекламных текстов</Title>
      <TranslationFromLang />
      <TranslationToLang east_langs="от 700" />
      <OtherTypes />
      <Discounts />
      <AdditionInfo />
    </div>
  );
};

export default AdvertisingTextsTranslation;
