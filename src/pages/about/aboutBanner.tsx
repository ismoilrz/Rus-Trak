import aboutBannerYear from "../../assets/aboutBannerYears.png"

const AboutBanner = () => {
  return (
    <section className="aboutBanner w-full mt-8">
      <div className="container relative h-full max-xl:px-[3%]">
        <h4 className="text-[28px] max-md:text-[22px] text-white font-bold pt-20 max-md:pt-5 pb-35 max-w-[35%] max-md:max-w-full">
          Автомобильный завод «РусТрак» - ведущий производитель коммерческого
          транспорта и специализированной техники в Нижнем Новгороде.
        </h4>
        <div className="absolute left-0 max-xl:left-5 bottom-[-25px] w-35 h-36"><img className="w-full h-full" src={aboutBannerYear} alt="17+ Years" /></div>
      </div>
    </section>
  );
};

export default AboutBanner;
