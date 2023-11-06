import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import allItems from "../utils/Database";
import useAppContext from "../utils/Maincontext";
import Trendingslider from "../components/Trendingslider";
const Productpage = () => {
    const [imgSrc, setImgSrc] = useState();
    const { id, addToCart } = useAppContext();
    const filteredItems = allItems.filter((item) => item.id === id);
    function formatNumberWithDots(number) {
        // Format the number with dots, e.g., 1,000,000
        const formattedNumber = number.toLocaleString();
        return _jsx("span", { children: formattedNumber });
    }
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "mx-auto max-w-[1200px] px-[19px] py-20", children: [filteredItems.map((item) => (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-10 h-full", children: [_jsxs("div", { className: "w-full h-auto flex flex-col items-center justify-start px-20 mb-20 lg:mb-0", children: [_jsx("img", { src: imgSrc ? imgSrc : item.mainImg, className: "w-full rounded-lg", alt: "It is the main picture" }), _jsxs("div", { className: "grid grid-cols-3 items-center gap-8 w-full mt-10 -mb-14", children: [_jsx("img", { src: item.mainImg, onMouseOver: () => setImgSrc(item.mainImg), className: "border border-white hover:border-blue-400 rounded-md" }), _jsx("img", { src: item.extraImg[0], onMouseOver: () => setImgSrc(item.extraImg[0]), className: "border border-white hover:border-blue-400 rounded-md" }), _jsx("img", { src: item.extraImg[1], onMouseOver: () => setImgSrc(item.extraImg[1]), className: "border border-white hover:border-blue-400 rounded-md" })] })] }), _jsxs("div", { className: "bg-gray-300 w-full h-fit lg:px-20 flex flex-col items-center justify-end max-w-fit p-10 lg:py-10 gap-y-8 rounded-md shadow-lg", children: [_jsx("p", { className: "text-4xl font-medium", children: item.name }), _jsxs("div", { className: "w-full flex flex-row items-center justify-evenly pb-2 border-b-2 border-black", children: [_jsx("p", { className: "text-2xl", children: "M\u00E1rka" }), _jsx("p", { className: "text-2xl font-bold uppercase", children: item.brand })] }), _jsxs("div", { className: "w-full flex flex-row items-center justify-evenly pb-2 border-b-2 border-black", children: [_jsx("p", { className: "text-2xl", children: "Sz\u00EDn" }), _jsx("p", { className: "text-2xl font-bold uppercase", children: item.color === "red"
                                                        ? "Piros"
                                                        : item.color === "black"
                                                            ? "Fekete"
                                                            : item.color === "white"
                                                                ? "Fehér"
                                                                : item.color === "gold"
                                                                    ? "Arany"
                                                                    : item.color })] }), _jsxs("div", { className: "w-full flex flex-row items-center justify-evenly pb-2 border-b-2 border-black", children: [_jsx("p", { className: "text-2xl", children: "T\u00E1rhely" }), _jsxs("p", { className: "text-2xl font-bold uppercase", children: [item.storage, " GB"] })] }), _jsx("p", { className: "text-md font-medium text-center", children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea iste voluptas amet ipsa fugit impedit libero dicta in. Error ex corrupti accusantium doloremque dolores odit nesciunt, fuga sequi incidunt?" }), _jsx("h1", { className: "text-2xl -mb-4", children: "\u00C1r" }), _jsxs("h1", { className: "text-2xl font-bold", children: [formatNumberWithDots(item.price), " Ft"] }), _jsxs("div", { className: "grid grid-cols-2 gap-5 w-full", children: [_jsx("button", { onClick: () => addToCart(item.id, 1, item.price, item.price), className: "rounded-md text-md bg-transparent border-2 border-black text-black uppercase py-3 lg:py-4 px-2 font-semibold hover:bg-black hover:text-white duration-300 transition-all", children: "Add to Cart" }), _jsx("button", { className: "rounded-md text-md border-2 border-red-600 bg-red-600 text-white uppercase py-3 lg:py-4 font-semibold hover:bg-transparent hover:text-red-600 duration-300 transition-all", children: "Buy now" })] })] })] }) }))), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20 px-5 lg:px-0", children: [_jsxs("div", { className: "rounded-md shadow-lg bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center", children: [_jsx("h1", { className: "font-bold text-2xl", children: "Garancia:" }), _jsx("p", { className: "text-lg", children: "2 \u00E9v garancia blokkal j\u00F3t\u00E1l\u00E1ssal" })] }), _jsxs("div", { className: "rounded-md shadow-lg bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center", children: [_jsx("h1", { className: "font-bold text-2xl", children: "Term\u00E9k m\u00E9retei:" }), _jsx("p", { className: "text-lg", children: "158x140cm 0.3kg" })] }), _jsxs("div", { className: "rounded-md shadow-lg bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center", children: [_jsx("h1", { className: "font-bold text-2xl", children: "Van rakt\u00E1ron?" }), _jsx("p", { className: "text-lg", children: "Van" })] })] })] }), _jsx(Trendingslider, {})] }));
};
export default Productpage;
