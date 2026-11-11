import { SwiperSlide, Swiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MyHomeComponentProps {
  openCallModal?: () => void;
}

const HomeTopSlide = ({ openCallModal }: MyHomeComponentProps) => {
  const { t } = useTranslation();

  return (
    <section className="container max-xl:w-full pt-[10px] ">
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[ Autoplay, EffectFade, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className="heroTopSlider1">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[130px] max-md:pt-[100px] max-sm:pt-[70px]">
                    <h3 className="text-[30px] max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]!">{t("home_slider.slide1_title")}</h3>
                    <p className="text-lg mt-4 text-white">{t("home_slider.slide1_desc1")} </p>
                    <p className="text-lg text-white max-md:max-w-[90%]">{t("home_slider.slide1_desc2")}</p>
                    <Link to={"/news/first-kamaz-65658-container-truck"}><button className="px-[30px] py-[10px] max-sm:px-[16px] max-sm:py-[7px] mt-8 max-sm:mt-4 rounded-[4px] text-black bg-[#fec80b] hover:opacity-[0.8]">{t("home_slider.more")}</button></Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="heroTopSlider3">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[130px] max-md:pt-[100px] max-sm:pt-[70px]">
                    <h3 className="text-[30px] max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]">{t("home_slider.slide2_title")} </h3>
                    <p className="text-lg mt-4 text-white max-md:max-w-[90%]">{t("home_slider.slide2_desc1")} </p>
                    <p className="text-lg text-white max-md:max-w-[90%]">{t("home_slider.slide2_desc2")}</p>
                    <button onClick={openCallModal} className="px-[30px] py-[10px] max-sm:px-[16px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">{t("home_slider.order_call")}</button>
                </div>
            </SwiperSlide>

            <SwiperSlide className="heroTopSlider4">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[130px] max-md:pt-[100px] max-sm:pt-[70px]">
                    <h3 className="text-[30px] max-sm:text-lg max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[100%]!">{t("home_slider.slide3_title")}</h3>
                    <p className="text-lg max-sm:text-[14px] mt-4 text-white max-w-[60%]">{t("home_slider.slide3_desc")} </p>
                    <Link to={"/catalog/Curtain-trucks"}><button className="px-[30px] py-[10px] max-sm:px-[16px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">{t("home_slider.more")}</button></Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className="heroTopSlider5">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[150px] max-md:pt-[100px] max-sm:pt-[70px]">
                    <h3 className="text-[30px] max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]!">{t("home_slider.slide4_title")}</h3>
                    <p className="text-lg mt-4 max-md:max-w-[90%] text-white max-w-[60%]">{t("home_slider.slide4_desc")}</p>
                    <div className="flex gap-5 max-sm:flex-col max-sm:gap-0">
                        <Link to={"/about"}><button className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">{t("home_slider.open_catalog")}</button></Link>
                        <button onClick={openCallModal} className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-2 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">{t("home_slider.order_call")}</button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="heroTopSlider6">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[80px] max-md:pt-[100px] max-sm:pt-[50px]">
                    <h3 className="text-[30px] max-md:text-[20px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]!">{t("home_slider.slide5_title")}</h3>
                    <p className="text-lg max-sm:text-[14px] mt-4 text-white max-w-[60%] max-md:max-w-[90%]">{t("home_slider.slide5_desc")}</p>
                    <div className="flex gap-5 max-sm:flex-col max-sm:gap-0">
                        <Link to={"/catalog/Crane-manipulators"}>
                            <button className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">{t("home_slider.more")}</button>
                        </Link>
                        <button onClick={openCallModal} className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-2 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">{t("home_slider.order_call")}</button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="heroTopSlider7">
                <div className="h-full w-[60%] max-lg:w-[90%] max-sm:w-full heroMainGradient pl-[30px] pt-[100px] max-md:pt-[100px] max-sm:pt-[50px]">
                    <h3 className="text-[30px] max-md:text-[22px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[100%]!">{t("home_slider.slide6_title")}</h3>
                    <p className="text-lg max-sm:text-[14px] mt-4 text-white max-w-[60%] max-md:max-w-[90%]">{t("home_slider.slide6_desc")} </p>
                    <div className="flex gap-5 max-sm:flex-col max-sm:gap-0">
                        <Link to={"/catalog/Fuel-bowsers"}>
                            <button className="px-[30px] py-[10px] max-sm:text-[12px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-3 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">{t("home_slider.more")}</button>
                        </Link>
                        <button onClick={openCallModal} className="px-[30px] py-[10px] max-sm:text-[12px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-2 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">{t("home_slider.order_call")}</button>
                    </div>
                </div>
            </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HomeTopSlide