import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowDownToLine, Heart } from 'lucide-react';
import { useCartStore } from '../../shared/useCartStore'; // Store joylashuvini loyihangizga moslang

const HeartPage = () => {
  const navigate = useNavigate();

  // Savatchaga qo'shish funksiyasini olamiz
  const addToCart = useCartStore((state) => state.addToCart);

  const [favorites, setFavorites] = useState<any[]>(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  });

  // Savatchaga qo'shish handler-i
  const handleAddToCart = (item: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Detail sahifasiga o'tib ketishining oldini oladi

    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img, 
      slug: item.slug,             
      category: item.categorySlug || ""
    });
  };

  const handleRemoveFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();

    const updated = favorites.filter((fav: any) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event("favoritesChanged"));
  };

  if (favorites.length === 0) {
    return <div className="container pt-4">
      <p className='text-[20px]'>Ваше избранное пусто.</p>
      <p className='text-[20px]'>Воспользуйтесь каталогом или поиском, чтобы сохранить подходящий товар.</p>
      <div className='flex gap-4 pt-6'>
        <Link to={'/'}><button className='px-7 py-2 rounded-md border-2 border-[#fec80b] duration-200 hover:bg-[#fec80b]'>На главную</button></Link>
        <Link to={'/catalog'}><button className=' px-7 py-2 rounded-md border-2 border-transparent duration-200 bg-[#fec80b] hover:bg-transparent hover:border-[#fec80b]'>Открыть каталог</button></Link>
      </div>
    </div>;
  }

  return (
    <div className="container grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
      {favorites.map((item: any) => (
        <div 
          key={item.id}
          onClick={() => navigate(`/catalog/${item.categorySlug}/${item.slug}`)} 
          className="h-[440px] max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:h-[360px] max-sm:h-[300px] bg-[#f5f5f5] relative overflow-hidden cursor-pointer"
        >
          <img className="h-[65%] max-lg:h-[45%] w-full object-cover" src={item.img} alt="Image" />
          <span className="text-[18px] max-sm:mt-[-10px] max-md:text-[16px] line-clamp-1 max-lg:line-clamp-2 mt-3 ml-3">{item.title}</span>
          
          <div className="h-[35%] p-3 flex flex-col justify-between">
            <div className="max-md:mt-[-10px] max-sm:mt-[-25px]">
              <h5 className="text-[22px] max-md:text-lg max-sm:text-[16px] pb-2 font-[500]">{item.price}</h5>
              
              <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-3">
                <div className="w-full flex items-center gap-3 max-sm:justify-between">
                  <button className="px-5 max-lg:px-10 max-md:px-6 max-sm:w-[80%] py-2 text-[12px] rounded-[4px] bg-[#fec80b] font-medium">
                    Подробнее
                  </button>
                  
                  <button onClick={(e) => handleAddToCart(item, e)}>
                    <ShoppingCart size={26} className="max-sm:w-5 max-sm:h-5" />
                  </button>
                </div>
                
                <button onClick={(e) => { e.stopPropagation(); }} className="flex items-center gap-2 text-[12px] whitespace-nowrap">
                  Получить КП <ArrowDownToLine width={'15px'} height={'15px'} />
                </button>
                
                <button 
                  onClick={(e) => handleRemoveFavorite(item.id, e)} 
                  className="absolute top-2 right-2 p-1 z-10"
                >
                  <Heart width={'30px'} height={'30px'} className="duration-200 stroke-1 fill-[#fec80b]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeartPage;