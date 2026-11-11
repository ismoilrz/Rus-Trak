import productiontop from "../../assets/productionTop.jpg";
import productscheme from "../../assets/production-scheme.jpg";
import productionBottom from "../../assets/productionBottom.jpg";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import prSlide1 from "../../assets/productionSlide1.jpg";
import prSlide2 from "../../assets/productionSlide2.jpg";
import prSlide3 from "../../assets/productionSlide3.jpg";
import prSlide4 from "../../assets/productionSlide4.jpg";

interface ProductionSlideType {
  id: number;
  img: string;
}

const ProductionSlides: ProductionSlideType[] = [
  { id: 1, img: prSlide1 },
  { id: 2, img: prSlide2 },
  { id: 3, img: prSlide3 },
  { id: 4, img: prSlide4 },
];

import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const Production = () => {
  const { t } = useTranslation();
  return (
    <section className="container max-xl:px-[3%]">
      <h1 className="text-[32px] max-md:text-[26px] font-semibold pt-5 pb-7">
        {t("production_page.title")}
      </h1>

      <div className="max-md:h-[160px]">
        <img className="object-cover max-md:h-full" src={productiontop} alt="Products Img" />
      </div>

      <p className="text-lg py-14 max-md:py-8 max-w-[72%] max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
        {t("production_page.desc1")}
      </p>

      <div>
        <img src={productscheme} alt="Production Scheme Pick" />
      </div>

      <p className="text-lg py-14 max-md:py-8 max-w-[72%] max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
        {t("production_page.desc2")}
      </p>

      <div>
        <h5 className="text-[24px] max-md:text-[22px] font-[500]">
          {t("production_page.staff_title")}
        </h5>
        <p className="mt-3 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
          {t("production_page.staff_desc")}
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
          {ProductionSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.img} alt={`Img-${slide.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <h4 className="text-[24px] max-md:text-[22px] font-[500]">
          {t("production_page.bureau_title")}
        </h4>
        <p className="mt-3 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
          {t("production_page.bureau_desc")}
        </p>
      </div>

      <div className="py-12">
        <img src={productionBottom} alt="Production" />
      </div>

      <div>
        <h4 className="text-[24px] max-md:text-[22px] font-[500]">
          {t("production_page.quality_title")}
        </h4>
        <p className="mt-3 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
          {t("production_page.quality_desc")}
        </p>
      </div>

      <p className="mt-16 max-w-[72%] text-lg max-md:text-[16px] max-lg:max-w-[80%] max-md:max-w-full">
        {t("production_page.desc3")}
      </p>
    </section>
  );
};

export default Production;
