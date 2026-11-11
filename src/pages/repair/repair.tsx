import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import repair1 from "../../assets/repair1.jpg";
import repair2 from "../../assets/repair2.jpg";

import repairMain from "../../assets/repairMain.jpg";
import repairMain1 from "../../assets/repairMain1.png";
import repairMain2 from "../../assets/repairMain2.jpg";
import repairMain3 from "../../assets/repairMain3.png";

import comp1 from "../../assets/comp1.jpg";
import comp2 from "../../assets/comp2.jpg";
import comp3 from "../../assets/comp3.jpg";
import comp4 from "../../assets/comp4.jpg";
import { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Repair = () => {
  const { t } = useTranslation();
  const [repairForm, setRepairForm] = useState<boolean>(false);

  const [text, setText] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [textNull, setTextNull] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const phoneInputRef = useRef<HTMLInputElement>(null);

  const openRepairForm = () => setRepairForm(true);

  const closeRepairForm = () => {
    setRepairForm(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setText('');
      setPhone('');
      setTextNull(false);
      setPhoneError(false);
    }, 300);
  };

  useEffect(() => {
    if (repairForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [repairForm]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const cursorPosition = input.selectionStart || 0; 
    const rawValue = input.value.replace(/\D/g, ''); 
    const digits = rawValue.startsWith('998') ? rawValue.slice(3, 12) : rawValue.slice(0, 9);
    
    let formatted = '+998 (';
    for (let i = 0; i < 9; i++) {
      if (i === 2) formatted += ') ';
      if (i === 5) formatted += '-';
      if (i === 7) formatted += '-';
      
      formatted += digits[i] || '_'; 
    }
    
    setPhone(formatted);
    setPhoneError(false);

    setTimeout(() => {
      if (phoneInputRef.current) {
        phoneInputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleMouseEnter = () => {
    if (!phone) {
      setPhone('+998 (__) ___-__-__');
    }
  };

  const handleMouseLeave = () => {
    if (phone === '+998 (__) ___-__-__') {
      setPhone('');
    }
  };

  const handleFocus = () => {
    if (!phone) {
      setPhone('+998 (__) ___-__-__');
    }
  };

  const handleBlur = () => {
    const pureDigits = phone.replace(/\D/g, '').slice(3);
    if (pureDigits.length === 0) {
      setPhone('');
    }
  };

  const handleSubBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let hasError: boolean = false;

    if (text.trim() === '') {
      setTextNull(true);
      hasError = true;
    } else {
      setTextNull(false);
    }

    const pureDigits = phone.replace(/\D/g, '').slice(3);
    if (pureDigits.length < 9) {
      setPhoneError(true);
      hasError = true;
    } else {
      setPhoneError(false);
    }

    if (!hasError) {
      setIsSubmitted(true);
    }
  };

  const advantagesList = (t("repair_page.advantages", { returnObjects: true }) as string[]) || [];

  return (
    <div className="container max-xl:px-[3%]">
      <div>
        <h3 className="font-[500] text-[32px] py-5 max-md:text-[25px]">
          {t("repair_page.main_title")}
        </h3>
        <p className="text-[18px] max-w-[90%]">
          {t("repair_page.main_desc")}
        </p>
        <div className="w-full flex max-lg:flex-col max-lg:items-center gap-5 justify-center py-6">
          <img className="w-[37%] max-lg:w-[620px] rounded-[4px]" src={repair1} alt="To" />
          <img className="w-[37%] max-lg:w-[620px] rounded-[4px]" src={repair2} alt="From" />
        </div>
        <div className="w-full flex justify-center">
          <button onClick={openRepairForm} className="px-5 py-2 bg-[#fec80b] rounded-[6px] text-lg font-bold duration-200 hover:opacity-[0.7] cursor-pointer">
            {t("repair_page.calc_btn")}
          </button>
        </div>
      </div>

      <div className="mt-3">
        <strong className="text-[22px]">{t("repair_page.services_title")}</strong>
        <p className="text-lg max-w-[90%] mt-3">
          {t("repair_page.services_desc")}
        </p>
        <p className="text-lg"><b>{t("repair_page.important")}</b> {t("repair_page.important_desc")}</p>
        
        <div className='w-full max-lg:flex-col max-lg:items-center flex justify-center gap-5 py-10'>
          <ReactCompareSlider className='w-[45%] max-lg:w-[90%] max-sm:w-full h-[400px] rounded-[6px] shadow-[2px_2px_10px_#0005]'
            handle={
              <div className="w-[5px] relative h-full bg-[#fec80b] flex items-center justify-center shadow-md cursor-pointer">
                <div className="w-8 absolute h-8 bg-[#fec80b] rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white font-bold">
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
                <div className="w-8 absolute h-8 bg-[#fec80b] rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white font-bold">
                  ↔
                </div>
              </div>
            }
            itemOne={<ReactCompareSliderImage className='object-cover w-full h-full' src={comp3} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage className='object-cover w-full h-full' src={comp4} alt="Image two" />}
          />
        </div>
        
        <div>
          <strong className='text-[22px]'>{t("repair_page.advantages_title")}</strong>
          <ol className='flex flex-col gap-3 mt-3'>
            {advantagesList.map((desc, idx) => (
              <div key={idx} className='flex gap-4'>
                <span className='text-[#fec80b]'>♦</span>
                <li className='text-lg max-w-[90%]'>{desc}</li>
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
            <button onClick={openRepairForm} className="px-5 py-2 bg-[#fec80b] rounded-[6px] text-lg font-bold duration-200 hover:opacity-[0.7] cursor-pointer">
              {t("repair_page.calc_btn")}
            </button>
          </div>
        </div>

        <div>
          <strong className='text-[22px]'>{t("repair_page.quality_title")}</strong>
          <p className='mt-3 text-lg max-w-[90%]'>
            {t("repair_page.quality_desc")}
          </p>
        </div>
      </div>

      {repairForm && (
        <div onClick={closeRepairForm} className='flex items-center justify-center inset-0 fixed top-0 left-0 z-40 bg-[#0009] duration-200'>
          <div onClick={(e) => e.stopPropagation()} className={`p-7 w-[480px] min-h-[50%] max-sm:w-[90%] relative flex flex-col items-center rounded-lg shadow-2xl duration-300 ${isSubmitted ? "bg-[#fec80b]" : "bg-white"}`}>
            
            <button onClick={closeRepairForm} className='absolute top-[10px] right-[10px] cursor-pointer'><X /></button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-6 text-center w-full">
                <h3 className="text-[32px] font-[500] text-black mb-3">{t("repair_page.form.success_title")}</h3>
                <p className="text-black mb-6 text-lg">{t("repair_page.form.success_desc")}</p>
                <button 
                  onClick={closeRepairForm} 
                  className="py-3 px-8 w-[60%] rounded-[4px] bg-black text-white duration-200 hover:bg-transparent hover:text-black border-2 border-black font-bold"
                >
                  {t("repair_page.form.close")}
                </button>
              </div>
            ) : (
              <>
                <b className='text-[20px] text-center'>{t("repair_page.form.title")}</b>
                <p className='text-base text-gray-600 text-center mt-2'>{t("repair_page.form.subtitle")}</p>
                
                <form className='w-full flex flex-col gap-4 mt-4'>
                  <div className='flex flex-col gap-1'>
                    <label className={`${textNull ? "text-red-500" : "text-black"} text-[15px]`}>{t("repair_page.form.name_label")} <span className='text-red-600'>*</span></label>
                    <input 
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                        setTextNull(false);
                      }}
                      className={`h-11 border ${textNull ? "border-red-500" : "border-[#a1a1a1]"} rounded-[4px] px-3 bg-white outline-none`} 
                      type="text" 
                      placeholder={t("repair_page.form.name_placeholder")} 
                    />
                    {textNull && <p className="text-[13px] text-red-500">{t("repair_page.form.name_error")}</p>}
                  </div>

                  <div className='flex flex-col gap-1'>
                    <label className={`${phoneError ? "text-red-500" : "text-black"} text-[15px]`}>{t("repair_page.form.phone_label")} <span className='text-red-600'>*</span></label>
                    <input 
                      ref={phoneInputRef}
                      value={phone}
                      onChange={handlePhoneChange}
                      onKeyDown={handleKeyDown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`h-11 border ${phoneError ? "border-red-500" : "border-[#a1a1a1]"} rounded-[4px] px-3 bg-white outline-none`} 
                      type="text" 
                      placeholder='+998' 
                    />
                    {phoneError && <p className="text-[13px] text-red-500">{t("repair_page.form.phone_error")}</p>}
                  </div>

                  <button onClick={handleSubBtn} className='w-full h-11 font-bold text-lg rounded-[5px] bg-[#fec80b] hover:opacity-[0.8] cursor-pointer duration-200 mt-2'>
                    {t("repair_page.form.submit_btn")}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
  </div>
  );
};

export default Repair;