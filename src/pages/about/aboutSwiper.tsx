import { Pagination, Navigation} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import { AboutSliders } from "../../constants/data/data";

const AboutSwiper = () => {
  return (
    <section>
        <div className='container max-xl:px-[3%] pt-40 pb-15 max-sm:pb-8 flex max-sm:flex-col justify-between items-end max-sm:items-start max-sm:gap-8'>
            <h4 className='text-[24px] max-md:text-[20px] font-[500] max-w-[50%] max-sm:max-w-full max-md:max-w-[75%]'>Автомобильный завод «РусТрак» является предприятием полного цикла: от конструкторско-технологических разработок до готового изделия.</h4>
            <div className='flex gap-3'>
                <button id="about-slide-left" className='w-10 h-10 border border-black rounded-md text-[26px] text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]'>{"<"}</button>
                <button id="about-slide-next" className='w-10 h-10 border border-black rounded-md text-[26px] text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]'>{">"}</button>
            </div>
        </div>
        <div className="Sl container max-xl:px-[3%]">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: "#about-slide-left",
          nextEl: "#about-slide-next",
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
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {AboutSliders.map((sl, idx) => (
            <SwiperSlide key={idx} className="h-[350px]! rounded-[10px] flex flex-col justify-start! items-start! px-4 pt-14">
                <img className="w-[50px]! h-[50px]!" src={sl.img} alt="Icon" />
                <h4 className="text-start pt-7 pb-4 text-[24px] font-[500]">{sl.title}</h4>
                <p className="text-start line-clamp-5 text-[15px]">{sl.desc}</p>
            </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </section>
  )
}

export default AboutSwiper