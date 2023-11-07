import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import bg from '../assets/kevin-bhagat-Co-usQ-kpO0-unsplash.webp';
const SliderCard = () => {
    const bgStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(${bg})`
    };
    return (_jsx("div", { className: "cursor-pointer outline-2 outline-slate-300 hover:outline-slate-300 transition-all duration-300 border-2 border-slate-300 hover:border-black rounded-lg", children: _jsxs("a", { href: "#", className: "decoration-none text-black", children: [_jsx("div", { className: 'w-[14rem] p-2 rounded-lg', children: _jsx("img", { src: bg, className: 'rounded-lg' }) }), _jsxs("div", { className: " flex flex-col items-start justify-center text-[1.1rem] font-light p-2", children: [_jsx("p", { className: '', children: "Iphone 14 pro max" }), _jsx("p", { className: "text-[1.3rem] font-bold mt-[1.4rem]", children: "240.999Ft" })] })] }) }));
};
export default SliderCard;
