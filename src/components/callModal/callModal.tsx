import { X } from "lucide-react"
import { useState, useRef } from "react"
import { useTranslation } from "react-i18next"

type CallProps = {
    callModal: boolean,
    closeCallModal: () => void,
}

const CallModal = ({ callModal, closeCallModal }: CallProps ) => {
    const { t } = useTranslation();

    const [text, setText] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [textNull, setTextNull] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [checkboxError, setCheckboxError] = useState<boolean>(false);

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

    const handleClose = () => {
        setIsSubmitted(false);
        setText('');
        setPhone('');
        setTextNull(false);
        setPhoneError(false);
        setIsChecked(false);
        setCheckboxError(false);
        closeCallModal();
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
    <div onClick={closeCallModal} className={`fixed top-0 left-0 inset-0 items-center justify-center bg-[#0009] duration-200 z-50 ${callModal ? "flex" : "hidden"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`w-[472px] max-h-[80%] max-sm:h-[70%] max-sm:w-[90%] py-15 flex flex-col items-center rounded-lg relative duration-300 ${isSubmitted ? "bg-[#fec80b]" : "bg-white"}`}>
            
            <button onClick={handleClose}>
                <X width={'30px'} height={'30px'} className="absolute top-3 right-3 cursor-pointer text-black" />
            </button>

            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 w-full h-full text-center px-4">
                    <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black mb-4">{t('callModal.successTitle')}</h3>
                    <p className="text-black mb-8">{t('callModal.successDesc')}</p>
                    <button 
                        onClick={handleClose} 
                        className="py-3 w-[60%] rounded-[4px] bg-black text-white duration-200 hover:opacity-[0.8] cursor-pointer"
                    >
                        {t('callModal.closeBtn')}
                    </button>
                </div>
            ) : (
                <>
                    <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black">{t('callModal.mainTitle')}</h3>
                    <p className="max-w-[90%] max-sm:text-center text-gray-600">{t('callModal.mainDesc')}</p>
                    
                    <form className="w-[70%] py-12 max-sm:py-8 flex flex-col gap-3 max-sm:w-[80%]">
                        {/* Ism */}
                        <div className="flex flex-col gap-1">
                            <label className={`${textNull ? "text-red-500" : "text-black"} text-[14px]`}>{t('callModal.nameLabel')}</label>
                            <input 
                                value={text} 
                                onChange={(e) => {setText(e.target.value); setTextNull(false)}}
                                className={`${textNull ? "border-red-500" : "border-black"} rounded-[4px] border w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                                type="text" 
                                placeholder={t('callModal.namePlaceholder')} 
                            />
                            {textNull && (
                                <p className="text-[14px] text-red-500 mt-1">{t('callModal.nameError')}</p>
                            )}
                        </div>

                        {/* Telefon */}
                        <div className="flex flex-col gap-1">
                            <label className={`${phoneError ? "text-red-500" : "text-black"} text-[14px]`}>{t('callModal.phoneLabel')}</label>
                            <input 
                                ref={phoneInputRef} 
                                value={phone} 
                                onChange={handlePhoneChange} 
                                onKeyDown={handleKeyDown} 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={`${phoneError ? "border-red-500" : "border-black"} rounded-[4px] border w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b] bg-white`} 
                                type="text" 
                                placeholder={t('callModal.phonePlaceholder')} 
                            />
                            {phoneError && (
                                <p className="text-[14px] text-red-500 mt-1">{t('callModal.phoneError')}</p>
                            )}
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
                                {t('callModal.agreementText')} <a className="text-purple-800" href="#">{t('callModal.agreementLink')}</a>
                            </p>
                        </div>
                    </form>

                    <button onClick={handleSubBtn} className="py-3 rounded-[4px] bg-[#fec80b] w-[70%] duration-200 hover:opacity-[0.7] cursor-pointer">{t('callModal.submitBtn')}</button>
                    <p className="text-[13px] mt-4">{t('callModal.regionsPhone')} <a href="tel:88005110525">8 (800) 511-05-25</a></p>
                    <p className="text-[13px]">{t('callModal.cityPhone')} <a href="tel:88005110525">8 (800) 511-05-25</a></p>
                </>
            )}
        </div>
    </div>
  )
}

export default CallModal