import { useEffect, useState, useRef } from "react";

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (countRef.current) {
            observer.unobserve(countRef.current);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const steps = 200;
    const increment = end / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const Statistics = () => {
  return (
    <section className="bg-[#fec80b] pt-[54px] pb-[65px]">
      <div className="container flex justify-between gap-[136px] max-xl:px-[3%] max-lg:gap-[80px] max-md:flex-col">
        <div className="flex flex-col items-start">
          <strong className="text-[100px] font-[500]"><Counter end={17} /></strong>
          <h4 className="text-[32px] mt-[-25px] font-[500]">лет</h4>
          <p className="text-lg text-start">За 17 лет деятельности ООО «РусТрак» превратилось в крупное предприятие по производству и продаже специальной техники</p>
        </div>

        <div className="flex flex-col items-start">
          <strong className="text-[100px] font-[500]"><Counter end={85} /></strong>
          <h4 className="text-[32px] mt-[-25px] font-[500]">субъектов</h4>
          <p className="text-lg text-start">Мы обеспечили 85 субъектов РФ надёжной техникой коммерческого и специализированного предназначения</p>
        </div>

        <div className="flex flex-col items-start">
          <strong className="text-[100px] font-[500]"><Counter end={11} /></strong>
          <h4 className="text-[32px] mt-[-25px] font-[500]">концернов</h4>
          <p className="text-lg text-start">ООО «РусТрак» дорожит доверием автопрома, которое подтверждено полномочиями от 11 автопроизводителей</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;