import useFancybox from "../../shared/useFancyBox";

import review1 from "../../assets/review1.jpg"
import review2 from "../../assets/review2.jpg"
import review3 from "../../assets/review3.jpg"
import review4 from "../../assets/review4.jpg"
import review5 from "../../assets/review5.jpg"
import { SearchX } from "lucide-react";

interface ReviewDataType {
  id: number;
  pick: string
}

const ReviewData:ReviewDataType[] = [
  { id: 1, pick: review1 },
  { id: 2, pick: review2 },
  { id: 3, pick: review3 },
  { id: 4, pick: review4 },
  { id: 5, pick: review5 },
]

const Reviews = () => {
  const [fancyboxRef] = useFancybox({});

  return (
    <section ref={fancyboxRef} className="container max-xl:px-[3%]">
      <h1 className="text-[32px] font-[500] py-6">Отзывы</h1>
      <div className="flex flex-wrap justify-start max-sm:justify-center gap-6 w-full">
        {ReviewData.map((rev, idx) => (
        <a className="reviews relative"
          key={idx} 
          data-fancybox="gallery" 
          href={rev.pick}
        >
          <img className="w-[315px] max-md:w-[280px] max-sm:w-[300px] h-[420px] border border-[#a1a1a150] rounded-[8px]" src={rev.pick} alt="Sample Image" />
          <div className="reviewOverlay w-full flex items-center justify-center duration-200 rounded-[8px] text-transparent h-full bg-transparent absolute top-0 left-0 transition-all"><SearchX width={'40px'} height={'40px'} /></div>
        </a>
      ))}
      </div>
    </section>
  )
}

export default Reviews