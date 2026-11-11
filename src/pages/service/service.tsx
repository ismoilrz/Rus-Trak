import { useTranslation } from "react-i18next";
import employes from "../../assets/employes1.png"

const Service = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container flex justify-between max-xl:px-[3%] max-xl:gap-5">
        <div className="w-[70%] flex flex-col gap-16 max-md:gap-10 max-lg:w-full">
          <div>
            <h3 className="text-[32px] max-sm:text-[28px] max-sm:max-w-[90%] max-lg:max-w-[80%] z-10 max-sm:static absolute text-black font-[500]">{t("service_page.title")}</h3>
            <div className="mt-16 flex items-start max-lg:justify-between max-lg:mt-26 max-sm:mt-4 max-lg:gap-5">
              <p className="text-[18px] max-lg:max-w-[50%] max-md:max-w-full">
                {t("service_page.description")}
              </p>

              <div className="p-6 max-md:hidden hidden max-lg:flex flex-col items-center border border-[#99999983] shadow-2xl rounded-lg">
                <img src={employes} alt="Employes" />
                <strong className="text-[24px] font-[500]">{t("service_page.employee_name")}</strong>
                <p className="max-w-[264px] text-center text-[#a1a1a1]">{t("service_page.employee_position")}</p>
                <div className="flex flex-col items-center mt-16">
                  <a href="tel:88312250055">(831) 225-00-55 (доб 124)</a>
                  <a href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a>
                </div>
            </div>
          </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[24px] font-[500]">{t("service_page.support_title")}</h4>
            <div className="flex items-start gap-4">
              <div className="w-10! h-10 flex items-center justify-center text-[26px] font-semibold rounded-full bg-[#fec80b] shrink-0">1</div>
              <p className="text-lg max-w-[90%] max-sm:max-w-[80%]">
                <a className="text-purple-800 underline" href="https://rtrf.ru/service/upload/RKLMACTRT26.pdf" target="_blank" rel="noopener noreferrer">{t("service_page.fill_A")}</a> {t("service_page.step1")}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-[26px] font-semibold rounded-full bg-[#fec80b] shrink-0">2</div>
              <p className="text-lg max-w-[90%] max-sm:max-w-[80%]">{t("service_page.step2")}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-[26px] font-semibold rounded-full bg-[#fec80b] shrink-0">3</div>
              <p className="text-lg max-w-[90%] max-sm:max-w-[80%]">
                {t("service_page.step3")} <a className="text-purple-800 underline" href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-lg text-black">{t("service_page.after_text1")}</p>
            <p className="text-lg text-black">
              {t("service_page.after_text2")} <a className="text-purple-800 underline" href="tel:88312250055">8 (831) 225-00-55 (доб 610)</a> {t("service_page.or_email")} <a className="text-purple-800 underline" href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a>
            </p>
          </div>

          <div className="p-6 max-md:flex hidden flex-col items-start border border-[#99999983] shadow-2xl rounded-lg">
              <strong className="text-[24px] font-[500]">{t("service_page.employee_name")}</strong>
              <p className="text-start text-[#a1a1a1]">{t("service_page.employee_position")}</p>
              <div className="flex flex-col items-start mt-10">
                <a href="tel:88312250055">(831) 225-00-55 (доб 124)</a>
                <a href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a>
              </div>
          </div>
        </div>

        <div className="max-lg:hidden">
          <div className="p-6 mt-[10vh] flex flex-col items-center border border-[#99999983] shadow-2xl rounded-lg">
            <img src={employes} alt="Employes" />
            <strong className="text-[24px] font-[500]">{t("service_page.employee_name")}</strong>
            <p className="max-w-[264px] text-center text-[#a1a1a1]">{t("service_page.employee_position")}</p>
            <div className="flex flex-col items-center mt-16">
              <a href="tel:88312250055">(831) 225-00-55 (доб 124)</a>
              <a href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service