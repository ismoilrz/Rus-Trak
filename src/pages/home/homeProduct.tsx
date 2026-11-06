import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { catalogConfig } from "../../constants/catalogData/catalogConfig";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const HomeProduct = () => {
    const [catalogForm, setCatalogForm] = useState<boolean>(false)
    const closeCatForm = () => setCatalogForm(false)

    useEffect(() => {
            const scrollClosed = catalogForm;
        
            if (scrollClosed) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "auto";
            }
        
            return () => {
              document.body.style.overflow = "";
            };
          }, [catalogForm]);

  const allTrakItems = Object.values(catalogConfig).flatMap((category) => 
    (category.trak || []).map((trakItem) => ({
      ...trakItem,
      categorySlug: category.slug
    }))
  );

  return (
    <>
        <section className="bg-[#f5f5f5] pb-12">
        <div className="container max-xl:px-[3%]">
            <div className="w-full flex justify-between py-14 pb-8 max-sm:flex-col max-sm:gap-6 max-sm:pb-3">
            <h3 className="text-[40px] max-md:text-3xl font-medium">Рекомендуемая продукция</h3>
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
                {allTrakItems.map((trakItem, index) => (
                <SwiperSlide key={trakItem.id || index} className="h-[370px]! bg-[#fff]!">
                    <Link to={`/catalog/${trakItem.categorySlug}/${trakItem.slug}`} className="w-full h-full flex flex-col items-start rounded-lg">
                    <img className="h-[56%]!" src={trakItem.img} alt="" />
                    <h4 className="text-[17px] line-clamp-2 text-start m-3 min-h-12">
                        {trakItem.title}
                    </h4>
                    <span className="text-xl font-medium px-3">{trakItem.price}</span>
                    <div className="flex justify-between w-full px-3 pt-2 text-[14px]">
                        <button className="px-4 py-2 rounded-md bg-[#fec80b]">Подробнее</button>
                        <button onClick={(e) => {e.preventDefault(); e.stopPropagation(); setCatalogForm(true)}}>Получить КП</button>
                    </div>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </section>

        {catalogForm && (
              <div onClick={closeCatForm} className="fixed top-0 left-0 inset-0 z-50 bg-[#0009] flex items-center justify-center">
                <div onClick={(e) => e.stopPropagation()} className="bg-white w-[500px] max-sm:w-[90%] py-15 flex flex-col items-center rounded-lg relative">
                  <button onClick={closeCatForm}><X  width={'30px'} height={'30px'} className="absolute top-3 right-3" /></button>
                  <h3 className="text-[24px] text-center max-sm:text-[20px] font-[500] text-black max-w-[80%]">Получить коммерческое предложение</h3>
                  <form className="w-[70%] py-12 max-sm:py-6! max-sm:py-8 flex flex-col gap-3 max-sm:w-[80%]">
                      <div className="flex flex-col gap-1">
                          <label className="text-[14px]">Ваше имя *</label>
                          <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="Имя" />
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-[14px]">E-mail *</label>
                          <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="your@mail.com" />
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-[14px]">Телефон *</label>
                          <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="number" placeholder="+998" />
                      </div>
                      <div className="flex items-center">
                          <div className="checkbox-wrapper-33">
                              <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                  <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 14l8 7L24 7"></path>
                                  </svg>
                                  </span>
                              </label>
                          </div>
                          <p className="text-[14px] leading-[110%] text-[#a1a1a1]">Я согласен <a className="text-purple-800" href="#">на обработку персональных данных</a></p>
                      </div>
                  </form>
                          <button className="py-3 rounded-[4px] bg-[#fec80b] w-[70%] duration-200 hover:opacity-[0.7]">Получить КП</button>
                     
              </div>
              </div>
            )}
    </>
  )
}

export default HomeProduct