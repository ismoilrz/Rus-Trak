import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import mainPick from "../../../assets/scrollSectMain.png"
import steps1 from "../../../assets/steps1.svg"
import steps2 from "../../../assets/steps2.svg"
import steps3 from "../../../assets/steps3.svg"
import steps4 from "../../../assets/steps4.svg"
import steps5 from "../../../assets/steps5.svg"

interface Steps {
  title: string,
  logo: string,
  desc: string,
}

const steps:Steps[] = [
  {
    title: "Конструкторское бюро",
    logo: steps1,
    desc: "Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиента.",
  },
  {
    title: "Разработка",
    logo: steps2,
    desc: "Все проекты разработаны согласно мануал кузовостроителей.",
  },
  {
    title: "Производственная база",
    logo: steps3,
    desc: "Собственная производственная база позволяет максимально снизить себестоимость продукции, повышая её конкурентоспособность.",
  },
  {
    title: "Гарантия",
    logo: steps4,
    desc: "Гарантия на надстройки и работы соответствует гарантии шасси.",
  },
  {
    title: "Сервис",
    logo: steps5,
    desc: "Сервисное обслуживание: партнёрская сервисная сеть на всей территории РФ.",
  },
];

const CircularScrollSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const totalSteps = steps.length;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("circular-sticky-container");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const sectionHeight = rect.height - window.innerHeight;

      if (scrollProgress >= 0 && scrollProgress <= sectionHeight) {
        const progressPercent = scrollProgress / sectionHeight;
        setLineHeight(progressPercent * 100);

        const current = Math.min(
          Math.floor(progressPercent * totalSteps),
          totalSteps - 1
        );
        setActiveStep(current);
      } else if (scrollProgress < 0) {
        setLineHeight(0);
      } else if (scrollProgress > sectionHeight) {
        setLineHeight(100);
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [totalSteps]);

  return (
    <div id="circular-sticky-container" className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center container max-xl:items-start max-xl:px-[3%]">
        
        <div className="max-xl:w-full flex items-center justify-between max-xl:flex-col max-xl:justify-start max-xl:items-start">
          
          <div className="relative w-[450px] h-[450px] rounded-full border-3 border-[#fec80b] flex items-center justify-center max-sm:w-[320px] max-sm:h-[320px]">
            <div className="rounded-full w-[92%] h-[92%] bg-[#a1a1a136] flex items-center justify-center">
              <img className="w-[90%] h-[90%]" src={mainPick} alt="" />
            </div>

            {/* #1 */}
            <div className="absolute max-md:hidden flex items-center gap-2" style={{ top: "0%", right: "-30px" }}>
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 0 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded hidden md:inline transition-colors duration-200 ${activeStep === 0 ? "font-bold text-black" : "text-gray-500"}`}>{steps[0].title}</span>
            </div>

            {/* #2 */}
            <div className="absolute max-md:hidden flex items-center gap-2" style={{ top: "25%", right: "-85px" }}>
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 1 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded hidden md:inline transition-colors duration-200 ${activeStep === 1 ? "font-bold text-black" : "text-gray-500"}`}>{steps[1].title}</span>
            </div>

            {/* #3 */}
            <div className="absolute max-md:hidden flex items-center gap-2" style={{ top: "52%", right: "-190px" }}>
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 2 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded hidden md:inline transition-colors duration-200 ${activeStep === 2 ? "font-bold text-black" : "text-gray-500"}`}>{steps[2].title}</span>
            </div>

            {/* #4 */}
            <div className="absolute max-md:hidden flex items-center gap-2" style={{ bottom: "22%", right: "-62px" }}>
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 3 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded hidden md:inline transition-colors duration-200 ${activeStep === 3 ? "font-bold text-black" : "text-gray-500"}`}>{steps[3].title}</span>
            </div>

            {/* #5 */}
            <div className="absolute max-md:hidden flex items-center gap-2" style={{ bottom: "7%", right: "10px" }}>
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 4 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded hidden md:inline transition-colors duration-200 ${activeStep === 4 ? "font-bold text-black" : "text-gray-500"}`}>{steps[4].title}</span>
            </div>

          </div>

          <div className="hidden max-md:flex flex-col gap-3 py-5">
            <div className=" flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 0 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded md:inline transition-colors duration-200 ${activeStep === 0 ? "font-bold text-black" : "text-gray-500"}`}>{steps[0].title}</span>
            </div>

            {/* #2 */}
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 1 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded md:inline transition-colors duration-200 ${activeStep === 1 ? "font-bold text-black" : "text-gray-500"}`}>{steps[1].title}</span>
            </div>

            {/* #3 */}
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 2 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded md:inline transition-colors duration-200 ${activeStep === 2 ? "font-bold text-black" : "text-gray-500"}`}>{steps[2].title}</span>
            </div>

            {/* #4 */}
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 3 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded md:inline transition-colors duration-200 ${activeStep === 3 ? "font-bold text-black" : "text-gray-500"}`}>{steps[3].title}</span>
            </div>

            {/* #5 */}
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full transition-colors duration-200 ${activeStep === 4 ? "bg-[#fec80b] border-2 border-transparent ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className={`text-sm px-2 py-0.5 rounded md:inline transition-colors duration-200 ${activeStep === 4 ? "font-bold text-black" : "text-gray-500"}`}>{steps[4].title}</span>
            </div>
          </div>

          <div className="flex items-start max-xl:flex-col">
          <div className="flex justify-end mr-4 max-xl:mr-0 max-xl:mt-14 max-md:mt-6">
            <div className="relative w-[2px]! h-[300px] max-xl:w-[950px]! max-lg:w-[700px]! max-md:w-[600px]! max-sm:w-[300px]! max-xl:h-[4px] bg-white rounded-full">
              
              <div className="absolute top-0 left-0 rounded-full bg-[#fec80b] max-xl:h-[3px]! max-xl:w-0" style={{ height: `${lineHeight}%`, width: `${lineHeight}%`,}} />
              {lineHeight > 0 && (
                <ChevronDown className="absolute text-[#fec80b] left-[-4px]! max-xl:hidden" style={{ top: `${lineHeight}%`, left: `${lineHeight}%`, transform: 'translate(-30%, -30%)' }} />
              )}
            </div>
          </div>

          <div className="w-[450px] max-xl:w-full max-xl:flex-row max-xl:justify-start max-xl:items-start max-xl:p-0 max-xl:pt-3 flex flex-col justify-center gap-8 p-8 bg-transparent rounded-2xl">
            <img className="w-16 h-16" src={steps[activeStep].logo} alt={steps[activeStep].title} />
            <p className="text-black max-xl:text-[20px] max-sm:text-sm text-base leading-relaxed transition-all duration-300">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CircularScrollSection;