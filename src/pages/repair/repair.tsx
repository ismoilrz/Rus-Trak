import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import repair1 from "../../assets/repair1.jpg";
import repair2 from "../../assets/repair2.jpg";

import repairMain from "../../assets/repairMain.jpg"
import repairMain1 from "../../assets/repairMain1.png"
import repairMain2 from "../../assets/repairMain2.jpg"
import repairMain3 from "../../assets/repairMain3.png"

import comp1 from "../../assets/comp1.jpg"
import comp2 from "../../assets/comp2.jpg"
import comp3 from "../../assets/comp3.jpg"
import comp4 from "../../assets/comp4.jpg"
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface RepairLiType {
  id: number,
  desc: string,
}

const RepairLi:RepairLiType[] = [
  {
    id: 1,
    desc: "Большая производственная база – позволяет одновременно выполнять несколько крупных заказов и обслуживать большое количество техники."
  },
  {
    id: 2,
    desc: "Вместительные цеха – обеспечивают удобство работы с крупногабаритными полуприцепами и комфорт для сотрудников."
  },
  {
    id: 3,
    desc: "Профессиональные мастера – специалисты с опытом и знаниями гарантируют качественный и точный ремонт."
  },
  {
    id: 4,
    desc: "Полный цикл производства – все работы выполняются на месте, от диагностики до финальной сборки, без привлечения сторонних подрядчиков."
  },
  {
    id: 5,
    desc: "Опыт 17 лет – долгий срок работы на рынке подтверждает надёжность и компетентность компании."
  }, 
  {
    id: 6,
    desc: "Гарантия на ремонт – обеспечивает уверенность в долговечности и качестве выполненных работ."
  }
]

const Repair = () => {

  const [repairForm, setRepairForm] = useState<boolean>(false);

  const openRepairForm = () => setRepairForm(true)
  const closeRepairForm = () => setRepairForm(false)

   useEffect(() => {
      const scrollClosed = repairForm;
  
      if (scrollClosed) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "";
      };
    }, [repairForm]);

  return (
    <div className="container max-xl:px-[3%]">
      <div>
        <h3 className="font-[500] text-[32px] py-5 max-md:text-[25px]">
          Ремонт шторных полуприцепов от компании «Рустрак» в Нижнем Новгороде
        </h3>
        <p className="text-[18px] max-w-[90%]">
          Логистическая сфера опирается на устойчивую работу прицепной техники.
          Ремонт шторных полуприцепов обеспечивает восстановление
          работоспособности конструкции после интенсивной эксплуатации. Наши
          мастера учитывают конструктивные особенности узлов и применяют
          проверенные методы обслуживания. Компания «Рустрак» в Нижнем Новгороде
          предлагает сервис, ориентированный на качество и долговечность
          оборудования. Своевременные технические мероприятия поддерживают
          стабильное состояние прицепов при интенсивных нагрузках. Надёжный
          подход к обслуживанию формирует уверенность в бесперебойной работе
          техники.
        </p>
        <div className="w-full flex max-lg:flex-col max-lg:items-center gap-5 justify-center py-6">
          <img className="w-[37%] max-lg:w-[620px] rounded-[4px]" src={repair1} alt="To" />
          <img className="w-[37%] max-lg:w-[620px] rounded-[4px]" src={repair2} alt="From" />
        </div>
        <div className="w-full flex justify-center">
          <button onClick={openRepairForm} className="px-5 py-2 bg-[#fec80b] rounded-[6px] text-lg font-bold duration-200 hover:opacity-[0.7]">
            Рассчитать стоимость ремонта
          </button>
        </div>
      </div>

      <div className="mt-3">
        <strong className="text-[22px]">Наши услуги</strong>
        <p  className="text-lg max-w-[90%] mt-3">
          Компания «Рустрак» выполняет полный ремонт полуприцепов в Нижнем
          Новгороде после повреждений или выхода из строя. Мы восстанавливаем
          конструкцию прицепа, исправляем каркас и боковые тенты, ремонтируем
          двери, замки и механизмы открывания, а также восстанавливаем пол и
          борта прицепа. Все работы выполняются с высокой точностью и
          соблюдением стандартов качества, что гарантирует долговечность
          восстановленных элементов.
        </p>
        <p className="text-lg"><b>Важно:</b> ремонт ходовой, двигателя, замена масел и плановое техническое обслуживание не производятся.</p>
        <div className='w-full max-lg:flex-col max-lg:items-center flex justify-center gap-5 py-10'>
          <ReactCompareSlider className='w-[45%] max-lg:w-[90%] max-sm:w-full h-[400px] rounded-[6px] shadow-[2px_2px_10px_#0005]'
            handle={
              <div className="w-[5px] relative h-full bg-[#fec80b] flex items-center justify-center shadow-md cursor-pointer">
                <div className="w-8 absolute h-8 bg-[#fec80b] rounded-full flex items-center justify-center shadow-lg border border-2 border-white text-white font-bold">
                  ↔
                </div>
              </div>
            }

            itemOne={<ReactCompareSliderImage className='object-cover w-full h-full' src={comp1} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage className='object-cover w-full h-full' src={comp2} alt="Image two" />}
          />

          <ReactCompareSlider className='w-[25%] max-lg:w-1/2 max-sm:w-full h-[400px] rounded-[6px] overflow-hidden shadow-[2px_2px_10px_#0005]'
            handle={
              <div className="w-[5px] relative h-full bg-[#fec80b] flex items-center justify-center shadow-md cursor-pointer">
                <div className="w-8 absolute h-8 bg-[#fec80b] rounded-full flex items-center justify-center shadow-lg border border-2 border-white text-white font-bold">
                  ↔
                </div>
              </div>
            }

            itemOne={<ReactCompareSliderImage className='object-cover w-full h-full' src={comp3} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage className='object-cover w-full h-full' src={comp4} alt="Image two" />}
          />
        </div>
        
        <div>
          <strong className='text-[22px]'>Преимущества компании «Рустрак»</strong>
          <ol className='flex flex-col gap-3 mt-3'>
            {RepairLi.map((rep, idx) => (
              <div key={idx} className='flex gap-4'>
                <span className='text-[#fec80b]'>♦</span>
                <li className='text-lg max-w-[90%]'>{rep.desc}</li>
              </div>
            ))}
          </ol>
        </div>

        <div>
          <div className='w-full pt-4 pb-6'>
            <img className='w-full' src={repairMain} alt="Image" />
          </div>
          <div className='flex w-full h-[300px] max-xl:h-auto'>
            <img className='w-1/3' src={repairMain1} alt="Image" />
            <img className='w-1/3' src={repairMain2} alt="Image" />
            <img className='w-1/3' src={repairMain3} alt="Image" />
          </div>
          <div className='w-full flex items-center justify-center py-6'>
            <button onClick={openRepairForm} className="px-5 py-2 bg-[#fec80b] rounded-[6px] text-lg font-bold duration-200 hover:opacity-[0.7]">
               Рассчитать стоимость ремонта
            </button>
          </div>
        </div>

        <div>
          <strong className='text-[22px]'>Качественный сервис для полуприцепов</strong>
          <p className='mt-3 text-lg max-w-[90%]'>
            Ремонт шторных полуприцепов помогает продлить срок службы техники и 
            сохранить её функциональность. Обратитесь к нашей команде, чтобы получить 
            надежное и аккуратное обслуживание. Компания «Рустрак» в Нижнем Новгороде 
            выполняет работы с вниманием к деталям и строгими стандартами качества. 
            Доверьте нам технические задачи и получите результат, который оправдает 
            ожидания. Запланируйте обслуживание заранее и убедитесь в удобстве нашего 
            сервиса. Для начала сотрудничества свяжитесь с нами любым удобным способом, 
            и мы поможем организовать все быстро и профессионально.
          </p>
        </div>
      </div>

      {repairForm && (
        <div onClick={closeRepairForm} className='flex items-center justify-center inset-0 fixed top-0 left-0 z-40 bg-[#0009] duration-200'>
          <div onClick={(e) => e.stopPropagation()} className='p-7 max-sm:w-[90%] relative bg-white flex flex-col items-center rounded-lg shadow-2xl'>
            <b className='text-[20px]'>Рассчитать стоимость ремонта</b>
            <p className='text-lg max-w-[480px] text-center mt-4'>Оставьте свои данные, и наш менеджер свяжется с вами для расчета стоимости.</p>
            <form className='w-full flex flex-col gap-4 mt-4'>
              <div className='flex flex-col'>
                <label className='text-[15px]'>Ваше имя<span className='text-red-600'>*</span></label>
                <input className='h-11 border border-[#a1a1a1] rounded-[4px] px-2' type="text" placeholder='Иван' />
              </div>
              <div className='flex flex-col'>
                <label className='text-[15px]'>Телефон<span className='text-red-600'>*</span></label>
                <input className='h-11 border border-[#a1a1a1] rounded-[4px] px-2' type="number" placeholder='+7 (___) ___-__-__' />
              </div>
              <button className='w-full h-11 font-bold text-lg rounded-[5px] bg-[#fec80b]'>Рассчитать стоимость</button>
            </form>

            <button onClick={closeRepairForm} className='absolute top-[10px] right-[10px]'><X /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Repair;
