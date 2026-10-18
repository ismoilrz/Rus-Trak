// src/data/catalogData.ts

export const catalogConfig: Record<string, { title: string; filters: any[] }> = {
  "Curtain-trucks": {
    title: "Шторные автомобили",
    filters: [
      { 
        type: "search",
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ", "JAC", "DAEWOO", "FOTON", "DONG FENG", "МАЗ"]
      },
      { 
        type: "checkbox", 
        label: "Полная масса, тонн",
        options: ["до 12", "до 20", "до 5,5", "свыше 20"] 
      },
    ]
  },
  "Crane-manipulators": {
    title: "Краны-манипуляторы",
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ", "JAC", "DAEWOO", "FAW", "FOTON", "DONG FENG", "SHACMAN", "BAW", "INMAN", "URAL", "МАЗ"] 
      },
      {
        type: "checkbox",
        label: "Колесная формула",
        options: ["4x2", "6x4", "4x4"]
      },
      { 
        type: "checkbox", 
        label: "Полная масса, тонн", 
        options: ["до 12", "до 20", "свыше 20"] 
      },
      {
        type: "checkbox",
        label: "Длина платформы, м",
        options: ["3500", "4400", "5200", "5500", "6165", "6200", "6400", "6500", "6700", "6800", "7000", "7200", "8200"]
      },
      {
        type: "range",
        label: "Грузоподъёмность КМУ, тонн",
      }
    ]
  },
  "Fuel-bowsers": {
    title: "Автотопливозаправщики",
    filters: [
      {
        type: "range",
        label: "Цена",
      },
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "JAC", "FAW", "FOTON", "DONGFENG", "SOLLERS", "УРАЛ", "Валдай"] 
      },
      { 
        type: "checkbox", 
        label: "Полная масса, тонн", 
        options: ["до 12"] 
      },
      {
        type: "range",
        label: "Объем цистерны, л.",
      }
    ]
  },
  "Aerial-work-platforms": {
    title: "Автогидроподъёмники",
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      }
    ]
  },
  "Tanker-trucks": {
    title: "Автоцистерны", 
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ", "JAC"] 
      },
      { 
        type: "checkbox", 
        label: "Тип автоцистерны", 
        options: ["Вакуумная автоцистерна", "Пищевая автоцистерна"] 
      },
      {
        type: "range",
        label: "Объем цистерны, л."
      }
    ]
  },
  "Tow-trucks": {
    title: "Автоэвакуаторы",
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["КАМАЗ"] 
      },
      { 
        type: "checkbox", 
        label: "Тип бортовой платформы", 
        options: ["Прямого типа"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      },
      { 
        type: "checkbox", 
        label: "Длина платформы, м", 
        options: ["4600"] 
      }
    ]
  },
  "Insulated-vans": {
    title: "Изотермические фургоны", 
    filters: [
      { 
        type: "search", 
        label: "Brand", 
        options: ["KAMAZ", "JAC", "DAEWOO", "FAW", "DONG FENG", "SHACMAN"] 
      }
    ]
  },
  "Container-chassis-trucks": {
    title: "Контейнеровозы",
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["ГАЗ", "КАМАЗ"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2", "6x4"] 
      }
    ]
  },
  "Hook-lifts": {
    title: "Крюковые погрузчики",
    filters: [
      { 
        type: "checkbox", 
        label: "Wheel formula", 
        options: ["4x2", "6x4"] 
      }
    ]
  },
  "Dump-trucks": {
    title: "Самосвалы",
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["КАМАЗ", "JAC"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      },
      { 
        type: "checkbox", 
        label: "Длина платформы, м", 
        options: ["4600", "5000", "5200", "6500"] 
      }
    ]
  },
  "ADR-EXII-category-trucks": {
    title: "Автомобили ДОПОГ категория EXII", 
    filters: [
      { 
        type: "search", 
        label: "Марка", 
        options: ["КАМАЗ", "JAC"] 
      },
      { 
        type: "checkbox", 
        label: "Колесная формула", 
        options: ["4x2"] 
      },
      { 
        type: "checkbox", 
        label: "Длина платформы, м", 
        options: ["4600", "5000", "5200", "6500"] 
      }
    ]
  },
};