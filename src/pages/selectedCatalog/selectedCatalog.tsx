import { useState } from "react";
import { useParams } from "react-router-dom";
import { catalogConfig } from "../../constants/catalogData/catalogConfig";
import { ArrowDownToLine, Heart, LayoutGrid, List, Search, ShoppingCart } from "lucide-react";

import notTruk from "../../assets/notTruk.webp"
import { Slider } from "antd";

const SelectedCatalog = () => {
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
            itemNumber = item.massValue || 0;
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
          itemNumber = item.massValue || 0;
        }

        if (itemNumber < rangeValues[0] || itemNumber > rangeValues[1]) {
          return false;
        }
      }
    }

    return true;
  });

  return (
    <div className="bg-[#f5f5f5] pb-10">
      <div className="container flex justify-between items-center py-6">
        <div className="flex items-end gap-6">
          <h1 className="text-3xl font-[500] text-black">{currentCategory.title}</h1>
          <span className="text-[#a1a1a1]">{filteredTracks.length} товаров</span>
        </div>

        <div className="flex gap-30 items-center">
          <div className="h-full flex gap-2 items-center">
            <label className="text-[#a1a1a1] text-[14px]">Сортировка:</label>
            <button>По бренду</button>
          </div>

          <div className="flex gap-3 text-[#a1a1a1]">
            <button><List /></button>
            <button><LayoutGrid /></button>
          </div>
        </div>
      </div>

      <div className="container flex justify-between gap-6">
        <aside className="w-[300px] catAs max-h-[80vh] overflow-y-auto p-6 bg-white rounded-[10px] shadow-sm border border-gray-100 flex flex-col gap-6 sticky top-[12vh]">

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
                    <div className="flex flex-col gap-2 overflow-y-auto pr-1">
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
                  <div className="flex flex-col gap-2 pr-1 overflow-y-auto">

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

        <main className="w-full flex-1">
          <div className="w-full grid grid-cols-3 gap-5">
            {filteredTracks.length > 0 ? (
              filteredTracks.map((item) => (
                <div key={item.id} className="h-[440px] bg-[#fff] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img className="h-[65%] w-full object-cover" src={item.img} alt="Image" />
                  <div className="h-[35%] p-3 flex flex-col justify-between">
                    <span className="text-[18px] line-clamp-2">{item.title}</span>
                    <div>
                      <h5 className="text-[22px] pb-2 font-[500]">{item.price}</h5>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button className="px-5 py-2 text-[12px] rounded-[4px] bg-[#fec80b] font-medium">Подробнее</button>
                          <button><ShoppingCart size={26} /></button>
                        </div>
                        <button className="flex items-center gap-2 text-[12px]">Получить КП <ArrowDownToLine width={'15px'} height={'15px'} /></button>
                        <button className="absolute top-2 right-2 p-1"><Heart width={'30px'} height={'30px'} className="duration-200 stroke-1 hover:fill-[#fec80b]" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 flex flex-col items-center justify-center pt-15">
                <img className="rounded-full w-60 h-60 object-cover mb-4" src={notTruk} alt="Not found" />
                <p className="text-center text-gray-500 text-[20px]">Товар не найден</p>
              </div>
            )}
          </div>

          <div className="text-lg mt-20">
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
      </div>
    </div>
  );
};

export default SelectedCatalog;