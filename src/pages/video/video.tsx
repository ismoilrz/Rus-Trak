import { Link } from "react-router-dom"
import { VideoData } from "../../constants/videoData"

import play from "../../assets/play.png"
import { useState } from "react"

const Video = () => {

  const [openVideo, setOpenVideo] = useState<number[]>([])

  const handleOpenVideo = (id: number) => {
    if (!openVideo.includes(id)) {
      setOpenVideo((prev) => [...prev, id]);
    }
  };

  return (
    <section className="container max-xl:px-[3%]">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-[32px] max-md:text-[26px] max-sm:text-[22px] font-[500]">Видеогалерея производителя автоспецтехники РусТрак</h1>
        <Link to={'/galeriya'}>
          <button className="max-lg:hidden px-[30px] max-lg:hidden py-2 rounded-[6px] border-2 border-[#fec80b] duration-200 hover:bg-[#fec80b] active:bg-[#fec80b]">
              Смотреть фото
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        {VideoData.map((vid) => {
          const isOpen = openVideo.includes(vid.id);
          return (
          <div key={vid.id} className="w-full">
            <div onClick={() => handleOpenVideo(vid.id)} className={`${isOpen ? "hidden" : "block"} w-full relative`}>
              <img className="w-full h-full" src={vid.img} alt="Video-Banner" />
              <button className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-25 h-25 max-sm:h-20 max-sm:w-20 rounded-full overflow-hidden duration-300 hover:scale-[1.2]">
                <img src={play} alt="Play" />
              </button>
            </div>
            <iframe className={`${isOpen ? "block" : "hidden"} max-lg:h-[240px] max-md:h-[350px]`} src={vid.vid} width={"100%"} height={"380px"} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <h4 className="text-lg font-[500] mt-5">{vid.title}</h4>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Video