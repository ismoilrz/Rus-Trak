import { Link } from "react-router-dom"

const Video = () => {
  return (
    <section className="container">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-[32px] font-[500]">Видеогалерея производителя автоспецтехники РусТрак</h1>
        <Link to={'/galeriya'}>
          <button className="px-[30px] max-lg:hidden py-2 rounded-[6px] border-2 border-[#fec80b] duration-200 hover:bg-[#fec80b] active:bg-[#fec80b]">
              Смотреть фото
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Video