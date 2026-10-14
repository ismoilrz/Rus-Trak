import { X } from "lucide-react"

type CallProps = {
    callModal: boolean,
    closeCallModal: () => void,
}

const CallModal = ({ callModal, closeCallModal }: CallProps ) => {
  return (
    <div onClick={closeCallModal} className={`fixed top-0 left-0 inset-0 items-center justify-center bg-[#0009] duration-200 z-50 ${callModal ? "flex" : "hidden"}`}>
        <div onClick={(e) => e.stopPropagation()} className="bg-white w-[472px] max-sm:w-[90%] py-15 flex flex-col items-center rounded-lg relative">
            <button onClick={closeCallModal}><X width={'30px'} height={'30px'} className="absolute top-3 right-3" /></button>
            <h3 className="text-[32px] max-sm:text-[26px] font-[500] text-black">Заказать звонок</h3>
            <p className="max-w-[90%] max-sm:text-center">Наш менеджер свяжется с Вами в ближайшее время</p>
            <form className="w-[70%] py-12 max-sm:py-8 flex flex-col gap-3 max-sm:w-[80%]">
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">Ваше имя *</label>
                    <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="Имя" />
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
                    <button className="py-3 rounded-[4px] bg-[#fec80b] w-[70%] duration-200 hover:opacity-[0.7]">Оставить заявку</button>
                <p className="text-[13px] mt-4">Для регионов: <a href="tel:8 (800) 511-05-25">8 (800) 511-05-25</a></p>
                <p className="text-[13px]">Нижний Новгород: <a href="tel:8 (800) 511-05-25">8 (800) 511-05-25</a></p>

        </div>
    </div>
  )
}

export default CallModal