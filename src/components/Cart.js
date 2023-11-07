import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useAppContext from "../utils/Maincontext.js";
import allItems from "../utils/Database.js";
import serviceItems from '../utils/Services.js';
import repair from '../assets/repair.webp';
const Overlay = ({ children }) => {
    const { cartOpened } = useAppContext();
    return (_jsx("div", { className: `fixed top-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-70 transition-all duration-200 flex items-center justify-end ${cartOpened ? "opacity-1 z-[999999]" : "z-[-1] opacity-0"}`, children: children }));
};
const Cart = () => {
    const { cartOpened, cartOpenHandler, cart, removeItem } = useAppContext();
    const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
    function formatNumberWithDots(number) {
        // Format the number with dots, e.g., 1,000,000
        const formattedNumber = number.toLocaleString();
        return _jsx("span", { children: formattedNumber });
    }
    const handleServiceTypeClick = (type) => {
        switch (type) {
            case "battery":
                return "Battery Change";
                break;
            case "screen":
                return "Screen repair";
                break;
            case "port":
                return "Port repair";
                break;
            default:
        }
    };
    const divStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' // Fix the typo here
    };
    return (_jsx(Overlay, { children: _jsxs("div", { className: `h-full w-screen md:w-1/2 lg:w-1/3 p-8 bg-white transition-all duration-700 ${cartOpened ? "translate-x-0 z-[-1]" : "translate-x-[300vw] z-[9999999]"}`, children: [_jsx("div", { onClick: cartOpenHandler, className: `fixed top-5 right-5 cursor-pointer z-[99999999] transition-all duration-700 text-3xl`, children: "X" }), _jsxs("h1", { className: "text-lg lg:text-3xl font-bold mb-5", children: ["Your shopping Cart ( ", cart.length, " )"] }), cart.length > 0 ? (_jsx("div", { className: "flex flex-col gap-5 w-full h-3/4 overflow-y-scroll pb-10", children: cart.map((cartItem) => {
                        const item = allItems.find((item) => item.id === cartItem.id);
                        const serviceItem = serviceItems.find((item) => item.id === cartItem.id);
                        if (item) {
                            return (_jsxs("div", { className: "flex border-2 border-black", children: [_jsx("div", { className: "w-1/3 h-auto", style: Object.assign(Object.assign({}, divStyle), { backgroundImage: `url(${item.mainImg})` }) }), _jsxs("div", { className: "w-3/4 bg-gray-100", children: [_jsxs("div", { className: "flex flex-row flex-wrap items-center justify-between px-3 py-2 lg:p-4", children: [_jsx("p", { className: "text-md lg:text-xl min-w-fit", children: item.name }), _jsxs("p", { className: "text-sm lg:text-lg font-bold ml-1 min-w-fit", children: [formatNumberWithDots(item.price), " Ft"] })] }), _jsxs("div", { className: "flex flex-row items-center justify-between px-3 py-2 lg:p-4", children: [_jsx("div", { className: "flex items-center justify-center", children: _jsxs("div", { className: "text-black text-md lg:text-xl", children: [item.storage, " GB / ", item.color.toLocaleUpperCase()] }) }), _jsx("div", { onClick: () => removeItem(cartItem.id), className: `cursor-pointer z-[99999999] transition-all duration-700 text-xl lg:text-3xl`, children: "X" })] })] })] }, cartItem.id));
                        }
                        else if (serviceItem) {
                            return (_jsxs("div", { className: "flex border-2 border-black", children: [_jsx("div", { className: "w-1/3 h-auto", style: Object.assign(Object.assign({}, divStyle), { backgroundImage: `url(${repair})` }) }), _jsxs("div", { className: "w-3/4 bg-gray-100", children: [_jsxs("div", { className: "flex flex-col flex-wrap items-start justify-between px-3 py-2 lg:p-4", children: [_jsxs("p", { className: "text-md lg:text-xl min-w-fit", children: [handleServiceTypeClick(serviceItem.service), _jsxs("span", { className: "text-sm", children: ["(", serviceItem.originalorafter, ")"] })] }), _jsxs("p", { className: "text-sm lg:text-lg font-bold ml-1 min-w-fit", children: [formatNumberWithDots(serviceItem.price), " Ft"] })] }), _jsxs("div", { className: "flex flex-row items-center justify-between px-3 py-2 lg:p-4", children: [_jsx("div", { className: "flex items-center justify-center", children: _jsx("div", { className: "text-black text-sm lg:text-lg", children: serviceItem.brandType }) }), _jsx("div", { onClick: () => removeItem(cartItem.id), className: `cursor-pointer z-[99999999] transition-all duration-700 text-xl lg:text-3xl`, children: "X" })] })] })] }, cartItem.id));
                        }
                        return null;
                    }) })) : (_jsx("div", { className: "w-full h-3/4 flex flex-col items-center justify-center", children: _jsx("h1", { className: "text-2xl font-semibold mb-2", children: "Your cart is empty" }) })), _jsx("div", { className: "border-dashed border-2 border-black" }), _jsxs("div", { className: "flex flex-row items-center justify-between", children: [_jsxs("div", { className: "flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-lg lg:text-2xl font-bold", children: "Subtotal" }), _jsxs("h1", { className: "text-lg lg:text-2xl font-bold", children: [formatNumberWithDots(totalPrice), " Ft"] })] }), _jsx("button", { disabled: cart.length === 0, className: "py-2 px-6 lg:px-12 bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300", children: "Go to Checkout" })] })] }) }));
};
export default Cart;
