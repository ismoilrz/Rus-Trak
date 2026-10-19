import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import { AboutSliders } from "../../constants/data/data";

const AboutSwiper = () => {
  return (
    <section>
        <div className='container pt-40 pb-15 flex justify-between items-end'>
            <h4 className='text-[24px] font-[500] max-w-[50%]'>Автомобильный завод «РусТрак» является предприятием полного цикла: от конструкторско-технологических разработок до готового изделия.</h4>
            <div className='flex gap-3'>
                <button className='w-10 h-10 border border-black rounded-md text-[26px] text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]'>{"<"}</button>
                <button className='w-10 h-10 border border-black rounded-md text-[26px] text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]'>{">"}</button>
            </div>
        </div>
        <div className="Sl container">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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