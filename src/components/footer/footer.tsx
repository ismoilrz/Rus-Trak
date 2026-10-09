import { NavLink } from "react-router-dom"
import qr from "../../assets/qr.svg"
import { Socials } from "../../constants/socials"

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-11">
        <div className="container flex justify-between">
            <div className="text-white">
                <div className="flex flex-col gap-2">
                    <p className="font-[500]">Тел/факс: <a href="tel:8 (831) 235-25-51">8 (831) 235-25-51</a></p>
                    <p className="font-[500]">Email: <a href="#">info+10653@rtrf.ru</a></p>
                    <p className="font-[500]">г. Нижний Новгород ул. Торфяная, 35</p>
                </div>
                <button className="py-3 mt-4 mb-6 px-[30px] text-black rounded-[4px] bg-[#fec80b] duration-200 hover:opacity-[0.8]">Заказать звонок</button>
                <img className="w-[180px]" src={qr} alt="QR Code" />
                <p className="text-[14px] text-[#a1a1a1] max-w-[450px] leading-[110%] mt-7">2009 - 2026 © Rus - Trucks Информация на сайте не является публичной офертой, определяемой согласно статье 435 Гражданского кодекса РФ и носит исключительно информационный характер.</p>
            </div>

            <div className="flex flex-col items-center gap-12 text-white text-[14px]">
                <div>
                    <strong className="text-white font-[500] text-[16px]">О нас</strong>
                    <div className="flex gap-25 mt-10">
                        <nav className="flex flex-col gap-2">
                            <NavLink to={"/"}>О компании ООО «Рустрак»</NavLink>
                            <NavLink to={"/"}>Новости</NavLink>
                            <NavLink to={"/"}>Наши партнёры</NavLink>
                            <NavLink to={"/"}>Производство</NavLink>
                            <NavLink to={"/"}>Поставщикам и партнёрам</NavLink>
                            <NavLink to={"/"}>Отзывы</NavLink>
                            <NavLink to={"/"}>Сертификаты</NavLink>
                        </nav>

                        <nav className="flex flex-col gap-2">
                            <NavLink to={"/"}>Вакансии</NavLink>
                            <NavLink to={"/"}>Кредит и лизинг</NavLink>
                            <NavLink to={"/"}>Сервис</NavLink>
                            <NavLink to={"/"}>Ремонт</NavLink>
                            <NavLink to={"/"}>Контакты</NavLink>
                            <NavLink to={"/"}>Полезные статьи</NavLink>
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

            <div>
                <strong className="text-white font-[500] text-[16px]">Медиа</strong>
                <nav className="text-white text-[14px] mt-10 flex flex-col gap-2">
                    <NavLink to={"/"}>Фотогалерея</NavLink>
                    <NavLink to={"/"}>Видео</NavLink>
                    <NavLink to={"/"}>Рекламные материалы</NavLink>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer