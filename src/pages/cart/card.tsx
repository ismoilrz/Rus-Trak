import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../shared/useCartStore';
import { CartItemCard } from '../../components/cartItem';
import { useTranslation } from 'react-i18next';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCartStore();
  const { t } = useTranslation();

  return (
    <div className='container max-xl:px-[3%]'>
      {cart.length === 0 ? (
        <div >
          <p className='text-[22px]'>{t('cart.emptyTitle')}</p>
          <p className='text-[22px]'>{t('cart.emptyDesc')}</p>
          <div className='flex gap-4 mt-10'>
            <button className='px-5 py-2 rounded-md bg-transparent border-2 border-[#fec80b] duration-200 hover:bg-[#fec80b]' onClick={() => navigate('/')}>{t('cart.toHome')}</button>
            <button className='px-5 py-2 rounded-md bg-[#fec80b] border-2 border-[#fec80b] duration-200 hover:bg-transparent' onClick={() => navigate('/catalog')}>{t('cart.toCatalog')}</button>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex flex-col gap-6'>
            {cart.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className='flex items-end gap-[10%] max-lg:flex-col max-lg:items-center'>
            <div className="bg-white w-[500px] max-sm:w-full py-15 flex flex-col items-start max-lg:items-center rounded-lg relative">
            <h3 className="text-[32px] max-sm:text-[26px] text-center font-[500] text-black">{t('cart.orderTitle')}</h3>
            <form className="w-[70%] max-sm:w-[85%] py-12 pt-8 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">{t('cart.nameLabel')}</label>
                    <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder={t('cart.namePlaceholder')} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">{t('cart.emailLabel')}</label>
                    <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="your@mail.com" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">{t('cart.phoneLabel')}</label>
                    <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="number" placeholder="+998" />
                </div>
                <div className="flex items-center">
                    <div className="checkbox-wrapper-33">
                        <label className="checkbox">
                            <input className="checkbox__trigger visuallyhidden" type="checkbox" />
                            <span className="checkbox__symbol">
                            <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 14l8 7L24 7"></path>
                            </svg>
                            </span>
                        </label>
                    </div>
                    <p className="text-[14px] leading-[110%] text-[#a1a1a1]">{t('cart.agreementText')} <a className="text-purple-800" href="#">{t('cart.agreementLink')}</a></p>
                </div>
            </form>
                    <button className="py-3 max-sm:w-[85%] rounded-[4px] bg-[#fec80b] w-[70%] duration-200 hover:opacity-[0.7]">{t('cart.submitBtn')}</button>
               
        </div>

        <div className='w-[400px] max-sm:w-full flex flex-col items-center py-15'>
            <h3 className='text-3xl max-sm:text-[26px] max-sm:text-center font-medium'>{t('cart.questionsTitle')}</h3>
            <p className='max-w-[80%] max-sm:text-[14px] text-center text-[#a1a1a1] py-4'>{t('cart.questionsDesc')}</p>
            <div className='text-[#a1a1a1] max-sm:text-[14px] max-sm:text-center'>
                <p>{t('cart.regionsPhone')} <a href="tel:8 (800) 511-05-25">8 (800) 511-05-25</a></p>
                <p>{t('cart.cityPhone')} <a href="tel:8 (831) 225-00-55">8 (831) 225-00-55</a></p>
            </div>
            <button className='w-[75%] mt-6 py-2 border rounded-sm duration-200 hover:bg-black hover:text-white'>{t('cart.callbackBtn')}</button>
        </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart