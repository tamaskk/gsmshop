import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Brandscard from "../components/Brandscard";
import iPhone from "../assets/iphone.webp";
import Samsung from "../assets/samsung.webp";
import Xiaomi from "../assets/xiaomi.webp";
import Huawei from "../assets/huawei.webp";
const Brands = () => {
    return (_jsxs("section", { className: "mx-auto max-w-[1200px] px-[19px] py-20 flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-4xl font-bold mb-10 text-center", children: "V\u00E1lassz egy m\u00E1rk\u00E1t!" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: [_jsx(Brandscard, { brand: "iphone", img: iPhone, name: "iPhone" }), _jsx(Brandscard, { brand: "samsung", img: Samsung, name: "Samsung" }), _jsx(Brandscard, { brand: "xiaomi", img: Xiaomi, name: "Xiaomi" }), _jsx(Brandscard, { brand: "huawei", img: Huawei, name: "Huawei" }), _jsx(Brandscard, { brand: "iphone", img: iPhone, name: "iPhone" }), _jsx(Brandscard, { brand: "samsung", img: Samsung, name: "Samsung" }), _jsx(Brandscard, { brand: "xiaomi", img: Xiaomi, name: "Xiaomi" }), _jsx(Brandscard, { brand: "huawei", img: Huawei, name: "Huawei" })] })] }));
};
export default Brands;
