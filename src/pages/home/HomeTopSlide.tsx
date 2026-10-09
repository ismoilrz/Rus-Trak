import { SwiperSlide, Swiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const HomeTopSlide = () => {
  return (
    <section className="container pt-[10px]">
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
            modules={[ Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className="heroTopSlider1">
                <div className="h-full w-[60%] heroMainGradient pl-[30px] pt-[130px]">
                    <h3 className="text-[30px] font-[800] text-white leading-[120%] max-w-[60%]">Безбортовой Свайпер разработал Рустрак</h3>
                    <p className="text-lg mt-4 text-white">Открывание 3 секунды. </p>
                    <p className="text-lg text-white"> Без строп, без ремней, без остановок!</p>
                    <button className="px-[30px] py-[10px] mt-8 rounded-[4px] text-black bg-[#fec80b] hover:opacity-[0.8]">Подробнее</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider2">
                <div className="h-full w-[60%] pl-[30px] pt-[130px]">
                    <h3 className="text-[30px] font-[800] text-white leading-[120%] max-w-[60%]">АТЗ Рустрак включены в реестр российской промышленной продукции </h3>
                    <p className="text-lg mt-4 text-white">Теперь доступны для приобретения по 44 ФЗ </p>
                    <button className="px-[30px] py-[10px] mt-5 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider3">
                <div className="h-full w-[60%] heroMainGradient pl-[30px] pt-[130px]">
                    <h3 className="text-[30px] font-[800] text-white leading-[120%] max-w-[60%]">В наличии шторные фургоны КАМАЗ 4308 </h3>
                    <p className="text-lg mt-4 text-white">Размеры надстройки 6200х2550х2850 мм. </p>
                    <p className="text-lg text-white">Цена 5 500 000 руб.</p>
                    <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider4">
                <div className="h-full w-[60%] heroMainGradient pl-[30px] pt-[130px]">
                    <h3 className="text-[30px] font-[800] text-white leading-[120%] max-w-[60%]">Бортовые платформы со шторным механизмом</h3>
                    <p className="text-lg mt-4 text-white max-w-[60%]">Производство и поставка коммерческого транспорта, бортовых платформ, в том числе со сдвижными шторами, сдвижной крышей. </p>
                    <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Подробнее</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider5">
                <div className="h-full w-[60%] heroMainGradient pl-[30px] pt-[150px]">
                    <h3 className="text-[30px] font-[800] text-white leading-[120%] max-w-[60%]">ООО «РусТрак»</h3>
                    <p className="text-lg mt-4 text-white max-w-[60%]">Производство и поставка специализированной техники и спецтранспорта</p>
                    <div className="flex gap-5">
                        <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">Открыть каталог</button>
                        <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider6">
                <div className="h-full w-[60%] heroMainGradient pl-[30px] pt-[80px]">
                    <h3 className="text-[30px] font-[800] text-white leading-[120%] max-w-[60%]">Краны манипуляторы на базе MCV/HCV грузовиков</h3>
                    <p className="text-lg mt-4 text-white max-w-[60%]">Производство автомобилей с крано-манипуляторными установками. Использование противосдвиговых пластин, установка блока распределителя управления задними опорами, открытый профиль HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет крана.</p>
                    <div className="flex gap-5">
                        <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">Подробнее</button>
                        <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="heroTopSlider7">
                <div className="h-full w-[60%] heroMainGradient pl-[30px] pt-[100px]">
                    <h3 className="text-[30px] font-[800] text-white leading-[120%] max-w-[60%]">Автотопливозаправщики на базе MCV/HCV грузовиков</h3>
                    <p className="text-lg mt-4 text-white max-w-[60%]">Производство и поставка автотопливозаправщиков объёмом 8 и 6 м.куб. Алюминиевые коммуникации, композитные напорно-всасывающие рукава, производительный узел выдачи топлива. </p>
                    <div className="flex gap-5">
                        <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-black border-[#fec80b] bg-[#fec80b] hover:opacity-[0.8]">Подробнее</button>
                        <button className="px-[30px] py-[10px] mt-8 rounded-[4px] border-2 text-white border-[#fec80b] duration-200 hover:bg-[#fec80b] hover:text-black">Заказать звонок</button>
                    </div>
                </div>
            </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HomeTopSlide