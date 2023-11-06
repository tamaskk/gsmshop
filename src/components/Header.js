import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import headerBG from "../assets/joel-rohland-MCL2xxjZJvs-unsplash.jpg";
import allItems from "../utils/Database";
import { useNavigate } from "react-router-dom";
import useAppContext from "../utils/Maincontext";
const Header = () => {
    const [choosenBrand, setChoosenBrand] = useState("");
    const [choosenSeries, setChoosenSeries] = useState("");
    const navigateToPhones = useNavigate();
    const navigateToService = useNavigate();
    const { setBrand, setSelectedBrand, setSelectedServiceType, selectedBrand, selectedServiceType } = useAppContext();
    const bgStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${headerBG})`,
    };
    const brands = [];
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
            }
            else {
                return part;
            }
        });
        return capitalizedParts.join(" ");
    });
    const series = [];
    for (let i = 0; i < brands.length; i++) {
        const brandLowerCased = choosenBrand.toLocaleLowerCase();
        const brandFilter = allItems.filter((item) => item.brand === brandLowerCased);
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
        setBrand(lowercasedBrand);
    }, [choosenBrand]);
    const handleButton = () => {
        if (choosenBrand && choosenSeries) {
            navigateToPhones(`/categories/phones`);
            setBrand(choosenBrand);
        }
        else {
            alert("Problem");
        }
    };
    const getThePrice = () => {
        if (selectedBrand && selectedServiceType) {
            navigateToService('repair');
        }
    };
    return (_jsxs("div", { className: "w-screen h-auto lg:h-screen overflow-x-hidden flex flex-col-reverse lg:flex-row items-center justify-between p-5 lg:p-20 gap-10 pt-20 lg:pt-0", style: bgStyle, children: [_jsx("div", { className: "w-full lg:w-1/2 h-full min-h-full flex flex-col items-center justify-center", children: _jsxs("div", { className: "flex flex-col items-center justify-between w-full lg:w-3/4 h-auto p-5 rounded-lg gap-5", children: [_jsxs("div", { className: "flex flex-col w-full bg-white p-5 rounded-md", children: [_jsx("h1", { className: "text-center w-full text-3xl mb-2", children: "Szerv\u00EDz \u00E1raj\u00E1nlat" }), _jsxs("div", { className: "w-full mb-10", children: [_jsx("p", { className: "", children: "M\u00E1rka" }), _jsxs("select", { onChange: (e) => setSelectedBrand(e.target.value), className: "py-2 w-full border border-gray-200 active:outline-none focus:outline-none", children: [_jsx("option", { children: "V\u00E1lassz m\u00E1rk\u00E1t" }), _jsx("option", { value: "iPhone", children: "iPhone" }), "const brands = [\"iPhone\", \"Samsung\", \"Huawei\", \"Xiaomi\"];", _jsx("option", { value: "Samsung", children: "Samsung" }), _jsx("option", { value: "Xiaomi", children: "Xiaomi" }), _jsx("option", { value: "Huawei", children: "Huawei" })] })] }), _jsxs("div", { className: "mb-5", children: [_jsx("p", { children: "Probl\u00E9ma" }), _jsxs("select", { onChange: (e) => setSelectedServiceType(e.target.value), className: "py-2 w-full border border-gray-200 active:outline-none focus:outline-none", children: [_jsx("option", { children: "V\u00E1lassz szerv\u00EDzt" }), _jsx("option", { value: "battery", children: "Akkumul\u00E1tor csere" }), _jsx("option", { value: "screen", children: "Kijelz\u0151 csere" }), _jsx("option", { value: "port", children: "Bedug\u00F3 csere" })] })] }), _jsx("button", { onClick: getThePrice, className: "border border-black py-2 px-8 rounded-lg w-fit self-center hover:bg-black hover:text-white transition-all duration-300", children: "\u00C1raj\u00E1nlat" })] }), _jsxs("div", { className: "flex flex-col w-full bg-white p-5 rounded-md", children: [_jsx("h1", { className: "text-center w-full text-3xl mb-2", children: "\u00DAj k\u00E9sz\u00FCl\u00E9k" }), _jsxs("div", { className: "w-full mb-10", children: [_jsx("p", { className: "", children: "M\u00E1rka" }), _jsxs("select", { className: "py-2 w-full border border-gray-200 active:outline-none focus:outline-none", onChange: (e) => { setChoosenBrand(e.target.value.toLocaleLowerCase()); setBrand(e.target.value.toLocaleLowerCase()); }, children: [_jsx("option", { children: "V\u00E1lassz m\u00E1rk\u00E1t" }), capitalizedWords.map((item) => (_jsx("option", { value: item, children: item }, item)))] })] }), _jsxs("div", { className: "mb-5", children: [_jsx("p", { children: "Sz\u00E9ria" }), _jsxs("select", { className: "py-2 w-full border border-gray-200 active:outline-none focus:outline-none", onChange: (e) => setChoosenSeries(e.target.value), children: [_jsx("option", { children: "V\u00E1lassz Sz\u00E9ri\u00E1t" }), series.map((item) => (_jsx("option", { value: item, children: item }, item)))] })] }), _jsx("button", { onClick: () => handleButton(), className: "mb-1 border border-black py-2 px-8 rounded-lg w-fit self-center hover-bg-black hover-text-white transition-all duration-300", children: "Tov\u00E1bbi inf\u00F3k a term\u00E9kr\u0151l" })] })] }) }), _jsxs("div", { className: "w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-14 text-center", children: [_jsx("h1", { className: "text-5xl lg:text-6xl font-bold text-white", children: "GSM Jav\u00EDt\u00F3k\u00F6zpont" }), _jsxs("div", { className: "flex flex-col items-center justify-center gap-5 text-white italic text-xl lg:text-2xl font-medium", children: [_jsx("h1", { children: "\"Minden hib\u00E1nak van sztorija." }), _jsx("h1", { children: "Hozd be mes\u00E9ld el nevet\u00FCnk max egy j\u00F3t rajta" }), _jsx("h1", { children: "A v\u00E9g\u00E9n pedig megjav\u00EDtjuk!\"" })] })] })] }));
};
export default Header;
