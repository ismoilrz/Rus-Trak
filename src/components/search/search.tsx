import { Search} from "lucide-react";
import { useEffect } from "react";

interface SearchProps {
    openSearch: boolean;
    closeSearchF: () => void;
}

const SearchCom = ({openSearch, closeSearchF}:SearchProps) => {
 useEffect(() => {
    const scrollClosed = openSearch;

    if (scrollClosed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openSearch]);
    
  return (
    <div onClick={closeSearchF} className={`${openSearch ? "flex" : "hidden"} searchBg items-center justify-center fixed top-0 left-0 z-50 inset-0 bg-[#000000ad]`}>
        <div onClick={(e) => e.stopPropagation()} className="w-[55%] h-[95vh] bg-[#b4b4b4ab] rounded-2xl border border-white">
                <div className="w-[96%] h-10 mx-auto mt-3 rounded-full bg-[#9e9e9ec1] flex items-center px-4 shadow-xl border border-white inset-shadow-[4px_4px_8px_#fff]">
                    <Search size={26} stroke="#fff" />
                    <input type="text" placeholder="Поиск..." className="pl-4 text-[#444] outline-none placeholder:text-white" />
                </div>
                <p className="text-[20px] text-white ml-5 pt-4 text-shadow-[2px_2px_10px_#0008]">Результаты поиска:</p>
        </div>
    </div>
  )
}

export default SearchCom