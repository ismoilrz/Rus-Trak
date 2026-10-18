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
        <aside className="w-[300px] p-6 bg-white rounded-[10px] shadow-sm border border-gray-100 flex flex-col gap-6 sticky top-5">

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
                <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-1">
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
      </main>

      </div>
    </div>
  );
};

export default SelectedCatalog;