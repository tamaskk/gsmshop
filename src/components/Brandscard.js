import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useAppContext from '../utils/Maincontext';
import { useNavigate } from 'react-router-dom';
const Brandscard = ({ img, name, brand }) => {
    const { setBrand } = useAppContext();
    const navigate = useNavigate();
    const handleCardClick = () => {
        // Update the state if needed (e.g., setBrand(brand))
        console.log('Clicked on card:', brand);
        navigate(`/categories/phones`);
    };
    return (_jsxs("article", { onClick: () => { setBrand(brand); handleCardClick(); }, className: 'flex flex-col items-center justify-center shadow-lg transition-all duration-200 border-2 border-transparent p-2 rounded-md hover:border-gray-400', children: [_jsx("div", { className: 'max-w-fit', children: _jsx("img", { src: img, className: 'rounded-md max-h-fit' }) }), _jsx("h1", { className: 'text-2xl font-medium py-10', children: name })] }));
};
export default Brandscard;
