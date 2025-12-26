import React from "react";
import Ecommerce from "./Ecommerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { FaCartShopping } from "react-icons/fa6";
import Products from "./Products";
import Category from "./Category";
import Login from "./Login";
import Signup from "./Signup";
import AddToCart from "./AddToCart";
import Ecommercre_main from "./Ecommercre_main";
import { ToastContainer } from "react-toastify";
import Profile from "./MyAccount/Profile";
import Nav from "./Nav";
import Footer from "./Footer";
import Phone from "./Phone";
import WholeNav from "./WholeNav";
const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
        ></ToastContainer>
        <Routes>
          <Route path="/Nav" element={<Nav></Nav>}></Route>
          <Route path="/" element={<Ecommerce></Ecommerce>}>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
            <Route
              path="/ecommerce_main"
              element={<Ecommercre_main></Ecommercre_main>}
            ></Route>
          </Route>

          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}>
           
            Products
          </Route>
          <Route path="/category" element={<Category></Category>}>
            category
          </Route>
           <Route path="/phone" element={<Phone></Phone>}></Route>
          <Route path="/addToCart" element={<AddToCart></AddToCart>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/footer" element={<Footer></Footer>}></Route>

          <Route path="/wholenav" element={<WholeNav></WholeNav>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
