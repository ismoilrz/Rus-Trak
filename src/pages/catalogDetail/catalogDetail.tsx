import { useParams } from "react-router-dom";
import { catalogConfig } from "../../constants/catalogData/catalogConfig";
import useFancybox from "../../shared/useFancyBox";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CatalogDetail = () => {
  const [catalogForm, setCatalogForm] = useState<boolean>(false)
  const openCatForm = () => setCatalogForm(true)
  const closeCatalogForm = () => setCatalogForm(false)
  const { selectedCatalog, slug } = useParams<{ selectedCatalog: string; slug: string }>();

  useEffect(() => {
      const scrollClosed = catalogForm;
  
      if (scrollClosed) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "";
      };
    }, [catalogForm]);

  const categoryData = selectedCatalog ? catalogConfig[selectedCatalog as keyof typeof catalogConfig] : undefined;

  const trak = categoryData?.trak?.find((p) => p.slug === slug);

  const fancyboxRef = useFancybox({});

  if (!trak) {
    return (
      <div className="p-5">
        <h2>Товар не найден</h2>
      </div>
    );
  }

  return (
    <div ref={fancyboxRef} className="container max-xl:px-[3%] pb-10">
      <h1 className="text-3xl max-md:text-[26px] max-sm:text-[22px] font-medium py-6">{trak.title}</h1>
      <div className="pt-3 flex justify-between gap-8 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] rounded-xl overflow-hidden">
          <a data-fancybox="gallery" href={trak.img}>
            <img className="w-full h-full object-cover" src={trak.img} alt="Trak-image" />
          </a>
        </div>
        <div className="w-[30%] max-lg:w-full">
          <h4 className="text-3xl font-medium text-center max-lg:text-start">{trak.price}</h4>
          <div className="w-full flex gap-4 my-3">
            <button className="w-full max-lg:w-[200px] max-sm:w-auto max-sm:px-2 py-2 border border-transparent bg-[#fec80b] duration-200 rounded-md hover:border-[#fec80b] hover:bg-transparent">Добавить в корзину</button>
            <button onClick={openCatForm} className="w-full max-lg:w-[200px] max-sm:w-auto max-sm:px-2 py-2 border border-[#fec80b] bg-transparent duration-200 rounded-md hover:bg-[#fec80b]">Получить КП</button>
          </div>
          <div className="flex max-lg:hidden justify-between w-full pt-2 py-3">
            <div className="flex flex-col items-start gap-2">
              {trak.descKey.map((item) => (
                <p className="whitespace-nowrap max-xl:whitespace-normal">{item}</p>
              ))}
            </div>
            <div className="flex flex-col items-end gap-2">
              {trak.descValue.map((item) => (
                <p className="whitespace-nowrap max-xl:whitespace-normal text-end">{item}</p>
              ))}
            </div>
          </div>
            <a className="underline max-lg:hidden text-[#a1a1a1]" href="#">Смотреть все характеристики</a>
        </div>
      </div>

      {trak.descImg && (
        <div className="w-full h-auto pt-10">
        <img className="w-full" src={trak.descImg} alt="Image" />
      </div>
      )}
      
      <div>
        <h3 className="text-3xl font-medium py-10">Характеристики</h3>
        <div className="overflow-hidden rounded-xl border border-[#a1a1a1]">
          <table className="w-full border-collapse text-black">
            <thead>
              <tr className="border-b border-[#a1a1a1] bg-[#fec80b]">
                <th colSpan={2} className="h-16 px-4 text-center text-lg font-medium">
                  {trak.paramLabel}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[#a1a1a1]">
                <td className="p-3 font-semibold border-r border-gray-300 w-1/2">Базовое шасси</td>
                <td className="p-3 w-1/2 text-center">{trak.parametrs[0]}</td>
              </tr>
              <tr className="border-b border-[#a1a1a1]">
                <td className="p-3 font-semibold border-r border-gray-300 w-1/2">Двигатель</td>
                <td className="p-3 w-1/2 text-center">{trak.parametrs[1]}</td>
              </tr>
              <tr className="border-b border-[#a1a1a1]">
                <td className="p-3 font-semibold border-r border-gray-300 w-1/2">КПП</td>
                <td className="p-3 w-1/2 text-center">{trak.parametrs[2]}</td>
              </tr>
              <tr className="border-b border-[#a1a1a1]">
                <td className="p-3 font-semibold border-r border-gray-300 w-1/2">Колесная база, мм</td>
                <td className="p-3 w-1/2 text-center">{trak.parametrs[3]}</td>
              </tr>
              <tr className="border-b border-[#a1a1a1]">
                <td className="p-3 font-semibold border-r border-gray-300 w-1/2">Габаритные размеры надстройки, мм</td>
                <td className="p-3 w-1/2 text-center">{trak.parametrs[4]}</td>
              </tr>
              <tr className="border-b border-[#a1a1a1]">
                <td className="p-3 font-semibold border-r border-gray-300 w-1/2">Основание бортовой платформы</td>
                <td className="p-3 w-1/2 text-center">{trak.parametrs[5]}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border-r border-[#a1a1a1] w-1/2">Пол</td>
                <td className="p-3 w-1/2 text-center">{trak.parametrs[6]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {catalogForm && (
              <div onClick={closeCatalogForm} className="fixed top-0 left-0 inset-0 z-50 bg-[#0009] flex items-center justify-center">
                <div onClick={(e) => e.stopPropagation()} className="bg-white w-[500px] max-sm:w-[90%] py-15 flex flex-col items-center rounded-lg relative">
                  <button onClick={closeCatalogForm}><X  width={'30px'} height={'30px'} className="absolute top-3 right-3" /></button>
                  <h3 className="text-[24px] text-center max-sm:text-[20px] font-[500] text-black">Получить коммерческое предложение</h3>
                  <form className="w-[70%] py-12 max-sm:py-6! max-sm:py-8 flex flex-col gap-3 max-sm:w-[80%]">
                      <div className="flex flex-col gap-1">
                          <label className="text-[14px]">Ваше имя *</label>
                          <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="Имя" />
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-[14px]">E-mail *</label>
                          <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="your@mail.com" />
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-[14px]">Телефон *</label>
                          <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="number" placeholder="+998" />
                      </div>
                      <div className="flex items-center">
                          <div className="checkbox-wrapper-33">
                              <label className="checkbox">
                                  <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  <span className="checkbox__symbol">
                                  <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 14l8 7L24 7"></path>
                                  </svg>
                                  </span>
                              </label>
                          </div>
                          <p className="text-[14px] leading-[110%] text-[#a1a1a1]">Я согласен <a className="text-purple-800" href="#">на обработку персональных данных</a></p>
                      </div>
                  </form>
                          <button className="py-3 rounded-[4px] bg-[#fec80b] w-[70%] duration-200 hover:opacity-[0.7]">Получить КП</button>
                     
              </div>
              </div>
            )}
    </div>
  );
};

export default CatalogDetail;