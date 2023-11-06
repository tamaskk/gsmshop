import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import arrowdown from "../assets/arrowdown.svg";
import arrowleft from '../assets/arrowleft.svg';
const FAQItem = ({ question, answer, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", { className: "mb-4 w-full lg:w-1/2 text-center flex-col items-center justify-center", children: [_jsxs("button", { onClick: toggleAccordion, className: "w-full bg-gray-100 p-3 rounded-md text-center flex flex-row items-center justify-between", children: [question, _jsx("img", { src: `${isOpen ? arrowleft : arrowdown}` })] }), _jsx("div", { className: `bg-white p-3 mt-2 rounded-md transition-all duration-300 ${isOpen ? "" : "hidden opacity-0"} `, children: answer })] }));
};
const FAQSection = () => {
    const faqData = [
        {
            question: "Lorem ipsum dolor sit amet.?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla magna, rhoncus a diam a.",
        },
        {
            question: "Lorem ipsum dolor sit amet.?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla magna, rhoncus a diam a.",
        },
        {
            question: "Lorem ipsum dolor sit amet.?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla magna, rhoncus a diam a.",
        },
    ];
    return (_jsxs("section", { className: "mx-auto max-w-[1200px] px-[19px] py-20 flex flex-col items-center justify-center", id: "faq", children: [_jsx("h1", { className: "text-4xl lg:text-5xl mb-10 font-semibold text-center", children: "Gyakran ism\u00E9telt k\u00E9rd\u00E9sek" }), faqData.map((faq, index) => (_jsx(FAQItem, { question: faq.question, answer: faq.answer }, index)))] }));
};
export default FAQSection;
