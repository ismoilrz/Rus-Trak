import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";

import uzb from "../../assets/uzb.webp";
import Logo from "../../assets/logo.svg";
import Call from "../../assets/call.svg";
import { MenuData } from "../../constants/MenuData";
import CallModal from "../callModal/callModal";
import CatalogModal from "../catalogModal/catalogModal";

const Header = () => {

  const [callModal, setCallModal] = useState<boolean>(false)

  const [hoursDrop, setHoursDrop] = useState<boolean>(false);
  const hoursDropRef = useRef<HTMLDivElement | null>(null);

  const [catalog, setCatalog] = useState<boolean>(false)

  // const openCatalog = () => setCatalog(true)
  // const closeCatalog = () => setCatalog(false)

  const openCallModal = () => setCallModal(true); 
  const closeCallModal = () => setCallModal(false)

  useEffect(() => {
    if (!hoursDrop) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        hoursDropRef.current &&
        !hoursDropRef.current.contains(e.target as Node)
      ) {
        setHoursDrop(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [hoursDrop]);

  useEffect(() => {
    const scrollClosed = callModal || catalog

    if (scrollClosed) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }


    return () => {
      document.body.style.overflow = ''
    }
  }, [callModal, catalog])

  return (
    <>
    <header className="relative">
      <div className="border-b border-[#fec80b]">
        <div className="container flex justify-between items-center h-[9vh]">
          <div className="flex items-center gap-[10px]">
            <Link to={'/'}>
              <img src={Logo} alt="Logo" />
            </Link>
            <span className="flex items-center text-[14px] pl-2 border-l-3 h-6 border-[#FEC80B]">
              <p className="max-w-[190px] leading-[100%] text-black">производство и продажа автоспецтехники</p>
            </span>
          </div>

          <div className="flex gap-[60px] relative">
            <div ref={hoursDropRef} className="flex flex-col items-end relative">
              <button onClick={() => setHoursDrop((h) => !h)} className="text-black flex items-center gap-1 cursor-pointer">
                Время работы <span className="text-[#fec80b] text-[12px] inline-block transition-transform duration-200" style={{transform: hoursDrop ? "rotate(180deg)" : "rotate(0deg)",}}>▼</span>
              </button>
              <p className="text-[15px] text-[#a1a1a1]">г. Нижний Новгород ул. Торфяная, 35</p>

                {/* Hours Drop */}
              {hoursDrop && (
                <div className="absolute top-7 right-0 bg-[#fec80b] shadow-xl rounded-md z-50 px-4 py-2">
                  <p className="text-black text-sm">Пн-пт: с 8:00 до 18:00</p>
                  <p className="text-black text-sm">Сб-вс: Выходной</p>
                </div>
              )}
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-end text-[#a1a1a1]">
                <p>Для регионов: 8 (800)-511-05-25</p>
                <p>Нижний Новгород: 8 (831) 235-26-16</p>
              </div>
              <button onClick={openCallModal} className="w-[46px] h-[46px] bg-[#fec80b] rounded-full flex items-center justify-center">
                <img src={Call} alt="Phone" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-10">
          <button onClick={() => setCatalog((c) => !c)} className="px-4 py-2 bg-[#fec80b] rounded-[4px] text-black text-lg flex items-center gap-3">
            <div className="flex flex-col gap-1 h-full">
              <div className={`${catalog ? "rotate-[45deg] absolute" : "rotate-0"} duration-200 w-[18px] h-[2.3px] bg-black`}></div>
              <div className={`${catalog ? "hidden" : "flex"} duration-200 w-[18px] h-[2.3px] bg-black`}></div>
              <div className={`${catalog ? "rotate-[-45deg] absolute" : "rotate-0"} duration-200 w-[18px] h-[2.3px] bg-black`}></div>
            </div>
            <span className={`${catalog ? "ml-4" : ""}`}>Каталог</span>
          </button>
          <div className="flex gap-8">
            <button className="text-black">
              О нас <span className="text-[#fec80b] text-[12px]">▼</span>
            </button>
            <button className="text-black">
              Медиа <span className="text-[#fec80b] text-[12px]">▼</span>
            </button>
            <nav className="flex gap-8">
              {MenuData.map((item, idx) => (
                <NavLink key={idx} to={item.path}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="h-9 w-[312px] px-4 border border-[#fec80b] rounded-[40px] flex items-center justify-between duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d]">
            <input className="h-full w-full outline-hidden"type="text" placeholder="Поиск..." />
            <Search />
          </div>
          <ShoppingCart width={"30px"} height={"30px"} />
          <Heart width={"30px"} height={"30px"} />
          <button className="w-10 h-10 rounded-full overflow-hidden">
            <img className="w-full h-full" src={uzb} alt="Uzb" />
          </button>
        </div>
      </div>

    </header>
      <CatalogModal catalog={catalog} />
      <CallModal callModal={callModal} closeCallModal={closeCallModal} />
    </>
  );
};

export default Header;