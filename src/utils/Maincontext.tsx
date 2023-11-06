import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  ChangeEvent,
} from "react";

interface AppContextType {
  menuOpened: boolean;
  menuOpenHandler: () => void;
  brand: string | undefined;
  setBrand: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStorageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedSize: string | undefined;
  selectedColor: string | undefined;
  selectedStorage: number | undefined | null;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
  id: number | null;
  filterOpened: boolean;
  filterOpenHandler: () => void;
  cartOpenHandler: () => void;
  cart: { id: number; quantity: number; price: number; totalPrice: number }[];
  cartOpened: boolean;
  addToCart: (
    id: number,
    quantity: number,
    price: number,
    totalPrice: number
  ) => void;
  formatNumberWithDots: (number: number) => void;
  removeItem: (id: number) => void;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedBrand: string | undefined;
  setSelectedBrandType: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedBrandType: string | undefined;
    setSelectedServiceType: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedServiceType: string | undefined;
  setOriginalOrAftermarket: React.Dispatch<React.SetStateAction<number | null>>;
  originalOrAftermarket: number | null;
  filterReload: boolean;
  setFilterReload: React.Dispatch<React.SetStateAction<boolean>>

  // Ide az exportok type defje
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default useAppContext;

export function AppProvider({ children }: { children: ReactNode }) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [filterOpened, setFilterOpened] = useState<boolean>(false);
  const [cartOpened, setCartOpened] = useState<boolean>(false);
  const [cart, setCart] = useState<
    { id: number; quantity: number; price: number; totalPrice: number }[]
  >([]);
  const [brand, setBrand] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedStorage, setSelectedStorage] = useState<number>();
  const [id, setId] = useState<number | null>(null);
  const [filterReload, setFilterReload] = useState<boolean>(false);

{/* Repair part */}

const [selectedBrand, setSelectedBrand] = useState<string>();
const [selectedBrandType, setSelectedBrandType] = useState<string>();
const [selectedServiceType, setSelectedServiceType] = useState<string>();
const [originalOrAftermarket, setOriginalOrAftermarket] = useState<number | null>(null);

  useEffect(() => {
    setSelectedBrand('')
    setSelectedBrandType('')
    setSelectedServiceType('')
  }, [filterReload])

  function formatNumberWithDots(number: number) {
    // Format the number with dots, e.g., 1,000,000
    const formattedNumber = number.toLocaleString();
    return <span>{formattedNumber}</span>;
  }

  useEffect(() => {
    console.log("Brand: " + selectedBrand)
  }, [selectedBrand])

  useEffect(() => {
    console.log("Type: " + selectedBrandType)
  }, [selectedBrandType])

  useEffect(() => {
    console.log("Service: " + selectedServiceType)
  }, [selectedServiceType])

  const addToCart: (
    id: number,
    quantity: number,
    price: number,
    totalPrice: number
  ) => void = (id, quantity, price, totalPrice) => {
    if (cart) {
      setCart((prevCart) => [...prevCart, { id, quantity, price, totalPrice }]);
    } else {
      setCart([{ id, quantity, price, totalPrice }]);
    }
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    setSelectedSize((prevSize) => (prevSize === item ? "" : item));
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    setSelectedColor((prevSize) => (prevSize === item ? "" : item));
  };

  const handleStorageChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const contextValue: AppContextType = {
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

  return (
    <AppContext.Provider value={contextValue}> {children} </AppContext.Provider>
  );
}

export { AppContext };
