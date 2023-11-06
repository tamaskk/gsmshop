import React from "react";
import Slider from "./Slider";
import question from "../assets/question.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import FAQSection from "./FAQ";
import { Link } from 'react-scroll'

const Contact = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-[19px] py-36 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-10">Contact Us!</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 shadow-lg p-8 rounded-lg">
          <div className="flex flex-col items-center lg:items-start justify-center gap-y-3">
            <img src={location} className="w-7 h-7"/>
            <Link smooth={true} duration={400} to="stores" className="text-center lg:text-left cursor-pointer">We are located in X stores around Budapest</Link>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-center gap-y-3">
            <img src={email} className="w-7 h-7"/>
            <h1 className="text-center lg:text-right">phone@service.com</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center gap-y-3">
            <img src={phone} className="w-7 h-7"/>
            <h1 className="text-center lg:text-left">+1234567890</h1>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-center gap-y-3">
            <img src={question} className="w-7 h-7"/>
            <Link smooth={true} duration={400} to="faq" className="text-center lg:text-right cursor-pointer">Frequently asked questions</Link>
          </div>
        </div>

      </div>
        <Slider />

        <FAQSection />
    </section>
  );
};

export default Contact;
