import React, { useState, useRef } from 'react'
import tr from '../../assets/truckImage-3gWCICr4.webp'
import { useTranslation } from 'react-i18next'

type AnyQuestionProps = {
  isGrayBack: boolean
}

const AnyQuestion = ({ isGrayBack }: AnyQuestionProps) => {
  const { t } = useTranslation();
  const [text, setText] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [textNull, setTextNull] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const phoneInputRef = useRef<HTMLInputElement>(null);

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

  const handleReset = () => {
    setIsSubmitted(false);
    setText('');
    setPhone('');
    setTextNull(false);
    setPhoneError(false);
  };

  return (
    <section className={`py-[60px] relative overflow-hidden duration-300 ${isSubmitted ? "bg-[#fec80b]" : "bg-[#F2F2F2]"} ${isGrayBack ? "mt-0" : "mt-10"}`}>
      <div className="container max-xl:px-[3%] max-lg:flex max-lg:flex-col max-lg:items-center relative z-10">
        
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center w-full">
            <h3 className="text-[42px] max-lg:text-[34px] font-[500] text-black mb-2">{t("any_question.success_title")}</h3>
            <p className="text-[18px] text-black mb-4 max-w-[30%]">
              {t("any_question.success_desc")}
            </p>
            <button 
              onClick={handleReset} 
              className="px-8 h-12 bg-black text-white rounded-[4px] font-[500] hover:opacity-[0.8] cursor-pointer duration-200"
            >
              {t("any_question.close")}
            </button>
          </div>
        ) : (
          <div className='max-lg:flex max-lg:flex-col max-lg:items-center w-full'>
            <h3 className="text-[42px] font-[500] max-lg:text-center max-lg:text-[34px]">{t("any_question.title")}</h3>
            <p className="text-[18px] max-lg:text-center">{t("any_question.subtitle")}</p>
            
            <form className="flex items-start gap-4 pt-9 max-lg:pt-5 pb-4 max-lg:flex-col max-lg:items-center max-lg:w-full">
              <div className="flex flex-col gap-1 max-lg:w-full">
                <label className={`${textNull ? "text-red-600" : "text-black"} text-[14px]`}>{t("any_question.name_label")}</label>
                <input 
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    setTextNull(false);
                  }}
                  className={`max-lg:w-full h-11 w-[294px] rounded-[4px] border ${textNull ? "border-red-600" : "border-black"} outline-hidden px-4`} 
                  type="text" 
                  placeholder={t("any_question.name_placeholder")} 
                />
                {textNull && (
                  <p className="text-[13px] text-red-600 mt-1">{t("any_question.name_error")}</p>
                )}
              </div>

              <div className="flex flex-col gap-1 max-lg:w-full">
                <label className={`${phoneError ? "text-red-600" : "text-black"} text-[14px]`}>{t("any_question.phone_label")}</label>
                <input 
                  ref={phoneInputRef}
                  value={phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handleKeyDown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`max-lg:w-full h-11 w-[294px] rounded-[4px] border ${phoneError ? "border-red-600" : "border-black"} outline-hidden px-4`} 
                  type="text" 
                  placeholder="+998" 
                />
                {phoneError && (
                  <p className="text-[13px] text-red-600 mt-1">{t("any_question.phone_error")}</p>
                )}
              </div>

              <button 
                onClick={handleSubBtn} 
                className="px-[30px] max-sm:w-full h-11 bg-[#fec80b] duration-200 rounded-[4px] hover:opacity-[0.7] cursor-pointer mt-[25px] max-lg:mt-2 font-[500]"
              >
                {t("any_question.submit_btn")}
              </button>
            </form>

            <p className="text-black/60 text-[14px] max-lg:text-center mt-2">
                {t("any_question.agreement")} <a className="text-purple-900 underline hover:no-underline" href="#">{t("any_question.agreement_link")}</a>
            </p>
          </div>
        )}
      </div>

      <img 
        className={`max-xl:hidden h-[98%] absolute top-3 left-[65%] ${isSubmitted ? "hidden" : "block"}`} 
        src={tr} 
        alt="Trak" 
      />
    </section>
  )
}

export default AnyQuestion