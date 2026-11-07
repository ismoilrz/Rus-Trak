import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Router orqali sahifaga o'tish uchun
import { catalogConfig } from "../../constants/catalogData/catalogConfig";

interface SearchComProps {
    openSearch: boolean;
    closeSearchF: () => void;
}

const SearchCom = ({ openSearch, closeSearchF }: SearchComProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    setSearchTerm("");
    closeSearchF();
  };

  useEffect(() => {
    if (openSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openSearch]);

  const allTracks = catalogConfig 
    ? Object.entries(catalogConfig).flatMap(([categoryKey, categoryValue]) => {
        const traks = categoryValue.trak || [];
        return traks.map((item) => ({
          ...item,
          categoryKey,
        }));
      })
    : [];

  const filteredItems = allTracks.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (categoryKey: string, slug: string) => {
    navigate(`/catalog/${categoryKey}/${slug}`);
    handleClose();
  };

  return (
    <div 
      onClick={handleClose} 
      className={`${openSearch ? "flex" : "hidden"} searchBg items-center justify-center fixed top-0 left-0 z-50 inset-0 bg-[#000000ad]`}
    >
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="w-[55%] max-lg:w-[70%] max-sm:w-[90%] h-[95%] bg-[#b4b4b4ab] rounded-2xl border border-white flex flex-col pb-3"
        >
            <div className="w-[96%] h-10 mx-auto mt-3 rounded-full bg-[#9e9e9ec1] flex items-center px-4 shadow-xl border border-white inset-shadow-[4px_4px_8px_#fff] shrink-0">
                <Search size={26} stroke="#fff" />
                <input type="text" placeholder="Поиск..." value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 text-[#444] outline-none placeholder:text-white bg-transparent w-full" 
                />
            </div>

            <div className="w-full flex justify-between items-center px-5 py-4">
              <p className="text-[20px] max-sm:text-[16px] text-white pt-4 text-shadow-[2px_2px_10px_#0008] shrink-0">
                Результаты поиска:
              </p>
              <button onClick={handleClose} className="py-1 px-3 bg-[#9e9e9ec1] border text-white border-white rounded-full inset-shadow-[4px_4px_8px_#fff]">Выход</button>
            </div>

            <div className="w-[96%] mx-auto mt-3 overflow-y-auto flex-1 pr-2 pb-4 space-y-2 resultS">
                {searchTerm.trim() === "" ? (
                  <p className="text-white/70 text-center mt-10">Введите название продукта...</p>
                ) : filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => handleItemClick(item.categoryKey, item.slug)}
                      className="flex items-center gap-4 bg-white/20 p-3 rounded-xl border border-white/30 hover:bg-[#0001] transition cursor-pointer"
                    >
                      {item.img && (
                        <img src={item.img} alt={item.title} className="w-16 h-12 object-cover rounded-lg" />
                      )}
                      <div>
                        <h4 className="text-white font-medium text-sm max-sm:text-[12px]">{item.title}</h4>
                        <p className="text-white/80 text-xs mt-1">{item.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center mt-10">Товар не найден</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default SearchCom;