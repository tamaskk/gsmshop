import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import bg from "../assets/joel-rohland-MCL2xxjZJvs-unsplash.webp";
const Banner = () => {
    const bgStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(${bg})`,
    };
    return (_jsx("div", { className: "mx-auto max-w-[1200px] px-[19px] py-10 lg:py-20 mb-10", children: _jsxs("div", { className: "w-full h-full flex flex-col lg:flex-row shadow-lg text-center lg:text-left rounded-lg", children: [_jsxs("div", { className: "w-full lg:w-1/2 p-5 lg:p-10 min-w-1/2", children: [_jsx("h1", { className: "text-3xl font-semibold mb-7 lg:mb-5", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }), _jsx("p", { className: "text-lg font-light", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem laudantium iure eum facilis, animi, rerum maxime reiciendis asperiores officia exercitationem minima, facere possimus ut nam iusto perspiciatis sunt voluptatibus." })] }), _jsx("div", { className: "w-full lg:w-1/2 h-60 lg:h-auto rounded-lg", style: bgStyle })] }) }));
};
export default Banner;
