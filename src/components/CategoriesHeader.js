import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useAppContext from "../utils/Maincontext";
import allItems from "../utils/Database";
const CategoriesHeader = () => {
    const { brand, handleSizeChange, handleColorChange, handleStorageChange, selectedSize, selectedColor, selectedStorage, filterOpenHandler, filterOpened } = useAppContext();
    const filteredItems = allItems.filter((item) => item.brand === brand);
    const sizes = [];
    const colors = [];
    const storages = [];
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
    return (_jsxs("div", { className: `${filterOpened ? "translate-x-0 fixed" : "-translate-x-full fixed"} transition-all duration-200 top-0 left-0 w-screen h-auto min-h-screen lg:relative lg:w-1/4 lg:h-auto flex flex-col items-center justify-start p-4 bg-gray-100 shadow-xl gap-y-10`, children: [_jsx("div", { className: "uppercase text-4xl font-bold mb-5", children: brand }), _jsxs("div", { className: "absolute lg:hidden top-5 right-5 z-[9999]", onClick: () => filterOpenHandler(), children: [_jsx("div", { className: `w-10 h-1 bg-black rounded-lg translate-y-3 rotate-45 mb-2` }), _jsx("div", { className: `w-10 h-1 bg-black rounded-lg -rotate-45 ` })] }), _jsxs("div", { className: "w-full", children: [_jsx("h1", { className: "w-full text-center text-xl font-bold mb-5", children: "M\u00E9ret" }), _jsx("div", { className: "flex flex-col items-start justify-start w-full gap-y-3", children: sizes.map((item) => (_jsxs("label", { children: [_jsx("input", { type: "checkbox", value: item, checked: selectedSize === item, className: "mr-2", onChange: handleSizeChange }), item] }, item))) })] }), _jsxs("div", { className: "w-full", children: [_jsx("h1", { className: "w-full text-center text-xl font-bold mb-5", children: "Sz\u00EDn" }), _jsx("div", { className: "flex flex-col items-start justify-start w-full gap-y-3", children: colors.map((item) => (_jsxs("label", { children: [_jsx("input", { type: "checkbox", name: "color", value: `${item}`, checked: selectedColor === item, className: "mr-2", onChange: handleColorChange }), item === "red"
                                    ? "Piros"
                                    : item === "black"
                                        ? "Fekete"
                                        : item === "white"
                                            ? "Fehér"
                                            : item === "gold"
                                                ? "Arany"
                                                : item] }, item))) })] }), _jsxs("div", { className: "w-full", children: [_jsx("h1", { className: "w-full text-center text-xl font-bold mb-5", children: "T\u00E1rhely" }), _jsx("div", { className: "flex flex-col items-start justify-start w-full gap-y-3", children: storages.map((item) => (_jsxs("label", { children: [_jsx("input", { type: "checkbox", name: "storage", value: `${item}`, checked: selectedStorage === item, className: "mr-2", onChange: handleStorageChange }), item, " GB"] }, item))) })] })] }));
};
export default CategoriesHeader;
