import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";
const WholeNav = ({cart}) => {
    let [searchCart, setSearchcart] = useState("");
    let [dropDown, setdropDown] = useState(false);
     let [searchcartActive, setSearchcartActive] = useState(false);
  function handleSearchCart(e) {
    setSearchcart(e.target.value);
  }
  function handleMyAccount(e) {
      e.stopPropagation();
      setdropDown(!dropDown);
    }
  {
    cart.filter((products) => {
      if (searchCart === " ") return true;
      else {
        return products.name.toLowerCase().includes(searchCart.toLowerCase());
      }
    });
  }
  return (
    <div>
      <div className="cartnav">
        <div className="leftnav">
          <input
            type="text"
            placeholder={!searchCart ? "Search for products and more" : " "}
            onClick={() => {
              setSearchcartActive(!searchcartActive);
            }}
            name="serachcart"
            value={searchCart}
            onChange={handleSearchCart}
          />
          <div className="cartNavSearch">
            <FaSearch />
          </div>
        </div>
        <div className="rightnav">
          <div className="myAccount" onClick={handleMyAccount}>
            {" "}
            My Account
            <span className="arrow">
              <MdOutlineArrowDropDown
                className={dropDown ? "arrow-closed" : "arrow-open"}
              />
            </span>
          </div>
          {dropDown && (
            <div className="dropDown" onClick={(e) => e.stopPropagation()}>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/profile");
                }}
              >
                <div className="profile">
                  <IoMdContact />
                </div>
                Profile
              </li>
              <li>
                <div className="orders">
                  <AiOutlineDeliveredProcedure />
                </div>
                Orders
              </li>
              <li>
                <div className="contact">
                  <IoNotifications />
                </div>
                Notification
              </li>
              <li>
                <div className="logout">
                  <IoLogOutSharp />
                </div>
                Logout
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WholeNav;
