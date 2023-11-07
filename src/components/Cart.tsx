import React from "react";
import useAppContext from "../utils/Maincontext.js";
import allItems from "../utils/Database.js";
import serviceItems from '../utils/Services.js'
import repair from '../assets/repair.webp'

interface OverlayProps {
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ children }) => {
  const { cartOpened } = useAppContext();

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-70 transition-all duration-200 flex items-center justify-end ${
        cartOpened ? "opacity-1 z-[999999]" : "z-[-1] opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const Cart = () => {
  const { cartOpened, cartOpenHandler, cart, removeItem } = useAppContext();

    const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);

    function formatNumberWithDots(number: number) {
        // Format the number with dots, e.g., 1,000,000
        const formattedNumber = number.toLocaleString();
        return <span>{formattedNumber}</span>;
      }

      const handleServiceTypeClick = (type: string) => {
        switch (type) {
          case "battery":
            return "Battery Change";
            break;
          case "screen":
            return "Screen repair";
            break;
          case "port":
            return "Port repair";
            break;
          default:
        }
      }

      const divStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' // Fix the typo here
      };
      

  return (
    <Overlay>
      <div
        className={`h-full w-screen md:w-1/2 lg:w-1/3 p-8 bg-white transition-all duration-700 ${
          cartOpened ? "translate-x-0 z-[-1]" : "translate-x-[300vw] z-[9999999]"
        }`}
      >
        <div
          onClick={cartOpenHandler}
          className={`fixed top-5 right-5 cursor-pointer z-[99999999] transition-all duration-700 text-3xl`}
        >
          X
        </div>
        <h1 className="text-lg lg:text-3xl font-bold mb-5">
          Your shopping Cart ( {cart.length} )
        </h1>
        {cart.length > 0 ? (
          <div className="flex flex-col gap-5 w-full h-3/4 overflow-y-scroll pb-10">
            {cart.map((cartItem) => {
              const item = allItems.find((item) => item.id === cartItem.id);
              const serviceItem = serviceItems.find((item) => item.id === cartItem.id)

              if (item) {
                return (
                  <div key={cartItem.id} className="flex border-2 border-black">
                    <div className="w-1/3 h-auto" style={{...divStyle, backgroundImage: `url(${item.mainImg})`}}>
                    </div>
                    <div className="w-3/4 bg-gray-100">
                      <div className="flex flex-row flex-wrap items-center justify-between px-3 py-2 lg:p-4">
                        <p className="text-md lg:text-xl min-w-fit">{item.name}</p>
                        <p className="text-sm lg:text-lg font-bold ml-1 min-w-fit">{formatNumberWithDots(item.price)} Ft</p>
                      </div>
                      <div className="flex flex-row items-center justify-between px-3 py-2 lg:p-4">
                      <div className="flex items-center justify-center">
                        <div className="text-black text-md lg:text-xl">
                        {item.storage} GB / {item.color.toLocaleUpperCase()}
                        </div>
                      </div>
                      <div onClick={() => removeItem(cartItem.id)} className={`cursor-pointer z-[99999999] transition-all duration-700 text-xl lg:text-3xl`}>X</div>
                      </div>
                    </div>
                  </div>
                );
              } 
               else if (serviceItem) {
                 return (
                   <div key={cartItem.id} className="flex border-2 border-black">
                    <div className="w-1/3 h-auto" style={{...divStyle, backgroundImage: `url(${repair})`}}>
</div>
                   <div className="w-3/4 bg-gray-100">
                     <div className="flex flex-col flex-wrap items-start justify-between px-3 py-2 lg:p-4">
                       <p className="text-md lg:text-xl min-w-fit">{handleServiceTypeClick(serviceItem.service)}<span className="text-sm">({serviceItem.originalorafter})</span></p>
                       <p className="text-sm lg:text-lg font-bold ml-1 min-w-fit">{formatNumberWithDots(serviceItem.price)} Ft</p>
                     </div>
                     <div className="flex flex-row items-center justify-between px-3 py-2 lg:p-4">
                     <div className="flex items-center justify-center">
                     <div className="text-black text-sm lg:text-lg">
                        {serviceItem.brandType}
                        </div>
                     </div>
                     <div onClick={() => removeItem(cartItem.id)} className={`cursor-pointer z-[99999999] transition-all duration-700 text-xl lg:text-3xl`}>X</div>
                     </div>
                   </div>
                 </div>
                 )
               }
               return null;
            })}
          </div>
        ) : (
          <div className="w-full h-3/4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold mb-2">Your cart is empty</h1>
          {/* <img src={emptyCart} /> */}
          </div>
        )}
        <div className="border-dashed border-2 border-black"></div>
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-lg lg:text-2xl font-bold">Subtotal</h1>
                <h1 className="text-lg lg:text-2xl font-bold">{formatNumberWithDots(totalPrice)} Ft</h1>
            </div>
            <button disabled={cart.length === 0} className="py-2 px-6 lg:px-12 bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300">Go to Checkout</button>
        </div>
      </div>
    </Overlay>
  );
};

export default Cart;
