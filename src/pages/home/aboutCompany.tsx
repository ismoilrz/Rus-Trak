import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import pre from "../../assets/about-truck32.png"

const AboutCompany = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex items-center justify-between py-25 max-xl:px-[3%] max-lg:flex-col max-lg:gap-8">
        <div className="w-1/2 max-lg:w-full">
            <h2 className="text-[42px] font-[500]">{t("about_company.title_part1")} <span className="text-[#fec80b]">{t("about_company.title_highlight")}</span></h2>
            <p className="text-[18px] mt-4">
                {t("about_company.desc1")}
            </p>
            <p className="text-[18px] py-10">
                {t("about_company.desc2")}
            </p>
            <Link to={"/about"}>
                <button className="flex items-center gap-3 px-7 py-3 rounded-[4px] text-black bg-[#fec80b] duration-200 hover:opacity-[0.7]">
                    {t("about_company.more")}
                    <MoveRight />
                </button>
            </Link>
        </div>
        <div>
            <img src={pre} alt="About Image" />
        </div>
    </section>
  )
}

export default AboutCompany