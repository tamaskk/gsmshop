import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import useAppContext from "../utils/Maincontext";
import ServiceInformation from "../components/ServiceInformation";
import filter from "../assets/filter.svg";
import { useLocation } from "react-router-dom";
const Repair = () => {
    const [filterOpened, setFilterOpened] = useState(false);
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
    const { setSelectedBrand, selectedBrand, selectedBrandType, setSelectedBrandType, selectedServiceType, setSelectedServiceType, filterReload, setFilterReload, } = useAppContext();
    const handleServiceTypeClick = (type) => {
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
    return (_jsxs("section", { className: "w-screem h-auto py-10", children: [_jsx("div", { className: "max-w-[1200px] mx-auto", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-10 justify-start items-center", children: [_jsx("img", { src: filter, onClick: handleFilterOpen, className: "w-6 h-6" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("p", { onClick: handleFilterOpen, className: `transition-all duration-300 ${!filterOpened
                                        ? "-translate-y-10 opacity-0"
                                        : "translate-y-3 opacity-100"} ${!filterOpened ? "invisible" : ""}`, children: "Click here to open the filter." }), _jsxs("div", { className: `grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 transition-all duration-300 ${filterOpened
                                        ? "translate-y-10 opacity-0 invisible"
                                        : "-translate-y-3 opacity-100"}`, children: [_jsx("div", { className: `flex-row items-center justify-center gap-5 flex-wrap transition-all duration-300`, children: _jsxs("select", { onChange: (event) => setSelectedBrand(event.target.value), value: selectedBrand, children: [_jsx("option", { value: "", children: "Select Brand" }), brands.map((brand) => (_jsx("option", { value: brand, children: brand }, brand)))] }) }), _jsx("div", { className: `flex flex-row transition-all duration-300 items-center justify-center gap-5 flex-wrap`, children: _jsxs("select", { onChange: (event) => setSelectedBrandType(event.target.value), value: selectedBrandType, children: [_jsx("option", { value: "", children: "Select Model" }), models[selectedBrand] // Use a type assertion here
                                                        ? models[selectedBrand].map((model) => (_jsx("option", { value: model, children: model }, model)))
                                                        : ""] }) }), _jsx("div", { className: `flex flex-row items-center justify-center gap-5 flex-wrap`, children: _jsxs("select", { onChange: (event) => handleServiceTypeClick(event.target.value), value: selectedServiceType, children: [_jsx("option", { value: "", children: "Select Service Type" }), service.map((type) => (_jsx("option", { value: type, children: type }, type)))] }) })] })] })] }) }), selectedBrand && selectedBrandType && selectedServiceType ? (_jsx(ServiceInformation, {})) : (_jsx("h1", { className: "w-screen text-center text-3xl py-10", children: "V\u00E1lassz men\u00FCpontot!" }))] }));
};
export default Repair;
