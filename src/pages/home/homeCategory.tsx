import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { catalogConfig } from "../../constants/catalogData/catalogConfig";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  return (
    <section className="container max-xl:px-[3%]">
      <div className="w-full flex justify-between py-16 max-sm:flex-col max-sm:gap-6 max-sm:pb-3">
        <h3 className="text-4xl font-medium">Категории</h3>
        <div className="flex gap-3">
          <button id="cat-slide-left" className="w-10 h-10 rounded-md border-1 text-3xl text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]">{'<'}</button>
          <button id="cat-slide-next" className="w-10 h-10 rounded-md border-1 text-3xl text-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]">{'>'}</button>
        </div>
      </div>

      <div className="Sl">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
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
          {Object.values(catalogConfig).map((item) => (
            <SwiperSlide className="rounded-lg max-h-[340px] shadow-md">
              <Link to={`/catalog/${item.slug}`} className="w-full h-full flex flex-col items-start! rounded-lg p-3">
                <h4 className="text-[22px] max-xl:text-[19px] text-start">{item.title}</h4>
                <span className="text-[#a1a1a1]">{item.trak.length} моделей</span>
                <div className="w-full h-auto flex justify-end mt-6 max-sm:mt-2">
                  <img className="h-[70%] w-[80%]! max-sm:w-[55%]!" src={item.cartImg} alt="Image" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HomeCategory