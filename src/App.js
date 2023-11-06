import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands";
import useAppContext from "./utils/Maincontext";
import Productpage from "./pages/Productpage";
import Cart from "./components/Cart";
import Phones from './components/CategoriesPages/Phones';
import Repair from "./pages/Repair";
import Contact from "./components/Contact";
function App() {
    const { brand, id } = useAppContext();
    return (_jsx(Router, { children: _jsxs("div", { className: "App overflow-x-hidden", children: [_jsx(Cart, {}), _jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Index, {}) }), _jsx(Route, { path: "brands", element: _jsx(Brands, {}) }), _jsx(Route, { path: "categories", element: _jsx(Categories, {}), children: _jsx(Route, { path: "phones", element: _jsx(Phones, {}) }) }), _jsx(Route, { path: "repair", element: _jsx(Repair, {}) }), _jsx(Route, { path: `${brand}/:id`, element: _jsx(Productpage, {}) }), _jsx(Route, { path: "contact", element: _jsx(Contact, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
