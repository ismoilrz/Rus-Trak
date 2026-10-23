import { useMemo, useState } from "react";
import { Link } from "react-router-dom"
import { GaleriyaData } from "../../constants/data/galeriyaData";
import useFancybox from "../../shared/useFancyBox";

type Categoryes = 'cars' | 'production' | 'about' | 'exhibitions'

interface FilterBtns {
  label: string;
  value: Categoryes;
}

const Filter_Buttons:FilterBtns[] = [
  { label: "Автомобили", value: "cars" },
  { label: "Производство", value: "production" },
  { label: "О компании", value: "about" },
  { label: "Выставки", value: "exhibitions" }
]

const Galeriya = () => {

  const [fancyboxRef] = useFancybox({});
  const [category, setCategory] = useState<Categoryes>('cars')

  const filteredItems = useMemo(() => {
    return GaleriyaData.filter((item) => item.category === category);
  }, [category]);

  const getItemClass = (index: number) => {
    if (index === 4) {
      return "col-span-2 row-span-2 h-[500px] max-xl:h-[420px] max-lg:h-[200px] max-lg:row-span-1 max-lg:col-span-1";
    }
    if (index === 19) {
      return "col-span-2 row-span-2 h-[500px] max-xl:h-[420px] max-lg:h-[200px] max-lg:row-span-1 max-lg:col-span-1";
    }
    return "col-span-1 row-span-1 h-[240px] max-xl:h-[200px] max-sm:h-[120px]";
  };

  return (
    <section ref={fancyboxRef} className="container max-xl:px-[3%]">
      <div className="flex justify-between py-6">
        <h1 className="text-[32px] max-sm:leading-[120%] max-md:text-[26px] font-[500]">Фотогалерея производителя автоспецтехники РусТрак</h1>
        <Link to={'/video'}>
        <button className="px-[30px] max-lg:hidden py-2 rounded-[6px] border-2 border-[#fec80b] duration-200 hover:bg-[#fec80b] active:bg-[#fec80b]">
          Смотреть видео
        </button>
        </Link>
      </div>

      <div className="flex gap-4 max-sm:flex-wrap">
        {Filter_Buttons.map((btn) => {
          const isActive = category === btn.value
          return(
            <button className={`px-5 py-2 max-md:px-3 rounded-[4px] border border-[#a1a1a1] duration-200 hover:bg-[#fec80b] hover:border-[#fec80b] 
                    ${isActive ? "bg-[#fec80b] border-[#fec80b]" : ""}`}
                    onClick={() => setCategory(btn.value)}>
              {btn.label}
            </button>
            )
        })}
      </div>
      <div>
        <div>
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 auto-rows-[240px] max-xl:auto-rows-[200px] max-sm:auto-rows-[120px] mt-7">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`overflow-hidden border border-gray-300 shadow-sm ${getItemClass(index)}`}
              >
                <img
                data-fancybox="gallery"
                  src={item.img}
                  alt={`Galeriya ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-10 text-gray-500">Ma'lumot topilmadi</p>
        )}
      </div>
      </div>
    </section>
  )
}

export default Galeriya