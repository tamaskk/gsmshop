import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import img from "../assets/screen-post-svsKYetYPUI-unsplash.webp";
import port from '../assets/port.webp';
import screen from '../assets/screen.webp';
import useAppContext from "../utils/Maincontext";
import services from "../utils/Services";
const ServiceInformation = () => {
    const { selectedBrand, selectedBrandType, selectedServiceType, setOriginalOrAftermarket, originalOrAftermarket, addToCart } = useAppContext();
    const originaloraftermarket = originalOrAftermarket === 0 ? "original" : "aftermarket";
    const serviceItem = services.find((item) => item.service === selectedServiceType && item.originalorafter === originaloraftermarket && item.brandType === selectedBrandType);
    const renderserviceDetailsTest = (item) => {
        if (selectedBrand && selectedBrandType && selectedServiceType && serviceItem) {
            return (_jsxs("div", { className: "text-2xl", children: ["Price:", " ", _jsx("span", { className: "font-black", children: serviceItem.price.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }), " ", "Ft"] }));
        }
        return (_jsx("p", { children: "Nem tal\u00E1lt eredm\u00E9ny" })); // Return null when there's no matching service item
    };
    const handleServiceTypeClick = (type) => {
        let serviceType = "";
        switch (type) {
            case "battery":
                serviceType = "Battery Change";
                break;
            case "screen":
                serviceType = "Screen repair";
                break;
            case "port":
                serviceType = "Port repair";
                break;
            default:
                serviceType = "Válassz"; // Set a default value
        }
        return serviceType;
    };
    const handleImgChange = () => {
        let imageSource = "";
        switch (selectedServiceType) {
            case "screen":
                imageSource = screen;
                break;
            case "port":
                imageSource = port;
                break;
            case "battery":
                imageSource = img;
                break;
            default:
                imageSource = ""; // Set a default value
        }
        return imageSource;
    };
    const addToCartHandler = () => {
        if (serviceItem) {
            addToCart(serviceItem.id, 1, serviceItem.price, serviceItem.price);
        }
        else {
            // Provide default values or handle the case when serviceItem is not available
            // For example, pass 0 for quantity and price, and handle it in addToCart
            addToCart(0, 0, 0, 0);
        }
    };
    return (_jsx("section", { className: "w-screen h-auto", children: _jsxs("div", { className: "max-w-[1200px] mx-auto flex flex-center justify-center items-center py-0 lg:py-20", children: [_jsxs("div", { className: "grid gird-cols-1 lg:grid-cols-2 gap-14", children: [_jsx("div", { className: "order-2 lg:order-1 p-2 lg:p-0", children: _jsx("img", { src: handleImgChange(), className: "rounded-lg shadow-lg" }) }), _jsxs("div", { className: "flex flex-col items-center justify-center gap-5 order-1 lg:order-2 m-10 p-6 bg-gray-100 rounded-lg shadow-lg", children: [_jsx("h1", { className: "text-2xl font-bold", children: selectedBrandType }), _jsxs("div", { className: "flex flex-col items-start justify-start w-full gap-y-5 p-6", children: [_jsx("p", { className: "", children: "Lorem, ipsum: dolor sit amet consectetur" }), _jsx("p", { children: "Lorem, ipsum: dolor sit amet consectetur" }), _jsx("p", { children: "Lorem, ipsum: dolor sit amet consectetur" }), _jsx("p", { children: "Lorem, ipsum: dolor sit amet consectetur" }), _jsx("p", { children: "Lorem, ipsum: dolor sit amet consectetur" })] }), _jsx("p", { className: "text-sm text-center", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit, quos eaque sequi ea molestiae alias architecto culpa ipsa quis? Sit dolor, consequuntur totam modi deleniti quod fugit ullam accusamus." }), _jsx("div", { className: "border-b-2 border-b-black pb-2 text-2xl", children: handleServiceTypeClick(selectedServiceType || "") }), _jsxs("div", { className: "grid grid-cols-2 gap-5", children: [_jsx("button", { onClick: () => setOriginalOrAftermarket(0), className: `py-2 lg:py-4 px-4 lg:px-8 border-2 border-black rounded-lg hover:shadow-lg text-sm transition-all duration-400 hover:bg-white ${originalOrAftermarket === 0 && "bg-gray-400"}`, children: "Factory New" }), _jsx("button", { onClick: () => setOriginalOrAftermarket(1), className: `py-2 lg:py-4 px-4 lg:px-8 border-2 border-black rounded-lg hover:shadow-lg text-sm transition-all duration-400 hover:bg-white ${originalOrAftermarket === 1 && "bg-gray-400"}`, children: "Aftermarket" })] }), _jsx("p", { children: renderserviceDetailsTest(serviceItem) }), _jsxs("div", { className: "grid grid-cols-2 gap-5", children: [_jsx("button", { onClick: addToCartHandler, className: "py-2 lg:py-4 px-4 lg:px-8 bg-green-500 text-white border-2 border-green-500 rounded-md hover:shadow-lg transition-all duration-400 hover:text-black hover:bg-white", children: "Add to Cart" }), _jsx("button", { className: "py-2 lg:py-4 px-4 lg:px-8 bg-white text-black border-2 border-red-500 rounded-md hover:shadow-lg transition-all duration-400 hover:text-white hover:bg-red-500", children: "Buy it Now" })] })] })] }), _jsx("div", {}), _jsx("div", {})] }) }));
};
export default ServiceInformation;
