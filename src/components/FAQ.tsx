import React, { useState } from "react";
import arrowdown from "../assets/arrowdown.svg";
import arrowleft from '../assets/arrowleft.svg'

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 w-full lg:w-1/2 text-center flex-col items-center justify-center">
      <button
        onClick={toggleAccordion}
        className="w-full bg-gray-100 p-3 rounded-md text-center flex flex-row items-center justify-between"
      >
        {question}
        <img src={`${isOpen ? arrowleft : arrowdown}`} />
      </button>
      <div
        className={`bg-white p-3 mt-2 rounded-md transition-all duration-300 ${
          isOpen ? "" : "hidden opacity-0"
        } `}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet.?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla magna, rhoncus a diam a.",
    },
    {
      question: "Lorem ipsum dolor sit amet.?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla magna, rhoncus a diam a.",
    },
    {
      question: "Lorem ipsum dolor sit amet.?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla magna, rhoncus a diam a.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-[19px] py-20 flex flex-col items-center justify-center" id="faq">
        <h1 className="text-4xl lg:text-5xl mb-10 font-semibold text-center">Gyakran ismételt kérdések</h1>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQSection;
