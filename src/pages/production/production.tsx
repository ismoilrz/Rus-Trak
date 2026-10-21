import productiontop from "../../assets/productionTop.jpg";
import productscheme from "../../assets/production-scheme.jpg";
import productionBottom from "../../assets/productionBottom.jpg";

import prSlide1 from "../../assets/productionSlide1.jpg";
import prSlide2 from "../../assets/productionSlide2.jpg";
import prSlide3 from "../../assets/productionSlide3.jpg";
import prSlide4 from "../../assets/productionSlide4.jpg";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Production = () => {
  return (
    <section className="container max-xl:px-[3%]">
      <h1 className="text-[32px] max-md:text-[26px] font-semibold pt-5 pb-7">Производство</h1>

      <div className="max-md:h-[160px]">
        <img className="object-cover max-md:h-full" src={productiontop} alt="Products Img" />
      </div>

      <p className="text-lg py-14 max-md:py-8 max-w-[72%] max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
        Компания «РусТрак» — ведущий производитель коммерческого транспорта и
        специализированной техники в Нижнем Новгороде. Наша продукция - это
        автофургоны, бортовые платформы, краны-манипуляторы, мастерские, пищевые
        цистерны, автотопливозаправщики, автогидроподъёмники, самосвалы,
        выкуумные машины эвакуаторы, крюковые погрузчики. Все автомобили
        собираются на собственном производстве.
      </p>

      <div>
        <img src={productscheme} alt="Production Scheme Pick" />
      </div>

      <p className="text-lg py-14 max-md:py-8 max-w-[72%] max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
        Производственные мощности «РусТрак» состоят из 3 корпусов, общей
        площадью более 7000 квадратных метров. Станочный парк оснащён
        современным высокотехнологичным оборудованием, что определяет высокое
        качество готовой продукции. Компания использует комплектующие известных
        мировых и отечественных производителей. Сегодня производительность
        компании - от 110 единиц в месяц.
      </p>

      <div>
        <h5 className="text-[24px] max-md:text-[22px] font-[500]">Высококвалифицированный персонал</h5>
        <p className="mt-3 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
          Залог качества продукции ООО «РусТрак» - это работа команды
          профессионалов на технологичном оборудовании компании. Руководство
          компании заботится о своих сотрудниках, создавая максимально
          комфортные условия труда и повышая профессиональную подготовку
          сотрудников. Каждые полгода сотрудники компании проходят
          переаттестацию знаний и навыков и проходят курсы повышения
          квалификации.
        </p>
      </div>

      <div className="Pr py-11">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.4,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3.9,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={prSlide1} alt="Img-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={prSlide2} alt="Img-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={prSlide3} alt="Img-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={prSlide4} alt="Img-4" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <h4 className="text-[24px] max-md:text-[22px] font-[500]">Собственное конструкторское бюро</h4>
        <p className="mt-3 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
          Компания «РусТрак» имеет собственное конструкторско-технологическое
          бюро, которое работает в тесном сотрудничестве с производством. Такая
          схема работы позволяет постоянно улучшать и модернизировать
          выпускаемую спецтехнику, учитывая пожелания наших клиентов. Мы готовы
          изготовить автомобиль практически для любых нужд!
        </p>
      </div>

      <div className="py-12">
        <img src={productionBottom} alt="Production" />
      </div>

      <div>
        <h4 className="text-[24px] max-md:text-[22px] font-[500]">Контроль качества</h4>
        <p className="mt-3 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
          Контроль качества нашей продукции осуществляется на всех этапах
          производства. Мы используем только надёжные комплектующие, покупая их
          у проверенных поставщиков. Специалисты «РусТрак» строго следят за
          выполнением технологии производства. Постоянное тестирование и
          испытания выпускаемой продукции исключают поступление рекламаций. На
          производстве введена общемировая практика сертификации соответствия
          продукции: на каждую единицу спецтехники, которая сходит с нашего
          производства, имеется сертификат международного образца (ISO 9001).
        </p>
      </div>

      <p className="mt-16 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
        Отдел контроля качества оценивает каждую единицу техники, что
        гарантирует нашим покупателям длительный срок эксплуатации и безотказную
        работу техники.
      </p>
    </section>
  );
};

export default Production;
