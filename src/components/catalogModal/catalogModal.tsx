import { Link } from "react-router-dom";
import { AboutMenuData, MediaMenuData, MenuData } from "../../constants/MenuData";
import { useState } from "react";

type CatalogProps = {
    catalog: boolean,
    catalog2: boolean,
    catalog3: boolean,
    isScrolled: boolean,
    closeCatalog: () => void,
}

const CatalogModal = ({ catalog, catalog2, catalog3, closeCatalog, isScrolled }: CatalogProps) => {
  // if (!catalog || catalog2 || catalog3) return null;

  const [catalogMenu1, setCatalogMenu1] = useState<boolean>(false)
  const [catalogMenu2, setCatalogMenu2] = useState<boolean>(false)
  const [catalogMenu3, setCatalogMenu3] = useState<boolean>(false)

  return (
    <div className={`${catalog || catalog2 || catalog3 ? "flex" : "hidden"} ${isScrolled ? "h-[93vh]! max-md:h-[95vh]!" : "h-[86vh]!"} max-md:h-[90vh]! flex-col justify-between catalog cat absolute top-full left-0 w-full bg-[#efefef] z-40 max-xl:overflow-y-auto`}>
        <div className="container pt-8 flex justify-between max-xl:px-[3%] max-md:flex-col max-md:justify-start max-sm:gap-4 max-md:gap-5 max-xl:pb-20">
          <div className="flex justify-between w-1/2 max-lg:w-[60%] max-md:w-[85%] max-sm:flex-col max-sm:gap-4">
            <nav className="flex flex-col gap-5">
              <strong className="text-[22px] font-[800] max-sm:hidden">Категории</strong>
              <div className="flex flex-col gap-3 max-sm:hidden">
                <Link to={'/catalog/Curtain-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Шторные автомобили</li></Link>
                <Link to={'/catalog/Crane-manipulators'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Краны-манипуляторы</li></Link>
                <Link to={'/catalog/Fuel-bowsers'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автотопливозаправщики</li></Link>
                <Link to={'/catalog/Aerial-work-platforms'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автогидроподъёмники</li></Link>
                <Link to={'/catalog/Tanker-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автоцистерны</li></Link>
                <Link to={'/catalog/Tow-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автоэвакуаторы</li></Link>
                <Link to={'/catalog/Insulated-vans'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Изотермические фургоны</li></Link>
                <Link to={'/catalog/Container-chassis-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Контейнеровозы</li></Link>
                <Link to={'/catalog/Hook-lifts'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Крюковые погрузчики</li></Link>
                <Link to={'/catalog/Dump-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Самосвалы</li></Link>
                <Link to={'/catalog/ADR-EXII-category-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автомобили ДОПОГ категория EXII</li></Link>
            </div>
              
              <button onClick={() => setCatalogMenu1((c) => !c)} className="text-[22px] font-[800] hidden max-sm:flex items-center gap-2">
                Категории 
                <span className="text-[#fec80b] text-[16px] inline-block transition-transform duration-200" style={{transform: catalogMenu1 ? "rotate(-180deg)" : "rotate(0deg)"}}>▼</span>
              </button>

              {catalogMenu1 && (
                <div className="flex flex-col gap-3 max-sm:hidden">
                    <Link to={'/catalog/Curtain-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Шторные автомобили</li></Link>
                    <Link to={'/catalog/Crane-manipulators'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Краны-манипуляторы</li></Link>
                    <Link to={'/catalog/Fuel-bowsers'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автотопливозаправщики</li></Link>
                    <Link to={'/catalog/Aerial-work-platforms'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автогидроподъёмники</li></Link>
                    <Link to={'/catalog/Tanker-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автоцистерны</li></Link>
                    <Link to={'/catalog/Tow-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автоэвакуаторы</li></Link>
                    <Link to={'/catalog/Insulated-vans'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Изотермические фургоны</li></Link>
                    <Link to={'/catalog/Container-chassis-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Контейнеровозы</li></Link>
                    <Link to={'/catalog/Hook-lifts'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Крюковые погрузчики</li></Link>
                    <Link to={'/catalog/Dump-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Самосвалы</li></Link>
                    <Link to={'/catalog/ADR-EXII-category-trucks'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автомобили ДОПОГ категория EXII</li></Link>
                </div>
                )}
              
            </nav>
            <nav className="flex flex-col gap-5">
              <strong className="text-[22px] font-[800] max-sm:hidden">О нас</strong>
              <div className="flex flex-col gap-3 max-sm:hidden">
                {AboutMenuData.map((menu, idx) => (
                  <Link to={menu.path} key={idx}><li onClick={closeCatalog} className="text-black duration-200 inline-block hover:text-[#fec80b]">{menu.label}</li></Link>
                ))}
              </div>

              <button onClick={() => setCatalogMenu2((c) => !c)} className="text-[22px] font-[800] hidden max-sm:flex items-center gap-2">
                О нас 
                <span className="text-[#fec80b] text-[16px] inline-block transition-transform duration-200" style={{transform: catalogMenu2 ? "rotate(-180deg)" : "rotate(0deg)"}}>▼</span>
              </button>

              {catalogMenu2 && (
                <div className="flex-col gap-3 overflow-hidden catMenAni2 hidden max-sm:flex">
                  {AboutMenuData.map((menu1, idx) => (
                    <Link key={idx} to={menu1.path}><li onClick={closeCatalog} className="text-black duration-200 inline-block hover:text-[#fec80b]">{menu1.label}</li></Link>
                  ))}
                </div>
              )}
            </nav>
          </div>

          <div className="flex max-lg:flex-col max-lg:justify-start max-lg:gap-10 max-sm:gap-4 max-lg:w-1/3 max-md:w-full justify-between w-[40%]">
              <nav className="flex flex-col gap-5">
                <strong className="text-[22px] font-[800] max-sm:hidden">Медиа</strong>
                <div className="flex flex-col gap-3 max-sm:hidden">
                  {MediaMenuData.map((menu, idx) => (
                    <Link key={idx} to={menu.path}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">{menu.label}</li></Link>
                  ))}
                </div>

                <button onClick={() => setCatalogMenu3((c) => !c)} className="text-[22px] font-[800] hidden max-sm:flex items-center gap-2">
                  Медиа 
                  <span className="text-[#fec80b] text-[16px] inline-block transition-transform duration-200" style={{transform: catalogMenu3 ? "rotate(-180deg)" : "rotate(0deg)"}}>▼</span>
                </button>

                {catalogMenu3 && (
                  <div className="flex-col gap-3 overflow-hidden catMenAni3 hidden max-sm:flex">
                    {MediaMenuData.map((menu2, idx) => (
                      <Link key={idx} to={menu2.path}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">{menu2.label}</li></Link>
                     ))}
                  </div>
                )}

              </nav>
              <nav className="flex flex-col gap-5">
                {MenuData.map((menu, idx) => (
                  <Link key={idx} to={menu.path}><b onClick={closeCatalog} className="text-[22px] font-[800] duration-200 hover:text-[#fec80b]">{menu.label}</b></Link>
                ))}
              </nav>
          </div>
        </div>

        <div className="hidden max-sm:flex flex-col px-[3%] pb-11 max-md:pb-17">
          <p className="text-[#a1a1a1]">г. Нижний Новгород ул. Торфяная, 35</p>
          <div className="text-[#a1a1a1] mt-2 flex flex-col">
            <p>Для регионов: 8 (800)-511-05-25</p>
            <p>Нижний Новгород: 8 (831) 235-26-16</p>
          </div>
        </div>
    </div>
  )
}

export default CatalogModal;