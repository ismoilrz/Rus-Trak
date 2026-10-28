import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { NewsData } from "../../constants/news/newsData";

import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { MoveRight } from "lucide-react";

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
      <div className="container max-xl:px-[3%]">
        <h1 className="text-[32px] py-6 font-[500]">Новости РусТрак</h1>
        
        {currentPage === 0 && featuredNews && (
          <div className="w-full h-[400px] max-lg:h-[300px] max-md:hidden newsSl flex justify-between gap-4 mb-36">
            <Swiper spaceBetween={0} loop={true} navigation={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }} modules={[Autoplay]}
              className="mySwiper"
            >
              {featuredNews.pick.map((sl, index) => (
                <SwiperSlide key={index}>
                  <img src={sl} alt="Image" />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="w-1/2">
              <span className="text-lg">{featuredNews.date}</span>
              <h1 className="text-[24px] font-[500] max-w-[70%] max-xl:max-w-[90%] max-xl:line-clamp-2 mt-2 mb-4">{featuredNews.title}</h1>
              <Link to={`/news/${featuredNews.slug}`} className="flex items-center gap-4 text-lg text-[#a1a1a1] hover:text-[#fec80b] transition mt-30">
                Подробнее <MoveRight />
              </Link>
            </div>
          </div>
        )}

        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6">
          {currentItems.map((item) => (
            <Link to={`/news/${item.slug}`}>
              <div key={item.id} className="group rounded-sm overflow-hidden flex flex-col justify-between bg-white">
                <div>
                  {item.pick && item.pick[0] && (
                    <img src={item.pick[0]} alt={item.title} className="w-full h-48 max-sm:h-36 object-cover" />
                  )}
                  <div className="px-2 py-4">
                    <span>{item.date}</span>
                    <h3 className="text-lg max-md:text-[16px] font-medium line-clamp-2">{item.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <button className="flex items-center gap-4 max-md:gap-2 max-md:text-[16px] text-lg text-[#a1a1a1] transition group-hover:text-[#fec80b]">
                    Подробнее <MoveRight />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hasMoreData && (
          <div className="text-center mt-10">
            <button onClick={handleShowMore} className="px-8 py-3 bg-[#fec80b] hover:opacity-[0.7] font-medium rounded-[6px] transition">
              Показать ещё
            </button>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Pagination
            breakLabel="..."                      
            nextLabel="Дальше >"                 
            onPageChange={handlePageClick}        
            pageRangeDisplayed={2}                
            marginPagesDisplayed={1}              
            pageCount={totalPages}                
            forcePage={currentPage}              
            previousLabel="< Назад"              
            containerClassName="flex items-center gap-3 text-gray-700 font-medium select-none"
            pageClassName="w-10 h-10 flex items-center justify-center rounded-full transition hover:bg-gray-100 cursor-pointer"
            pageLinkClassName="w-full h-full flex items-center justify-center"
            activeClassName="!bg-[#fec80b] !text-black font-bold shadow-sm" 
            activeLinkClassName="text-black"
            previousClassName="flex items-center gap-1 cursor-pointer hover:text-black px-2"
            nextClassName="flex items-center gap-1 cursor-pointer hover:text-black px-2 max-sm:hidden"
            disabledClassName="opacity-30 cursor-not-allowed hover:text-gray-700"
            breakClassName="flex items-center justify-center w-6 h-6 text-gray-400"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};

export default News;