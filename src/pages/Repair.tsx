import React, { useState, useEffect } from "react";
import useAppContext from "../utils/Maincontext";
import ServiceInformation from "../components/ServiceInformation";
import filter from "../assets/filter.svg";
import { useLocation } from "react-router-dom";

const Repair = () => {
  const [filterOpened, setFilterOpened] = useState<boolean>(false);
  const brands = ["iPhone", "Samsung", "Huawei", "Xiaomi"];
  const models = {
    iPhone: ["iPhone 15", "iPhone 15 Plus"],
    Samsung: ["Samsung Galaxy S22"],
    Huawei: ["Huawei P50"],
    Xiaomi: ["Xiaomi Mi 12"],
  };

  const service = ["Battery Change", "Screen repair", "Port repair"];

  const handleFilterOpen = () => {
    setFilterOpened((prev) => !prev);
  };

  const {
    setSelectedBrand,
    selectedBrand,
    selectedBrandType,
    setSelectedBrandType,
    selectedServiceType,
    setSelectedServiceType,
    filterReload,
    setFilterReload,
  } = useAppContext();

  const handleServiceTypeClick = (type: string) => {
    let selectedType = ""; // Default value
    switch (type) {
      case "Battery Change":
        selectedType = "battery";
        break;
      case "Screen repair":
        selectedType = "screen";
        break;
      case "Port repair":
        selectedType = "port";
        break;
      default:
        // If none of the cases match, the default value "Válassz" is used.
        break;
    }
    setSelectedServiceType(selectedType); // Move this line inside the switch statement
  };

  const location = useLocation();

  useEffect(() => {
    setFilterReload(location.pathname.startsWith("/repair"));
  }, [location]);

  return (
    <section className="w-screem h-auto py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-start items-center">
          <img src={filter} onClick={handleFilterOpen} className="w-6 h-6" />
          <div className="flex flex-col">
            <p
              onClick={handleFilterOpen}
              className={`transition-all duration-300 ${
                !filterOpened
                  ? "-translate-y-10 opacity-0"
                  : "translate-y-3 opacity-100"
              } ${!filterOpened ? "invisible" : ""}`}
            >
              Click here to open the filter.
            </p>

            <div
              className={`grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 transition-all duration-300 ${
                filterOpened
                  ? "translate-y-10 opacity-0 invisible"
                  : "-translate-y-3 opacity-100"
              }`}
            >
              <div
                className={`flex-row items-center justify-center gap-5 flex-wrap transition-all duration-300`}
              >
                <select
                  onChange={(event) => setSelectedBrand(event.target.value)}
                  value={selectedBrand}
                >
                  <option value="">Select Brand</option>
                  {brands.map((brand) => (
                    <option value={brand} key={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className={`flex flex-row transition-all duration-300 items-center justify-center gap-5 flex-wrap`}
              >
                <select
                  onChange={(event) => setSelectedBrandType(event.target.value)}
                  value={selectedBrandType}
                >
                  <option value="">Select Model</option>
                  {(models as any)[selectedBrand as string] // Use a type assertion here
                    ? (models as any)[selectedBrand as string].map((model: string) => (
                        <option value={model} key={model}>
                          {model}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div
                className={`flex flex-row items-center justify-center gap-5 flex-wrap`}
              >
                <select
                  onChange={(event) =>
                    handleServiceTypeClick(event.target.value)
                  }
                  value={selectedServiceType}
                >
                  <option value="">Select Service Type</option>
                  {service.map((type) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedBrand && selectedBrandType && selectedServiceType ? (
        <ServiceInformation />
      ) : (
        <h1 className="w-screen text-center text-3xl py-10">
          Válassz menüpontot!
        </h1>
      )}
    </section>
  );
};

export default Repair;
