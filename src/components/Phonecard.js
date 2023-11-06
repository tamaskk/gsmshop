import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import iphone from '../assets/iphone.jpg';
const Phonecard = ({ name, price }) => {
    return (_jsxs("article", { className: 'flex flex-col items-center justify-center', children: [_jsx("img", { src: iphone }), _jsx("h1", { children: name }), _jsx("h1", { children: price }), _jsx("button", { children: "Term\u00E9k megtekint\u00E9se" })] }));
};
export default Phonecard;
