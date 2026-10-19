import aboutBannerYear from "../../assets/aboutBannerYears.png"

const AboutBanner = () => {
  return (
    <section className="aboutBanner h-[450px] w-full mt-8">
      <div className="container relative h-full">
        <h4 className="text-[28px] text-white font-bold pt-20 max-w-[35%]">
          Автомобильный завод «РусТрак» - ведущий производитель коммерческого
          транспорта и специализированной техники в Нижнем Новгороде.
        </h4>
        <div className="absolute left-0 bottom-[-25px] w-35 h-36"><img className="w-full h-full" src={aboutBannerYear} alt="17+ Years" /></div>
      </div>
    </section>
  );
};

export default AboutBanner;
