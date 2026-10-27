import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { NewsData } from "../../constants/news/newsData";

import { SwiperSlide, Swiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


const Pagination = (ReactPaginate as any).default || ReactPaginate;

const ITEMS_PER_PAGE = 8;

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) - 1 : 0; 

  const [pageVisibleCounts, setPageVisibleCounts] = useState<{ [key: number]: number }>({});

  const featuredNews = NewsData[0]; 
  const remainingNews = NewsData.slice(1); 
  const totalPages = Math.ceil(remainingNews.length / ITEMS_PER_PAGE);
  const currentVisibleCount = pageVisibleCounts[currentPage] || ITEMS_PER_PAGE;
  
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentItems = remainingNews.slice(startIndex, startIndex + currentVisibleCount);

  const handleShowMore = () => {
    setPageVisibleCounts((prev) => ({
      ...prev,
      [currentPage]: currentVisibleCount + ITEMS_PER_PAGE,
    }));
  };

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected;
    if (newPage === 0) {
      searchParams.delete("page");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ page: (newPage + 1).toString() });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const hasMoreData = startIndex + currentVisibleCount < remainingNews.length;

  return (
    <>
    <div className="container">
      <h1 className="text-[32px] py-6 font-[500]">Новости РусТрак</h1>
      
      {currentPage === 0 && featuredNews && (
        <div className="w-full h-[400px] newsSl flex justify-between gap-4">
            <Swiper spaceBetween={0} loop={true} navigation={true}
              autoplay={{ delay: 3000, disableOnInteraction: false, }}
              pagination={{ clickable: true, }}
              modules={[ Autoplay]}
              className="mySwiper"
          >
            {featuredNews.pick.map((sl) => (
              <SwiperSlide>
                <img src={sl} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-1/2">
            <span className="text-lg">{featuredNews.date}</span>
            <h1 className="text-[24px] font-[500] mt-2 mb-4">{featuredNews.title}</h1>

          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-6">Все новости</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <div key={item.id} className=" rounded-lg overflow-hidden  flex flex-col justify-between bg-white">
            <div>
              {item.pick && item.pick[0] && (
                <img src={item.pick[0]} alt={item.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <span className="text-xs text-gray-500">{item.date}</span>
                <h3 className="text-lg font-medium mt-1 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.desc[0]}</p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button className="w-full py-2 font-medium text-black rounde transition">
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasMoreData && (
        <div className="text-center mt-10">
          <button 
            onClick={handleShowMore}
            className="px-8 py-3 bg-[#fec80b] hover:opacity-[0.7] font-medium rounded-[6px] transition"
          >
            Show More
          </button>
        </div>
      )}

      <div className="mt-12 flex justify-center">
        <Pagination
          breakLabel="..."                      // Sahifalar orasidagi uch nuqta (...)
          nextLabel="Дальше >"                  // Keyingi tugmasi matni
          onPageChange={handlePageClick}        // Sahifa bosilganda ishlaydigan funksiya
          pageRangeDisplayed={2}                // Aktiv sahifa atrofida nechta raqam ko'rinishi
          marginPagesDisplayed={1}              // Boshida va oxirida nechta raqam ko'rinishi
          pageCount={totalPages}                // Jami sahifalar soni
          forcePage={currentPage}               // URL'dagi sahifaga qarab turgan o'rnini sinxronlash
          previousLabel="< Назад"               // Orqaga tugmasi matni
          containerClassName="flex items-center gap-3 text-gray-700 font-medium select-none"
          pageClassName="w-10 h-10 flex items-center justify-center rounded-full transition hover:bg-gray-100 cursor-pointer"
          pageLinkClassName="w-full h-full flex items-center justify-center"
          activeClassName="!bg-[#fec80b] !text-black font-bold shadow-sm" // Aktiv sahifa (dumaloq sariq)
          activeLinkClassName="text-black"
          previousClassName="flex items-center gap-1 cursor-pointer hover:text-black px-2"
          nextClassName="flex items-center gap-1 cursor-pointer hover:text-black px-2"
          disabledClassName="opacity-30 cursor-not-allowed hover:text-gray-700"
          breakClassName="flex items-center justify-center w-8 h-8 text-gray-400"
          renderOnZeroPageCount={null}
        />
      </div>

    </div>
    </>
  );
};

export default News;