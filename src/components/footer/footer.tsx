import { Link, NavLink } from "react-router-dom"
import qr from "../../assets/qr.svg"
import { Socials } from "../../constants/socials"
import { ChevronUp } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { AboutMenuData, MediaMenuData } from "../../constants/MenuData"
// import { AboutMenuData, MediaMenuData } from "../../constants/FooterMenuData"

type FooterProps = {
    openCallModal: () => void,
}

const Footer = ({ openCallModal }: FooterProps) => {
    const { t } = useTranslation();
    const [openMenu1, setOpenMenu1] = useState<boolean>(false)
    const [openMenu2, setOpenMenu2] = useState<boolean>(false)

  return (
   <>
     <footer className="bg-black pt-16 pb-11">
        <div className="container flex justify-between max-lg:justify-start max-lg:gap-5 max-xl:px-[3%]">
            <div className="text-white">
                <div className="flex flex-col gap-2">
                    <p className="font-[500]">{t("footer.phone_label")} <a href="tel:88312352551">8 (831) 235-25-51</a></p>
                    <p className="font-[500]">Email: <a href="#">info+10653@rtrf.ru</a></p>
                    <p className="font-[500]">{t("footer.address")}</p>
                </div>
                <button onClick={openCallModal} className="py-3 mt-4 mb-6 px-[30px] text-black rounded-[4px] bg-[#fec80b] duration-200 hover:opacity-[0.8]">{t("footer.order_call")}</button>
                <img className="w-[180px]" src={qr} alt="QR Code" />

                {/* media menu */}
                <div className="hidden max-lg:block mt-10">
                    <button onClick={() => setOpenMenu1((m) => !m)} className="font-[500] flex items-center gap-3">
                        {t("footer.about_title")} <span><ChevronUp className={`text-[#a1a1a1] transition-transform duration-200 ${openMenu1 ? "" : "rotate-180"}`} /></span>
                    </button>

                    {openMenu1 && (
                        <nav className="flex flex-col gap-2 text-[14px] text-[#e5e5e5] mt-4 footMenuAni">
                            {AboutMenuData.map((menu) => (
                                <Link key={menu.id} to={menu.path}>{t(menu.labelKey)}</Link>
                            ))}
                            {MediaMenuData.map((menu) => (
                                <Link key={menu.id} to={menu.path}>{t(menu.labelKey)}</Link>
                            ))}
                            <Link to={"/articles"}>{t("footer.useful_articles")}</Link>
                        </nav>
                    )}
                </div>

                <div className="hidden max-sm:block mt-3">
                    <button onClick={() => setOpenMenu2((m) => !m)} className="font-[500] flex items-center gap-3">
                        {t("footer.media_title")} <span><ChevronUp className={`text-[#a1a1a1] transition-transform duration-200 ${openMenu2 ? "" : "rotate-180"}`} /></span>
                    </button>

                    {openMenu2 && (
                        <nav className="flex flex-col gap-2 text-[14px] mt-4 text-[#e5e5e5] footMenuAni2">
                            {MediaMenuData.map((menu) => (
                                <Link key={menu.id} to={menu.path}>{t(menu.labelKey)}</Link>
                            ))}
                        </nav>
                    )}
                </div>

                {/* media socials */}
                <div className="max-lg:flex mt-10 gap-3 hidden">
                    {Socials.map((item, idx) => (
                        <a key={idx} href={item.path}>
                            <img className={item.isDes ? "w-11 h-8" : "w-8 h-8"} src={item.icon} alt="Icon" />
                        </a>
                    ))}
                </div>

                <p className="text-[14px] text-[#a1a1a1] max-w-[450px] max-xl:max-w-[300px] leading-[110%] max-lg:mt-10 mt-7">
                    {t("footer.copyright")}
                </p>
            </div>

            <div className="flex max-lg:hidden flex-col items-center gap-12 text-white text-[14px]">
                <div>
                    <strong className="text-white font-[500] text-[16px]">{t("footer.about_title")}</strong>
                    <div className="flex gap-25 max-xl:gap-15 mt-10">
                        <nav className="flex flex-col gap-2">
                            {AboutMenuData.slice(0, 7).map((menu) => (
                                <NavLink key={menu.id} to={menu.path}>{t(menu.labelKey)}</NavLink>
                            ))}
                        </nav>

                        <nav className="flex flex-col gap-2">
                            {AboutMenuData.slice(7).map((menu) => (
                                <NavLink key={menu.id} to={menu.path}>{t(menu.labelKey)}</NavLink>
                            ))}
                            <NavLink to={"/service"}>{t("menu.service")}</NavLink>
                            <NavLink to={"/repair"}>{t("menu.repair")}</NavLink>
                            <NavLink to={"/contacts"}>{t("menu.contacts")}</NavLink>
                            <NavLink to={"/articles"}>{t("footer.useful_articles")}</NavLink>
                        </nav>
                    </div>
                </div>
                <div className="flex gap-3">
                    {Socials.map((item, idx) => (
                        <a key={idx} href={item.path}>
                            <img className={item.isDes ? "w-11 h-8" : "w-8 h-8"} src={item.icon} alt="Icon" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-sm:hidden">
                <strong className="text-white font-[500] text-[16px]">{t("footer.media_title")}</strong>
                <nav className="text-white text-[14px] mt-10 flex flex-col gap-2">
                    {MediaMenuData.map((menu) => (
                        <NavLink key={menu.id} to={menu.path}>{t(menu.labelKey)}</NavLink>
                    ))}
                </nav>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Footer