import { Employees } from "../../constants/data/data"

const Contacts = () => {
  return (
    <section className="container max-xl:px-[3%]">
      <h3 className="my-5 text-[32px] max-md:text-[24px] font-semibold">Контакты производителя автоспецтехники РусТрак</h3>
      <div className="flex max-md:flex-col max-md:w-full">
        <div className="w-[400px] max-md:w-full max-md:h-[250px] max-sm:py-5 max-sm:h-auto h-[330px] bg-[#fec80b] flex flex-col justify-center px-6 text-lg">
          <p>603035 г. Нижний Новгород, ул. Торфяная, д. 35</p>
          <div className="py-9 flex flex-col ">
            <b>Нижний Новгород: <a className="font-[400]" href="tel:8 (831) 225-00-55">8 (831) 225-00-55</a></b>
            <b>Для регионов: <a className="font-[400]" href="tel:8 (800)-511-05-25">8 (800)-511-05-25</a></b>
            <b>Электронная почта: <a className="font-[400]" href="#">info@rtrf.ru</a></b>
          </div>
          <b>Запись на техническое обслуживание: <a href="tel:8 (831) 225-00-55">8 (831) 225-00-55</a></b>
        </div>
        <div className="w-[75%] max-md:w-full max-md:h-[250px] h-[330px] shadow-lg">
          <iframe title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.7369917112596!2d60.61949929751912!3d41.55843167503852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9c80878ac9b%3A0xf6030e79bea9e3b9!2sLimon%20IT%20kompaniyasi!5e1!3m2!1sru!2s!4v1792153288525!5m2!1sru!2s"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
        </div>
      </div>
      <h4 className="text-[32px] font-semibold mt-25">Сотрудники</h4>
      <div className="flex flex-wrap justify-between gap-6 mt-8">
        {Employees.map((emp, idx) => (
          <div key={idx} className="w-[23.5%] max-xl:w-[23%] max-lg:w-[31%] max-md:w-[48%] max-sm:w-full h-[410px] py-6 rounded-[8px] border border-[#e1e1e1] shadow-[0px_0px_10px_#0002] flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img className="w-[140px] h-[140px] rounded-full mb-4" src={emp.pick} alt="Photo" />
              <b className="text-[24px] text-center max-w-[80%] leading-[120%] font-[500]">{emp.fullName}</b>
              <p className="text-[#a1a1a1] text-center max-w-[80%]">{emp.role}</p>
            </div>
            <div className="flex flex-col items-center">
              <a href={`tel:${emp.phone}`}>{emp.phone}</a>
              <a href="#">{emp.job}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contacts