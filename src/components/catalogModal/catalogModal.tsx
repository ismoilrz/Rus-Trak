import { Link } from "react-router-dom";
import { AboutMenuData, MediaMenuData, MenuData } from "../../constants/MenuData";

type CatalogProps = {
    catalog: boolean,
    catalog2: boolean,
    catalog3: boolean,
    closeCatalog: () => void,
}

const CatalogModal = ({ catalog, catalog2, catalog3, closeCatalog }: CatalogProps) => {
  // if (!catalog || catalog2 || catalog3) return null;

  return (
    <div className={`${catalog || catalog2 || catalog3 ? "flex" : "hidden"} cat absolute top-full left-0 w-full h-[100vh] bg-[#efefef] z-40 shadow-2xl`}>
        <div className="container pt-8 flex justify-between">
          <div className="flex justify-between w-1/2">
            <nav className="flex flex-col gap-3">
              <strong className="text-[22px] font-[800]">Категории</strong>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Шторные автомобили</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Краны-манипуляторы</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автотопливозаправщики</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автогидроподъёмники</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автоцистерны</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автоэвакуаторы</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автоэвакуаторы</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Изотермические фургоны</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Контейнеровозы</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Крюковые погрузчики</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Самосвалы</li></Link>
              <Link to={'/'}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">Автомобили ДОПОГ категория EXII</li></Link>
            </nav>
            <nav className="flex flex-col gap-3">
              <strong className="text-[22px] font-[800]">О нас</strong>
              {AboutMenuData.map((menu, idx) => (
                <Link to={menu.path} key={idx}><li onClick={closeCatalog} className="text-black duration-200 inline-block hover:text-[#fec80b]">{menu.label}</li></Link>
              ))}
            </nav>
          </div>
          <div className="flex justify-between w-1/3">
              <nav className="flex flex-col gap-3">
                <strong className="text-[22px] font-[800]">Медиа</strong>
                {MediaMenuData.map((menu, idx) => (
                  <Link key={idx} to={menu.path}><li onClick={closeCatalog} className="text-black duration-200 inline hover:text-[#fec80b]">{menu.label}</li></Link>
                ))}
              </nav>
              <nav className="flex flex-col gap-5">
                {MenuData.map((menu, idx) => (
                  <Link key={idx} to={menu.path}><b onClick={closeCatalog} className="text-[22px] font-[800] duration-200 hover:text-[#fec80b]">{menu.label}</b></Link>
                ))}
              </nav>
          </div>
        </div>
    </div>
  )
}

export default CatalogModal;