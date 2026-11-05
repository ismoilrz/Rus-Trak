import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowDownToLine, Heart } from 'lucide-react';

const HeartPage = () => {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState<any[]>(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  });

  const handleRemoveFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();

    const updated = favorites.filter((fav: any) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return <div className="p-6 text-center text-lg">Hozircha sevimlilar qo'shilmagan ❤️</div>;
  }

  return (
    <div className="container grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
      {favorites.map((item: any) => (
        <div 
          key={item.id}
          // MUHIM JOYI: 'trak' o'rniga item.categorySlug ishlatamiz!
          onClick={() => navigate(`/catalog/${item.categorySlug}/${item.slug}`)} 
          className="h-[440px] max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:h-[360px] max-sm:h-[300px] bg-[#fff] relative rounded-lg overflow-hidden shadow-md cursor-pointer"
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
                  <button onClick={(e) => { e.stopPropagation(); }}>
                    <ShoppingCart size={26} className="max-sm:w-5 max-sm:h-5" />
                  </button>
                </div>
                
                <button onClick={(e) => { e.stopPropagation(); }} className="flex items-center gap-2 text-[12px] whitespace-nowrap">
                  Получить КП <ArrowDownToLine width={'15px'} height={'15px'} />
                </button>
                
                {/* Sevimlilardan o'chirish */}
                <button 
                  onClick={(e) => handleRemoveFavorite(item.id, e)} 
                  className="absolute top-2 right-2 p-1 z-10"
                >
                  <Heart width={'30px'} height={'30px'} className="duration-200 stroke-1 fill-[#fec80b] text-[#fec80b]" />
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