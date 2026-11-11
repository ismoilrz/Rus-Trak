import { useTranslation } from "react-i18next";

const Supliers = () => {
  const { t } = useTranslation();

  return (
    <section className="container max-xl:px-[3%]">
      <h1 className="text-[32px] max-md:text-[26px] max-sm:text-[22px] font-[500]">{t("suppliers_page.title")}</h1>
      <div className="flex flex-col gap-8 mt-7 max-md:mt-4 max-md:gap-6">
        <h2 className="text-[32px] max-md:text-[26px] max-sm:text-[22px] font-[500]">{t("suppliers_page.subtitle")}</h2>
        <p className="text-lg text-[16px] max-w-[70%] max-lg:max-w-[85%] max-md:max-w-full">
          {t("suppliers_page.desc1")}
        </p>
        <p className="text-lg text-[16px] max-w-[70%] max-lg:max-w-[85%] max-md:max-w-full">
          {t("suppliers_page.desc2_p1")} <br />
          {t("suppliers_page.desc2_p2")}
        </p>
      </div>

      <div className="text-lg mt-8 flex flex-col gap-8">
        <p className="max-md:text-[16px]">{t("suppliers_page.partners_title")}</p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">1</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">{t("suppliers_page.item1")}</p>
          </div>
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">2</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">{t("suppliers_page.item2")}</p>
          </div>
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">3</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">{t("suppliers_page.item3")}</p>
          </div>
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">4</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">{t("suppliers_page.item4")}</p>
          </div>
        </div>
        
        <p className="max-md:text-[16px]">{t("suppliers_page.principles_title")}</p>
      </div>

      <div className="text-lg py-8 max-md:text-[16px]">
         <p>- {t("suppliers_page.principle1")}</p>
         <p>- {t("suppliers_page.principle2")}</p>
         <p>- {t("suppliers_page.principle3")}</p>
      </div>
      
      <p className="text-lg max-w-[70%] max-md:text-[16px] max-lg:max-w-[85%] max-md:max-w-full">
        {t("suppliers_page.footer_p1")} <br /> {t("suppliers_page.footer_p2")}
      </p>
    </section>
  );
};

export default Supliers;