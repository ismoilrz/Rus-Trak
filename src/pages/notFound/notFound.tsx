import React from 'react';

import f404 from "../../assets/404.png"
import { Link } from 'react-router-dom';
export const NotFound: React.FC = () => {
  return (
    <div className='container max-xl:px-[3%] flex justify-center items-center'>
        <div className='flex flex-col items-center w-[35%] max-lg:w-full max-lg:py-16'>
            <h3 className='text-[180px] font-bold text-[#fec80b] max-lg:text-[110px] max-sm:text-[80px]'>404</h3>
            <p className='text-[22px] font-semibold text-[#fec80b] max-lg:text-[26px]'>Страница не найдена</p>
            <p className='max-w-[70%] text-center my-5 max-xl:max-w-[90%]'>Пожалуйста воспользуйтесь навигацией или формой поиска, чтобы найти интересующую Вас информацию.</p>
            <Link to={"/catalog"} className='w-full flex justify-center'><button className='w-[70%] py-2 rounded-md bg-[#fec80b]'>Перейти в каталог</button></Link>
        </div>
        <img className='max-lg:hidden' src={f404} alt="404" />
    </div>
  );
};

export default NotFound;