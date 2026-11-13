import { useParams } from "react-router-dom";
import { catalogConfig } from "../../constants/catalogData/catalogConfig";
import useFancybox from "../../shared/useFancyBox";
import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const CatalogDetail = () => {
  const { t } = useTranslation();
  const [catalogForm, setCatalogForm] = useState<boolean>(false);
  const openCatForm = () => setCatalogForm(true);
  
  const [text, setText] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  const [textNull, setTextNull] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<boolean>(false);
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const phoneInputRef = useRef<HTMLInputElement>(null);

  const closeCatalogForm = () => {
    setCatalogForm(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setText('');
      setEmail('');
      setPhone('');
      setTextNull(false);
      setEmailError(false);
      setPhoneError(false);
      setIsChecked(false);
      setCheckboxError(false);
    }, 300);
  };

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

  const categoryData = selectedCatalog ? catalogConfig[selectedCatalog as keyof typeof catalogConfig] : undefined;
  const trak = categoryData?.trak?.find((p) => p.slug === slug);
  const fancyboxRef = useFancybox({});

  if (!trak) {
    return (
      <div className="p-5">
        <h2>{t("detail.not_found")}</h2>
      </div>
    );
  }

  const descKeys = Array.isArray(trak.descKey)
    ? trak.descKey
    : (t(trak.descKey, { returnObjects: true }) as string[]);

  const descValues = Array.isArray(trak.descValue)
    ? trak.descValue
    : (t(trak.descValue, { returnObjects: true }) as string[]);

  const parametrsList = Array.isArray(trak.parametrs)
    ? trak.parametrs
    : (t(trak.parametrs, { returnObjects: true }) as string[]);

  const tableLabels = t("detail.table_labels", { returnObjects: true }) as string[];

  return (
    <div ref={fancyboxRef} className="container max-xl:px-[3%] pb-10">
      <h1 className="text-3xl max-md:text-[26px] max-sm:text-[22px] font-medium py-6">{t(trak.title)}</h1>
      <div className="pt-3 flex justify-between gap-8 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] rounded-xl overflow-hidden">
          <a data-fancybox="gallery" href={trak.img}>
            <img className="w-full h-full object-cover" src={trak.img} alt="Trak-image" />
          </a>
        </div>
        <div className="w-[30%] max-lg:w-full">
          <h4 className="text-3xl font-medium text-center max-lg:text-start">{t(trak.price)}</h4>
          <div className="w-full flex gap-4 my-3">
            <button className="w-full max-lg:w-[200px] max-sm:w-auto max-sm:px-2 py-2 border border-transparent bg-[#fec80b] duration-200 rounded-md hover:border-[#fec80b] hover:bg-transparent cursor-pointer">
              {t("detail.add_to_cart")}
            </button>
            <button onClick={openCatForm} className="w-full max-lg:w-[200px] max-sm:w-auto max-sm:px-2 py-2 border border-[#fec80b] bg-transparent duration-200 rounded-md hover:bg-[#fec80b] cursor-pointer">
              {t("detail.get_kp")}
            </button>
          </div>
          <div className="flex max-lg:hidden justify-between w-full pt-2 py-3">
            <div className="flex flex-col items-start gap-2">
              {descKeys.map((item, index) => (
                <p key={index} className="whitespace-nowrap max-xl:whitespace-normal">{item}</p>
              ))}
            </div>
            <div className="flex flex-col items-end gap-2">
              {descValues.map((item, index) => (
                <p key={index} className="whitespace-nowrap max-xl:whitespace-normal text-end">{item}</p>
              ))}
            </div>
          </div>
          <a className="underline max-lg:hidden text-[#a1a1a1]" href="#">{t("detail.all_specs")}</a>
        </div>
      </div>

      {trak.descImg && (
        <div className="w-full h-auto pt-10">
          <img className="w-full" src={trak.descImg} alt="Image" />
        </div>
      )}
      
      <div>
        <h3 className="text-3xl font-medium py-10">{t("detail.specs_title")}</h3>
        <div className="overflow-hidden rounded-xl border border-[#a1a1a1]">
          <table className="w-full border-collapse text-black">
            <thead>
              <tr className="border-b border-[#a1a1a1] bg-[#fec80b]">
                <th colSpan={2} className="h-16 px-4 text-center text-lg font-medium">
                  {t(trak.paramLabel)}
                </th>
              </tr>
            </thead>
            <tbody>
              {parametrsList.map((param, index) => (
                <tr key={index} className="border-b border-[#a1a1a1]">
                  <td className="p-3 font-semibold border-r border-gray-300 w-1/2">
                    {tableLabels[index] || t("detail.default_param")}
                  </td>
                  <td className="p-3 w-1/2 text-center">{param}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {catalogForm && (
        <div onClick={closeCatalogForm} className="fixed top-0 left-0 inset-0 z-50 bg-[#0009] flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className={`w-[500px] min-h-[70%] max-sm:w-[90%] py-12 px-6 flex flex-col items-center rounded-lg relative duration-300 ${isSubmitted ? "bg-[#fec80b]" : "bg-white"}`}>
            
            <button onClick={closeCatalogForm}>
              <X width={'30px'} height={'30px'} className="absolute top-3 right-3 cursor-pointer text-black" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 mt-8 text-center w-full h-full">
                <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black mb-3">{t("detail.success_title")}</h3>
                <p className="text-black mb-6">{t("detail.success_desc")}</p>
                <button 
                  onClick={closeCatalogForm} 
                  className="py-3 w-[60%] rounded-[4px] bg-black border-2 border-black text-white duration-200 hover:bg-transparent hover:text-black"
                >
                  {t("detail.close")}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[24px] text-center max-sm:text-[20px] max-w-[80%] font-[500] text-black">
                  {t("detail.modal_title")}
                </h3>
                
                <form className="w-[85%] py-6 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className={`${textNull ? "text-red-500" : "text-black"} text-[14px]`}>{t("detail.name_label")}</label>
                    <input 
                      value={text} 
                      onChange={(e) => {setText(e.target.value); setTextNull(false)}}
                      className={`rounded-[4px] border ${textNull ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder={t("detail.name_placeholder")} 
                    />
                    {textNull && <p className="text-[13px] text-red-500">{t("detail.name_error")}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className={`${emailError ? "text-red-500" : "text-black"} text-[14px]`}>{t("detail.email_label")}</label>
                    <input 
                      value={email} 
                      onChange={(e) => {setEmail(e.target.value); setEmailError(false)}}
                      className={`rounded-[4px] border ${emailError ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder="your@mail.com" 
                    />
                    {emailError && <p className="text-[13px] text-red-500">{t("detail.email_error")}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className={`${phoneError ? "text-red-500" : "text-black"} text-[14px]`}>{t("detail.phone_label")}</label>
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
                    {phoneError && <p className="text-[13px] text-red-500">{t("detail.phone_error")}</p>}
                  </div>

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
                      {t("detail.agree_text")} <a className="text-purple-800" href="#">{t("detail.agree_link")}</a>
                    </p>
                  </div>
                </form>

                <button onClick={handleSubBtn} className="py-3 rounded-[4px] bg-[#fec80b] w-[85%] duration-200 hover:opacity-[0.7] cursor-pointer font-medium">
                  {t("detail.get_kp")}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogDetail;