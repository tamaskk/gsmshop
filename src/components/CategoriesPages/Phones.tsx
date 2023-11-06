import React from "react";
import useAppContext from "../../utils/Maincontext";
import allItems from "../../utils/Database";
import { useNavigate } from "react-router-dom";
const Phones: React.FC = () => {
  const { selectedColor, selectedStorage, selectedSize, setId, brand, filterOpenHandler } = useAppContext();

  const filteredItems = allItems.filter((item) => {
    const brandMatch = brand ? item.brand === brand : true;
    const colorMatch = !selectedColor || selectedColor === item.color;
    const storageMatch = !selectedStorage || selectedStorage === item.storage;
    const sizeMatch = !selectedSize || selectedSize === item.name;
  
    return brandMatch && colorMatch && storageMatch && sizeMatch;
  });
  
      const navigate = useNavigate();

    const handleCardClick = (id: number, brand: string) => {
        navigate(`/${brand}/${id}`);
        setId(id);
    };
  

  return (
    <section className="flex flex-col items-center justify-center w-full px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <button className="block lg:hidden border border-gray-400 px-2 py-1 rounded-lg self-start" onClick={filterOpenHandler}>Szűrő</button>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="w-full border border-gray-200 rounded-lg p-2 text-2xl font-bold hover-border-gray-500 transition-all duration-300 mb-5"
            onClick={() => handleCardClick(item.id, item.brand)}
          >
            <img src={item.mainImg} className="mb-2" alt={item.name} />
            {item.name}
            <div className="flex items-center justify-between w-full text-xl font-light">
              {item.color === "red"
                ? "Piros"
                : item.color === "black"
                ? "Fekete"
                : item.color === "white"
                ? "Fehér"
                : item.color === "gold"
                ? "Arany"
                : item.color}
              <div>{item.storage} GB</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Phones;
