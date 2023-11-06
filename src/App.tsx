import React from "react";
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
import Phones from './components/CategoriesPages/Phones'
import Repair from "./pages/Repair";
import Contact from "./components/Contact";

function App() {
const { brand, id } = useAppContext()

  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Cart />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="brands" element={<Brands />} />
            <Route path="categories" element={<Categories />}>
              <Route path="phones" element={<Phones />} />
            </Route>
            <Route path="repair" element={<Repair />}/>
          <Route path={`${brand}/:id`} element={<Productpage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
