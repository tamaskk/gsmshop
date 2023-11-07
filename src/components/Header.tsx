import React, { useEffect, useState } from "react";
import headerBG from "../assets/joel-rohland-MCL2xxjZJvs-unsplash.webp";
import allItems from "../utils/Database";
import { useNavigate } from "react-router-dom";
import useAppContext from "../utils/Maincontext";

const Header = () => {
  const [choosenBrand, setChoosenBrand] = useState<string>("");
  const [choosenSeries, setChoosenSeries] = useState<string>("");

  const navigateToPhones = useNavigate();
  const navigateToService = useNavigate();

  const { setBrand, setSelectedBrand, setSelectedServiceType, selectedBrand, selectedServiceType } = useAppContext()

  const bgStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${headerBG})`,
  };

  const brands: string[] = [];

  for (let i = 0; i < allItems.length; i++) {
    const itemBrand = allItems[i].brand;

    if (!brands.includes(itemBrand)) {
      brands.push(itemBrand);
    }
  }

  const capitalizedWords = brands.map((word) => {
    let wordParts = [word];

    if (word) {
      wordParts = word.split(" ");
    }

    const capitalizedParts = wordParts.map((part) => {
      if (part.length > 0) {
        return part[0].toUpperCase() + part.slice(1);
      } else {
        return part;
      }
    });

    return capitalizedParts.join(" ");
  });

  const series: string[] = [];

  for (let i = 0; i < brands.length; i++) {
    const brandLowerCased = choosenBrand.toLocaleLowerCase();
    const brandFilter = allItems.filter(
      (item) => item.brand === brandLowerCased
    );
    const itemNames = brandFilter.map((item) => item.name);

    // Loop through itemNames and add each item to series
    itemNames.forEach((itemName) => {
      if (!series.includes(itemName)) {
        series.push(itemName);
      }
    });
  }

  useEffect(() => {
    const lowercasedBrand = choosenBrand.toLocaleLowerCase();
    setBrand(lowercasedBrand)
  }, [choosenBrand]);

  const handleButton = () => {
    if (choosenBrand && choosenSeries) {
      navigateToPhones(`/categories/phones`);
      setBrand(choosenBrand)
    } else {
      alert("Problem");
    }
  };

  const getThePrice = () => {
    if (selectedBrand && selectedServiceType) {
      navigateToService('repair')
    }
  }

  return (
    <div
      className="w-screen h-auto lg:h-screen overflow-x-hidden flex flex-col-reverse lg:flex-row items-center justify-between p-5 lg:p-20 gap-10 pt-20 lg:pt-0"
      style={bgStyle}
    >
      <div className="w-full lg:w-1/2 h-full min-h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between w-full lg:w-3/4 h-auto p-5 rounded-lg gap-5">
          <div className="flex flex-col w-full bg-white p-5 rounded-md">
            <h1 className="text-center w-full text-3xl mb-2">
              Szervíz árajánlat
            </h1>
            <div className="w-full mb-10">
              <p className="">Márka</p>
              <select onChange={(e) => setSelectedBrand(e.target.value)} className="py-2 w-full border border-gray-200 active:outline-none focus:outline-none">
                <option>Válassz márkát</option>
                <option value="iPhone">iPhone</option>
  const brands = ["iPhone", "Samsung", "Huawei", "Xiaomi"];

                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Huawei">Huawei</option>
              </select>
            </div>
            <div className="mb-5">
              <p>Probléma</p>
              <select onChange={(e) => setSelectedServiceType(e.target.value)} className="py-2 w-full border border-gray-200 active:outline-none focus:outline-none">
                <option>Válassz szervízt</option>
                <option value="battery">Akkumulátor csere</option>
                <option value="screen">Kijelző csere</option>
                <option value="port">Bedugó csere</option>
              </select>
            </div>
            <button onClick={getThePrice} className="border border-black py-2 px-8 rounded-lg w-fit self-center hover:bg-black hover:text-white transition-all duration-300">
              Árajánlat
            </button>
          </div>
          <div className="flex flex-col w-full bg-white p-5 rounded-md">
            <h1 className="text-center w-full text-3xl mb-2">Új készülék</h1>
            <div className="w-full mb-10">
              <p className="">Márka</p>
              <select
                className="py-2 w-full border border-gray-200 active:outline-none focus:outline-none"
                onChange={(e) => {setChoosenBrand(e.target.value.toLocaleLowerCase()); setBrand(e.target.value.toLocaleLowerCase())}}
              >
                <option>Válassz márkát</option>
                {capitalizedWords.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <p>Széria</p>
              <select
                className="py-2 w-full border border-gray-200 active:outline-none focus:outline-none"
                onChange={(e) => setChoosenSeries(e.target.value)}
              >
                <option>Válassz Szériát</option>
                {series.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => handleButton()}
              className="mb-1 border border-black py-2 px-8 rounded-lg w-fit self-center hover-bg-black hover-text-white transition-all duration-300"
            >
              További infók a termékről
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-14 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-white">
          GSM Javítóközpont
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 text-white italic text-xl lg:text-2xl font-medium">
          <h1>"Minden hibának van sztorija.</h1>
          <h1>Hozd be meséld el nevetünk max egy jót rajta</h1>
          <h1>A végén pedig megjavítjuk!"</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
