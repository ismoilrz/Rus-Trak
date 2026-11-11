
import { useParams, Link } from "react-router-dom";
import { NewsData } from "../../constants/news/newsData";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const currentNews = NewsData.find((item) => item.slug === slug);

  if (!currentNews) {
    return <div className="container py-10 text-xl font-medium">{t("news.notFound")}</div>;
  }

  return (
    <div className="container max-xl:px-[3%]">
      <Link to="/news" className="flex items-center gap-2 text-gray-600 hover:text-black mb-6 w-fit">
        <MoveLeft /> {t("news.back")}
      </Link>

      <div>
        <h1 className="text-[32px] max-md:text-[26px] font-[500] my-2">
          {t(`${currentNews.translationKey}.title`)}
        </h1>
        <span className="text-lg">{currentNews.date}</span>
      </div>

      <div className="w-full flex max-lg:flex-col justify-between gap-6 pt-12">
        <div className="w-1/2 max-lg:w-full text-lg max-md:text-[16px] flex flex-col gap-7">
          <div className="flex flex-col gap-7">
            {(t(`${currentNews.translationKey}.desc`, {
              returnObjects: true,
            }) as string[]).map((des, index) => (
              <p key={index}>{des}</p>
            ))}
          </div>

          <div className="flex flex-col text-[16px]">
            {(t(`${currentNews.translationKey}.parametrs`, {
              returnObjects: true,
              defaultValue: [],
            }) as string[]).map((par, index) => (
              <p key={index}>{par}</p>
            ))}
          </div>
        </div>

        <div className="newsSl2 w-[50%] max-lg:w-full h-[420px]! max-md:h-[300px]! max-sm:h-[200px]!">
          <Swiper spaceBetween={0} loop={true} navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }} modules={[Autoplay]}
            className="mySwiper"
          >
            {currentNews.pick.map((pc, index) => (
              <SwiperSlide key={index}>
                <img className="" src={pc} alt="Image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <h4 className="text-[22px] font-[500] mt-25">{t("news.moreNews")}</h4>

      <div className="newsSl3 py-10">
        <Swiper spaceBetween={25} slidesPerView={4} loop={true} className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            }
          }}>

          {NewsData.map((item) => (
            <SwiperSlide key={item.id} className="group">
              <Link to={`/news/${item.slug}`}>
                <span>{item.date}</span>
                <h3 className="line-clamp-2 font-semibold">
                  {t(`${item.translationKey}.title`)}
                </h3>
                <button className="flex items-center gap-4 mt-6 text-lg max-md:text-[16px] group-hover:text-[#fec80b] text-[#a1a1a1] hover:text-[#fec80b] transition">
                  {t("news.readMore")} <MoveRight />
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsDetail;
