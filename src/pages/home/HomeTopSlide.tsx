import { SwiperSlide, Swiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const HomeTopSlide = () => {
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
                    <h3 className="text-[30px] max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]!">Безбортовой Свайпер разработал Рустрак</h3>
                    <p className="text-lg mt-4 text-white">Открывание 3 секунды. </p>
                    <p className="text-lg text-white max-md:max-w-[90%]"> Без строп, без ремней, без остановок!</p>
                    <button className="px-[30px] py-[10px] max-sm:px-[16px] max-sm:py-[7px] mt-8 max-sm:mt-4 rounded-[4px] text-black bg-[#fec80b] hover:opacity-[0.8]">Подробнее</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider3">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[130px] max-md:pt-[100px] max-sm:pt-[70px]">
                    <h3 className="text-[30px] max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]">В наличии шторные фургоны КАМАЗ 4308 </h3>
                    <p className="text-lg mt-4 text-white max-md:max-w-[90%]">Размеры надстройки 6200х2550х2850 мм. </p>
                    <p className="text-lg text-white max-md:max-w-[90%]">Цена 5 500 000 руб.</p>
                    <button className="px-[30px] py-[10px] max-sm:px-[16px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider4">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[130px] max-md:pt-[100px] max-sm:pt-[70px]">
                    <h3 className="text-[30px] max-sm:text-lg max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[100%]!">Бортовые платформы со шторным механизмом</h3>
                    <p className="text-lg max-sm:text-[14px] mt-4 text-white max-w-[60%]">Производство и поставка коммерческого транспорта, бортовых платформ, в том числе со сдвижными шторами, сдвижной крышей. </p>
                    <button className="px-[30px] py-[10px] max-sm:px-[16px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Подробнее</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider5">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[150px] max-md:pt-[100px] max-sm:pt-[70px]">
                    <h3 className="text-[30px] max-md:text-[24px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]!">ООО «РусТрак»</h3>
                    <p className="text-lg mt-4 max-md:max-w-[90%] text-white max-w-[60%]">Производство и поставка специализированной техники и спецтранспорта</p>
                    <div className="flex gap-5 max-sm:flex-col max-sm:gap-0">
                        <button className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">Открыть каталог</button>
                        <button className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-2 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider6">
                <div className="h-full w-[60%] max-lg:w-[80%] max-md:w-full heroMainGradient pl-[30px] pt-[80px] max-md:pt-[100px] max-sm:pt-[50px]">
                    <h3 className="text-[30px] max-md:text-[20px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[90%]!">Краны манипуляторы на базе MCV/HCV грузовиков</h3>
                    <p className="text-lg max-sm:text-[14px] mt-4 text-white max-w-[60%] max-md:max-w-[90%]">Производство автомобилей с крано-манипуляторными установками. Использование противосдвиговых пластин.</p>
                    <div className="flex gap-5 max-sm:flex-col max-sm:gap-0">
                        <button className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">Подробнее</button>
                        <button className="px-[30px] py-[10px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-2 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider7">
                <div className="h-full w-[60%] max-lg:w-[90%] max-sm:w-full heroMainGradient pl-[30px] pt-[100px] max-md:pt-[100px] max-sm:pt-[50px]">
                    <h3 className="text-[30px] max-md:text-[22px] font-[800] text-white leading-[120%] max-w-[60%] max-md:w-[100%]!">Автотопливозаправщики на базе MCV/HCV грузовиков</h3>
                    <p className="text-lg max-sm:text-[14px] mt-4 text-white max-w-[60%] max-md:max-w-[90%]">Производство и поставка автотопливозаправщиков объёмом 8 и 6 м.куб. Алюминиевые коммуникации, композитные напорно-всасывающие рукава, производительный узел выдачи топлива. </p>
                    <div className="flex gap-5 max-sm:flex-col max-sm:gap-0">
                        <button className="px-[30px] py-[10px] max-sm:text-[12px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-3 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">Подробнее</button>
                        <button className="px-[30px] py-[10px] max-sm:text-[12px] max-sm:w-[240px] max-sm:py-[7px] mt-8 max-sm:mt-2 max-sm:mt-4 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                    </div>
                </div>
            </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HomeTopSlide