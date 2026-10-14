import tr from '../../assets/truckImage-3gWCICr4.webp'

const AnyQuestion = () => {
  return (
    <section className="bg-[#F2F2F2] py-[60px] relative overflow-hidden mt-10">
      <div className="container max-xl:px-[3%] max-lg:flex max-lg:flex-col max-lg:items-center">
        <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
          <h3 className="text-[42px] font-[500] max-lg:text-center max-lg:text-[34px]">ОСТАЛИСЬ ВОПРОСЫ?</h3>
          <p className="text-[18px] max-lg:text-center">Оставьте свои контактные данные, и мы презвоним вам в ближайшее время</p>
          <form className="flex items-end gap-4 pt-9 max-lg:pt-5 pb-4 max-lg:flex-col max-lg:items-start max-lg:w-full">
            <div className="flex flex-col gap-1 max-lg:w-full">
              <label className="text-[14px]">Имя</label>
              <input className="max-lg:w-full h-11 w-[294px] rounded-[4px] border border-black outline-hidden px-4" type="text" placeholder="Ali Valiyev" />
            </div>
            <div className="flex flex-col gap-1 max-lg:w-full">
              <label className="text-[14px]">Телефон</label>
              <input className="max-lg:w-full h-11 w-[294px] rounded-[4px] border border-black outline-hidden px-4" type="number" placeholder="+998" />
            </div>
            <button className="px-[30px] max-sm:w-full h-11 bg-[#fec80b] duration-200 rounded-[4px] hover:opacity-[0.7]">Открыть каталог</button>
          </form>
        </div>
        <p className="text-[#a1a1a1] text-[14px] max-lg:text-center">Нажимая на кнопку отправить <a className="text-purple-900 underline hover:no-underline" href="#">Вы соглашаетесь на обработку персональных данных</a></p>
      </div>

      <img className='max-xl:hidden h-[98%] absolute top-3 left-[65%]' src={tr} alt="Trak" />
    </section>
  )
}

export default AnyQuestion