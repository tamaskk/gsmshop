import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CategoriesHeader from '../components/CategoriesHeader';
import { Outlet } from 'react-router-dom';
const Categories = () => {
    return (_jsxs("div", { className: "mx-auto max-w-[1200px] px-[19px] py-5 flex w-full", children: [_jsx(CategoriesHeader, {}), _jsx(Outlet, {})] }));
};
export default Categories;
