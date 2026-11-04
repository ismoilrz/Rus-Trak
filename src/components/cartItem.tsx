import React, { useEffect, useState } from 'react';
import { useCartStore, type CartItem } from '../shared/useCartStore';
import { Trash, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItemCardProps {
  item: CartItem & { slug?: string; category?: string }; 
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const [CartItemForm, setCartItemForm] = useState<boolean>(false)
  const openForm = () => setCartItemForm(true)
  const closeForm = () => setCartItemForm(false)

   useEffect(() => {
      const scrollClosed = CartItemForm;
  
      if (scrollClosed) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "";
      };
    }, [CartItemForm]);

  return (
    <>
    <div className='flex max-md:flex-col justify-between items-center h-50 max-lg:h-40 max-md:h-auto w-full bg-[#f5f5f5] max-md:py-5'>
        <div className='flex items-center max-md:justify-start max-md:items-start gap-5 h-full w-[75%] max-md:w-full max-lg:w-[60%]'>
            <Link to={`/catalog/${item.category}/${item.slug}`} className='h-full w-[32%] max-lg:w-50 max-md:w-100 max-md:h-30'>
                <img className='h-full object-cover w-full' src={item.img} alt={item.title} />
            </Link>
            <div className='flex w-full items-center max-lg:items-start max-lg:flex-col max-lg:py-5 max-md:py-0 max-md:h-full max-lg:justify-between h-full'>
                <Link to={`/catalog/${item.category}/${item.slug}`} className='w-full flex flex-col max-md:justify-start max-md:h-full gap-4'>
            <h4 className='text-[20px] max-lg:text-[16px] max-w-[90%] max-md:max-w-full max-md:text-[14px] font-semibold'>{item.title}</h4>
            <div className='w-full flex gap-3 text-[#a1a1a1] max-lg:hidden'>
                <p>Габариты ТС</p>
                <div className='w-full border-b border-dashed border-[#a1a1a1] flex-1'></div>
                <p>10070 x 2550 x 2550 мм</p>
            </div>
            </Link>

      <div className='flex justify-center gap-4 text-[20px] max-md:hidden max-lg:text-[16px] font-semibold border-2 rounded-lg border-[#a1a1a1] py-1 ml-[5%] max-lg:ml-0 w-[120px]'>
        <button className='flex w-[30px] justify-center border-r-2 border-[#a1a1a1]' onClick={() => decreaseQuantity(item.id)}>-</button>
        <span className='w-[20px] max-lg:w-3 flex justify-center'>{item.quantity}</span>
        <button className='flex w-[30px] justify-center border-l-2 border-[#a1a1a1]' onClick={() => addToCart(item)}>+</button>
      </div>
            </div>
        </div>

     <div className='w-[15%] max-md:w-full max-md:flex max-md:justify-between max-md:items-center max-md:mt-4 max-md:pt-4 max-md:border-t max-md:border-[#a1a1a1] max-md:px-4'>
         
        <div className='max-md:flex hidden justify-center gap-4 text-[20px] max-lg:text-[16px] font-semibold border-2 rounded-lg border-[#a1a1a1] py-1 ml-[5%] max-lg:ml-0 w-[120px]'>
            <button className='flex w-[30px] justify-center border-r-2 border-[#a1a1a1]' onClick={() => decreaseQuantity(item.id)}>-</button>
            <span className='w-[20px] max-lg:w-3 flex justify-center'>{item.quantity}</span>
            <button className='flex w-[30px] justify-center border-l-2 border-[#a1a1a1]' onClick={() => addToCart(item)}>+</button>
        </div>
        <div className='flex w-[100%] px-4 flex-col gap-5 max-md:gap-2 max-md:flex-row max-md:items-center max-md:w-auto'>
            <button onClick={openForm} className='w-full max-sm:text-[12px] max-lg:w-25 py-3 max-md:px-2 max-md:w-auto max-lg:py-2 bg-[#fec80b] rounded-lg'>Получить КП</button>
            <button onClick={() => removeFromCart(item.id)} className='flex justify-center w-full max-lg:w-25 max-md:w-auto text-lg text-[#a1a1a1]'><span className='max-md:hidden'>Удалить</span> <Trash /></button>
        </div>
     </div>
    </div>

    {CartItemForm && (
        <div onClick={closeForm} className="fixed top-0 left-0 inset-0 z-50 bg-[#0009] flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-[500px] max-sm:w-[90%] py-15 flex flex-col items-center rounded-lg relative">
            <button onClick={closeForm}><X width={'30px'} height={'30px'} className="absolute top-3 right-3" /></button>
            <h3 className="text-[24px] text-center max-sm:text-[20px] font-[500] text-black">Получить коммерческое предложение</h3>
            <form className="w-[70%] py-12 max-sm:py-6! max-sm:py-8 flex flex-col gap-3 max-sm:w-[80%]">
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">Ваше имя *</label>
                    <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="Имя" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">E-mail *</label>
                    <input className="rounded-[4px] border border-black w-full h-11 pl-4 outline-hidden duration-200 focus-within:shadow-[2px_1px_8px_#fec90b7d] focus-within:border-[#fec80b]" type="text" placeholder="your@mail.com" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[14px]">Телефон *</label>
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
                    <p className="text-[14px] leading-[110%] text-[#a1a1a1]">Я согласен <a className="text-purple-800" href="#">на обработку персональных данных</a></p>
                </div>
            </form>
                    <button className="py-3 rounded-[4px] bg-[#fec80b] w-[70%] duration-200 hover:opacity-[0.7]">Получить КП</button>
               
        </div>
        </div>
      )}
    </>
  );
};