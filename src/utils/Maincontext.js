import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
const AppContext = createContext(undefined);
const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
export default useAppContext;
export function AppProvider({ children }) {
    const [menuOpened, setMenuOpened] = useState(false);
    const [filterOpened, setFilterOpened] = useState(false);
    const [cartOpened, setCartOpened] = useState(false);
    const [cart, setCart] = useState([]);
    const [brand, setBrand] = useState();
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedStorage, setSelectedStorage] = useState();
    const [id, setId] = useState(null);
    const [filterReload, setFilterReload] = useState(false);
    { /* Repair part */ }
    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedBrandType, setSelectedBrandType] = useState();
    const [selectedServiceType, setSelectedServiceType] = useState();
    const [originalOrAftermarket, setOriginalOrAftermarket] = useState(null);
    useEffect(() => {
        setSelectedBrand('');
        setSelectedBrandType('');
        setSelectedServiceType('');
    }, [filterReload]);
    function formatNumberWithDots(number) {
        // Format the number with dots, e.g., 1,000,000
        const formattedNumber = number.toLocaleString();
        return _jsx("span", { children: formattedNumber });
    }
    useEffect(() => {
        console.log("Brand: " + selectedBrand);
    }, [selectedBrand]);
    useEffect(() => {
        console.log("Type: " + selectedBrandType);
    }, [selectedBrandType]);
    useEffect(() => {
        console.log("Service: " + selectedServiceType);
    }, [selectedServiceType]);
    const addToCart = (id, quantity, price, totalPrice) => {
        if (cart) {
            setCart((prevCart) => [...prevCart, { id, quantity, price, totalPrice }]);
        }
        else {
            setCart([{ id, quantity, price, totalPrice }]);
        }
    };
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };
    const handleSizeChange = (event) => {
        const item = event.target.value;
        setSelectedSize((prevSize) => (prevSize === item ? "" : item));
    };
    const handleColorChange = (event) => {
        const item = event.target.value;
        setSelectedColor((prevSize) => (prevSize === item ? "" : item));
    };
    const handleStorageChange = (event) => {
        const item = event.target.value;
        // Ensure that the item is converted to a number
        setSelectedStorage((prevSize) => (prevSize === +item ? 0 : +item));
    };
    const menuOpenHandler = () => {
        setMenuOpened((prev) => !prev);
    };
    const filterOpenHandler = () => {
        setFilterOpened((prev) => !prev);
    };
    const cartOpenHandler = () => {
        setCartOpened((prev) => !prev);
    };
    useEffect(() => {
        console.log("The brand is: " + brand);
    }, [brand]);
    // Ide jönnek majd a kódok
    const contextValue = {
        menuOpenHandler,
        menuOpened,
        brand,
        setBrand,
        handleSizeChange,
        handleColorChange,
        handleStorageChange,
        selectedSize,
        selectedColor,
        selectedStorage,
        id,
        setId,
        filterOpened,
        filterOpenHandler,
        cartOpened,
        cartOpenHandler,
        cart,
        addToCart,
        formatNumberWithDots,
        removeItem,
        selectedBrand,
        setSelectedBrand,
        selectedBrandType,
        setSelectedBrandType,
        selectedServiceType,
        setSelectedServiceType,
        originalOrAftermarket,
        setOriginalOrAftermarket,
        filterReload,
        setFilterReload
        // Ide jönnek majd az exportok
    };
    return (_jsxs(AppContext.Provider, { value: contextValue, children: [" ", children, " "] }));
}
export { AppContext };
