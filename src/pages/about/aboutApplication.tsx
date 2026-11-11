import aboutap1 from "../../assets/aboutapplication1.webp"
import aboutap2 from '../../assets/aboutapplication2.webp'
import { useTranslation } from "react-i18next";

const AboutApplication = () => {
    const { t } = useTranslation();

  return (
    <section className="container pt-20 max-xl:px-[3%]">
        <div className="flex max-md:flex-col w-full justify-between max-xl:h-[600px] max-md:h-auto max-xl:gap-5">
            <div className="w-[32%] max-xl:w-1/2 max-md:w-full max-md:h-[320px] max-sm:h-auto max-sm:py-5 bg-[#fec80b] flex flex-col justify-center px-4 gap-15 max-md:gap-8 rounded-[12px]">
                <div>
                    <h5 className="text-[28px] max-md:text-[24px] max-sm:text-[20px] font-semibold">
                        {t("about_page.application.industries_title")}
                    </h5>
                    <p className="text-lg max-md:text-[16px] max-sm:text-[14px] mt-3">
                        {t("about_page.application.industries_desc")}
                    </p>
                </div>
                <div>
                    <h5 className="text-[28px] max-md:text-[24px] max-sm:text-[20px] font-semibold">
                        {t("about_page.application.vehicles_title")}
                    </h5>
                    <p className="text-lg max-md:text-[16px] max-sm:text-[14px] mt-3">
                        {t("about_page.application.vehicles_desc")}
                    </p>
                </div>
            </div>
            <div className="flex justify-between max-xl:w-1/2 max-md:w-full gap-[5%] max-xl:gap-5 max-xl:flex-col max-xl:gap-0">
                <div className="w-[50%] max-md:h-[320px] max-xl:w-full rounded-[15px] overflow-hidden">
                    <img className="max-xl:w-full" src={aboutap1} alt="Image" />
                </div>
                <div className="w-[50%] max-md:h-[320px] max-xl:w-full rounded-[15px] overflow-hidden">
                    <img className="max-xl:w-full" src={aboutap2} alt="Image" />
                </div>  
            </div>
        </div>

        <div className="mt-36 max-sm:mt-20 flex flex-col gap-8 max-sm:gap-4 max-sm:text-[14px] text-lg w-full">
            <p className="max-w-[65%] max-lg:max-w-[80%] max-md:max-w-[90%] max-sm:max-w-full">
                {t("about_page.application.p1")}
            </p>
            <p className="max-w-[65%] max-lg:max-w-[80%] max-md:max-w-[90%] max-sm:max-w-full">
                {t("about_page.application.p2")}
            </p>
            <p className="max-w-[65%] max-lg:max-w-[80%] max-md:max-w-[90%] max-sm:max-w-full">
                {t("about_page.application.p3")}
            </p>
        </div>
    </section>
  )
}

export default AboutApplication;