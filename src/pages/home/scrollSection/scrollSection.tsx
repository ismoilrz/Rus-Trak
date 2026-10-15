import { useState, useEffect } from "react";

const steps = [
  {
    title: "Конструкторское бюро",
    desc: "Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиентов.",
  },
  {
    title: "Разработка",
    desc: "Полный цикл проектирования и подготовки технической документации.",
  },
  {
    title: "Производственная база",
    desc: "Современное оборудование и строгий контроль качества на каждом этапе сборки.",
  },
  {
    title: "Гарантия",
    desc: "Предоставляем официальную гарантию на всю выпускаемую технику.",
  },
  {
    title: "Сервис",
    desc: "Круглосуточная техническая поддержка и поставка запасных частей.",
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSteps]);

  return (
    <div id="circular-sticky-container" className="container relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center container mx-auto">
        
        <div className="flex items-center justify-between max-lg:flex-col">
          
          {/* Чап томон: Катта айлана ва Мошина */}
          <div className="relative w-[450px] h-[450px] rounded-full border-3 border-[#fec80b] flex items-center justify-center max-sm:w-[320px] max-sm:h-[320px]">
            <div className="text-center font-bold text-xl">
              <span className="text-gray-700">Мошина расми</span>
            </div>

            {/* ҲАР БИР КИЧИК АЙЛАНАНИ ЎЗИНГИЗ АЛОҲИДА ЁЗИБ ЧИҚДИНГИЗ (top, left, right лар орқали хоҳлаган жойга қўяверинг) */}
            
            {/* 1-Элемент: Конструкторское бюро */}
            <div
              className={`absolute flex items-center gap-2 transition-all duration-300`}
              style={{ top: "0%", right: "-30px" }}
            >
              <div className={`w-4 h-4 rounded-full ${activeStep === 0 ? "bg-[#fec80b] ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className="text-sm px-2 py-0.5 rounded hidden md:inline">{steps[0].title}</span>
            </div>

            {/* 2-Элемент: Разработка */}
            <div
              className={`absolute flex items-center gap-2 transition-all duration-300`}
              style={{ top: "25%", right: "-85px" }}
            >
              <div className={`w-4 h-4 rounded-full ${activeStep === 1 ? "bg-[#fec80b] ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className="text-sm px-2 py-0.5 rounded hidden md:inline">{steps[1].title}</span>
            </div>

            {/* 3-Элемент: Производственная база */}
            <div
              className={`absolute flex items-center gap-2 transition-all duration-300`}
              style={{ top: "52%", right: "-190px" }}
            >
              <div className={`w-4 h-4 rounded-full ${activeStep === 2 ? "bg-[#fec80b] ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className="text-sm px-2 py-0.5 rounded hidden md:inline">{steps[2].title}</span>
            </div>

            {/* 4-Элемент: Гарантия */}
            <div
              className={`absolute flex items-center gap-2 transition-all duration-300`}
              style={{ bottom: "22%", right: "-62px" }}
            >
              <div className={`w-4 h-4 rounded-full ${activeStep === 3 ? "bg-[#fec80b] ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className="text-sm px-2 py-0.5 rounded hidden md:inline">{steps[3].title}</span>
            </div>

            {/* 5-Элемент: Сервис */}
            <div
              className={`absolute flex items-center gap-2 transition-all duration-300`}
              style={{ bottom: "7%", right: "10px" }}
            >
              <div className={`w-4 h-4 rounded-full ${activeStep === 4 ? "bg-[#fec80b] ring-4 ring-yellow-100" : "bg-white border-2 border-[#fec80b]"}`} />
              <span className="text-sm px-2 py-0.5 rounded hidden md:inline">{steps[4].title}</span>
            </div>

          </div>

          {/* Ўнг томон: Чизиқ ва Матн */}
          <div className="flex items-start">
            {/* Вертикал линия */}
            <div className="flex justify-end">
              <div className="relative w-[2px] h-[250px] rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full bg-[#fec80b] transition-all duration-75"
                  style={{ height: `${lineHeight}%` }}
                />
              </div>
            </div>

            {/* Матн қисми */}
            <div className="w-[450px] p-8 bg-transparent rounded-2xl max-lg:w-full max-lg:mt-6">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 transition-all duration-300">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed transition-all duration-300">
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