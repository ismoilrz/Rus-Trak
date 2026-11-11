import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import { MoveRight} from "lucide-react";
import { NewsData } from "../../constants/news/newsData";
import { useTranslation } from "react-i18next";

const HomeNews = () => {

    const { t } = useTranslation()

  return (
    <>
        <section className="bg-[#fff] pt-16 pb-12">
        <div className="container max-xl:px-[3%]">
            <div className="w-full flex justify-between py-14 pb-8 max-sm:flex-col max-sm:gap-6 max-sm:pb-3">
            <h3 className="text-[40px] max-md:text-3xl font-medium">{t("titlePr")}</h3>
            <div className="flex gap-3">
                <button id="cat-slide-left" className="w-10 h-10 rounded-md border-1 text-3xl text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]">{'<'}</button>
                <button id="cat-slide-next" className="w-10 h-10 rounded-md border-1 text-3xl text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]">{'>'}</button>
            </div>
            </div>

            <div className="Sl">
            <Swiper
                slidesPerView={4}
                spaceBetween={25}
                loop={true}
                navigation={{
                prevEl: "#cat-slide-left",
                nextEl: "#cat-slide-next",
                }}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                0: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {NewsData.map((item, index) => (
                <SwiperSlide key={item.id || index} className="h-[370px]! group bg-[#fff]! border-transparent!">
                    <Link to={`/news/${item.slug}`} className="w-full h-full flex flex-col items-start rounded-lg">
                    <img className="h-[56%]!" src={item.pick[0]} alt="" />
                    <span className="text-[16px] px-3 mt-4">{item.date}</span>
                    <h4 className="text-[17px] font-medium line-clamp-2 px-3 text-start min-h-12">
                        {t(`${item.translationKey}.title`)}
                    </h4>
                    <div className="flex justify-between w-full px-3 pt-7 text-[14px]">
                        <button className="text-lg flex items-center gap-3 transition group-hover:text-[#fec80b]">{t("more")}<MoveRight /></button>
                    </div>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </section>

       
    </>
  )
}

export default HomeNews