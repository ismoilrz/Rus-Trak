import { Link, NavLink } from "react-router-dom"
import qr from "../../assets/qr.svg"
import { Socials } from "../../constants/socials"
import { ChevronUp } from "lucide-react"
import { AboutMenuData, MenuData } from "../../constants/MenuData"
import { useState } from "react"

type FooterProps = {
    openCallModal: () => void,
}

const Footer = ({openCallModal}:FooterProps) => {

    const [openMenu1, setOpenMenu1] = useState<boolean>(false)
    const [openMenu2, setOpenMenu2] = useState<boolean>(false)

  return (
   <>
     <footer className="bg-black pt-16 pb-11">
        <div className="container flex justify-between max-lg:justify-start max-lg:gap-5 max-xl:px-[3%]">
            <div className="text-white">
                <div className="flex flex-col gap-2">
                    <p className="font-[500]">Тел/факс: <a href="tel:8 (831) 235-25-51">8 (831) 235-25-51</a></p>
                    <p className="font-[500]">Email: <a href="#">info+10653@rtrf.ru</a></p>
                    <p className="font-[500]">г. Нижний Новгород ул. Торфяная, 35</p>
                </div>
                <button onClick={openCallModal} className="py-3 mt-4 mb-6 px-[30px] text-black rounded-[4px] bg-[#fec80b] duration-200 hover:opacity-[0.8]">Заказать звонок</button>
                <img className="w-[180px]" src={qr} alt="QR Code" />

                {/* media menu */}
                <div className="hidden max-lg:block mt-10">
                    <button onClick={() => setOpenMenu1((m) => !m)} className="font-[500] flex items-center gap-3">
                        О нас <span><ChevronUp className={`text-[#a1a1a1] transition-transform duration-200 ${openMenu1 ? "" : "rotate-180"}`} /></span>
                    </button>

                    {openMenu1 && (
                        <nav className="gap-2 text-[14px] text-[#e5e5e5] mt-4 footMenuAni">
                            {AboutMenuData.map((menu, idx) => (
                                <Link key={idx} to={menu.path}>{menu.label}</Link>
                            ))}
                            {MenuData.map((menu, idx) => (
                                <Link key={idx} to={menu.path}>{menu.label}</Link>
                            ))}
                            <Link to={"/articles"}>Полезные статьи</Link>
                        </nav>
                    )}
                </div>

                <div className="hidden max-sm:block mt-3">
                    <button onClick={() => setOpenMenu2((m) => !m)} className="font-[500] flex items-center gap-3">
                        Медиа <span><ChevronUp className={`text-[#a1a1a1] transition-transform duration-200 ${openMenu2 ? "" : "rotate-180"}`} /></span>
                    </button>

                    {openMenu2 && (
                        <nav className="gap-2 text-[14px] mt-4 text-[#e5e5e5 footMenuAni2">
                            <Link to={"/"}>Фотогалерея</Link>
                            <Link to={"/"}>Видео</Link>
                            <Link to={"/"}>Рекламные материалы</Link>
                        </nav>
                    )}
                </div>

                {/* media socials */}
                <div className="max-lg:flex mt-10 gap-3 hidden">
                    {Socials.map((item ,idx) => (
                        <a key={idx} href={item.path}>
                            <img className={item.isDes ? "w-11 h-8" : "w-8 h-8"} src={item.icon} alt="Icon" />
                        </a>
                    ))}
                </div>

                <p className="text-[14px] text-[#a1a1a1] max-w-[450px] max-xl:max-w-[300px] leading-[110%] max-lg:mt-10 mt-7">2009 - 2026 © Rus - Trucks Информация на сайте не является публичной офертой, определяемой согласно статье 435 Гражданского кодекса РФ и носит исключительно информационный характер.</p>
            </div>

            <div className="flex max-lg:hidden flex-col items-center gap-12 text-white text-[14px]">
                <div>
                    <strong className="text-white font-[500] text-[16px]">О нас</strong>
                    <div className="flex gap-25 max-xl:gap-15 mt-10">
                        <nav className="flex flex-col gap-2">
                            <NavLink to={"/about"}>О компании ООО «Рустрак»</NavLink>
                            <NavLink to={"/news"}>Новости</NavLink>
                            <NavLink to={"/ourpartners"}>Наши партнёры</NavLink>
                            <NavLink to={"/production"}>Производство</NavLink>
                            <NavLink to={"/supliers"}>Поставщикам и партнёрам</NavLink>
                            <NavLink to={"/reviews"}>Отзывы</NavLink>
                            <NavLink to={"/sertificate"}>Сертификаты</NavLink>
                        </nav>

                        <nav className="flex flex-col gap-2">
                            <NavLink to={"/vacancies"}>Вакансии</NavLink>
                            <NavLink to={"/credit"}>Кредит и лизинг</NavLink>
                            <NavLink to={"/service"}>Сервис</NavLink>
                            <NavLink to={"/repair"}>Ремонт</NavLink>
                            <NavLink to={"/contacts"}>Контакты</NavLink>
                            <NavLink to={"/articles"}>Полезные статьи</NavLink>
                        </nav>
                    </div>
                </div>
                <div className="flex gap-3">
                    {Socials.map((item ,idx) => (
                        <a key={idx} href={item.path}>
                            <img className={item.isDes ? "w-11 h-8" : "w-8 h-8"} src={item.icon} alt="Icon" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-sm:hidden">
                <strong className="text-white font-[500] text-[16px]">Медиа</strong>
                <nav className="text-white text-[14px] mt-10 flex flex-col gap-2">
                    <NavLink to={"/galeriya"}>Фотогалерея</NavLink>
                    <NavLink to={"/video"}>Видео</NavLink>
                    <NavLink to={"/reklama"}>Рекламные материалы</NavLink>
                </nav>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Footer