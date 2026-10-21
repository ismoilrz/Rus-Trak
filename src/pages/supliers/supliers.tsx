const Supliers = () => {
  return (
    <section className="container max-xl:px-[3%]">
      <h1 className="text-[32px] max-md:text-[26px] max-sm:text-[22px] font-[500]">Поставщикам и партнёрам</h1>
      <div className="flex flex-col gap-8 mt-7 max-md:mt-4 max-md:gap-6">
        <h2 className="text-[32px] max-md:text-[26px] max-sm:text-[22px] font-[500]">ООО «Рустрак» приглашает к сотрудничеству.</h2>
        <p className="text-lg text-[16px] max-w-[70%] max-lg:max-w-[85%] max-md:max-w-full">
          Наша компания 17 лет работает на рынке производства и продажи
          коммерческого транспорта и спецтехники и прочно занимает ведущие
          позиции на российском рынке.
        </p>
        <p className="text-lg text-[16px] max-w-[70%] max-lg:max-w-[85%] max-md:max-w-full">
          Мы приглашаем к сотрудничеству поставщиков комплектующих, как одно из
          основных направлений развития компании. <br />
          Наша компания заинтересована в долгосрочном и эффективном
          сотрудничестве.
        </p>
      </div>

      <div className="text-lg mt-8 flex flex-col gap-8">
        <p className="max-md:text-[16px]">Мы ценим в партнёрах:</p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">1</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">Высококачественную продукцию;</p>
          </div>
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">2</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">Гибкую ценовую политику;</p>
          </div>
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">3</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">Регулярное информирование об ассортименте и складских остатках продукции;</p>
          </div>
          <div className="flex gap-5 w-full">
            <span className="w-8 h-8 text-[20px] font-[500] bg-[#fec80b] flex items-center justify-center rounded-full">4</span> 
            <p className="max-md:max-w-[80%] max-md:text-[16px]">Минимальные сроки поставки.</p>
          </div>

        </div>
          <p className="max-md:text-[16px]">Основные принципы ООО «РусТрак» при взаимодействии с партнёрами:</p>
      </div>

      <div className="text-lg py-8 max-md:text-[16px]">
        <p>- Доверие,</p>
        <p>- честность,</p>
        <p>- взаимопомощь;</p>
      </div>
      
      <p className="text-lg max-w-[70%] max-md:text-[16px] max-lg:max-w-[85%] max-md:max-w-full">
        Долгосрочное сотрудничество на взаимовыгодной основе. Обязательность 
        и точность выполнения договоренностей. Соблюдение международных норм 
        деловой этики. <br /> Всегда рады Вам!
      </p>
    </section>
  );
};

export default Supliers;
