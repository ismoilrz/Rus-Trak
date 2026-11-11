import { Collapse } from 'antd';
import { X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Vacancies = () => {
  const { t } = useTranslation();
  const [vacancies, setVacancies] = useState<boolean>(false);
  
  // Form state'lari
  const [text, setText] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [resume, setResume] = useState<string>('');
  
  const [textNull, setTextNull] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [resumeError, setResumeError] = useState<boolean>(false);
  
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<boolean>(false);
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const phoneInputRef = useRef<HTMLInputElement>(null);

  const openVacancies = () => setVacancies(true);
  
  const closeVacancies = () => {
    setVacancies(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setText('');
      setEmail('');
      setPhone('');
      setResume('');
      setTextNull(false);
      setEmailError(false);
      setPhoneError(false);
      setResumeError(false);
      setIsChecked(false);
      setCheckboxError(false);
    }, 300);
  };

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

    // Ism
    if (text.trim() === '') {
      setTextNull(true);
      hasError = true;
    } else {
      setTextNull(false);
    }

    // E-mail
    if (!email.includes('@') || email.trim() === '') {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    const pureDigits = phone.replace(/\D/g, '').slice(3);
    if (pureDigits.length < 9) {
      setPhoneError(true);
      hasError = true;
    } else {
      setPhoneError(false);
    }

    if (resume.trim() === '') {
      setResumeError(true);
      hasError = true;
    } else {
      setResumeError(false);
    }

    if (!isChecked) {
      setCheckboxError(true);
      hasError = true;
    } else {
      setCheckboxError(false);
    }

    if (!hasError) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="container pt-7 max-xl:px-[3%]">
      <Collapse
        size="large"
        items={[
          { 
            key: '1', 
            label: t("vacancies_page.electrician"), 
            children: (
              <>
                <span className='text-lg max-sm:text-[16px] font-[500]'>{t("vacancies_page.responsibilities")}</span>
                <ol className='mb-7 mt-2'>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.resp1")}</li>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.resp2")}</li>
                </ol>
                <span className='text-lg max-sm:text-[16px] font-[500]'>{t("vacancies_page.requirements")}</span>
                <ol className='mt-2 mb-7'>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.req1")}</li>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.req2")}</li>
                </ol>
                <span className='text-lg max-sm:text-[16px] font-[500]'>{t("vacancies_page.conditions")}</span>
                <ol className='mt-2'>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.cond1")}</li>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.cond2")}</li>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.cond3")}</li>
                  <li className='list-disc! ml-10 max-sm:ml-8 max-sm:text-[14px] text-[17px]'>{t("vacancies_page.cond4")}</li>
                </ol>
                <button onClick={openVacancies} className='px-7 py-2.5 mt-6 ml-10 duration-200 hover:opacity-[0.8] bg-[#fec80b] rounded-[4px] cursor-pointer'>{t("vacancies_page.respond")}</button>
              </>
            ),
          }
        ]}
      />

      {vacancies && (
        <div onClick={closeVacancies} className='fixed inset-0 z-50 flex items-center justify-center bg-[#0009]'>
          <div onClick={(e) => e.stopPropagation()} className={`w-[472px] min-h-[85%] max-sm:w-[90%] py-10 px-6 flex flex-col items-center rounded-lg relative duration-300 ${isSubmitted ? "bg-[#fec80b]" : "bg-white"}`}>
            
            <button onClick={closeVacancies}>
              <X width={'30px'} height={'30px'} className="absolute top-3 right-3 cursor-pointer text-black" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 mt-[30%] text-center w-full">
                <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black mb-3">{t("vacancies_page.success_title")}</h3>
                <p className="text-black mb-6">{t("vacancies_page.success_desc")}</p>
                <button 
                  onClick={closeVacancies} 
                  className="py-3 w-[60%] rounded-[4px] bg-black border-2 border-black text-white duration-200 hover:bg-transparent hover:text-black font-medium"
                >
                  {t("vacancies_page.close")}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black">{t("vacancies_page.form_title")}</h3>
                <p className="max-w-[90%] max-sm:text-center text-gray-600 mb-2">{t("vacancies_page.form_subtitle")}</p>
                
                <form className="w-[85%] py-6 flex flex-col gap-3 max-sm:w-[90%]">
                  {/* Ism */}
                  <div className="flex flex-col gap-1">
                    <label className={`${textNull ? "text-red-500" : "text-black"} text-[14px]`}>{t("vacancies_page.name_label")}</label>
                    <input 
                      value={text} 
                      onChange={(e) => {setText(e.target.value); setTextNull(false)}}
                      className={`rounded-[4px] border ${textNull ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder={t("vacancies_page.name_placeholder")} 
                    />
                    {textNull && <p className="text-[13px] text-red-500">{t("vacancies_page.name_error")}</p>}
                  </div>

                  {/* E-mail */}
                  <div className="flex flex-col gap-1">
                    <label className={`${emailError ? "text-red-500" : "text-black"} text-[14px]`}>{t("vacancies_page.email_label")}</label>
                    <input 
                      value={email} 
                      onChange={(e) => {setEmail(e.target.value); setEmailError(false)}}
                      className={`rounded-[4px] border ${emailError ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder="your@mail.com" 
                    />
                    {emailError && <p className="text-[13px] text-red-500">{t("vacancies_page.email_error")}</p>}
                  </div>

                  {/* Telefon */}
                  <div className="flex flex-col gap-1">
                    <label className={`${phoneError ? "text-red-500" : "text-black"} text-[14px]`}>{t("vacancies_page.phone_label")}</label>
                    <input 
                      ref={phoneInputRef}
                      value={phone} 
                      onChange={handlePhoneChange}
                      onKeyDown={handleKeyDown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`rounded-[4px] border ${phoneError ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder="+998" 
                    />
                    {phoneError && <p className="text-[13px] text-red-500">{t("vacancies_page.phone_error")}</p>}
                  </div>

                  {/* Rezume */}
                  <div className="flex flex-col gap-1">
                    <label className={`${resumeError ? "text-red-500" : "text-black"} text-[14px]`}>{t("vacancies_page.resume_label")}</label>
                    <input 
                      value={resume}
                      onChange={(e) => {setResume(e.target.value); setResumeError(false)}}
                      className={`rounded-[4px] border ${resumeError ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder="https://..." 
                    />
                    {resumeError && <p className="text-[13px] text-red-500">{t("vacancies_page.resume_error")}</p>}
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="checkbox-wrapper-33">
                      <label className="checkbox">
                        <input 
                          className="checkbox__trigger visuallyhidden" 
                          type="checkbox" 
                          checked={isChecked}
                          onChange={(e) => {
                            setIsChecked(e.target.checked);
                            if (e.target.checked) setCheckboxError(false);
                          }}
                        />
                        <span className="checkbox__symbol">
                          <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 14l8 7L24 7"></path>
                          </svg>
                        </span>
                      </label>
                    </div>
                    <p className={`text-[14px] leading-[110%] ${checkboxError ? "text-red-500" : "text-[#a1a1a1]"}`}>
                      {t("vacancies_page.consent_text")} <a className="text-purple-800" href="#">{t("vacancies_page.consent_link")}</a>
                    </p>
                  </div>
                </form>

                <button onClick={handleSubBtn} className="py-3 rounded-[4px] bg-[#fec80b] w-[85%] duration-200 hover:opacity-[0.7] cursor-pointer font-medium">{t("vacancies_page.submit_btn")}</button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Vacancies;