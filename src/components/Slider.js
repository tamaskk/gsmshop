import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import SliderCard from "./Slidercard";
const Slider = () => {
    const boxRef = useRef(null);
    const prevSlide = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
        }
    };
    const nextSlide = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
        }
    };
    useEffect(() => {
        if (boxRef.current) {
            // Perform the scrolling action here if needed
        }
    }, [boxRef]);
    return (_jsx("div", { className: "w-screen h-auto bg-gray-100", id: "stores", children: _jsxs("div", { className: "mx-auto max-w-[1200px] px-[19px] pb-20", children: [_jsxs("div", { className: "flex justify-between w-full items-center py-10", children: [_jsx("h1", { className: "text-3xl font-semibold", children: "\u00DCzleteink" }), _jsxs("div", { className: "w-auto flex items-center justify-center", children: [_jsx("button", { onClick: prevSlide, className: "border py-2 px-5 border-none bg-black text-white text-2xl flex items-center justify-center text-center rounded-lg", children: "<" }), _jsx("button", { onClick: nextSlide, className: "border py-2 px-5 border-none ml-5 bg-black text-white text-2xl flex items-center justify-center text-center rounded-lg", children: ">" })] })] }), _jsxs("div", { ref: boxRef, id: "asdasd", className: "scrollBarCustom flex gap-[2.2rem] overflow-x-scroll overflow-y-hidden py-[1rem] px-[0.6rem] relative scroll-smooth", children: [_jsx(SliderCard, {}), _jsx(SliderCard, {}), _jsx(SliderCard, {}), _jsx(SliderCard, {}), _jsx(SliderCard, {}), _jsx(SliderCard, {})] })] }) }));
};
export default Slider;
