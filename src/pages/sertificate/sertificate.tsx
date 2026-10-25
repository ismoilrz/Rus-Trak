import useFancybox from "../../shared/useFancyBox";

import ser1 from "../../assets/ser1.jpg"
import ser2 from "../../assets/ser2.jpg"
import ser3 from "../../assets/ser3.jpg"
import ser4 from "../../assets/ser4.jpg"
import ser5 from "../../assets/ser5.jpg"
import ser6 from "../../assets/ser6.jpg"
import ser7 from "../../assets/ser7.jpg"
import ser8 from "../../assets/ser8.jpg"
import ser9 from "../../assets/ser9.jpg"
import { SearchX } from "lucide-react";

interface SerDataType {
  id: number;
  pick: string;
}

const SerData: SerDataType[] = [
  { id: 1, pick: ser1 },
  { id: 2, pick: ser2 },
  { id: 3, pick: ser3 },
  { id: 4, pick: ser4 },
  { id: 5, pick: ser5 },
  { id: 6, pick: ser6 },
  { id: 7, pick: ser7 },
  { id: 8, pick: ser8 },
  { id: 9, pick: ser9 },
];

const Sertificate = () => {
  const fancyboxRef = useFancybox({});

  return (
    <section ref={fancyboxRef} className="container max-xl:px-[3%]">
      <h1 className="text-[32px] font-[500] py-6">Сертификаты</h1>
      <div className="flex flex-wrap justify-start max-sm:justify-center gap-6 w-full">
        {SerData.map((rev) => (
          <a className="reviews relative" key={rev.id} data-fancybox="gallery" href={rev.pick}>
            <img className="w-[315px] max-md:w-[280px] max-sm:w-[300px] h-[420px] border border-[#a1a1a150] rounded-[8px]" src={rev.pick} alt="Sample Image" />
            <div className="reviewOverlay w-full flex items-center justify-center duration-200 rounded-[8px] text-transparent h-full bg-transparent absolute top-0 left-0 transition-all">
              <SearchX width={'40px'} height={'40px'} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sertificate;