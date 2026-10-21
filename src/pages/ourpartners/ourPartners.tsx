interface PartnersType {
  id: number;
  title: string;
  desc: string;
  urlLabel: string;
  path: string;
}

const Partners1:PartnersType[] = [
  {
    id: 1,
    title: `ООО "Тракс Восток Рус"`,
    desc: "ООО «Тракс Восток Рус» является официальным дистрибьютором среднетоннажных грузовых автомобилей Компас 9 и Компас 12 с различными вариантами надстроек.",
    urlLabel: "https://compasstrucks.ru",
    path: "https://compasstrucks.ru/"
  },
  {
    id: 2,
    title: "Публичное акционерное общество «НЕФАЗ».",
    desc: `Публичное акционерное общество "НЕФАЗ" входит в группу предприятий ПАО «КАМАЗ» и является крупнейшим в России заводом по производству спецнадстроек на шасси КАМАЗ.`,
    urlLabel: "https://nefaz.ru",
    path: "https://nefaz.ru/"
  },
  {
    id: 3,
    title: `ООО "Палфингер Кран Рус"`,
    desc: `"Палфингер Кран Рус" - совместное предприятие концерна Palfinger(Австрия) и Группы Крафт Инвест (Россия) является эксклюзивным дистрибьютором Palfinger на территории Российской Федерации и стран СНГ`,
    urlLabel: "https://www.palfinger.ru",
    path: "https://www.palfinger.ru/",
  },
  {
    id: 4,
    title: "ООО «КМУ-РУС»",
    desc: "ООО «КМУ-РУС» реализует краны-манипуляторы, автовышки известных южнокорейских брендов.",
    urlLabel: "https://kmu-rus.ru",
    path: "https://kmu-rus.ru/",
  },
  {
    id: 5,
    title: `ОАО "Завод Старт"`,
    desc: `ОАО "Завод Старт" специализируется на производстве и реализации транспортных автоцистерн на широком ассортименте разновидностей шасси отечественного и зарубежного производства.`,
    urlLabel: "http://zavod-start.ru",
    path: "https://zavod-start.ru/",
  },
  {
    id: 6,
    title: "МАЗ",
    desc: "Официальный дистрибьютор коммерческой техники МАЗ в России.",
    urlLabel: "https://maz.by",
    path: "https://maz.by/",
  },
  {
    id: 7,
    title: "JAC Motors RUS",
    desc: "Компания JAC Motors RUS является эксклюзивным импортером и дистрибьютором продукции китайского автоконцерна JAC на территории России.",
    urlLabel: "https://jaccar.ru",
    path: "https://jaccar.ru/",
  },

]

const OurPartners = () => {
  return (
    <section className="container max-xl:px-[3%] ourPartners">
      <h1 className="text-[32px] font-semibold pt-5 pb-6">Партнёры</h1>
      <div className="flex flex-col gap-6 w-full">
        <h4 className="text-[22px] font-[500]">КАМАЗ</h4>
        <p className="text-lg max-w-[72%]">
          Группа компаний «КАМАЗ» – крупнейшая автомобильная корпорация
          Российской Федерации. ПАО «КАМАЗ» входит в 20-ку ведущих мировых
          производителей тяжёлых грузовых автомобилей и находится на 16-м месте
          по объёмам производства тяжёлых грузовиков полной массой более 16
          тонн. Группа организаций ПАО «КАМАЗ» объединяет 109 компаний на
          территории России, СНГ и дальнего зарубежья. Единый производственный
          комплекс группы организаций ПАО «КАМАЗ» охватывает весь
          технологический цикл производства грузовых автомобилей – от
          разработки, изготовления, сборки автотехники и автокомпонентов до
          сбыта готовой продукции и сервисного сопровождения.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-22 w-full">
        <h4 className="text-[22px] font-[500]">Группа ГАЗ</h4>
        <p className="text-lg max-w-[72%]">
          «Группа ГАЗ» специализируется на разработке и производстве легких и
          среднетоннажных коммерческих автомобилей, автобусов, тяжелых
          грузовиков, силовых агрегатов и автокомпонентов.
        </p>
      </div>

      <div className="mt-24 flex flex-col gap-18">
        {Partners1.map((part, idx) => (
          <div key={idx} className="">
            <h4 className="text-[22px] font-[500]">{part.title}</h4>
            <p className="text-lg py-7 max-w-[65%]">{part.desc}</p>
            <a href={part.path} className="text-lg text-[#a1a1a1]">{part.urlLabel}</a>
          </div>
        ))}
      </div>

      <div className="mt-18">
        <h4 className="text-[22px] font-[500]">ДУНФЭН ТРАК РУС</h4>
        <p className="text-lg mt-7">ДУНФЭН ТРАК РУС</p>
      </div>

      <div className="flex flex-col gap-18">
        <div className="mt-18">
          <h4 className="text-[22px] font-[500]">ООО «Фотон Мотор»</h4>
          <p className="py-7 text-lg max-w-[65%]">Компания ООО «Фотон Мотор» основана 27 апреля 2009 года в городе Москва, является представительством Пекинской машиностроительной компании Beiqi Foton Motor Co., Ltd. на территории РФ.</p>
          <a className="text-lg text-[#a1a1a1]" href="https://foton-motor.ru">https://foton-motor.ru</a>
        </div>
        <div>
          <h4 className="text-[22px] font-[500]">ООО «ФЕРРО ОТТИМО»</h4>
          <p className="py-7 text-lg max-w-[65%]">FASSI Эксклюзивный дистрибьютор в РФ ООО «ФЕРРО ОТТИМО»</p>
          <a className="text-lg text-[#a1a1a1]" href="https://fassi.ru">https://fassi.ru</a>
        </div>
      </div>

      <div className="mt-18">
        <h4 className="text-[22px] font-[500]">FAW</h4>
        <p className="text-lg mt-7">FAW</p>
      </div>

      <div className="mt-18">
        <h4 className="text-[22px] font-[500]">ООО «Шакман моторс»</h4>
        <p className="text-lg py-7">Официальный дистрибьютор грузовой техники Shacman в России.</p>
        <a className="text-lg text-[#a1a1a1]" href="https://shacman.ru">https://shacman.ru</a>
      </div>
    </section>
  );
};

export default OurPartners;
