import { Collapse } from 'antd';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Vacancies = () => {

  const [vacancies, setVacancies] = useState<boolean>(false)
  const openVacancies = () => setVacancies(true)
  const closeVacancies = () => setVacancies(false)

  useEffect(() => {
      const scrollClosed = vacancies;
  
      if (scrollClosed) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "";
      };
    }, [vacancies]);

  return (
    <section className="container pt-7 max-xl:px-[3%]">
      <Collapse
      size="large"
      items={[
        { 
          key: '1', 
          label: 'Автоэлектрик', 
          children: (
            <>
              <span className='text-lg max-sm:text-[16px] font-[500]'>Обязанности:</span>
              <ol className='mb-7 mt-2'>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>электромонтаж осветительного оборудования</li>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>монтаж электрооборудования и надстроек на спецавтомобили</li>
              </ol>
              <span className='text-lg max-sm:text-[16px] font-[500]'>Требования:</span>
              <ol className='mt-2 mb-7'>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>опыт работы приветствуется</li>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>желание обучаться новому</li>
              </ol>
              <span className='text-lg max-sm:text-[16px] font-[500]'>Условия:</span>
              <ol className='mt-2'>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>желание обучаться новому</li>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>полный соцпакет</li>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>отапливаемый цех, хорошие бытовые условия</li>
                <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>предоставляем обучение по данному направлению</li>
              </ol>
              <button onClick={openVacancies} className='px-7 py-2.5 mt-6 ml-10 duration-200 hover:opacity-[0.8] bg-[#fec80b] rounded-[4px]'>Откликнуться</button>
            </>
          ),
        }]}
    />
    {vacancies && (
      <div onClick={closeVacancies} className='fixed inset-0 z-50 flex items-center justify-center bg-[#0009]'>
        <div onClick={(e) => e.stopPropagation()} className="bg-white w-[472px] max-sm:w-[90%] py-10 flex flex-col items-center rounded-lg relative">
            <button onClick={closeVacancies}><X width={'30px'} height={'30px'} className="absolute top-3 right-3" /></button>
            <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black">Оставить заявку</h3>
            <p className="max-w-[90%] max-sm:text-center">на вакансию «Автоэлектрик»</p>
            <form className="w-[70%] py-12 max-sm:py-8 flex flex-col gap-3 max-sm:w-[80%]">
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
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">Ссылка на резюме *</label>
                    <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="number" placeholder="https://..." />
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
                    <button className="py-3 rounded-[4px] bg-[#fec80b] w-[70%] duration-200 hover:opacity-[0.7]">Оставить заявку</button>
        </div>
      </div>
    )}
    
    </section>
  )
}

export default Vacancies