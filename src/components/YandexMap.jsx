import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  return (
    <div>
      <YMaps>
        <div className="flex flex-col gap-2 mx-auto md:text-base text-sm md:max-w-[1000px] max-w-[100%] items-center">
          <p className="font-medium text-center pb-3 pt-4">
            Мы находимся по адресу: г. Москва, ул. просп. Мира, д. 150 офис 546, рядом со
            ст. м. «ВДНХ».
          </p>
          <Map
            width="95%"
            height={300}
            defaultState={{ center: [55.822443, 37.646329], zoom: 9 }}
          >
            <Placemark
              geometry={[55.822443, 37.646329]}
              properties={{
                iconCaption: "АИС ПЕРЕВОДЧИК",
              }}
            />
            {/* <Placemark
              geometry={[38.538456, 68.77911]}
              options={{
                iconLayout: "template",
              }}
            /> */}
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandexMap;
