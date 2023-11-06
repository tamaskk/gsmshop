import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "./Slider";
import question from "../assets/question.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import FAQSection from "./FAQ";
import { Link } from 'react-scroll';
const Contact = () => {
    return (_jsxs("section", { children: [_jsxs("div", { className: "mx-auto max-w-[1200px] px-[19px] py-36 flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-4xl font-semibold mb-10", children: "Contact Us!" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14 shadow-lg p-8 rounded-lg", children: [_jsxs("div", { className: "flex flex-col items-center lg:items-start justify-center gap-y-3", children: [_jsx("img", { src: location, className: "w-7 h-7" }), _jsx(Link, { smooth: true, duration: 400, to: "stores", className: "text-center lg:text-left cursor-pointer", children: "We are located in X stores around Budapest" })] }), _jsxs("div", { className: "flex flex-col items-center lg:items-end justify-center gap-y-3", children: [_jsx("img", { src: email, className: "w-7 h-7" }), _jsx("h1", { className: "text-center lg:text-right", children: "phone@service.com" })] }), _jsxs("div", { className: "flex flex-col items-center lg:items-start justify-center gap-y-3", children: [_jsx("img", { src: phone, className: "w-7 h-7" }), _jsx("h1", { className: "text-center lg:text-left", children: "+1234567890" })] }), _jsxs("div", { className: "flex flex-col items-center lg:items-end justify-center gap-y-3", children: [_jsx("img", { src: question, className: "w-7 h-7" }), _jsx(Link, { smooth: true, duration: 400, to: "faq", className: "text-center lg:text-right cursor-pointer", children: "Frequently asked questions" })] })] })] }), _jsx(Slider, {}), _jsx(FAQSection, {})] }));
};
export default Contact;
