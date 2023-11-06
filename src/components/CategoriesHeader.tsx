import React from "react";
import useAppContext from "../utils/Maincontext";
import allItems from "../utils/Database";

const CategoriesHeader = () => {
  const {
    brand,
    handleSizeChange,
    handleColorChange,
    handleStorageChange,
    selectedSize,
    selectedColor,
    selectedStorage,
    filterOpenHandler,
    filterOpened
  } = useAppContext();

  const filteredItems = allItems.filter((item) => item.brand === brand)

  const sizes: string[] = [];
  const colors: string[] = [];
  const storages: number[] = [];



  for (let i = 0; i < filteredItems.length; i++) {
    const itemName = filteredItems[i].name;
    const itemColor = filteredItems[i].color;
    const itemStorage = filteredItems[i].storage;

    if (!sizes.includes(itemName)) {
      sizes.push(itemName);
    }

    if (!colors.includes(itemColor)) {
      colors.push(itemColor);
    }

    if (!storages.includes(itemStorage)) {
      storages.push(itemStorage);
    }
  }

  return (
    <div className={`${filterOpened ? "translate-x-0 fixed" : "-translate-x-full fixed"} transition-all duration-200 top-0 left-0 w-screen h-auto min-h-screen lg:relative lg:w-1/4 lg:h-auto flex flex-col items-center justify-start p-4 bg-gray-100 shadow-xl gap-y-10`}>
      <div className="uppercase text-4xl font-bold mb-5">{brand}</div>
      <div
          className="absolute lg:hidden top-5 right-5 z-[9999]"
          onClick={() => filterOpenHandler()}
        >
          <div
            className={`w-10 h-1 bg-black rounded-lg translate-y-3 rotate-45 mb-2`}
          ></div>
          <div className={`w-10 h-1 bg-black rounded-lg -rotate-45 `}></div>
        </div>
      <div className="w-full">
        <h1 className="w-full text-center text-xl font-bold mb-5">Méret</h1>
        <div className="flex flex-col items-start justify-start w-full gap-y-3">
          {sizes.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                value={item}
                checked={selectedSize === item}
                className="mr-2"
                onChange={handleSizeChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <h1 className="w-full text-center text-xl font-bold mb-5">Szín</h1>
        <div className="flex flex-col items-start justify-start w-full gap-y-3">
          {colors.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name="color"
                value={`${item}`}
                checked={selectedColor === item}
                className="mr-2"
                onChange={handleColorChange}
              />
              {item === "red"
                ? "Piros"
                : item === "black"
                ? "Fekete"
                : item === "white"
                ? "Fehér"
                : item === "gold"
                ? "Arany"
                : item}
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <h1 className="w-full text-center text-xl font-bold mb-5">Tárhely</h1>
        <div className="flex flex-col items-start justify-start w-full gap-y-3">
        {storages.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name="storage"
                value={`${item}`}
                checked={selectedStorage === item}
                className="mr-2"
                onChange={handleStorageChange}
              />
              {item} GB
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
