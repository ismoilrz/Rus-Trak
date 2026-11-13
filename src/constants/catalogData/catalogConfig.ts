import trak1 from "../../assets/track1.webp"
import descTr1 from "../../assets/desctr1.png"
import trak2 from "../../assets/trak2.webp"
import descTr2 from "../../assets/descTr2.png"
import trak3 from "../../assets/trak3.webp"
import trak4 from "../../assets/trak4.webp"
import trak5 from "../../assets/trak5.webp"
import trak6 from "../../assets/trak6.webp"
import trak7 from "../../assets/trak7.webp"
import descTr3 from "../../assets/descTr3.jpg"
import trak8 from "../../assets/trak8.webp"
import trak9 from "../../assets/trak9.webp"
import trak10 from "../../assets/trak10.webp"
import descTr4 from "../../assets/descTr4.png"
import trak11 from "../../assets/trak11.webp"
import descTr5 from "../../assets/descTr5.jpg"
import trak12 from "../../assets/trak12.webp"
import trak13 from "../../assets/trak13.webp"
import trak14 from "../../assets/trak14.webp"
import trak15 from "../../assets/trak15.webp"
import trak16 from "../../assets/trak16.webp"
import trak17 from "../../assets/trak17.webp"
import trak18 from "../../assets/trak18.webp"
import trak19 from "../../assets/trak19.webp"
import trak20 from "../../assets/trak20.webp"
import trak21 from "../../assets/trak12.webp"
import trak22 from "../../assets/trak22.webp"
import trak24 from "../../assets/trak24.webp"
import trak25 from "../../assets/trak25.webp"
import trak26 from "../../assets/trak26.webp"
import trak27 from "../../assets/trak27.webp"

import cartImg1 from "../../assets/cartImg1.webp"
import cartImg2 from "../../assets/cartImg2.webp"
import cartImg3 from "../../assets/cartImg3.png"
import cartImg4 from "../../assets/cartImg4.webp"
import cartImg5 from "../../assets/cartImg5.webp"
import cartImg6 from "../../assets/cartImg6.webp"
import cartImg7 from "../../assets/cartImg8.webp"
import cartImg8 from "../../assets/cartImg9.png"
import cartImg9 from "../../assets/cartImg10.webp"
import cartImg11 from "../../assets/cartImg12.png"


interface workingFeatureItems {
  workingFeaturesLabel?: string;
  workingFeaturesDesc: string
}

interface featuresItems {
  featuresLAbel?: string;
  featuresdesc: string;
}

interface trakItems {
  id: number;
  title: string;
  slug: string;
  titleKey: string,
  priceKey: string,
  img: string;
  rating?: number;
  isNew?: boolean;
  inStock?: boolean;
  price: string;
  priceValue?: number;
  length?: string;
  mass?: string;
  formula?: string;
  descKey: string;
  descValue: string;
  descImg?: string;
  paramLabel: string;
  parametrs: string;
}

export const catalogConfig: Record<string, { 
  slug: string;
  title: string; 
  cartImg: string;
  filters: any[];
  content?: {
    intro: string;
    assortment: string;
    assortmentdesc1: string;
    assortmentdesc2: string;
    assortmentdesc3?: string;
    assortmentdesc2features?: string[];
    brand?: string;
    brands: string[],
    featuresLabel? :string;
    features: featuresItems[];
    applicationLabel: string;
    applicationDesc: string;
    workingTitle: string;
    workingfeatures: workingFeatureItems[];
    equipmentTItle: string;
    equipmentdesc: string;
  };
  trak: trakItems[];
}> = {
  "Curtain-trucks": {
    slug: "Curtain-trucks",
    title: "Curtain-trucks",
    cartImg: cartImg1,
    filters: [
      { 
        type: "search",
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ", "JAC", "DAEWOO", "FOTON", "DONG FENG", "МАЗ"]
      },
      { 
        type: "checkbox", 
        label: "Полная масса, тонн",
        options: ["до 12", "до 20", "до 5,5", "свыше 20"] 
      },
    ],
    content: {
      intro: "Шторный грузовик сочетает удобство загрузки и надежность на дороге. Мощные двигатели и современная техника делают управление безопасным и комфортным. Компания «РусТрак» предлагает шторные автомобили, готовые к любым задачам. Надёжная конструкция и качественные материалы обеспечивают долгий срок службы машин. Выбор подходящей машины поможет справиться с самыми разными задачами. Каждая модель создаётся с учётом потребностей владельцев, сочетая практичность и долговечность.",
      assortment: "Ассортимент",
      assortmentdesc1: "Мы предлагаем широкий ассортимент коммерческих автомобилей, отвечающих современным стандартам качества. В нашем каталоге представлена шторная машина в различных исполнениях и марках, что позволяет подобрать технику под любые задачи эксплуатации.",
      assortmentdesc2: "Размеры и тоннаж автомобилей зависят от выбранного шасси: от компактных моделей грузоподъёмностью 3 тонны до мощных машин, рассчитанных на перевозку до 30 тонн. Такой диапазон позволяет подобрать оптимальное решение для любых логистических и коммерческих задач, обеспечивая надёжность и долговечность техники.",
      brand: "Марки:",
      brands: ["ГАЗ", "Валдай", "КАМАЗ", "Компас", "JAC", "МАЗ", "FAW", "FOTON", "DAEWOO"],
      featuresLabel: "Особенности шторных автомобилей",
      features: [
        {
          featuresdesc: "Оцинкованные стойки на болтовых соединениях — при повреждении их можно быстро заменить без сложного ремонта, что снижает затраты и сокращает простои."
        },
        {
          featuresdesc: "Алюминиевые направляющие с резиновым уплотнителем — шторно бортовой автомобиль получает надёжную герметизацию, защищающую груз от влаги и пыли при эксплуатации в любых условиях.",
        },
        {
          featuresdesc: "Профиль Hossen — усиленный конструктивный элемент, который повышает жёсткость и долговечность всей надстройки.",
        },
        {
          featuresdesc: "Откидные борта на 180° — позволяют легко загружать и разгружать груз с любой стороны, экономя время на маршруте.",
        },
        {
          featuresdesc: "Сдвижная штора в обе стороны — гибкость эксплуатации: доступ к грузу возможен с любой стороны платформы.",
        },
        {
          featuresdesc: "Тент крыши с крестообразным усилителем — выдерживает дополнительные нагрузки и сохраняет форму даже при длительной эксплуатации.",
        },
        {
          featuresdesc: "Двунаправленное усиление бокового тента — повышает надёжность при перевозке тяжёлых и хрупких грузов.",
        },
        {
          featuresdesc: "Скрытые петли крепления груза — безопасная фиксация без выступающих элементов, что делает платформу аккуратной и удобной.",
        },
        {
          featuresdesc: "Складная лестница — быстрый и безопасный доступ к кузову без дополнительных приспособлений.",
        },
        {
          featuresdesc: "Три варианта крепления надстройки к подрамнику — шторный фургон адаптируется к разным условиям монтажа, обеспечивая универсальность для различных задач и типов шасси.", 
        },
        {
          featuresdesc: "Сдвижные центральные стойки — позволяют оптимально использовать пространство и упрощают работу с крупногабаритными грузами.",
        },
        {
          featuresdesc: "Алюминиевые ворота со скрытой запорной арматурой — надёжная защита груза и эстетичный внешний вид без лишних деталей.",
        },
        {
          featuresdesc: "Противозаливной козырёк — дополнительная защита от осадков и грязи, повышающая сохранность перевозимого груза."
        }
        
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Шторный грузовик от компании «РусТрак» находят широкое применение в строительных компаниях, логистических и транспортных организациях, обеспечивая безопасную и удобную доставку материалов. Они используются для коммерческой доставки товаров, в торговых и оптовых компаниях, а также при перевозке негабаритных и тяжёлых грузов. Надёжная конструкция и качественная защита груза делают их удобными для длительных маршрутов и работы в любых погодных условиях, обеспечивая эффективность перевозок и сохранность имущества.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesLabel: "Большой выбор техники",
          workingFeaturesDesc: "У нас представлены шторные и другие коммерческие автомобили различных марок и типов, что позволяет подобрать технику под любые задачи.",
        },
        {
          workingFeaturesLabel: "Профессиональная поддержка",
          workingFeaturesDesc: "Наши специалисты помогают подобрать технику с учётом задач клиента и особенностей бизнеса.",
        },
        {
          workingFeaturesLabel: "Сертификация и контроль качества",
          workingFeaturesDesc: "Все грузовики проходят строгую проверку и сертифицированы, что гарантирует безопасность эксплуатации.",
        },
        {
          workingFeaturesLabel: "Гарантийное и послегарантийное обслуживание",
          workingFeaturesDesc: "Компания обеспечивает поддержку после покупки, включая техническое обслуживание и консультации.",
        },
        {
          workingFeaturesLabel: "Удобство покупки",
          workingFeaturesDesc: "Предоставляются прозрачные условия приобретения, различные формы оплаты и индивидуальные предложения для клиентов.",
        },
        {
          workingFeaturesLabel: "Опыт и репутация",
          workingFeaturesDesc: "«РусТрак» имеет многолетний опыт работы на рынке коммерческих автомобилей, что подтверждает высокий профессионализм и доверие клиентов.",
        }
      ],
      equipmentTItle: "Техника, созданная для надежности и комфорта",
      equipmentdesc: "Купить шторный грузовик — выгодное решение, позволяющее оптимизировать логистику и сократить затраты на эксплуатацию. Выбирая технику, которая соответствует вашим требованиям и стандартам качества, вы получаете надёжный автомобиль, полностью готовый к эксплуатации. Компания «РусТрак» поможет подобрать модель, идеально подходящую для ваших нужд. Ознакомьтесь с характеристиками и возможностями каждой машины. Сделайте выбор в пользу надёжности, комфорта и долговечности вашей техники. Для оформления заказа свяжитесь с нами любым удобным способом и получите консультацию специалистов.",
    },
   trak: [
      {
        id: 1,
        title: "curtain_trucks.trak1.title",
        titleKey: "CurtainTrucks1Title",
        slug: "shtorny-gruzovik-maz-438121-model-5389d5",
        img: trak1,
        priceValue: 6500000,    
        rating: 4.8,            
        isNew: true,            
        inStock: true,
        price: "curtain_trucks.trak1.price",
        priceKey: "CurtainTrucks1Price",
        mass: "до 12",
        descKey: "curtain_trucks.trak1.descKey",
        descValue: "curtain_trucks.trak1.descValue",
        descImg: descTr1,
        paramLabel: "curtain_trucks.trak1.paramLabel",
        parametrs: "curtain_trucks.trak1.parametrs"
      },
      {
        id: 2,
        title: "curtain_trucks.trak2.title",
        titleKey: "CurtainTrucks2Title",
        slug: "shtorny-gruzovik-maz-631228-524-010-model-4389m2",
        img: trak2,
        priceValue: 8000000,    
        rating: 6,            
        isNew: false,            
        inStock: true,
        price: "curtain_trucks.trak2.price",
        priceKey: "CurtainTrucks2Price",
        mass: "до 20",
        descKey: "curtain_trucks.trak2.descKey",
        descValue: "curtain_trucks.trak2.descValue",
        descImg: descTr2,
        paramLabel: "curtain_trucks.trak2.paramLabel",
        parametrs: "curtain_trucks.trak2.parametrs"
      },
      {
        id: 3,
        title: "curtain_trucks.trak3.title",
        titleKey: "CurtainTrucks3Title",
        slug: "shtorny-gruzovik-kamaz-4308",
        img: trak3,
        priceValue: 6500000,    
        rating: 8,            
        isNew: true,            
        inStock: false,
        price: "curtain_trucks.trak3.price",
        priceKey: "CurtainTrucks3Price",
        mass: "свыше 20",
        descKey: "curtain_trucks.trak3.descKey",
        descValue: "curtain_trucks.trak3.descValue",
        paramLabel: "curtain_trucks.trak3.paramLabel",
        parametrs: "curtain_trucks.trak3.parametrs"
      },
      {
        id: 4,
        title: "curtain_trucks.trak4.title",
        titleKey: "CurtainTrucks4Title",
        slug: "shtorny-gruzovik-kamaz-65657",
        img: trak4,
        priceValue: 6500000,    
        rating: 3.8,            
        isNew: false,            
        inStock: true,
        price: "curtain_trucks.trak4.price",
        priceKey: "CurtainTrucks4Price",
        mass: "до 20",
        descKey: "curtain_trucks.trak4.descKey",
        descValue: "curtain_trucks.trak4.descValue",
        paramLabel: "curtain_trucks.trak4.paramLabel",
        parametrs: "curtain_trucks.trak4.parametrs"
      },
      {
        id: 5,
        title: "curtain_trucks.trak5.title",
        titleKey: "CurtainTrucks5Title",
        slug: "shtorny-gruzovik-kompas-5",
        img: trak5,
        priceValue: 6500000,    
        rating: 6,            
        isNew: false,            
        inStock: false,
        price: "curtain_trucks.trak5.price",
        priceKey: "CurtainTrucks5Price",
        mass: "до 5.5",
        descKey: "curtain_trucks.trak5.descKey",
        descValue: "curtain_trucks.trak5.descValue",
        paramLabel: "curtain_trucks.trak5.paramLabel",
        parametrs: "curtain_trucks.trak5.parametrs"
      },
      {
        id: 6,
        title: "curtain_trucks.trak6.title",
        titleKey: "CurtainTrucks6Title",
        slug: "shtorny-gruzovik-kamaz-65117-model-4388f3",
        img: trak6,
        priceValue: 6500000,    
        rating: 9,            
        isNew: true,            
        inStock: true,
        price: "curtain_trucks.trak6.price",
        priceKey: "CurtainTrucks6Price",
        mass: "свыше 20",
        descKey: "curtain_trucks.trak6.descKey",
        descValue: "curtain_trucks.trak6.descValue",
        paramLabel: "curtain_trucks.trak6.paramLabel",
        parametrs: "curtain_trucks.trak6.parametrs"
      }
    ]
  },
  "Crane-manipulators": {
    slug: "Crane-manipulators",
    title: "Crane-manipulators",
    cartImg: cartImg2,
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ", "JAC", "DAEWOO", "FAW", "FOTON", "DONG FENG", "SHACMAN", "BAW", "INMAN", "URAL", "МАЗ"] 
      },
      {
        type: "checkbox",
        label: "Колесная формула",
        options: ["4x2", "6x4", "4x4"]
      },
      { 
        type: "checkbox", 
        label: "Полная масса, тонн", 
        options: ["до 12", "до 20", "свыше 20"] 
      },
      {
        type: "checkbox",
        label: "Длина платформы, м",
        options: ["3500", "4400", "5200", "5500", "6165", "6200", "6400", "6500", "6700", "6800", "7000", "7200", "8200"]
      },
      {
        type: "range",
        label: "Грузоподъёмность КМУ, тонн",
      }
    ],
    content: {
      intro: "Грузоподъёмная техника обеспечивает удобство при работе с тяжёлыми материалами. Автомобиль с краном манипулятором помогает выполнять погрузку и перевозку без лишних усилий. Такая техника отличается маневренностью и точной работой. Компания «РусТрак» предлагает модели, рассчитанные на разные условия. Качество сборки, надёжность механизмов и продуманная конструкция позволяют технике долго служить без сбоев. Такой транспорт дарит ощущение надёжности и уверенно помогает справляться со сложными задачами.",
      assortment: "Ассортимент",
      assortmentdesc1: "Компания «РусТрак» предлагает широкий выбор моделей для разных типов работ и условий эксплуатации, подбирая технику с оптимальной мощностью и характеристиками, чтобы она эффективно справлялась с поставленными задачами. Мы осуществляем монтаж кранов‑манипуляторов ведущих производителей:",
      assortmentdesc2: "В зависимости от задач можно выбрать подходящий тип КМУ:",
      assortmentdesc2features: [
        "Тросовый — стрела оснащена тросом, что делает возможной и удобной работу ниже уровня земли. В транспортном положении она не складывается за кабиной, что особенно полезно при выполнении специфических задач.",
        "Шарнирно‑сочленённый (крюковой) — вместо троса используется крюк. Конструкция складывается за кабиной в транспортном положении, благодаря чему техника становится компактной и удобной при перемещении.",
      ],
      brands: ["ИНМАН", "HKTC", "XCMG", "ПАЛФИНГЕР", "HANGIL", "DY", "UNIC", "FASSI", "SOOSAN"],
      featuresLabel: "Конструктивные особенности крана-манипулятора",
      features: [
        {
          featuresdesc: "Прочный профиль Hossen — надёжная основа, благодаря которой грузовая машина с краном манипулятором сохраняет устойчивость и долговечность."
        },
        {
          featuresdesc: "Основание из открытых профилей — оптимальное решение для высокой прочности и стабильности при эксплуатации."
        },
        {
          featuresdesc: "Усиленная монтажная плита задних опор — гарантирует надёжность при работе с тяжёлыми грузами.",
        },
        {
          featuresdesc: "Откидные борта на 180° — удобная загрузка и разгрузка с любой стороны, благодаря чему бортовая машина с КМУ работает быстрее и эффективнее.",
        },
        {
          featuresdesc: "Надёжное крепление КМУ — установка через широкую монтажную плиту и фиксация на шпильках обеспечивает безопасность и долгий срок службы."
        },
        {
          featuresdesc: "Износостойкий настил пола из транспортной фанеры — все швы тщательно герметизированы, что защищает от влаги и продлевает срок эксплуатации."
        },
        {
          featuresdesc: "Защита кабины — предотвращает случайные повреждения, сохраняя целостность при эксплуатации и делая грузовой автомобиль с КМУ более безопасным."
        },
        {
          featuresdesc: "Сдвижная крыша — удобный доступ и дополнительная защита перевозимых материалов."
        },
        {
          featuresdesc: "Окрас платформы в цвет крана — единый стиль и аккуратный внешний вид техники."
        },
        {
          featuresdesc: "Противосдвиговые пластины на раме — надёжное соединение надстройки с рамой, усиление конструкции с обеих сторон."
        },
        {
          featuresdesc: "Скрытые петли крепления груза — безопасная фиксация и эстетичный внешний вид без лишних деталей."
        },
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Кран манипулятор цена которого остаётся доступной при высоком качестве техники, находит широкое применение в самых разных сферах. Он эффективно используется на строительных площадках для подъёма и транспортировки стройматериалов, в коммунальном хозяйстве при обслуживании инфраструктуры и перевозке оборудования, а также в логистике и складских операциях для разгрузки и погрузки контейнеров и крупногабаритных грузов. Благодаря универсальности и маневренности техника подходит для работы в условиях ограниченного пространства, на городских улицах и промышленных территориях, обеспечивая высокую производительность и сокращение времени на выполнение задач.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Широкий выбор техники – большой ассортимент кранов-манипуляторов и грузовых автомобилей различных марок и конфигураций.",
        },
        {
          workingFeaturesDesc: "Качество и надёжность – техника проверена на прочность и долговечность, соответствует высоким стандартам эксплуатации.",
        },
        {
          workingFeaturesDesc: "Профессиональная поддержка – специалисты помогают подобрать оптимальное решение под конкретные задачи и условия работы.",
        },
        {
          workingFeaturesDesc: "Сервис и обслуживание – компания обеспечивает техническую поддержку и консультации на всех этапах эксплуатации.",
        },
        {
          workingFeaturesDesc: "Оперативная доставка – любая машина с краном манипулятором быстро поставляется в регионы.",
        },
        {
          workingFeaturesDesc: "Индивидуальный подход – учитываются потребности каждого клиента, предлагаются оптимальные комплектации и дополнительные опции.",
        }
      ],
      equipmentTItle: "Надёжная техника для любых задач",
      equipmentdesc: "Купить кран манипулятор – выгодное решение для тех, кто ценит практичность и экономию времени. Мы поможем подобрать технику под ваши задачи и условия работы. Компания «РусТрак» обеспечивает большой выбор и качественное обслуживание. Сделайте уверенный шаг к повышению эффективности своих процессов. Получите профессиональную консультацию и оперативное сопровождение. Для оформления заказа свяжитесь с нами любым удобным способом.",
    },
   trak: [
      {
        id: 1,
        title: "crane_manipulators.trak1.title",
        titleKey: "CraneManipulators1Title",
        slug: "kran-manipulyator-maz-6312c5-8535-012-s-kmu-inman-it-150-model-4389n8",
        img: trak7,
        price: "crane_manipulators.trak1.price",
        priceKey: "CraneManipulators1Price",
        priceValue: 8000000,
        rating: 4.8,            
        isNew: false,            
        inStock: true,
        length: "6800",
        mass: "до 20",
        formula: "4x2",
        descKey: "crane_manipulators.trak1.descKey",
        descValue: "crane_manipulators.trak1.descValue",
        descImg: descTr3,
        paramLabel: "crane_manipulators.trak1.paramLabel",
        parametrs: "crane_manipulators.trak1.parametrs"
      },
      {
        id: 2,
        title: "crane_manipulators.trak2.title",
        titleKey: "CraneManipulators2Title",
        slug: "kran-manipulyator-maz-631228-s-kmu-palfinger-spk-23500",
        img: trak8,
        price: "crane_manipulators.trak2.price",
        priceKey: "CraneManipulators2Price",
        priceValue: 7000000,
        rating: 7,            
        isNew: false,            
        inStock: false,
        length: "7000",
        mass: "до 20",
        formula: "4x2",
        descKey: "crane_manipulators.trak2.descKey",
        descValue: "crane_manipulators.trak2.descValue",
        paramLabel: "crane_manipulators.trak2.paramLabel",
        parametrs: "crane_manipulators.trak2.parametrs"
      },
      {
        id: 3,
        title: "crane_manipulators.trak3.title",
        titleKey: "CraneManipulators3Title",
        slug: "kran-manipulyator-maz-631228-s-kmu-inman-it-150",
        img: trak9,
        price: "crane_manipulators.trak3.price",
        priceKey: "CraneManipulators3Price",
        priceValue: 5200000,
        rating: 6,            
        isNew: true,            
        inStock: false,
        length: "6400",
        mass: "до 12",
        formula: "4x2",
        descKey: "crane_manipulators.trak3.descKey",
        descValue: "crane_manipulators.trak3.descValue",
        paramLabel: "crane_manipulators.trak3.paramLabel",
        parametrs: "crane_manipulators.trak3.parametrs"
      },
      {
        id: 4,
        title: "crane_manipulators.trak4.title",
        titleKey: "CraneManipulators4Title",
        slug: "kran-manipulyator-kamaz-43118-s-kmu-inman-im150n-model-4388s2-10",
        img: trak10,
        price: "crane_manipulators.trak4.price",
        priceKey: "CraneManipulators4Price",
        priceValue: 9000000,
        rating: 9,            
        isNew: true,            
        inStock: false,
        length: "7200",
        mass: "свыше 20",
        formula: "4x2",
        descKey: "crane_manipulators.trak4.descKey",
        descValue: "crane_manipulators.trak4.descValue",
        descImg: descTr4,
        paramLabel: "crane_manipulators.trak4.paramLabel",
        parametrs: "crane_manipulators.trak4.parametrs"
      }
    ]
  },
  "Fuel-bowsers": {
    slug: "Fuel-bowsers",
    title: "Fuel-bowsers",
    cartImg: cartImg6,
    filters: [
      {
        type: "range",
        label: "Цена",
      },
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "JAC", "FAW", "FOTON", "DONGFENG", "SOLLERS", "УРАЛ", "Валдай"] 
      },
      { 
        type: "checkbox", 
        label: "Полная масса, тонн", 
        options: ["до 12"] 
      },
      {
        type: "range",
        label: "Объем цистерны, л.",
      }
    ],
    content: {
      intro: "Надёжное снабжение топливом упрощает работу на любых объектах. Купить автотопливозаправщик — возможность заправлять технику прямо на месте, экономя время и снижая расходы. Оборудование оснащено прочными цистернами и современными насосами для точного учета топлива. Компания «РусТрак» предлагает модели, которые подходят для различных задач и объёмов. Выбор подходящего автозаправщика зависит от интенсивности работы и условий эксплуатации. Использование проверенных систем заправки гарантирует безопасность и бесперебойную работу на всех объектах.",
      assortment: "Ассортимент",
      assortmentdesc1: "Компания «РусТрак» предлагает разнообразную технику, где каждая модель АТЗ адаптирована под различные задачи и объёмы работы. В нашем каталоге представлены автомобили ведущих марок:",
      assortmentdesc2: "Доступные варианты вместимости цистерн:",
      assortmentdesc3: "Все модели сертифицированы и соответствуют современным стандартам качества и безопасности, что гарантирует надёжность, долговечность и уверенность в бесперебойной работе.",
      assortmentdesc2features: [
        "5 200 литров (5 м³)",
        "6 000 литров (6 тонн)",
        "8 000 литров (8 м³)",
        "10 000 литров (10 м³)",
        "12 000 литров (12 м³)",
      ],
      brands: ["ГАЗ", "КАМАЗ", "JAC", "FAW", "FOTON"],
      featuresLabel: "Особенности автотопливозаправщиков",
      features: [
        {
          featuresdesc: "Гибкость эксплуатации – автомобильный топливозаправщик оснащён двумя топливными отсеками, что позволяет работать сразу с разными видами горючего."
        },
        {
          featuresdesc: "Надежность и долговечность – цистерна выполнена из прочной стали 09Г2С толщиной 3 мм."
        },
        {
          featuresdesc: "Минимальные затраты на обслуживание – алюминиевые коммуникации легкие, устойчивые к коррозии и не требуют сложного ухода.",
        },
        {
          featuresdesc: "Дополнительная защита на дороге – боковое устройство из алюминия снижает риск повреждений при движении.",
        },
        {
          featuresdesc: "Быстрый доступ к узлам – складная алюминиевая лестница облегчает обслуживание."
        },
        {
          featuresdesc: "Экономия времени при заправке – топливозаправочные машины оснащены шиберным насосом с производительностью 600 л/мин, что обеспечивает высокую скорость работы."
        },
        {
          featuresdesc: "Удобство подключения – два всасывающих рукава длиной по 3 метра позволяют организовать заправку в любых условиях."
        },
        {
          featuresdesc: "Сокращение простоев – быстроразъемные соединения Elaflex Ду-75 гарантируют надежность и ускоряют процессы."
        },
        {
          featuresdesc: "Комфорт при работе – крышка узла выдачи топлива оснащена газлифтами для удобного и безопасного использования."
        },
        {
          featuresdesc: "Защита горловин – автоцистерна для ГСМ оснащена ограждением по всей длине, что облегчает обслуживание и повышает безопасность."
        },
        {
          featuresdesc: "Работа на расстоянии – раздаточный рукав Ду-25 длиной 10 метров обеспечивает удобство при заправке."
        },
        {
          featuresdesc: "Стабильность давления – дыхательное устройство УД-33 гарантирует безопасное хранение топлива."
        },
        {
          featuresdesc: "Полный контроль электросистемы – мобильный заправщик оборудован тремя выключателями массы, позволяющими обесточить машину с любой стороны и из кабины."
        },
        {
          featuresdesc: "Простота операций – управление донными клапанами сосредоточено в узле выдачи, что делает процесс быстрым и надежным."
        },
        {
          featuresdesc: "Защита от статического электричества – штырь заземления длиной 10 метров обеспечивает безопасность при работе с горючим."
        },
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Купить автотопливозаправщик выгодно для любых сфер деятельности, где требуется оперативная заправка автомобилей и спецмашин. Он незаменим на строительных площадках, где оборудование должно работать без простоев, а также в сельском хозяйстве для обслуживания тракторов и комбайнов. В промышленности и на производственных объектах он обеспечивает бесперебойную работу автопарка. Системы заправки активно применяются коммунальными и дорожными службами, а также транспортными компаниями, которым важно экономить время и ресурсы. Кроме того, автозаправщики подходят для организации мобильных заправочных станций на удалённых объектах и мероприятиях. Их универсальность делает процесс снабжения топливом проще, безопаснее и эффективнее.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Разнообразие техники – возможность подобрать автотопливозаправщик под любые задачи и объемы работы.",
        },
        {
          workingFeaturesDesc: "Качество и надежность – автотопливозаправщик соответствует современным стандартам и обеспечена системами безопасности.",
        },
        {
          workingFeaturesDesc: "Помощь в выборе оборудования – специалисты компании консультируют и подбирают оптимальное решение с учетом ваших потребностей.",
        },
        {
          workingFeaturesDesc: "Мобильная доставка и оперативность – техника доставляется и вводится в эксплуатацию без лишних задержек.",
        },
        {
          workingFeaturesDesc: "Техническая поддержка и сервис – компания обеспечивает обслуживание, ремонт и консультации по эксплуатации оборудования.",
        },
        {
          workingFeaturesDesc: "Экономия времени и ресурсов – с правильным автозаправщиком вы сокращаете простои техники и снижаете расходы на топливо.",
        },
        {
          workingFeaturesDesc: "Индивидуальный подход к каждому клиенту – решение подбирается с учетом особенностей работы, объема и условий эксплуатации.",
        }
      ],
      equipmentTItle: "Простая и безопасная заправка на месте",
      equipmentdesc: "Купить автотопливозаправщик — первый шаг к удобному и безопасному обеспечению транспорта топливом. Не откладывайте решение — выберите модель, которая идеально подходит для ваших задач. Компания «РусТрак» имеет большой выбор надёжных и современных автозаправщиков. Мы поможем определить подходящее решение, учитывая ваши потребности и условия эксплуатации. Убедитесь, что ваш автопарк всегда заправлен и готов к работе. Для оформления заказа свяжитесь с нами любым удобным способом, и мы подберём оптимальный вариант именно для вас.",
    },
   trak: [
      {
        id: 1,
        title: "fuel_bowsers.trak1.title",
        titleKey: "FuelBowsers1Title",
        slug: "toplivozapravshchik-sadko-9-s41a13-s-atz-4-5-m3-dvuhsektsionnaya",
        img: trak11,
        price: "fuel_bowsers.trak1.price",
        priceKey: "FuelBowsers1Price",
        priceValue: 9000000,
        rating: 7,            
        isNew: true,            
        inStock: true,
        mass: "до 12",
        descKey: "fuel_bowsers.trak1.descKey",
        descValue: "fuel_bowsers.trak1.descValue",
        descImg: descTr5,
        paramLabel: "fuel_bowsers.trak1.paramLabel",
        parametrs: "fuel_bowsers.trak1.parametrs"
      },
      {
        id: 2,
        title: "fuel_bowsers.trak2.title",
        titleKey: "FuelBowsers2Title",
        slug: "avtotoplivozapravshchik-na-shassi-gaz-c41r13-model-4389jy",
        img: trak12,
        price: "fuel_bowsers.trak2.price",
        priceKey: "FuelBowsers2Price",
        priceValue: 6000000,
        rating: 6,            
        isNew: false,            
        inStock: false,
        mass: "до 12",
        descKey: "fuel_bowsers.trak2.descKey",
        descValue: "fuel_bowsers.trak2.descValue",
        paramLabel: "fuel_bowsers.trak2.paramLabel",
        parametrs: "fuel_bowsers.trak2.parametrs"
      }
    ]
  },
  "Aerial-work-platforms": {
    slug: "Aerial-work-platforms",
    title: "Aerial-work-platforms",
    cartImg: cartImg4,
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      }
    ],
    content: {
      intro: "Машины для работы на высоте становятся всё более технологичными и удобными. Купить автогидроподъемник — выгодное решение для повышения эффективности и безопасности работ. Такая техника обеспечивает точное выполнение задач и минимизирует риски. Компания «РусТрак» предлагает надёжные модели для разных условий эксплуатации. Продуманная конструкция гарантирует устойчивость и точность движения. Дополнительные функции делают управление проще и повышают удобство работы.",
      assortment: "Ассортимент",
      assortmentdesc1: "Компания «РусТрак» предлагает разнообразную технику, где каждая модель АТЗ адаптирована под различные задачи и объёмы работы. В нашем каталоге представлены автомобили ведущих марок:",
      assortmentdesc2: "Вся техника сертифицирована и соответствует строгим стандартам качества, что гарантирует безопасность и долгий срок эксплуатации. Компания соблюдает международные нормы и российские требования, а каждая единица проходит проверку перед поставкой клиенту. Это позволяет клиентам быть уверенными в надежности и эффективности приобретаемого оборудования.",
      brands: ["ГАЗ", "ISUZU", "FUSO", "PALFINGER"],
      featuresLabel: "Особенности автотопливозаправщиков",
      features: [
        {
          featuresLAbel: "Регулируемая высота подъёма",
          featuresdesc: "Позволяет точно поднимать людей и грузы на нужную высоту, повышая безопасность и удобство работы."
        },
        {
          featuresLAbel: "Гидравлическая система управления",
          featuresdesc: "Обеспечивает плавное и точное движение стрелы, снижая риск резких рывков и повреждений.",
        },
        {
          featuresLAbel: "Стабилизационные опоры",
          featuresdesc: "Гарантируют устойчивость техники даже на неровной поверхности, предотвращая опрокидывание.",
        },
        {
          featuresLAbel: "Компактные размеры шасси",
          featuresdesc: "Упрощают маневрирование в ограниченном пространстве и транспортировку оборудования.",
        },
        {
          featuresLAbel: "Эргономичное управление",
          featuresdesc: "Панель управления продумана для удобства оператора, сокращая время обучения и снижая усталость.",
        },
        {
          featuresLAbel: "Надёжная конструкция стрелы и платформы",
          featuresdesc: "Обеспечивает долговечность эксплуатации и высокую устойчивость при работе с грузом.",
        }
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Купить автогидроподъемник будет надёжным решением для повышения безопасности и эффективности работ. Такие машины применяются для обслуживания линий электропередач, монтажа и ремонта наружной рекламы, установки освещения и видеонаблюдения, а также для строительных и отделочных работ. Техника востребована в коммунальном хозяйстве, при обслуживании зданий и сооружений, на складах и промышленных объектах. Универсальность и надежность ускоряют процессы, повышают безопасность и снижают трудозатраты. Автогидроподъемники обеспечивают точное и эффективное выполнение задач в любых условиях. Использование такой техники становится оптимальным решением для организаций любого масштаба.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesLabel: "Широкий ассортимент техники",
          workingFeaturesDesc: "Компания предлагает разнообразные модели автогидроподъемников, подходящие для разных задач и условий эксплуатации.",
        },
        {
          workingFeaturesLabel: "Профессиональная консультация",
          workingFeaturesDesc: "Специалисты помогают выбрать оптимальное оборудование с учётом высоты подъёма, грузоподъёмности и специфики работы.",
        },
        {
          workingFeaturesLabel: "Гарантия качества",
          workingFeaturesDesc: "Все машины проходят проверку и соответствуют стандартам безопасности, что обеспечивает надёжную и долговечную эксплуатацию.",
        },
        {
          workingFeaturesLabel: "Удобство покупки",
          workingFeaturesDesc: "Компания предлагает гибкие условия приобретения, включая доставку и оформление документов, что экономит время клиентов.",
        },
        {
          workingFeaturesLabel: "Поддержка и обслуживание",
          workingFeaturesDesc: "После покупки доступны сервисные услуги и консультации по эксплуатации, что продлевает срок службы техники.",
        },
        {
          workingFeaturesLabel: "Индивидуальный подход",
          workingFeaturesDesc: "Каждому клиенту подбираются решения, учитывающие конкретные задачи и бюджет, что повышает эффективность использования техники.",
        },
      ],
      equipmentTItle: "Техника, которая облегчает работу на высоте",
      equipmentdesc: "Купить автогидроподъемник — шаг к повышению эффективности и безопасности работы. Мы поможем с выбором техники, учитывая ваши задачи и требования. Компания «РусТрак» предоставляет широкий ассортимент моделей и консультации специалистов. Изучите характеристики и подберите подходящую модель. Действуйте активно, чтобы обеспечить удобство и продуктивность работы. Для оформления заказа свяжитесь с нами любым удобным способом, и мы поможем выбрать оптимальное решение.",
    },
    trak: [
      {
        id: 1,
        title: "aerial_work_platforms.trak1.title",
        titleKey: "AerialWorkPlatforms1Title",
        slug: "avtogidropodjemnik-palfinger-p-180t-na-shassi-gaz-c41r33",
        img: trak13,
        price: "aerial_work_platforms.trak1.price",
        priceKey: "AerialWorkPlatforms1Price",
        priceValue: 8000000,
        rating: 4.8,            
        isNew: false,            
        inStock: true,
        descKey: "aerial_work_platforms.trak1.descKey",
        descValue: "aerial_work_platforms.trak1.descValue",
        paramLabel: "aerial_work_platforms.trak1.paramLabel",
        parametrs: "aerial_work_platforms.trak1.parametrs"
      }
    ]
  },
  "Tanker-trucks": {
    slug: "Tanker-trucks",
    title: "Tanker-trucks",
    cartImg: cartImg5, 
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ", "JAC"] 
      },
      { 
        type: "checkbox", 
        label: "Тип автоцистерны", 
        options: ["Вакуумная автоцистерна", "Пищевая автоцистерна"] 
      },
      {
        type: "range",
        label: "Объем цистерны, л."
      }
    ],
    content: {
      intro: "Техника для обслуживания жидких и вязких сред требует точности и продуманного подхода. Вакуумная автоцистерна обеспечивает аккуратное обращение с рабочими средами и поддерживает стабильность технологических операций. Её конструкция направлена на удобное управление и безопасность персонала. Компания «РусТрак» предлагает решения, соответствующие строгим требованиям и особенностям отрасли. Модели отличаются прочностью и способностью сохранять рабочие характеристики при длительной эксплуатации. Такой подход укрепляет доверие к технике и снижает вероятность непредвидённых остановок.",
      assortment: "Ассортимент",
      assortmentdesc1: "Мы предлагаем модели автоцистерн, доступные в разных исполнениях и модификациях. В нашем каталоге представлен большой выбор техники, среди которой каждый сможет найти подходящий вариант для своих нужд.",
      assortmentdesc2: "Тип автоцистерны:",
      assortmentdesc3: "Все модели проходят обязательную сертификацию и соответствуют российским и международным стандартам качества. Это обеспечивает надёжность, безопасность эксплуатации и долговечность техники, а также даёт уверенность в соответствии оборудования заявленным требованиям.",
      brand: "Марка:",
      brands: ["ГАЗ", "КАМАЗ", "JAC", "ISUZU", "HYUNDAI", "HINO"],
      assortmentdesc2features: [
        "Вакуумная автоцистерна",
        "Пищевая автоцистерна",
      ],
      featuresLabel: "Особенности автоцистерн",
      features: [
        {
          featuresdesc: "Создание вакуума – обеспечивает эффективный сбор и транспортировку жидких и вязких веществ без разливов и потерь."
        },
        {
          featuresdesc: "Прочность конструкции – корпус и комплектующие выполнены из материалов, устойчивых к коррозии и механическим нагрузкам.",
        },
        {
          featuresdesc: "Система управления – позволяет точно контролировать процесс закачки и откачки жидкостей, упрощая работу оператора.",
        },
        {
          featuresdesc: "Универсальность применения – техника может использоваться в различных отраслях благодаря адаптируемым параметрам и модификациям.",
        },
        {
          featuresdesc: "Обслуживание и ремонт – продуманная конструкция упрощает доступ к ключевым узлам для профилактики и ремонта.",
        },
        {
          featuresdesc: "Безопасность эксплуатации – встроенные системы защиты предотвращают аварийные ситуации и обеспечивают безопасную работу с опасными средами.",
        }
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Автоцистерна вакуумная используется в самых разных сферах, где важны безопасная и эффективная транспортировка и хранение жидких и вязких веществ. Она применяется в промышленности для перемещения технологических жидкостей, в коммунальной сфере для откачки сточных вод и обслуживания городских систем, а также в пищевой отрасли для перевозки жидких продуктов и сырья. Надёжность и прочность конструкции делают её востребованной в строительстве и сельском хозяйстве, где требуется аккуратная работа с жидкостями при различных условиях эксплуатации. Такая автоцистерна помогает оптимизировать процессы, повышает эффективность работы и обеспечивает безопасность персонала.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Широкий ассортимент техники – в наличии различные модели вакуумных автоцистерн, адаптированные под конкретные задачи и условия эксплуатации.",
        },
        {
          workingFeaturesDesc: "Надёжность оборудования – все автоцистерны проходят строгий контроль качества и обеспечивают безопасную и стабильную работу.",
        },
        {
          workingFeaturesDesc: "Индивидуальный подбор решений – специалисты помогают выбрать модель с оптимальными характеристиками и комплектацией под ваши потребности.",
        },
        {
          workingFeaturesDesc: "Поддержка на всех этапах – консультации при выборе, сопровождение при заказе и техническая поддержка после покупки.",
        },
        {
          workingFeaturesDesc: "Доставка и сервис – компания обеспечивает оперативную поставку и качественное обслуживание техники в Нижнем Новгороде и регионе.",
        },
        {
          workingFeaturesDesc: "Прозрачные условия сотрудничества – честные цены, подробные спецификации и официальная документация для каждого заказа.",
        },
      ],
      equipmentTItle: "Комфорт и безопасность при транспортировке жидкостей",
      equipmentdesc: "Автоцистерна, купить которую не только выгодно, но и удобно, обеспечит надёжную и безопасную работу при транспортировке и хранении различных жидкостей. Выберите модель, соответствующую вашим требованиям и условиям эксплуатации. Компания «РусТрак» готова предоставить консультацию и помочь с подбором техники. Ознакомьтесь с техническими характеристиками и доступными опциями. Сделайте шаг к повышению эффективности и безопасности ваших процессов. Оформите заказ на нашем сайте или свяжитесь с нами любым удобным способом.",
    },
    trak: [
      {
        id: 1,
        title: "tanker_trucks.trak1.title",
        titleKey: "TankerTrucks1Title",
        slug: "pishchevaya-tsisterna-kamaz-43089",
        img: trak14,
        price: "tanker_trucks.trak1.price",
        priceKey: "TankerTrucks1Price",
        priceValue: 7000000,
        rating: 6,            
        isNew: true,            
        inStock: true,
        descKey: "tanker_trucks.trak1.descKey",
        descValue: "tanker_trucks.trak1.descValue",
        paramLabel: "tanker_trucks.trak1.paramLabel",
        parametrs: "tanker_trucks.trak1.parametrs"
      },
      {
        id: 2,
        title: "tanker_trucks.trak2.title",
        titleKey: "TankerTrucks2Title",
        slug: "gazon-next-s-pishchevoy-tsisternoy-4-2-kuba",
        img: trak15,
        price: "tanker_trucks.trak2.price",
        priceKey: "TankerTrucks2Price",
        priceValue: 9000000,
        rating: 3,            
        isNew: true,            
        inStock: false,
        descKey: "tanker_trucks.trak2.descKey",
        descValue: "tanker_trucks.trak2.descValue",
        paramLabel: "tanker_trucks.trak2.paramLabel",
        parametrs: "tanker_trucks.trak2.parametrs"
      }
    ]
  },
  "Tow-trucks": {
    slug: "Tow-trucks",
    title: "Tow-trucks",
    cartImg: cartImg3,
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["КАМАЗ"] 
      },
      { 
        type: "checkbox", 
        label: "Тип бортовой платформы", 
        options: ["Прямого типа"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      },
      { 
        type: "checkbox", 
        label: "Длина платформы, м", 
        options: ["4600"] 
      }
    ],
    content: {
      intro: "Автомобильная техника развивается стремительными темпами, предлагая водителям новые возможности и удобства. Купить автоэвакуатор становится разумным решением для расширения возможностей бизнеса и повышения мобильности. Сфера перевозки автомобилей требует надежного оборудования и точного планирования. Компания «РусТрак» предлагает специализированную технику, которая отвечает высоким стандартам безопасности. Внедрение современных решений позволяет сократить время выполнения задач и повысить качество обслуживания. Надежное оборудование сочетает функциональность с долговечностью и простотой эксплуатации.",
      assortment: "Ассортимент",
      assortmentdesc1: "В наличии представлена надежная техника, рассчитанная на разные условия эксплуатации и задачи. Модели подбираются с учетом требований к грузоподъемности, маневренности и техническим характеристикам, что обеспечивает удобство и стабильность работы. Доступные варианты на базе:",
      assortmentdesc2: "Каждая позиция отличается качественной сборкой и продуманной конструкцией, что положительно сказывается на сроке службы и удобстве эксплуатации. Такой выбор позволяет подобрать подходящее решение под конкретные условия.",
      brands: ["КАМАЗ", "ISUZU"],
      featuresLabel: "Особенности автоэвакуаторов",
      features: [
        {
          featuresdesc: "Надежность конструкции — эвакуатор для автомобиля рассчитан на интенсивную эксплуатацию и стабильную работу при высоких нагрузках."
        },
        {
          featuresdesc: "Высокая грузоподъемность — позволяет безопасно перевозить различные транспортные средства без снижения эффективности.",
        },
        {
          featuresdesc: "Удобство управления — продуманная компоновка упрощает работу оператора и снижает утомляемость.",
        },
        {
          featuresdesc: "Долговечность узлов и агрегатов — качественные материалы и сборка увеличивают срок службы техники.",
        },
        {
          featuresdesc: "Безопасность при погрузке — технические решения обеспечивают устойчивость и контроль при выполнении работ.",
        },
        {
          featuresdesc: "Универсальность применения — эвакуаторы на шасси КАМАЗ и ISUZU подходят для выполнения разных задач в любых условиях эксплуатации.",
        }
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Эвакатор с КМУ широко применяется для перевозки легковых транспортных средств на различные расстояния и для решения сложных задач на дороге. Конструкция и технические возможности обеспечивают безопасную погрузку и стабильное перемещение без риска повреждений, а удобство управления позволяет легко маневрировать даже в плотном городском движении. Эвакуационный автомобиль эффективно используется для эвакуации неисправных автомобилей после поломок и дорожно-транспортных происшествий. Надежность узлов и прочность конструкции позволяют выполнять задачи на трассах и в условиях ограниченного пространства без потери эффективности. Дополнительно возможна эксплуатация при работе с коммерческим транспортом и на площадках с ограниченным пространством. Универсальность конструкции делает такие автомобили подходящими для регулярной и интенсивной эксплуатации в разных условиях.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Наличие всех необходимых сертификатов — техника соответствует установленным требованиям и нормативам.",
        },
        {
          workingFeaturesDesc: "Контроль качества на каждом этапе — проверка оборудования перед передачей заказчику.",
        },
        {
          workingFeaturesDesc: "Гарантийное и послегарантийное обслуживание — техническая поддержка в процессе эксплуатации.",
        },
        {
          workingFeaturesDesc: "Удобный процесс покупки — сопровождение сделки и помощь с оформлением документов.",
        },
        {
          workingFeaturesDesc: "Практический опыт работы — понимание особенностей техники и условий эксплуатации.",
        },
        {
          workingFeaturesDesc: "Конкурентная цена — возможность приобрести недорогой автоэвакуатор без ущерба для качества.",
        },
        {
          workingFeaturesDesc: "Доверие со стороны клиентов — стабильная работа и подтвержденное качество поставляемой техники."
        }
      ],
      equipmentTItle: "Современные решения для перевозки",
      equipmentdesc: "Купить эвакуатор с КМУ — практичное решение для расширения возможностей транспортировки и облегчения работы на дорогах. Такой транспорт открывает новые горизонты и упрощает выполнение сложных задач. Компания «РусТрак» предлагает проверенную технику с гарантией качества и долгим сроком службы. Позаботьтесь о безопасности и эффективности своих перевозок. Сделайте работу более удобной и надежной с современным оборудованием. Для оформления заказа свяжитесь с нами любым удобным способом, и мы поможем подобрать оптимальное решение.",
    },
    trak: [
      {
        id: 1,
        title: "tow_trucks.trak1.title",
        titleKey: "TowTrucks1Title",
        slug: "evakuator-na-shassi-kamaz-4308-s-kmu-palfinger-pk-13500t",
        img: trak16,
        price: "tow_trucks.trak1.price",
        priceKey: "TowTrucks1Price",
        priceValue: 8000000,
        rating: 4.8,            
        isNew: false,            
        inStock: false,
        formula: "4x2",
        descKey: "tow_trucks.trak1.descKey",
        descValue: "tow_trucks.trak1.descValue",
        paramLabel: "tow_trucks.trak1.paramLabel",
        parametrs: "tow_trucks.trak1.parametrs"
      }
    ]
  },
  "Insulated-vans": {
    slug: "Insulated-vans",
    title: "Insulated-vans", 
    cartImg: cartImg7,
    filters: [
      { 
        type: "search", 
        label: "Brand", 
        options: ["KAMAZ", "JAC", "DAEWOO", "FAW", "DONG FENG", "SHACMAN"] 
      }
    ],
    content: {
      intro: "Транспортировка товаров с соблюдением температурного режима становится всё более востребованной в разных отраслях. Купить изотермический фургон для сохранения качества продукции на протяжении всего пути становится рациональным решением для компаний, стремящихся к оптимизации логистики. Использование специализированных транспортных средств снижает риск порчи и экономит ресурсы. Компания «РусТрак» предлагает широкий выбор моделей с современными технологиями изоляции и контроля температуры. Инвестиции в надежный транспорт повышают эффективность логистических процессов и минимизируют убытки. Надёжность техники напрямую отражается на доверии клиентов и стабильности бизнеса.",
      assortment: "Ассортимент",
      assortmentdesc1: "В компании представлен широкий выбор техники для перевозки различных грузов. Каждый грузовой фургон изотермический способен обеспечить надежную доставку и сохранность продукции. Модели отличаются габаритами, грузоподъемностью и особенностями конструкции, что позволяет подобрать оптимальный вариант для любых перевозок. Среди доступных марок:",
      assortmentdesc2: "Каждая марка отличается надежностью и современными технологиями, обеспечивая сохранность груза на всех этапах транспортировки. Выбор подходящей модели позволяет оптимизировать логистику и повысить эффективность работы компании.",
      brands: ["КАМАЗ", "JAC", "DAEWOO", "FAW", "ISUZU", "HYUNDAI", "HINO", "DONG FENG", "SHACMAN"],
      featuresLabel: "Особенности изотермических фургонов",
      features: [
        {
          featuresdesc: "Сохранение температуры – надежная термоизоляция позволяет поддерживать стабильный температурный режим, предотвращая порчу продукции."
        },
        {
          featuresdesc: "Разнообразие моделей – широкий выбор фургонов разного объема и грузоподъёмности обеспечивает оптимальный вариант для любых задач.",
        },
        {
          featuresdesc: "Надежность техники – проверенные марки и современные технологии снижают риск поломок и обеспечивают долгий срок службы транспорта.",
        },
        {
          featuresdesc: "Экономия ресурсов – уменьшение потерь груза и оптимизация логистики сокращают затраты на перевозку и хранение, при этом фургоны изотермические цены которые остаются доступными для компаний любого масштаба.",
        },
        {
          featuresdesc: "Удобство эксплуатации – продуманная конструкция фургонов облегчает загрузку, разгрузку и обслуживание транспорта.",
        },
        {
          featuresdesc: "Поддержка производителя – наличие сервисных центров и консультаций позволяет быстро решать любые вопросы, связанные с эксплуатацией.",
        }
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Изотермические фургоны активно используются в пищевой промышленности для перевозки продуктов, требующих поддержания определённой температуры. Фрукты, овощи, мясо и молочная продукция сохраняют свежесть на протяжении всего пути, что особенно важно для дальних перевозок и дистрибуции в розничные сети. Транспорт с термоизоляцией также незаменим для фармацевтической отрасли. Лекарства, вакцины и другие медицинские препараты требуют строгого соблюдения температурного режима, а изотермический фургон обеспечивает безопасные условия доставки от производителя до конечного потребителя. Кроме того, такие фургоны применяются в химической и косметической промышленности. Продукция, чувствительная к перепадам температуры, сохраняет свои свойства благодаря поддержанию стабильного микроклимата внутри кузова. Использование надёжного транспорта минимизирует риски порчи и повышает эффективность логистических процессов.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Широкий выбор техники – компания предлагает фургоны разных марок и моделей, что позволяет подобрать оптимальный вариант под любые задачи, при этом новый изотермический фургон цена остаётся конкурентоспособной.",
        },
        {
          workingFeaturesDesc: "Качество и надежность – все транспортные средства соответствуют современным стандартам и проходят проверку перед продажей, обеспечивая долгий срок службы.",
        },
        {
          workingFeaturesDesc: "Профессиональная консультация – специалисты помогают выбрать подходящую модель с учётом особенностей бизнеса и требований к перевозкам.",
        },
        {
          workingFeaturesDesc: "Поддержка и сервис – «РусТрак» обеспечивает сервисное обслуживание, ремонт и поставку запчастей, что снижает риски простоя техники.",
        },
        {
          workingFeaturesDesc: "Индивидуальный подход – компания учитывает потребности каждого клиента, предлагая гибкие условия покупки и дополнительное оборудование.",
        },
        {
          workingFeaturesDesc: "Оптимизация логистики – грамотный подбор техники и сопровождение сделки позволяют повысить эффективность перевозок и сократить расходы.",
        },
      ],
      equipmentTItle: "Оптимальные решения для температурной логистики",
      equipmentdesc: "Купить фургон изотермический цена которого соответствует бюджету и разным задачам — разумное решение для компаний, стремящихся к надежной перевозке товаров. Такой транспорт обеспечивает стабильный температурный режим и минимизирует потери продукции. Компания «РусТрак» помогает подобрать технику с учётом индивидуальных требований и особенностей бизнеса. Оцените доступные варианты и выберите оптимальное решение для своих перевозок. Начните улучшать логистику уже сейчас, повышая эффективность работы и сокращая риски. Для оформления заказа свяжитесь с нами любым удобным способом, и специалисты помогут завершить процесс быстро и удобно.",
    },
    trak: [
      {
        id: 1,
        title: "insulated_vans.trak1.title",
        titleKey: "InsulatedVans1Title",
        slug: "bortovoy-avtomobil-maz-631228",
        img: trak17,
        price: "insulated_vans.trak1.price",
        priceKey: "InsulatedVans1Price",
        priceValue: 8000000,
        rating: 6,            
        isNew: true,            
        inStock: true,
        descKey: "insulated_vans.trak1.descKey",
        descValue: "insulated_vans.trak1.descValue",
        paramLabel: "insulated_vans.trak1.paramLabel",
        parametrs: "insulated_vans.trak1.parametrs"
      },
      {
        id: 2,
        title: "insulated_vans.trak2.title",
        titleKey: "InsulatedVans2Title",
        slug: "bortovoy-avtomobil-jac-n90l",
        img: trak18,
        price: "insulated_vans.trak2.price",
        priceKey: "InsulatedVans2Price",
        priceValue: 8000000,
        rating: 4.8,            
        isNew: false,            
        inStock: false,
        descKey: "insulated_vans.trak2.descKey",
        descValue: "insulated_vans.trak2.descValue",
        paramLabel: "insulated_vans.trak2.paramLabel",
        parametrs: "insulated_vans.trak2.parametrs"
      },
      {
        id: 3,
        title: "insulated_vans.trak3.title",
        titleKey: "InsulatedVans3Title",
        slug: "bortovoy-avtomobil-kamaz-43082",
        img: trak19,
        price: "insulated_vans.trak3.price",
        priceKey: "InsulatedVans3Price",
        priceValue: 8000000,
        rating: 7,            
        isNew: true,            
        inStock: true,
        descKey: "insulated_vans.trak3.descKey",
        descValue: "insulated_vans.trak3.descValue",
        paramLabel: "insulated_vans.trak3.paramLabel",
        parametrs: "insulated_vans.trak3.parametrs"
      }
    ]
  },
  "Container-chassis-trucks": {
    slug: "Container-chassis-trucks",
    title: "Container-chassis-trucks",
    cartImg: cartImg8,
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2", "6x4"] 
      }
    ],
    content: {
      intro: "Транспортировка грузов обеспечивает быструю и надежную доставку между городами и регионами. Купить контейнеровоз для увеличения мобильности и объема перевозок помогает компаниям справляться с большими объемами работы. Компания «РусТрак» предлагает широкий выбор грузовых автомобилей для разных задач и условий работы. Использование современных машин ускоряет доставку и повышает безопасность грузов. Техника для перевозки контейнеров позволяют перевозить разнообразные грузы с высокой эффективностью. Передовые технологии в автомобильной логистике делают перевозки более удобными и надежными.",
      assortment: "Ассортимент",
      assortmentdesc1: "Компания «РусТрак» предлагает разнообразные авто контейнеровозы, подходящие для разных задач и условий эксплуатации. В нашем предложении представлены марки, известные надежностью, высокой грузоподъемностью и актуальными технологиями:",
      assortmentdesc2: "Каждая модель оснащена всем необходимым для безопасной и быстрой транспортировки грузов. Мы уделяем внимание качеству техники и удобству эксплуатации, чтобы перевозки проходили максимально эффективно.",
      brands: ["ГАЗ", "КАМАЗ"],
      featuresLabel: "Особенности контейнеровозов",
      features: [
        {
          featuresdesc: "Высокая грузоподъемность — позволяют перевозить большие объемы грузов за одну поездку, снижая количество рейсов и экономя время."
        },
        {
          featuresdesc: "Надежность конструкции — прочная рама и шасси обеспечивают стабильную работу даже при сложных дорожных условиях.",
        },
        {
          featuresdesc: "Надежность техники – проверенные марки и современные технологии снижают риск поломок и обеспечивают долгий срок службы транспорта.",
        },
        {
          featuresdesc: "Универсальность применения — подходят для перевозки разных типов контейнеров и грузов, что делает их удобными для разнообразных задач.",
        },
        {
          featuresdesc: "Маневренность и мобильность — возможность работы на узких улицах и в городских условиях, где крупная техника менее эффективна.",
        },
        {
          featuresdesc: "Современные технологии и безопасность — передовые тормозные системы, подвеска и электроника повышают безопасность перевозок и комфорт водителя.",
        },
        {
          featuresdesc: "Экономичность эксплуатации — контейнеровоз, цена которого сочетает доступность и эффективность, позволяет сократить расходы на эксплуатацию."
        }
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Контейнерные автомобили широко используются для перевозки различных грузов на дальние и средние расстояния. Они идеально подходят для доставки продукции между городами, что особенно важно для компаний, которым требуется оперативная и безопасная транспортировка. Кроме того, такие машины активно применяются на промышленных и строительных площадках, где необходимо перемещать контейнеры с оборудованием или материалами. Надежность шасси и высокая грузоподъемность делают их удобными для работы в условиях повышенной нагрузки. Грузовой автомобиль контейнеровоз также востребован в логистических компаниях и у поставщиков товаров для розничной торговли. Благодаря мобильности и универсальности он позволяет быстро реагировать на изменения в планах доставки и обеспечивать своевременную поставку продукции.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Надежная техника — все автомобили контейнеровозы проходят строгий контроль качества и проверку перед поставкой, что гарантирует их долгую и стабильную работу.",
        },
        {
          workingFeaturesDesc: "Разнообразие моделей — широкий выбор машин позволяет подобрать контейнеровоз под любые задачи и условия эксплуатации.",
        },
        {
          workingFeaturesDesc: "Профессиональная поддержка — специалисты компании консультируют на каждом этапе, помогая выбрать оптимальное решение для перевозок.",
        },
        {
          workingFeaturesDesc: "Быстрая доставка и сервис — техника поставляется в кратчайшие сроки, а сервисное обслуживание обеспечивает бесперебойную работу.",
        },
        {
          workingFeaturesDesc: "Прозрачные условия сотрудничества — понятные условия покупки, гарантия и сопровождение сделки делают сотрудничество удобным и безопасным.",
        },
      ],
      equipmentTItle: "Современные решения для мобильной логистики",
      equipmentdesc: "Купить авто контейнеровоз — выгодное решение для ускорения и упрощения перевозок грузов. Выбирайте надежные машины для быстрой и безопасной доставки. Компания «РусТрак» предлагает разнообразные контейнеровозы для любых задач. Начните действовать и оптимизируйте логистику перевозок. Используйте технологические решения, чтобы сэкономить время и силы. Для оформления заказа свяжитесь с нами любым удобным способом, и наши специалисты помогут подобрать оптимальное решение.",
    },
    trak: [
      {
        id: 1,
        title: "container_chassis_trucks.trak1.title",
        titleKey: "ContainerChassisTrucks1Title",
        slug: "izotermicheskiy-furgon-kamaz-43082",
        img: trak20,
        price: "container_chassis_trucks.trak1.price",
        priceKey: "ContainerChassisTrucks1Price",
        priceValue: 8000000,
        rating: 6,            
        isNew: true,            
        inStock: false,
        formula: "4x2",
        descKey: "container_chassis_trucks.trak1.descKey",
        descValue: "container_chassis_trucks.trak1.descValue",
        paramLabel: "container_chassis_trucks.trak1.paramLabel",
        parametrs: "container_chassis_trucks.trak1.parametrs"
      },
      {
        id: 2,
        title: "container_chassis_trucks.trak2.title",
        titleKey: "ContainerChassisTrucks2Title",
        slug: "izotermicheskiy-furgon-jac-35",
        img: trak21,
        price: "container_chassis_trucks.trak2.price",
        priceKey: "ContainerChassisTrucks2Price",
        priceValue: 8000000,
        rating: 4.8,            
        isNew: true,            
        inStock: true,
        formula: "4x2",
        descKey: "container_chassis_trucks.trak2.descKey",
        descValue: "container_chassis_trucks.trak2.descValue",
        paramLabel: "container_chassis_trucks.trak2.paramLabel",
        parametrs: "container_chassis_trucks.trak2.parametrs"
      }
    ]
  },
  "Hook-lifts": {
    slug: "Hook-lifts",
    title: "Hook-lifts",
    cartImg: cartImg9,
    filters: [
      { 
        type: "checkbox", 
        label: "Wheel formula", 
        options: ["4x2", "6x4"] 
      }
    ],
    content: {
      intro: "Транспортная логистика оказывает значительное влияние на развитие промышленности и торговли. Для эффективной работы портов и складов используют крюковой погрузчик, способный справляться с тяжелыми грузами. Новые технические решения в этой сфере повышают скорость и безопасность операций. Компания «РусТрак» внедряет инновационные подходы, оптимизируя процессы перевозки и хранения. Автоматизация и цифровые системы контроля позволяют снизить человеческий фактор и ускорить обработку грузов. Применение современных механизмов значительно увеличивает производительность и снижает издержки.",
      assortment: "Ассортимент",
      assortmentdesc1: "Мы предлагаем только качественную и сертифицированную технику, которая соответствует всем стандартам безопасности и надежности. Каждая единица оборудования проходит строгий контроль и готова к интенсивной эксплуатации, что гарантирует долгий срок службы и эффективность работы. Среди представленных марок:",
      assortmentdesc2: "Все модели оснащены современными системами управления и проверенными механизмами, что делает их удобными и безопасными в эксплуатации. Выбор техники позволяет подобрать оптимальное решение под любые задачи и условия работы, обеспечивая стабильность и производительность на высоком уровне.",
      brands: ["ISUZU", "HYUNDAI"],
      featuresLabel: "Особенности крюковых погрузчиков",
      features: [
        {
          featuresdesc: "Мощные подъемные механизмы – крюковые мультилифты позволяют легко справляться с тяжелыми и крупногабаритными грузами."
        },
        {
          featuresdesc: "Надёжная конструкция шасси – обеспечивает стабильность и долговечность даже при интенсивной эксплуатации.",
        },
        {
          featuresdesc: "Гибкость и маневренность – техника легко работает в ограниченном пространстве, на узких складах и стройплощадках.",
        },
        {
          featuresdesc: "Система автоматической защиты – предотвращает перегрузку и защищает механизмы от поломок.",
        },
        {
          featuresdesc: "Энергоэффективность – оптимизированный расход топлива снижает эксплуатационные затраты.",
        },
        {
          featuresdesc: "Удобство обслуживания – простая конструкция узлов и лёгкий доступ к сервисным точкам ускоряют ремонт и техобслуживание.",
        },
        {
          featuresdesc: "Адаптивность к условиям работы – техника готова к эксплуатации при разных климатических и дорожных условиях."
        }
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Погрузчик с крюком активно используется в портах и на терминалах для быстрой погрузки и разгрузки контейнеров и крупногабаритных грузов. Техника позволяет эффективно перемещать тяжелые материалы между складами и транспортными средствами, ускоряя обработку грузов и снижая нагрузку на персонал. На строительных площадках такие машины помогают транспортировать строительные блоки, металлоконструкции и другие тяжёлые материалы, обеспечивая точность и безопасность при подъёме и перемещении. Их универсальность позволяет работать в ограниченном пространстве и на неровной местности, что особенно важно для крупных объектов и многоэтажного строительства. В промышленности техника применяется для перемещения сырья, готовой продукции и крупногабаритного оборудования внутри производственных цехов и складских помещений. Использование современных механизмов повышает скорость операций и минимизирует риск повреждения грузов, что делает логистические процессы более стабильными и предсказуемыми.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Широкий выбор техники – компания предлагает разнообразные модели погрузчиков и специализированного оборудования, что позволяет подобрать решение под любые задачи.",
        },
        {
          workingFeaturesDesc: "Качественная сертифицированная техника – крюковой погрузчик проходит строгий контроль качества и полностью соответствует стандартам безопасности и надежности.",
        },
        {
          workingFeaturesDesc: "Профессиональная поддержка – специалисты компании готовы помочь с выбором, настройкой и эксплуатацией оборудования.",
        },
        {
          workingFeaturesDesc: "Сервисное обслуживание и запчасти – оперативный ремонт и наличие оригинальных запчастей минимизируют простои техники.",
        },
        {
          workingFeaturesDesc: "Индивидуальные решения – компания подбирает технику и условия работы с учетом особенностей бизнеса каждого клиента.",
        },
        {
          workingFeaturesDesc: "Опыт и репутация – «РусТрак» имеет многолетний опыт на рынке и зарекомендовал себя как надежный партнер в сфере транспортной логистики.",
        },
        {
          workingFeaturesDesc: "Оптимизация затрат – выгодные условия поставки и обслуживания помогают снизить расходы на эксплуатацию оборудования."
        }
      ],
      equipmentTItle: "Надёжные решения для грузоперевозок",
      equipmentdesc: "Погрузчик с крюком демонстрирует высокую эффективность при работе с тяжелыми грузами и ускоряет логистические процессы. Инвестиции в современную технику помогают повысить производительность и снизить затраты. Компания «РусТрак» предлагает широкий спектр решений для транспортной логистики и обслуживания оборудования. Оцените возможности автоматизации и внедрите новые технологии в свой бизнес. Следите за обновлениями и совершенствуйте процессы хранения и перевозки грузов. Для оформления заказа свяжитесь с нами любым удобным способом, и наши специалисты помогут подобрать оптимальное решение.",
    },
    trak: [
      {
        id: 1,
        title: "hook_lifts.trak1.title",
        titleKey: "HookLifts1Title",
        slug: "konteynerovoz-na-shassi-kamaz-65115",
        img: trak22,
        price: "hook_lifts.trak1.price",
        priceKey: "HookLifts1Price",
        priceValue: 8000000,
        rating: 4.8,            
        isNew: false,            
        inStock: true,
        formula: "4x2",
        descKey: "hook_lifts.trak1.descKey",
        descValue: "hook_lifts.trak1.descValue",
        paramLabel: "hook_lifts.trak1.paramLabel",
        parametrs: "hook_lifts.trak1.parametrs"
      }
    ]
  },
  "Dump-trucks": {  
    slug: "Dump-trucks",  
    title: "Dump-trucks",
    cartImg: cartImg4,
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["КАМАЗ", "JAC"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      },
      { 
        type: "checkbox", 
        label: "Длина платформы, м", 
        options: ["4600", "5000", "5200", "6500"] 
      }
    ],
    content: {
      intro: "Грузовые перевозки являются важным элементом экономического развития и промышленной логистики. Решение купить новый самосвал позволяет повысить эффективность перевозки материалов и сократить расходы на обслуживание машин. При выборе подходящей модели мы всегда поможем подобрать автомобиль для работы в различных дорожных условиях. Компания «РусТрак» предлагает разнообразные модели с современными техническими характеристиками. Надёжные машины поддерживают стабильную перевозку грузов на производственные площадки. Обновление парка позволяет выполнять более сложные задачи и увеличивать объём перевозок.",
      assortment: "Ассортимент",
      assortmentdesc1: "Компания «РусТрак» предлагает технику для перевозки сыпучих и строительных материалов. Каталог самосвалов объединяет модели различной грузоподъёмности и конфигурации для работы в разных условиях эксплуатации. Доступные варианты шасси:",
      assortmentdesc2: "Модели отличаются техническими характеристиками и возможностями для выполнения различных задач. Такой подход обеспечивает безопасную и эффективную транспортировку грузов, объединяя надёжность оборудования с практичностью использования.",
      brands: ["КАМАЗ", "JAC", "ГАЗ", "ВАЛДАЙ", "ВАЛДАЙ", "КОМПАС", "DONG FENG", "SOLLERS"],
      featuresLabel: "Особенности крюковых погрузчиков",
      features: [
        {
          featuresdesc: "Разная грузоподъёмность – позволяет перевозить как небольшие, так и крупные объёмы сыпучих материалов, подбирая модель под конкретные задачи."
        },
        {
          featuresdesc: "Адаптация к дорожным условиям – техника легко справляется с грунтовыми, городскими и строительными дорогами.",
        },
        {
          featuresdesc: "Разнообразие конфигураций кузова – возможность выбрать машину с оптимальной платформой для специфических грузов делает решение купить самосвал более точным под задачи.",
        },
        {
          featuresdesc: "Экономичное расходование топлива – современные двигатели снижают затраты на эксплуатацию при интенсивной работе.",
        },
        {
          featuresdesc: "Надёжность и долговечность – прочные шасси и качественные комплектующие обеспечивают долгий срок службы техники.",
        },
        {
          featuresdesc: "Простота обслуживания – доступные запчасти и удобная конструкция облегчают техническое обслуживание и ремонт.",
        },
      ],
      applicationLabel: "Сферы применения",
      applicationDesc: "Купить авто самосвал актуально для строительства, где техника используется для перевозки сыпучих материалов, щебня и грунта на строительные площадки. Она обеспечивает быструю и эффективную доставку грузов, сокращая время на логистику. В городских условиях такой транспорт перевозит строительные и бытовые отходы, участвует в расчистке территорий после снегопадов и доставке материалов для благоустройства улиц и дворов. Машины справляются с различными дорожными условиями и задачами. В сельской и лесной отрасли самосвалы перевозят урожай, корм, древесину и удобрения, обеспечивая надёжную доставку грузов на большие расстояния. На промышленных и логистических объектах автомобили применяются для перемещения материалов между площадками, повышая эффективность работы.",
      workingTitle: "Преимущества работы с компанией «РусТрак»",
      workingfeatures: [
        {
          workingFeaturesDesc: "Широкий выбор техники – каталог самосвалов включает модели различной грузоподъёмности и конфигурации, подходящие для любых задач и условий эксплуатации.",
        },
        {
          workingFeaturesDesc: "Консультации и подбор – специалисты помогают выбрать самосвал с учётом конкретных требований и условий работы.",
        },
        {
          workingFeaturesDesc: "Гарантия качества – компания предлагает только проверенные модели с надёжными шасси и комплектующими.",
        },
        {
          workingFeaturesDesc: "Выгодные условия покупки – специалисты предоставляют полную информацию о покупке и помогают рассчитать стоимость грузового самосвала для каждой модели.",
        },
        {
          workingFeaturesDesc: "Оперативная доставка – техника поставляется в кратчайшие сроки, обеспечивая бесперебойную работу предприятий.",
        },
        {
          workingFeaturesDesc: "Опыт и репутация – многолетний опыт позволяет решать задачи любой сложности и поддерживать доверие клиентов.",
        },
      ],
      equipmentTItle: "Надёжная техника для любых условий",
      equipmentdesc: "Купить новый самосвал цена которого выгодна, позволит повысить эффективность перевозки грузов и сократить затраты. Машины обеспечивают стабильную эксплуатацию в разных условиях и подходят для самых разнообразных задач. Компания «РусТрак» предлагает модели с различной грузоподъёмностью и конфигурацией. Ознакомьтесь с каталогом и выберите подходящую технику для своих нужд. Наши специалисты помогут подобрать оптимальный вариант и ответят на все вопросы по поставке и эксплуатации. Для оформления заказа свяжитесь с нами любым удобным способом и обеспечьте стабильную работу своих проектов.",
    },
    trak: [
      {
        id: 1,
        title: "dump_trucks.trak1.title",
        titleKey: "DumpTrucks1Title",
        slug: "samosval-na-shassi-kompas-9",
        img: trak24,
        length: "5000",
        price: "dump_trucks.trak1.price",
        priceKey: "DumpTrucks1Price",
        priceValue: 8000000,
        descKey: "dump_trucks.trak1.descKey",
        descValue: "dump_trucks.trak1.descValue",
        paramLabel: "dump_trucks.trak1.paramLabel",
        parametrs: "dump_trucks.trak1.parametrs"
      },
      {
        id: 2,
        title: "dump_trucks.trak2.title",
        titleKey: "DumpTrucks2Title",
        slug: "samosval-zernovoz-na-shassi-kamaz-6520-3072-53-model-4388g6",
        img: trak25,
        price: "dump_trucks.trak2.price",
        priceKey: "DumpTrucks2Price",
        priceValue: 8000000,
        rating: 6,            
        isNew: true,            
        inStock: false,
        length: "6500",
        formula: "4x2",
        descKey: "dump_trucks.trak2.descKey",
        descValue: "dump_trucks.trak2.descValue",
        paramLabel: "dump_trucks.trak2.paramLabel",
        parametrs: "dump_trucks.trak2.parametrs"
      }
    ]
  },
"ADR-EXII-category-trucks": {
    slug: "ADR-EXII-category-trucks",
    title: "ADR-EXII-category-trucks", 
    cartImg: cartImg11,
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["КАМАЗ", "JAC"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      },
      { 
        type: "checkbox", 
        label: "Длина платформы, м", 
        options: ["4600", "5000", "5200", "6500"] 
      }
    ],
    trak: [
      {
        id: 1,
        title: "adr_exii_category_trucks.trak1.title",
        titleKey: "AdrExiiCategoryTrucks1Title",
        slug: "shtornyy-gruzovik-kamaz-4308-dopog-exii-model-4388h2-10",
        img: trak26,
        price: "adr_exii_category_trucks.trak1.price",
        priceKey: "AdrExiiCategoryTrucks1Price",
        priceValue: 8000000,
        rating: 3,            
        isNew: true,            
        inStock: true,
        formula: "4x2",
        length: "5000",
        descKey: "adr_exii_category_trucks.trak1.descKey",
        descValue: "adr_exii_category_trucks.trak1.descValue",
        paramLabel: "adr_exii_category_trucks.trak1.paramLabel",
        parametrs: "adr_exii_category_trucks.trak1.parametrs"
      },
      {
        id: 2,
        title: "adr_exii_category_trucks.trak2.title",
        titleKey: "AdrExiiCategoryTrucks2Title",
        slug: "bortovoy-avtomabil-kamaz-4308-3083-69-dopog-categori-ex-ii-model4388H2-10",
        img: trak27,
        price: "adr_exii_category_trucks.trak2.price",
        priceKey: "AdrExiiCategoryTrucks2Price",
        priceValue: 8000000,
        rating: 6,          
        isNew: true,            
        inStock: false,
        length: "6500",
        descKey: "adr_exii_category_trucks.trak2.descKey",
        descValue: "adr_exii_category_trucks.trak2.descValue",
        paramLabel: "adr_exii_category_trucks.trak2.paramLabel",
        parametrs: "adr_exii_category_trucks.trak2.parametrs"
      }
    ]
  },
};