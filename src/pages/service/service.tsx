import employes from "../../assets/employes1.png"

const Service = () => {
  return (
    <section>
      <div className="container flex justify-between max-xl:px-[3%] max-xl:gap-5">
        <div className="w-[70%] flex flex-col gap-16 max-md:gap-10 max-lg:w-full">
          <div>
            <h3 className="text-[32px] max-sm:text-[28px] max-sm:max-w-[90%] max-lg:max-w-[80%] z-10 max-sm:static absolute text-black font-[500]">Сервис по гарантийному ремонту автоспецтехники РусТрак</h3>
            <div className="mt-16 flex items-startr max-lg:justify-between max-lg:mt-26 max-sm:mt-4 max-lg:gap-5">
              <p className="text-[18px] max-lg:max-w-[50%] max-md:max-w-full">
                После приобретения продукции в ООО «Рустрак» Вы всегда можете обратиться
                за помощью по любым вопросам, связанными с гарантийным обслуживанием, настройкой 
                и ремонтом транспорного средства, поставкой дополнительного обурудования, а также 
                внесением доработок под задачи клиента. Вы можете обратиться за технической 
                поддержкой и консультацией по эксплуатации в любое время и в любой срок после 
                заключения контракта.
              </p>

              <div className="p-6 max-md:hidden hidden max-lg:flex flex-col items-center border border-[#99999983] shadow-2xl rounded-lg">
                <img src={employes} alt="Employes" />
                <strong className="text-[24px] font-[500]">Шаронов Сергей</strong>
                <p className="max-w-[264px] text-center text-[#a1a1a1]">менеджер по вопросам гарантии и сервисного обслуживания</p>
                <div className="flex flex-col items-center mt-16">
                  <a href="(831) 225-00-55">(831) 225-00-55 (доб 124)</a>
                  <a href="#">kb1@rtrf.ru</a>
                </div>
            </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[24px] font-[500]">Как получить поддержку?</h4>
            <div className="flex items-start gap-4">
              <div className="w-10! h-10 flex items-center justify-center text-[26px] font-semibold rounded-full bg-[#fec80b]">1</div>
              <p className="text-lg max-w-[90%] max-sm:max-w-[80%]">
                <a href="https://rtrf.ru/service/upload/RKLMACTRT26.pdf">Заполнить Рекламационный акт</a> с внесением подписи ответственного лица 
                и печати организации, подробно описать характер отказа. Приложить фото: шильды в 
                пассажирской двери, шильды вышедшего из строя оборудования, первая страница ПТС.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-[26px] font-semibold rounded-full bg-[#fec80b]">2</div>
              <p className="text-lg max-w-[90%] max-sm:max-w-[80%]">Сфотографировать неисправности, а также общий вид изделия в целом.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-[26px] font-semibold rounded-full bg-[#fec80b]">3</div>
              <p className="text-lg max-w-[90%] max-sm:max-w-[80%]">Отправить заполненный акт, копию ПТС, фотографии неисправностей по электронной почте: <a href="#">kb1@rtrf.ru</a></p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-lg text-black">После этого специалисты гарантийной службы свяжутся с владельцем и предложат варианты организации ремонта.</p>
            <p className="text-lg text-black">
              Любые вопросы относительно гарантийного обслуживания техники производства 
              «РусТрак» можно задать по телефону <a href="tel:8 (831) 225-00-55">8 (831) 225-00-55 (доб 610)</a>
              или по электронной почте: <a href="#">kb1@rtrf.ru</a>
            </p>
          </div>

          <div className="p-6 max-md:flex hidden flex-col items-start border border-[#99999983] shadow-2xl rounded-lg">
                <strong className="text-[24px] font-[500]">Шаронов Сергей</strong>
                <p className="text-start text-[#a1a1a1]">менеджер по вопросам гарантии и сервисного обслуживания</p>
                <div className="flex flex-col items-start mt-10">
                  <a href="(831) 225-00-55">(831) 225-00-55 (доб 124)</a>
                  <a href="#">kb1@rtrf.ru</a>
                </div>
            </div>
        </div>

        <div className="max-lg:hidden">
          <div className="p-6 mt-[10vh] flex flex-col items-center border border-[#99999983] shadow-2xl rounded-lg">
              <img src={employes} alt="Employes" />
              <strong className="text-[24px] font-[500]">Шаронов Сергей</strong>
              <p className="max-w-[264px] text-center text-[#a1a1a1]">менеджер по вопросам гарантии и сервисного обслуживания</p>
              <div className="flex flex-col items-center mt-16">
                <a href="(831) 225-00-55">(831) 225-00-55 (доб 124)</a>
                <a href="#">kb1@rtrf.ru</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service