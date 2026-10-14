import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Heart, Search, ShoppingCart } from "lucide-react";

import usa from "../../assets/usa.webp"
import rus from "../../assets/rus.webp"
import uzb from "../../assets/uzb.webp";

import Logo from "../../assets/logo.svg";
import Call from "../../assets/call.svg";

import { MenuData } from "../../constants/MenuData";
import CatalogModal from "../catalogModal/catalogModal";

type HeaderProps = {
  isScrolled: boolean,
  openCallModal: () => void,
}

const languages = {
  ru: { flag: rus, label: 'Русский' },
  uz: { flag: uzb, label: "O'zbekcha" },
  en: { flag: usa, label: 'English' }
};

const Header = ({ isScrolled, openCallModal }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [hoursDrop, setHoursDrop] = useState<boolean>(false);
  const hoursDropRef = useRef<HTMLDivElement | null>(null);
  
  const [langDrop, setLangDrop] = useState<boolean>(false);
  const langDropRef = useRef<HTMLDivElement | null>(null);

  const [catalog, setCatalog] = useState<boolean>(false);
  const [catalog2, setCatalog2] = useState<boolean>(false);
  const [catalog3, setCatalog3] = useState<boolean>(false);

  const closeCatalog = () => setCatalog(false)

  

  useEffect(() => {
    if (!langDrop) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropRef.current &&
        !langDropRef.current.contains(e.target as Node)
      ) {
        setLangDrop(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [langDrop]);

  useEffect(() => {
    const scrollClosed = catalog;

    if (scrollClosed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [catalog]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangDrop(false);
  };

  return (
    <>
      <header className={`w-full z-40 transition-all duration-300 bg-white ${
        isScrolled ? "fixed top-0 left-0 bg-white shadow-md" : "relative"
      }`}>
        
        <div 
          className={`border-b border-[#fec80b] flex items-center transition-all duration-700 max-md:h-[7vh]! ${
            isScrolled ? "absolute top-[-9vh]" : "h-[9vh]"
          }`}
        >
          <div className="container max-xl:px-[3%] flex justify-between items-center h-[9vh] max-md:h-[7vh]!">
            <div className="flex items-center gap-[10px]">
              <Link to={'/'}>
                <img src={Logo} alt="Logo" />
              </Link>
              <span className="flex max-xl:hidden items-center text-[14px] pl-2 border-l-3 h-6 border-[#FEC80B]">
                <p className="max-w-[190px] leading-[100%] text-black">{t("purpose")}</p>
              </span>
            </div>

            <div className="flex gap-[60px] max-xl:gap-8 relative">
              <div ref={hoursDropRef} className="flex flex-col items-end relative">
                <button onClick={() => setHoursDrop((h) => !h)} className="text-black flex items-center gap-1 cursor-pointer max-lg:hidden">
                  Время работы <span className="text-[#fec80b] text-[12px] inline-block transition-transform duration-200" style={{transform: hoursDrop ? "rotate(180deg)" : "rotate(0deg)"}}>▼</span>
                </button>
                <p className="text-[15px] max-lg:text-[14px] max-md:hidden max-lg:max-w-[200px] max-lg:text-end text-[#a1a1a1]">г. Нижний Новгород ул. Торфяная, 35</p>

                {hoursDrop && (
                  <div className={`${isScrolled ? "hidden" : ''} max-lg:hidden absolute top-7 right-0 bg-[#fec80b] shadow-xl rounded-md z-50! px-4 py-2`}>
                    <p className="text-black text-sm">Пн-пт: с 8:00 до 18:00</p>
                    <p className="text-black text-sm">Сб-вс: Выходной</p>
                  </div>
                )}
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-end text-[#a1a1a1] max-sm:hidden">
                  <p className="max-lg:text-[14px]">Для регионов: 8 (800)-511-05-25</p>
                  <p className="max-lg:text-[14px]">Нижний Новгород: 8 (831) 235-26-16</p>
                </div>
                <button onClick={openCallModal} className="w-[46px] h-[46px] bg-[#fec80b] rounded-full flex items-center justify-center cursor-pointer">
                  <img src={Call} alt="Phone" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-xl:px-[3%] bg-white flex justify-between items-center h-[10vh] max-xl:h-[8vh] duration-300 z-40">
          <div className="flex items-center gap-7 max-xl:gap-4">

            <button onClick={() => setCatalog((c) => !c)} className={`px-4 h-10 bg-[#fec80b] rounded-[4px] text-black text-lg flex items-center gap-3 cursor-pointer`}>
              <div className="flex flex-col justify-center gap-1 h-full">
                <div className={`${catalog ? "rotate-[45deg] translate-y-[3px]" : "rotate-0"} duration-200 w-[18px] h-[2.3px] bg-black`}></div>
                <div className={`${catalog ? "hidden" : "flex"} duration-200 w-[18px] h-[2.3px] bg-black`}></div>
                <div className={`${catalog ? "rotate-[-45deg] translate-y-[-3px]" : "rotate-0"} duration-200 w-[18px] h-[2.3px] bg-black`}></div>
              </div>
              <span className={` ${isScrolled ? "hidden" : ""} duration-300 max-sm:hidden`}>Каталог</span>
            </button>
            {isScrolled && (
                <Link className="scLog overflow-hidden max-sm:hidden" to={'/'}>
                  <img src={Logo} alt="Logo" className="w-[180px]" />
                </Link>
            )}
            <div className="flex gap-8 max-xl:gap-4">
              <button onClick={() => setCatalog2((c) => !c)} className={`${isScrolled ? "max-xl:hidden" : ""} text-black cursor-pointer max-lg:hidden`}>
                О нас <span className="text-[#fec80b] text-[12px] inline-block transition-transform duration-200" style={{transform: catalog2 ? "rotate(180deg)" : "rotate(0deg)"}}>▼</span>
              </button>
              <button onClick={() => setCatalog3((c) => !c)} className={`${isScrolled ? "max-xl:hidden" : ""} text-black cursor-pointer max-xl:hidden`}>
                Медиа <span className="text-[#fec80b] text-[12px] inline-block transition-transform duration-200" style={{transform: catalog3 ? "rotate(180deg)" : "rotate(0deg)"}}>▼</span>
              </button>
              <nav className={`${isScrolled ? "max-xl:hidden" : ""} flex gap-6 max-xl:gap-4 max-lg:hidden`}>
                {MenuData.map((item, idx) => (
                  <NavLink key={idx} to={item.path}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-5">

            <div className={`${isScrolled ? "w-[270px]!" : ""} h-9 w-[312px] max-xl:w-[270px] max-lg:hidden px-4 border border-[#fec80b] rounded-[40px] flex items-center justify-between duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d]`}>
              <input className="h-full w-full outline-hidden" type="text" placeholder="Поиск..." />
              <Search />
            </div>
            <Search width={'34px'} height={'34px'} className="hidden max-lg:flex" />
            <ShoppingCart width={"30px"} height={"30px"} className="cursor-pointer" />
            <Heart width={"30px"} height={"30px"} className="cursor-pointer" />
            
            {isScrolled && (
              <button onClick={openCallModal} className="w-[40px] h-[40px] bg-[#fec80b] rounded-full flex items-center justify-center cursor-pointer">
                  <img className="w-5! h-5!" src={Call} alt="Phone" />
              </button>
            )}

            <div ref={langDropRef} className="relative">
              <button 
                onClick={() => setLangDrop((prev) => !prev)} 
                className="w-10 h-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center bg-white"
              >
                <img className="w-full h-full object-cover" 
                  src={languages[i18n.language as keyof typeof languages]?.flag || rus} 
                  alt={i18n.language} 
                />
              </button>

              {langDrop && (
                <div className="absolute right-0 top-12 bg-white border border-gray-200 shadow-lg rounded-md p-2 flex flex-col gap-2 z-50">
                  <button 
                    onClick={() => changeLanguage('ru')} 
                    className={`w-20 h-10 border flex items-center justify-center gap-2 duration-200 hover:bg-[#e1e1e1] hover:rounded-lg ${i18n.language === 'ru' ? 'border-[#fec80b] border rounded-lg bg-[#fec80b] hover:bg-[#fec80b]' : 'border-transparent'}`}
                    title="Русский"
                  >
                    <img className="w-8 h-8 object-cover" src={rus} alt="Ru" />
                    <span>RUS</span>
                  </button>

                  <button 
                    onClick={() => changeLanguage('uz')} 
                    className={`w-20 h-10 border flex items-center justify-center gap-2 duration-200 hover:bg-[#e1e1e1] hover:rounded-lg ${i18n.language === 'uz' ? 'border-[#fec80b] border rounded-lg bg-[#fec80b] hover:bg-[#fec80b]' : 'border-transparent'}`}
                    title="O'zbekcha"
                  >
                    <img className="w-8 h-8 object-cover" src={uzb} alt="Uz" />
                    <span>UZB</span>
                  </button>

                  <button 
                    onClick={() => changeLanguage('en')} 
                    className={`w-20 h-10 border flex items-center justify-center gap-2 duration-200 hover:bg-[#e1e1e1] hover:rounded-lg ${i18n.language === 'en' ? 'border-[#fec80b] border rounded-lg bg-[#fec80b] hover:bg-[#fec80b]' : 'border-transparent'}`}
                    title="English"
                  >
                    <img className="w-8 h-8 object-cover" src={usa} alt="Us" />
                    <span>ENG</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      <CatalogModal catalog={catalog} catalog2={catalog2} catalog3={catalog3} closeCatalog={closeCatalog} isScrolled={isScrolled} />

      </header>

    </>
  );
};

export default Header;