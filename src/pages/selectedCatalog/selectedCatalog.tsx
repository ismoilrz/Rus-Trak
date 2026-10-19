import { useParams } from "react-router-dom";
import { catalogConfig } from "../../constants/catalogData/catalogConfig";

const SelectedCatalog = () => {
  const { selectedcatalog } = useParams<{ selectedcatalog: string }>();

  const currentCategory = selectedcatalog ? catalogConfig[selectedcatalog] : null;

  if (!currentCategory) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Категория не найдена!</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5]">
      <div className="container">
        <h1 className="text-3xl font-[500] text-black">{currentCategory.title}</h1>
      </div>
      <div className="container flex justify-between gap-6">
        <aside className="w-[300px] max-h-[80vh] overflow-y-auto p-6 bg-white rounded-[10px] shadow-sm border border-gray-100 flex flex-col gap-6 sticky top-[12vh]">

        {currentCategory.filters.map((filter, index) => {
          if (filter.type === "search") {
            return (
              <div key={index} className="flex flex-col gap-3">
                <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                <div className="relative">
                  <input type="text" placeholder="Найти" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-yellow-400" />
                </div>
                {filter.options && (
                  <div className="flex flex-col gap-2 overflow-y-auto pr-1">
                    {filter.options.map((opt: string, optIdx: number) => (
                      <label key={optIdx} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400" />
                        {opt}
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
                  {filter.options.map((opt: string, optIdx: number) => (
                    <label key={optIdx} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            );
          }

          if (filter.type === "range") {
            return (
              <div key={index} className="flex flex-col gap-3">
                <label className="font-semibold text-gray-800 text-sm">{filter.label}</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="от 0"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-yellow-400"
                  />
                  <input
                    type="number"
                    placeholder="до 10000000"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
            );
          }

          return null;
        })}

        <button className="w-full py-3 bg-[#fec80b] hover:bg-yellow-500 font-bold text-gray-900 rounded-xl transition-colors cursor-pointer shadow-sm">
          Показать товары
        </button>
      </aside>

      <main className="flex-1">
        <div>
            sdf
        </div>

        <div className="text-lg">
          <p>{currentCategory.content?.intro}</p>
          <div>
            <h5 className="text-[22px] mt-6 font-[400]">{currentCategory.content?.assortment}</h5>
            <p className="mt-3">{currentCategory.content?.assortmentdesc1}</p>
            <div className="flex flex-col gap-2 py-2">
              <p>{currentCategory.content?.brand}</p>
              {currentCategory.content?.brands.map((br, idx) => (
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
                {currentCategory.content?.features.map((fea, idx) => (
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
                {currentCategory.content?.workingfeatures.map((work, idx) => (
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
            <h5 className="text-[22px] text-[400] mt-6">{currentCategory.content?.equipmentTItle}</h5>
            <p className="mt-4">{currentCategory.content?.equipmentdesc}</p>
          </div>
        </div>
      </main>

      </div>
    </div>
  );
};

export default SelectedCatalog;