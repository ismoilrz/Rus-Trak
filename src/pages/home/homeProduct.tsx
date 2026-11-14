import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { catalogConfig } from "../../constants/catalogData/catalogConfig";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const HomeProduct = () => {
    const [catalogForm, setCatalogForm] = useState<boolean>(false)
    const closeCatForm = () => setCatalogForm(false)

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

  const allTrakItems = Object.values(catalogConfig).flatMap((category) => 
    (category.trak || []).map((trakItem) => ({
      ...trakItem,
      categorySlug: category.slug
    }))
  );


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
  }


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

  const { t } = useTranslation();

  return (
    <>
        <section className="bg-[#f5f5f5] pb-12">
        <div className="container max-xl:px-[3%]">
            <div className="w-full flex justify-between py-14 pb-8 max-sm:flex-col max-sm:gap-6 max-sm:pb-3">
            <h3 className="text-[40px] max-md:text-3xl font-medium">{t("titlePr")}</h3>
            <div className="flex gap-3">
                <button id="cat-slide-left" className="w-10 h-10 rounded-md border-1 text-3xl text-[#a1a1a1] flex items-center justify-center duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]"><ChevronLeft size={30} /></button>
                <button id="cat-slide-next" className="w-10 h-10 rounded-md border-1 text-3xl text-[#a1a1a1] flex items-center justify-center duration-200 hover:bg-[#fec80b] hover:text-black active:bg-[#fec80b]"><ChevronRight size={30} /></button>
            </div>
            </div>

            <div className="Sl">
            <Swiper
                slidesPerView={4}
                spaceBetween={25}
                loop={true}
                navigation={{
                prevEl: "#cat-slide-left",
                nextEl: "#cat-slide-next",
                }}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                0: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {allTrakItems.map((trakItem, idx) => (
                <SwiperSlide key={`${trakItem.id}-${idx}`} className="h-[370px]! bg-[#fff]!">
                    <Link to={`/catalog/${trakItem.categorySlug}/${trakItem.slug}`} className="w-full h-full flex flex-col items-start rounded-lg">
                    <img className="h-[56%]!" src={trakItem.img} alt="" />
                    <h4 className="text-[17px] line-clamp-2 text-start m-3 min-h-12">
                        {t(trakItem.titleKey)}
                    </h4>
                    <span className="text-xl font-medium px-3">{t(trakItem.priceKey)}</span>
                    <div className="flex justify-between w-full px-3 pt-2 text-[14px]">
                        <button className="px-4 py-2 rounded-md bg-[#fec80b]">{t("more")}</button>
                        <button onClick={(e) => {e.preventDefault(); e.stopPropagation(); setCatalogForm(true)}}>{t("get_quote")}</button>
                    </div>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </section>

        {catalogForm && (
        <div onClick={closeCatForm} className="fixed top-0 left-0 inset-0 z-50 bg-[#0009] flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className={`w-[500px] h-[70%] max-sm:w-[90%] py-12 px-6 flex flex-col items-center rounded-lg relative duration-300 ${isSubmitted ? "bg-[#fec80b]" : "bg-white"}`}>
            
            <button onClick={closeCatalogForm}>
              <X width={'30px'} height={'30px'} className="absolute top-3 right-3 cursor-pointer text-black" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center w-full h-full">
                <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black mb-3">Успешно!</h3>
                <p className="text-black mb-6">Ваши данные направлены нашему менеджеру. Мы свяжемся с вами в ближайшее время!</p>
                <button 
                  onClick={closeCatalogForm} 
                  className="py-3 w-[60%] rounded-[4px] bg-black border-2 border-black text-white duration-200 hover:bg-transparent hover:text-black"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[24px] text-center max-sm:text-[20px] max-w-[80%] font-[500] text-black">Получить коммерческое предложение</h3>
                
                <form className="w-[85%] py-6 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className={`${textNull ? "text-red-500" : "text-black"} text-[14px]`}>Ваше имя *</label>
                    <input 
                      value={text} 
                      onChange={(e) => {setText(e.target.value); setTextNull(false)}}
                      className={`rounded-[4px] border ${textNull ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder="Имя" 
                    />
                    {textNull && <p className="text-[13px] text-red-500">Поле обязательно для заполнения</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className={`${emailError ? "text-red-500" : "text-black"} text-[14px]`}>E-mail *</label>
                    <input 
                      value={email} 
                      onChange={(e) => {setEmail(e.target.value); setEmailError(false)}}
                      className={`rounded-[4px] border ${emailError ? "border-red-500" : "border-black"} w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                      type="text" 
                      placeholder="your@mail.com" 
                    />
                    {emailError && <p className="text-[13px] text-red-500">Введите корректный E-mail</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className={`${phoneError ? "text-red-500" : "text-black"} text-[14px]`}>Телефон *</label>
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
                    {phoneError && <p className="text-[13px] text-red-500">Введите номер полностью</p>}
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
                      Я согласен <a className="text-purple-800" href="#">на обработку персональных данных</a>
                    </p>
                  </div>
                </form>

                <button onClick={handleSubBtn} className="py-3 rounded-[4px] bg-[#fec80b] w-[85%] duration-200 hover:opacity-[0.7] cursor-pointer font-medium">Получить КП</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default HomeProduct