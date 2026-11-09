import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowDownToLine, Heart, X } from 'lucide-react';
import { useCartStore } from '../../shared/useCartStore'; // Store joylashuvini loyihangizga moslang

const HeartPage = () => {
  const navigate = useNavigate();

  const [catalogForm, setCatalogForm] = useState<boolean>(false)

  const closeCatForm = () => setCatalogForm(false)

  const addToCart = useCartStore((state) => state.addToCart);

  const [favorites, setFavorites] = useState<any[]>(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  });

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

  const handleAddToCart = (item: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img, 
      slug: item.slug,             
      category: item.categorySlug || ""
    });
  };

  const handleRemoveFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();

    const updated = favorites.filter((fav: any) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event("favoritesChanged"));
  };



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

  // const { selectedCatalog, slug } = useParams<{ selectedCatalog: string; slug: string }>();

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



  if (favorites.length === 0) {
    return <div className="container pt-4">
      <p className='text-[20px]'>Ваше избранное пусто.</p>
      <p className='text-[20px]'>Воспользуйтесь каталогом или поиском, чтобы сохранить подходящий товар.</p>
      <div className='flex gap-4 pt-6'>
        <Link to={'/'}><button className='px-7 py-2 rounded-md border-2 border-[#fec80b] duration-200 hover:bg-[#fec80b]'>На главную</button></Link>
        <Link to={'/catalog'}><button className=' px-7 py-2 rounded-md border-2 border-transparent duration-200 bg-[#fec80b] hover:bg-transparent hover:border-[#fec80b]'>Открыть каталог</button></Link>
      </div>
    </div>;
  }

  return (
    <>
      <div className="container max-xl:px-[3%] grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6">
      {favorites.map((item) => (
        <div 
          key={item.id}
          onClick={() => navigate(`/catalog/${item.categorySlug}/${item.slug}`)} 
          className="h-[440px] max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:h-[360px] max-sm:h-[300px] bg-[#f5f5f5] relative overflow-hidden cursor-pointer"
        >
          <img className="h-[65%] max-lg:h-[50%] w-full object-cover" src={item.img} alt="Image" />
          <span className="text-[18px] max-sm:mt-[-10px] max-md:text-[16px] line-clamp-1 max-lg:line-clamp-2 max-sm:line-clamp-1 mt-3 ml-3">{item.title}</span>
          
          <div className="h-[35%] p-3 flex flex-col justify-between">
            <div className="max-md:mt-[-10px] max-sm:mt-[-25px]">
              <h5 className="text-[22px] max-md:text-lg max-sm:text-[14px] pb-2 font-[500]">{item.price}</h5>
              
              <div className="flex items-center max-md:flex-col justify-between max-lg:gap-3">
                <div className="w-full flex items-center gap-3 max-sm:justify-between">
                  <button className="px-5 max-lg:px-6 max-md:w-[80%] py-2 text-[12px] rounded-[4px] bg-[#fec80b] font-medium">
                    Подробнее
                  </button>
                  
                  <button onClick={(e) => handleAddToCart(item, e)}>
                    <ShoppingCart size={26} className="max-sm:w-5 max-sm:h-5" />
                  </button>
                </div>
                
                <button onClick={(e) => { e.stopPropagation(); setCatalogForm(true)}} className="flex items-center gap-2 text-[12px] whitespace-nowrap">
                  Получить КП <ArrowDownToLine width={'15px'} height={'15px'} />
                </button>
                
                <button 
                  onClick={(e) => {handleRemoveFavorite(item.id, e);}} 
                  className="absolute top-2 right-2 p-1 z-10"
                >
                  <Heart width={'30px'} height={'30px'} className="duration-200 stroke-1 fill-[#fec80b]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

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
  );
};

export default HeartPage;