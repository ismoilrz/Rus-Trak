import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { catalogConfig } from "../../constants/catalogData/catalogConfig";
import { ArrowDownToLine, Heart, LayoutGrid, List, Search, Settings2, ShoppingCart, X } from "lucide-react";

import notTruk from "../../assets/notTruk.webp"
import { Slider } from "antd";
import { useCartStore } from "../../shared/useCartStore";


const SelectedCatalog = () => {
  const [filterDrop, setFilterDrop] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>("По бренду"); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [mobileAside, setMobileAside] = useState<boolean>(false)
  const [catalogForm, setCatalogForm] = useState<boolean>(false)

  const openMobileAside = () => setMobileAside(true)
  const closeMobileAside = () => setMobileAside(false)
  const openCatForm = () => setCatalogForm(true)
  const closeCatalogForm = () => setCatalogForm(false)

  // const navigate = useNavigate();
const addToCart = useCartStore((state) => state.addToCart);

const handleAddToCart = (item: any) => {
  addToCart({
    id: item.id,
    title: item.title,
    price: item.price,
    img: item.img, 
    slug: item.slug,         
    category: selectedcatalog || ""
  });
  
};

  const [changeTraksUI, setChangeTraksUI] = useState<"tab1" | "tab2">("tab1")

    useEffect(() => {
    const scrollClosed = catalogForm || mobileAside;

    if (scrollClosed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [catalogForm, mobileAside]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFilterDrop(false);
      }
    };

    if (filterDrop) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [filterDrop]);

  const { selectedcatalog } = useParams<{ selectedcatalog: string }>();
  const currentCategory = selectedcatalog ? catalogConfig[selectedcatalog] : null;

  const [searchBrandQuery, setSearchBrandQuery] = useState("");
  const [tempSelectedBrands, setTempSelectedBrands] = useState<string[]>([]);
  const [appliedBrands, setAppliedBrands] = useState<string[]>([]);

  const [tempSelectedFilters, setTempSelectedFilters] = useState<Record<string, string[]>>({});
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string[]>>({});

  const [tempRanges, setTempRanges] = useState<Record<string, [number, number]>>({});
  const [appliedRanges, setAppliedRanges] = useState<Record<string, [number, number]>>({});

  if (!currentCategory) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Категория не найдена!</h2>
      </div>
    );
  }

  const handleTempBrandChange = (brand: string) => {
    if (tempSelectedBrands.includes(brand)) {
      setTempSelectedBrands(tempSelectedBrands.filter((b) => b !== brand));
    } else {
      setTempSelectedBrands([...tempSelectedBrands, brand]);
    }
  };

  const handleTempCheckboxChange = (filterLabel: string, option: string) => {
    const currentList = tempSelectedFilters[filterLabel] || [];
    let updatedList;
    if (currentList.includes(option)) {
      updatedList = currentList.filter((item) => item !== option);
    } else {
      updatedList = [...currentList, option];
    }
    setTempSelectedFilters({
      ...tempSelectedFilters,
      [filterLabel]: updatedList,
    });
  };

  const handleRangeChange = (filterLabel: string, range: [number, number]) => {
    setTempRanges({
      ...tempRanges,
      [filterLabel]: range,
    });
  };

  const handleApplyFilter = () => {
    setAppliedBrands(tempSelectedBrands);
    setAppliedFilters(tempSelectedFilters);
    setAppliedRanges(tempRanges);
  };

  const countMatchingProducts = () => {
    return currentCategory.trak.filter((item) => {
      if (tempSelectedBrands.length > 0) {
        const matchesBrand = tempSelectedBrands.some((brand) =>
          item.title.toLowerCase().includes(brand.toLowerCase())
        );
        if (!matchesBrand) return false;
      }

      for (const [label, options] of Object.entries(tempSelectedFilters)) {
        if (options.length > 0) {
          let itemValue = "";
          if (label.includes("масса")) itemValue = item.mass || "";
          if (label.includes("формула")) itemValue = item.formula || "";
          if (label.toLowerCase().includes("длина")) itemValue = item.length || "";

          const matchesOption = options.some((opt) => itemValue.toLowerCase().includes(opt.toLowerCase()));
          if (!matchesOption) return false;
        }
      }

      for (const [label, rangeValues] of Object.entries(tempRanges)) {
    if (rangeValues && rangeValues.length === 2) {
      let itemNumber = 0;
      if (label.toLowerCase().includes("цена") || label.toLowerCase().includes("стоимость")) {
        itemNumber = item.priceValue || 0;
      } else if (label.toLowerCase().includes("масса")) {
        itemNumber = item.mass ? Number(item.mass.replace(/\D/g, "")) : 0;
      }

      if (itemNumber < rangeValues[0] || itemNumber > rangeValues[1]) {
        return false;
      }
    }
  }

      return true;
    }).length;
  };

  const filteredTracks = currentCategory.trak.filter((item) => {
    if (appliedBrands.length > 0) {
      const matchesBrand = appliedBrands.some((brand) =>
        item.title.toLowerCase().includes(brand.toLowerCase())
      );
      if (!matchesBrand) return false;
    }

    for (const [label, options] of Object.entries(appliedFilters)) {
      if (options.length > 0) {
        let itemValue = "";
        if (label.includes("масса")) itemValue = item.mass || "";
        if (label.includes("формула")) itemValue = item.formula || "";
        if (label.toLowerCase().includes("длина")) itemValue = item.length || "";

        const matchesOption = options.some((opt) => itemValue.toLowerCase().includes(opt.toLowerCase()));
        if (!matchesOption) return false;
      }
    }

    for (const [label, rangeValues] of Object.entries(appliedRanges)) {
      if (rangeValues && rangeValues.length === 2) {
        let itemNumber = 0;
        if (label.toLowerCase().includes("цена") || label.toLowerCase().includes("стоимость")) {
          itemNumber = item.priceValue || 0;
        } else if (label.toLowerCase().includes("масса")) {
          itemNumber = item.mass ? Number(String(item.mass).replace(/\D/g, "")) : 0;
        }

        if (itemNumber < rangeValues[0] || itemNumber > rangeValues[1]) {
          return false;
        }
      }
    }

    return true;
  }).sort((a, b) => {
    if (sortType === "По возрастанию цены") {
      return (a.priceValue || 0) - (b.priceValue || 0);
    }
    if (sortType === "По популярности") {
      return (b.rating || 0) - (a.rating || 0);
    }
    if (sortType === "Сначала новые") {
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    }
    if (sortType === "В наличии") {
      return (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0);
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="pb-10 relative">
      <div className="container max-xl:px-[3%] flex justify-between items-center py-6 max-lg:flex-col max-lg:items-start">
        <div className="flex items-end gap-6 max-md:flex-col max-md:items-start max-md:gap-2">
          <h1 className="text-3xl max-md:text-[26px] font-[500] text-black">{currentCategory.title}</h1>
          <span className="text-[#a1a1a1]">{filteredTracks.length} товаров</span>
        </div>

        <div className="flex gap-30 items-center max-lg:hidden">
          <div ref={dropdownRef} className="h-full flex gap-2 items-center relative">
            <label className="text-[#a1a1a1] text-[14px]">Сортировка:</label>
            <button 
              onClick={() => {setFilterDrop((v) => !v);}} 
              className="duration-200 hover:text-[#fec80b] font-medium"
            >
              {sortType}
            </button>

            {filterDrop && (
              <div onClick={(e) => e.stopPropagation()} className="absolute z-40 top-7 left-[-20px] duration-200 transition rounded-[6px] flex flex-col items-start border h-auto w-[220px] font-[500] bg-[#fff] shadow-md">
                <button onClick={() => { setSortType("По бренду"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">По бренду</button>
                <button onClick={() => { setSortType("По популярности"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">По популярности</button>
                <button onClick={() => { setSortType("Сначала новые"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">Сначала новые</button>
                <button onClick={() => { setSortType("В наличии"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">В наличии</button>
                <button onClick={() => { setSortType("По возрастанию цены"); setFilterDrop(false); }} className="py-2 pl-3 w-full text-start">По возрастанию цены</button>
              </div>
            )}
          </div>

          <div className="flex gap-3 text-[#a1a1a1]">
            <button onClick={() => setChangeTraksUI("tab2")} className={`p-2 rounded-full ${changeTraksUI === "tab2" ? "bg-[#fec80b] text-black" : "bg-transparent"}`}><List /></button>
            <button onClick={() => setChangeTraksUI("tab1")} className={`p-2 rounded-full ${changeTraksUI === "tab1" ? "bg-[#fec80b] text-black" : "bg-transparent"}`}><LayoutGrid fill="#000" stroke="#000" /></button>
          </div>
        </div>

        <div className="hidden mt-5 w-full max-lg:flex justify-between">
          <div className="flex items-center text-lg font-medium gap-3">
            <button onClick={openMobileAside} className="h-10 w-10 bg-[#fec80b] rounded-md flex items-center justify-center"><Settings2 /></button>
            <span>Фильтр</span>
          </div>
          <div ref={dropdownRef} className="flex flex-col items-center relative">
            <label className="text-[#a1a1a1] text-[14px]">Сортировка:</label>
            <button 
              onClick={() => {setFilterDrop((v) => !v);}} 
              className="duration-200 hover:text-[#fec80b] font-medium"
            >
              {sortType}
            </button>

            {filterDrop && (
              <div onClick={(e) => e.stopPropagation()} className="absolute z-40 top-12 right-[0px] duration-200 transition rounded-[6px] flex flex-col items-start border h-auto w-[220px] font-[500] bg-[#fff] shadow-md">
                <button onClick={() => { setSortType("По бренду"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">По бренду</button>
                <button onClick={() => { setSortType("По популярности"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">По популярности</button>
                <button onClick={() => { setSortType("Сначала новые"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">Сначала новые</button>
                <button onClick={() => { setSortType("В наличии"); setFilterDrop(false); }} className="py-2 pl-3 border-b w-full text-start">В наличии</button>
                <button onClick={() => { setSortType("По возрастанию цены"); setFilterDrop(false); }} className="py-2 pl-3 w-full text-start">По возрастанию цены</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container max-xl:px-[3%] flex justify-between gap-6"> 
        <aside className="w-[300px] max-lg:hidden catAs max-h-[80vh] overflow-y-auto p-6 bg-white rounded-[10px] shadow-sm border border-gray-100 flex flex-col gap-6 sticky top-[12vh]">

          {currentCategory.filters.map((filter, index) => { 
            if (filter.type === "search") {
              const filteredOptions = filter.options?.filter((opt: string) =>
                opt.toLowerCase().includes(searchBrandQuery.toLowerCase())
              );

              return (
                <div key={index} className="flex flex-col gap-3">
                  <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                  <div className="relative">
                    <div className="w-full border flex items-center justify-between py-2 rounded-md overflow-hidden px-2 bg-white">
                      <input type="text" placeholder="Найти" value={searchBrandQuery}
                        onChange={(e) => setSearchBrandQuery(e.target.value)}
                        className="w-full outline-none text-sm" 
                      />
                      <Search size={24} />
                    </div>
                  </div>

                  {filteredOptions && (
                    <div className="flex flex-col gap-2 pr-1">
                      {filteredOptions.map((opt: string, optIdx: number) => (
                        <label key={optIdx} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                          <div className="checkbox-wrapper-33">
                            <span className="checkbox">
                              <input className="checkbox__trigger visuallyhidden" type="checkbox" checked={tempSelectedBrands.includes(opt)}
                                onChange={() => handleTempBrandChange(opt)}
                              />
                              <span className="checkbox__symbol">
                                <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 14l8 7L24 7"></path>
                                </svg>
                              </span>
                              <p className="checkbox__textwrapper">{opt}</p>
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (filter.type === "checkbox") {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                  <div className="flex flex-col gap-2 pr-1">
                    {filter.options.map((opt: string, optIdx: number) => {
                      const isChecked = tempSelectedFilters[filter.label]?.includes(opt) || false;
                      return (
                        <label key={optIdx} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                          <div className="checkbox-wrapper-33">
                            <span className="checkbox">
                              <input className="checkbox__trigger visuallyhidden" type="checkbox" checked={isChecked} onChange={() => handleTempCheckboxChange(filter.label, opt)}/>
                              <span className="checkbox__symbol">
                                <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 14l8 7L24 7"></path>
                                </svg>
                              </span>
                              <p className="checkbox__textwrapper">{opt}</p>
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (filter.type === "range") {
              const currentRange = tempRanges[filter.label] || [0, 10000000];

              return (
                <div key={index} className="flex flex-col gap-3">
                  <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                   <div className="px-2">
                    <Slider range min={0} max={10000000} step={100000} value={currentRange}
                      onChange={(values) => {
                        handleRangeChange(filter.label, values as [number, number]);
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg px-2 py-1.5 focus-within:border-[#fec80b]">
                      <span className="text-xs text-gray-400 mr-1">от</span>
                      <input type="number" value={currentRange[0]}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          handleRangeChange(filter.label, [val, currentRange[1]]);
                        }}
                        className="w-full text-sm outline-none bg-transparent"
                      />
                    </div>
                    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg px-2 py-1.5 focus-within:border-[#fec80b]">
                      <span className="text-xs text-gray-400 mr-1">до</span>
                      <input type="number" value={currentRange[1]}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          handleRangeChange(filter.label, [currentRange[0], val]);
                        }}
                        className="w-full text-sm outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}

          <button 
            onClick={handleApplyFilter}
            className="w-full py-3 bg-[#fec80b] hover:bg-yellow-500 rounded-md transition-colors cursor-pointer shadow-sm font-medium text-sm flex items-center justify-center gap-2"
          >
            Показать товары ({countMatchingProducts()})
          </button>
        </aside>

        {changeTraksUI === "tab1" && (
          <main className="w-full flex-1">
          <div className="w-full grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-5 max-sm:gap-3">
            {filteredTracks.length > 0 ? (
              filteredTracks.map((item) => (
                  <Link to={`/catalog/${selectedcatalog}/${item.slug}`}>
                    <div key={item.id} className="h-[440px] max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:h-[360px] max-sm:h-[300px ] bg-[#fff] relative rounded-lg overflow-hidden">
                        <img className="h-[65%] max-lg:h-[45%] w-full object-cover" src={item.img} alt="Image" />
                        <span className="text-[18px] max-sm:mt-[-10px] max-md:text-[16px] line-clamp-1 max-lg:line-clamp-2 mt-3 ml-3">{item.title}</span>
                      <div className="h-[35%] p-3 flex flex-col justify-between">
                        <div className="max-md:mt-[-10px] max-sm:mt-[-25px]">
                            <h5 className="text-[22px] max-md:text-lg max-sm:text-[16px] pb-2 font-[500]">{item.price}</h5>
                          <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-3">
                            <div className="w-full flex items-center gap-3 max-sm:justify-between">
                              <button className="px-5 max-lg:px-10 max-md:px-6 max-sm:w-[80%] py-2 text-[12px] rounded-[4px] bg-[#fec80b] font-medium">Подробнее</button>
                              <button onClick={(e) => {handleAddToCart(item); e.preventDefault(); e.stopPropagation()} }><ShoppingCart size={26} className="max-sm:w-5 max-sm:h-5" /></button>
                            </div>
                            <button onClick={openCatForm} className="flex items-center gap-2 text-[12px] whitespace-nowrap">Получить КП <ArrowDownToLine width={'15px'} height={'15px'} /></button>
                            <button className="absolute top-2 right-2 p-1"><Heart width={'30px'} height={'30px'} className="duration-200 stroke-1 hover:fill-[#fec80b]" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
              ))
            ) : (
              <div className="col-span-3 flex flex-col items-center justify-center pt-15">
                <img className="rounded-full w-60 h-60 object-cover mb-4" src={notTruk} alt="Not found" />
                <p className="text-center text-gray-500 text-[20px]">Товар не найден</p>
              </div>
            )}
          </div>

          <div className="text-lg max-md:text-[16px] mt-20">
            <p>{currentCategory.content?.intro}</p>
            <div>
              <h5 className="text-[22px] mt-6 font-[400]">{currentCategory.content?.assortment}</h5>
              <p className="mt-3">{currentCategory.content?.assortmentdesc1}</p>
              <div className="flex flex-col gap-2 py-2">
                <p>{currentCategory.content?.brand}</p>
                {currentCategory.content?.brands?.map((br, idx) => (
                  <div key={idx} className="flex gap-3"><span className="text-[#fec80b]">♦</span><li>{br}</li></div>
                ))}
              </div>
              <p>{currentCategory.content?.assortmentdesc2}</p>
              <div className="flex flex-col gap-4 mt-4">
                {currentCategory.content?.assortmentdesc2features?.map((asdec, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-[#fec80b]">♦</span>
                    <li>{asdec}</li>
                  </div>
                ))}
              </div>
              <p className="mt-3">{currentCategory.content?.assortmentdesc3}</p>
            </div>

            <div>
              <h5 className="text-[22px] font-[400] mt-2">{currentCategory.content?.featuresLabel}</h5>
              <div className="mt-2 flex flex-col gap-3">
                {currentCategory.content?.features?.map((fea, idx) => (
                  <div key={idx} className="flex gap-3"><span className="text-[#fec80b]">♦</span> 
                    <div>
                      <p>{fea.featuresLAbel}</p>
                      <p>{fea.featuresdesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-[22px] font-[400] mt-6">{currentCategory.content?.applicationLabel}</h5>
              <p className="mt-3">{currentCategory.content?.applicationDesc}</p>
              <h5 className="text-[22px] font-[400] mt-6">{currentCategory.content?.workingTitle}</h5>
              <div className="flex flex-col gap-4 mt-3">
                {currentCategory.content?.workingfeatures?.map((work, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-[#fec80b]">♦</span>
                    <div>
                      <p>{work.workingFeaturesLabel}</p>
                      <p>{work.workingFeaturesDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-[22px] font-[400] mt-6">{currentCategory.content?.equipmentTItle}</h5>
              <p className="mt-4">{currentCategory.content?.equipmentdesc}</p>
            </div>
          </div>
          </main>
        )}
        {changeTraksUI === "tab2" && (
          <main className="w-full flex-1">
            <div className="w-full flex flex-col max-lg:grid max-lg:grid-cols-3 max-sm:grid-cols-2 gap-5">
              {filteredTracks.length > 0 ? (
                filteredTracks.map((item) => (
                  <>
                    <Link to={`/catalog/${selectedcatalog}/${item.slug}`} key={item.id} className="h-[230px] max-lg:hidden w-full bg-[#fff] relative flex justify-between gap-4 rounded-lg overflow-hidden">
                    <div className="flex w-[75%] gap-4">
                      <img className="h-full w-[30%] object-cover rounded-md" src={item.img} alt="Image" />
                      <div className="w-full flex flex-col justify-center">
                        <span className="text-[20px] mb-3">{item.title}</span>
                        
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center text-[14px] text-[#a1a1a1]">
                            <span className="whitespace-nowrap pr-2">Марка</span>
                            <div className="border-b border-[#a1a1a1] border-dashed flex-1 mx-2"></div>
                            <span className="whitespace-nowrap text-[#a1a1a1]">МАЗ</span>
                          </div>

                          <div className="flex items-center text-[14px] text-[#a1a1a1]">
                            <span className="whitespace-nowrap pr-2">Габариты ТС</span>
                            <div className="border-b border-[#a1a1a1] border-dashed flex-1 mx-2"></div>
                            <span className="whitespace-nowrap text-[#a1a1a1]">10070 x 2550 x 2550 мм</span>
                          </div>

                          <div className="flex items-center text-[14px] text-[#a1a1a1]">
                            <span className="whitespace-nowrap pr-2">Грузоподъёмность, кг</span>
                            <div className="border-b border-[#a1a1a1] border-dashed flex-1 mx-2"></div>
                            <span className="whitespace-nowrap text-[#a1a1a1]">13800</span>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-1 pr-4">
                      <h5 className="text-[22px] pb-2 font-[500]">{item.price}</h5>
                      <div className="flex flex-col gap-3">
                        <button className="w-[150px] py-2 text-[16px] rounded-[4px] bg-[#fec80b] whitespace-nowrap">Подробнее</button>
                        <button onClick={openCatForm} className="w-[150px] flex items-center justify-center gap-2 text-[16px] whitespace-nowrap">Получить КП <ArrowDownToLine width={'15px'} height={'15px'} /></button>
                      </div>
                      <button className="absolute top-2 left-2 p-1"><Heart width={'30px'} height={'30px'} className="duration-200 stroke-1 hover:fill-[#fec80b]" /></button>
                    </div>
                    </Link>

                    <Link to={`/catalog/${selectedcatalog}/${item.slug}`}>
                      <div key={item.id} className="h-[360px] max-md:h-[330px] max-sm:h-[300px] hidden max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:h-[360px] max-sm:h-[300px ] bg-[#fff] relative rounded-lg overflow-hidden">
                        <img className="h-[65%] max-lg:h-[45%] w-full object-cover" src={item.img} alt="Image" />
                        <span className="text-[18px] max-sm:mt-[-10px] max-md:text-[16px] line-clamp-1 max-lg:line-clamp-2 mt-3 ml-3">{item.title}</span>
                        <div className="h-[35%] p-3 flex flex-col justify-between">
                          <div className="max-md:mt-[-10px] max-sm:mt-[-25px]">
                            <h5 className="text-[22px] max-md:text-lg max-sm:text-[16px] pb-2 font-[500]">{item.price}</h5>
                            <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-3">
                              <div className="w-full flex items-center gap-3 max-sm:justify-between">
                                <button className="px-5 max-lg:px-10 max-md:px-6 max-sm:w-[80%] py-2 text-[12px] rounded-[4px] bg-[#fec80b] font-medium">Подробнее</button>
                                <button onClick={(e) => {handleAddToCart(item); e.preventDefault(); e.stopPropagation()}}><ShoppingCart size={26} className="max-sm:w-5 max-sm:h-5" /></button>
                              </div>
                              <button onClick={openCatForm} className="flex items-center gap-2 text-[12px]">Получить КП <ArrowDownToLine width={'15px'} height={'15px'} /></button>
                              <button className="absolute top-2 right-2 p-1"><Heart width={'30px'} height={'30px'} className="duration-200 stroke-1 hover:fill-[#fec80b]" /></button>
                            </div>
                          </div>
                        </div>
                        </div>
                    </Link>
                  </>
                ))
              ) : (
                <div className="col-span-3 flex flex-col items-center justify-center pt-15">
                  <img className="rounded-full w-60 h-60 object-cover mb-4" src={notTruk} alt="Not found" />
                  <p className="text-center text-gray-500 text-[20px]">Товар не найден</p>
                </div>
              )}
            </div>

              <div className="text-lg max-md:text-[16px] mt-20">
                      <p>{currentCategory.content?.intro}</p>
                      <div>
                        <h5 className="text-[22px] mt-6 font-[400]">{currentCategory.content?.assortment}</h5>
                        <p className="mt-3">{currentCategory.content?.assortmentdesc1}</p>
                        <div className="flex flex-col gap-2 py-2">
                          <p>{currentCategory.content?.brand}</p>
                          {currentCategory.content?.brands?.map((br, idx) => (
                            <div key={idx} className="flex gap-3"><span className="text-[#fec80b]">♦</span><li>{br}</li></div>
                          ))}
                        </div>
                        <p>{currentCategory.content?.assortmentdesc2}</p>
                        <div className="flex flex-col gap-4 mt-4">
                          {currentCategory.content?.assortmentdesc2features?.map((asdec, idx) => (
                            <div key={idx} className="flex gap-3">
                              <span className="text-[#fec80b]">♦</span>
                              <li>{asdec}</li>
                            </div>
                          ))}
                        </div>
                        <p className="mt-3">{currentCategory.content?.assortmentdesc3}</p>
                      </div>
                      <div>
                        <h5 className="text-[22px] font-[400] mt-2">{currentCategory.content?.featuresLabel}</h5>
                        <div className="mt-2 flex flex-col gap-3">
                          {currentCategory.content?.features?.map((fea, idx) => (
                            <div key={idx} className="flex gap-3"><span className="text-[#fec80b]">♦</span> 
                              <div>
                                <p>{fea.featuresLAbel}</p>
                                <p>{fea.featuresdesc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-[22px] font-[400] mt-6">{currentCategory.content?.applicationLabel}</h5>
                        <p className="mt-3">{currentCategory.content?.applicationDesc}</p>
                        <h5 className="text-[22px] font-[400] mt-6">{currentCategory.content?.workingTitle}</h5>
                        <div className="flex flex-col gap-4 mt-3">
                          {currentCategory.content?.workingfeatures?.map((work, idx) => (
                            <div key={idx} className="flex gap-3">
                              <span className="text-[#fec80b]">♦</span>
                              <div>
                                <p>{work.workingFeaturesLabel}</p>
                                <p>{work.workingFeaturesDesc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-[22px] font-[400] mt-6">{currentCategory.content?.equipmentTItle}</h5>
                        <p className="mt-4">{currentCategory.content?.equipmentdesc}</p>
                      </div>
              </div>
          </main>
        )}
      </div>

      {/* form modal */}

      {catalogForm && (
        <div onClick={closeCatalogForm} className="fixed top-0 left-0 inset-0 z-50 bg-[#0009] flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-[500px] max-sm:w-[90%] py-15 flex flex-col items-center rounded-lg relative">
            <button onClick={closeCatalogForm}><X width={'30px'} height={'30px'} className="absolute top-3 right-3" /></button>
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

      {/* mobile filter */}
      <div 
        onClick={closeMobileAside} 
        className={`fixed inset-0 z-50 bg-[#0009] transition-opacity duration-100 ease-in-out ${
          mobileAside ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <aside 
          onClick={(e) => e.stopPropagation()}
          className={`w-[300px] h-[100%] max-sm:w-full overflow-y-auto p-6 bg-white border border-gray-100 flex flex-col gap-6 fixed top-0 left-0 z-50 shadow-2xl transition-transform duration-300 ease-in-out 
            ${mobileAside ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button onClick={closeMobileAside} className="absolute top-3 right-3"><X size={28}/></button>
          {currentCategory.filters.map((filter, index) => { 
            if (filter.type === "search") {
              const filteredOptions = filter.options?.filter((opt: string) =>
                opt.toLowerCase().includes(searchBrandQuery.toLowerCase())
              );

              return (
                <div key={index} className="flex flex-col gap-3">
                  <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                  <div className="relative">
                    <div className="w-full border flex items-center justify-between py-2 rounded-md overflow-hidden px-2 bg-white">
                      <input 
                        type="text" 
                        placeholder="Найти" 
                        value={searchBrandQuery}
                        onChange={(e) => setSearchBrandQuery(e.target.value)}
                        className="w-full outline-none text-sm" 
                      />
                      <Search size={24} />
                    </div>
                  </div>

                  {filteredOptions && (
                    <div className="flex flex-col gap-2 pr-1">
                      {filteredOptions.map((opt: string, optIdx: number) => (
                        <label key={optIdx} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                          <div className="checkbox-wrapper-33">
                            <span className="checkbox">
                              <input 
                                className="checkbox__trigger visuallyhidden" 
                                type="checkbox" 
                                checked={tempSelectedBrands.includes(opt)}
                                onChange={() => handleTempBrandChange(opt)}
                              />
                              <span className="checkbox__symbol">
                                <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 14l8 7L24 7"></path>
                                </svg>
                              </span>
                              <p className="checkbox__textwrapper">{opt}</p>
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (filter.type === "checkbox") {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                  <div className="flex flex-col gap-2 pr-1">
                    {filter.options.map((opt: string, optIdx: number) => {
                      const isChecked = tempSelectedFilters[filter.label]?.includes(opt) || false;
                      return (
                        <label key={optIdx} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                          <div className="checkbox-wrapper-33">
                            <span className="checkbox">
                              <input 
                                className="checkbox__trigger visuallyhidden" 
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={() => handleTempCheckboxChange(filter.label, opt)}
                              />
                              <span className="checkbox__symbol">
                                <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 14l8 7L24 7"></path>
                                </svg>
                              </span>
                              <p className="checkbox__textwrapper">{opt}</p>
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (filter.type === "range") {
              const currentRange = tempRanges[filter.label] || [0, 10000000];

              return (
                <div key={index} className="flex flex-col gap-3">
                  <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                  <div className="px-2">
                    <Slider 
                      range 
                      min={0} 
                      max={10000000} 
                      step={100000} 
                      value={currentRange}
                      onChange={(values) => {
                        handleRangeChange(filter.label, values as [number, number]);
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg px-2 py-1.5 focus-within:border-[#fec80b]">
                      <span className="text-xs text-gray-400 mr-1">от</span>
                      <input 
                        type="number" 
                        value={currentRange[0]}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          handleRangeChange(filter.label, [val, currentRange[1]]);
                        }}
                        className="w-full text-sm outline-none bg-transparent"
                      />
                    </div>
                    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg px-2 py-1.5 focus-within:border-[#fec80b]">
                      <span className="text-xs text-gray-400 mr-1">до</span>
                      <input 
                        type="number" 
                        value={currentRange[1]}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          handleRangeChange(filter.label, [currentRange[0], val]);
                        }}
                        className="w-full text-sm outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}

          <button 
            onClick={() => {
              handleApplyFilter();
              closeMobileAside();
            }}
            className="w-full py-3 bg-[#fec80b] hover:bg-yellow-500 rounded-md transition-colors cursor-pointer shadow-sm font-medium text-sm flex items-center justify-center gap-2"
          >
            Показать товары ({countMatchingProducts()})
          </button>
        </aside>
      </div>

    </div>
  );
};

export default SelectedCatalog;
