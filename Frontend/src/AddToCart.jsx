import React, { useEffect, useState } from "react";

import { IoIosInformationCircleOutline } from "react-icons/io";
import "./AddToCart.css";
import { MdCancelPresentation } from "react-icons/md";
import API_BASE_URL from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import WholeNav from "./WholeNav";



const AddToCart = () => {
   let [cart, setCart] = useState([]);
  
  let [saveCart, setSaveCart] = useState([]);
  let [showPopupPincode, setShowPopupPincode] = useState(false);

  let navigate = useNavigate();
  
  useEffect(() => {
    async function fetchCart() {
      let res = await fetch(`${API_BASE_URL}/findAllCart`);
      let data = await res.json();
      setCart(data);
    }
    async function fetchSaveCart() {
      let res = await fetch(`${API_BASE_URL}/listSaveForLater`);
      let data = await res.json();
      setSaveCart(data);
    }
    fetchCart();
    fetchSaveCart();
  }, []);

  let totalPrice = 0;
  {
    cart.map((e) => {
      totalPrice += Number(e.price);
    });
  }
  let fivePercent = ((totalPrice * 5) / 100).toFixed();
  let sevenPercent = ((totalPrice * 7) / 100).toFixed();
  let GST = ((totalPrice * 3) / 100).toFixed();
  let buyMore_saveMore = totalPrice > 1000 ? 50 : 3;
  let disCount = ((totalPrice * 5) / 100).toFixed();
  let delivery_Fee = totalPrice > 100 ? 10 : 0;
  let protected_Fee = 10;
  let couponsForYou =
    cart.length >= 20
      ? (totalPrice - (totalPrice * 5) / 100).toFixed()
      : cart.length >= 10
      ? (totalPrice - (totalPrice * 7) / 100).toFixed()
      : 5;
  console.log(couponsForYou);
  let saveAmount =
    Number(disCount) + Number(buyMore_saveMore) + Number(couponsForYou);
  console.log(saveAmount);
  let totalDeliveryFee =
    delivery_Fee +
    protected_Fee -
    disCount +
    totalPrice -
    buyMore_saveMore -
    couponsForYou;

  //!Delete item from List Of cart
  async function deleteItem(id) {
    await fetch(`${API_BASE_URL}/deleteCart/${id}`, { method: "DELETE" });
    //!Remove item from UI
    setCart(
      cart.filter((cart) => {
        return cart.id !== id;
      })
    );
  }
  async function moveToCart(id) {
    let res = await fetch(`${API_BASE_URL}/saveCartLaterGetById/${id}`);
    let data = await res.json();

    await fetch(`${API_BASE_URL}/addToCart`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        productId: data.id,
      }),
    });
    console.log(cart);
    setCart([...cart, data]);
  }
  async function deleteFromCart(id) {
    await fetch(`${API_BASE_URL}/saveCartLaterDeleteByID/${id}`, {
      method: "DELETE",
    });
    toast.success("Item Removed Successfully");
    setSaveCart(
      saveCart.filter((c) => {
        return c.id !== id;
      })
    );
  }
  async function getCartsById(id) {
    let result = await fetch(`${API_BASE_URL}/cartGetById/${id}`);
    let datas = await result.json();

    //!save to Database
    await fetch(`${API_BASE_URL}/saveCartLater`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        productId: datas.id,
      }),
    });

    toast.success("Item Saved For Later Successfully");
    console.log(datas);
    setSaveCart([...saveCart, datas]);
  }
  
 

  return (
    <div className="displaycart">
      <WholeNav cart={cart}></WholeNav>
      {/* //!Cart Items Display */}
      <div className="carts">
        <div className="addToCart">
          <div className="saveaddress">
            <h5>From Saved Address</h5>
            <button
              onClick={() => {
                setShowPopupPincode(true);
              }}
            >
              Enter Delivery Pincode
            </button>
          </div>
          {showPopupPincode &&  <div className="cancel"><MdCancelPresentation className="cancel_button"  onClick={
                ()=>{setShowPopupPincode(false)}
              } /></div>}
          {showPopupPincode && (
            
            <div className="enter-pincode" >
               
              <h4>Enter Your Address & Pincode</h4>
              <form className="address-form">
                <input
                  type="text"
                  name="pincode"
                  minLength={6}
                  maxLength={7}
                  required
                  placeholder="Enter Pincode"
                />
                <textarea
                  required
                  name="address"
                  placeholder="Enter Your Adress"
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
          )}
          <div className="overflow">
            {cart.map((products) => {
              return (
                <div className="lefts" key={products.id}>
                  <div className="border">
                    <div className="addcartimage">
                      <img src={products.imageUrl} alt={products.name} />
                    </div>
                    <div className="left_inside_right">
                      <div className="text">
                        <h2>{products.name}</h2>
                        <h3>{products.description}...</h3>
                        <h3>
                          Available Stock:
                          {products.stock !== 0
                            ? products.stock
                            : "Out Of Stock"}
                        </h3>
                      </div>
                      <div className="cancel">
                        <button
                          onClick={async () => {
                            await getCartsById(products.id);
                            await deleteItem(products.id);
                          }}
                          className="save"
                        >
                          SAVE FOR LATER
                        </button>
                        <button
                          className="remove"
                          onClick={() => {
                            deleteItem(products.id);
                          }}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="placeorderbutton">
            <button
              className="place-order"
              disabled={cart.length === 0}
              onClick={() => {
                navigate("");
              }}
            >
              Place order
            </button>
          </div>
        </div>
        <div className="rights">
          <h3>PRICE DETAILS</h3>
          <div className="pricedetails">
            <div className="pricecontent">
              <h4>
                Price ({cart.length} items){" "}
                <div className="info">
                  <IoIosInformationCircleOutline />
                  <div className="hovertext">
                    <p>
                      Price(9 items) <span>•{totalPrice}$</span>
                    </p>

                    <div className="totalPriceItems">
                      <li>
                        Total price you see is inclusive of the product price,
                        taxes, and GST charges
                      </li>
                      <p>-{GST}$</p>
                    </div>
                  </div>
                </div>
              </h4>
              <h4>Discount</h4>
              <h4>
                Buy More Save More{" "}
                <div className="info">
                  <IoIosInformationCircleOutline />
                  <div className="hovertext">
                    <p>Buy more & save more</p>
                    <div className="buymore">
                      <li>Buy worth ₹1000$ or more get ₹off 50$</li>
                      <p>-{buyMore_saveMore}$</p>
                    </div>
                  </div>
                </div>
              </h4>
              <h4>
                Coupons For You{" "}
                <div className="info">
                  <IoIosInformationCircleOutline />
                  <div className="hovertext">
                    <li>Coupons for you</li>
                    <div className="fivepercent">
                      <li>
                        Get extra 5% off on 10 item(s) price inclusive of
                        cashback/coupon
                      </li>
                      <p className="five">-{fivePercent}$</p>
                    </div>
                    <div className="sevenpercent">
                      <li>Get extra 7% off on 20 item(s)</li>
                      <p className="seven">-{sevenPercent}$</p>
                    </div>
                  </div>
                </div>
              </h4>
              <h4>
                Protected Promice Fee{" "}
                <div className="info">
                  <IoIosInformationCircleOutline aria-disabled />
                </div>
              </h4>
              <h4>
                Delivery Fee{" "}
                <div className="info">
                  <IoIosInformationCircleOutline />
                  <div className="hovertext">
                    <p>Delivery Fee</p>
                    <div className="deliFee">
                      <li>packing Charge & Travel Charge</li>
                      <p>{delivery_Fee}$</p>
                    </div>
                  </div>
                </div>
              </h4>
            </div>
            <div className="prices">
              <h4>{totalPrice.toFixed()}$</h4>

              <p>-{disCount}$</p>
              <p>-{buyMore_saveMore}$</p>
              <p>-{couponsForYou}$</p>
              <h4>{protected_Fee}$</h4>
              <h4>{delivery_Fee}$</h4>
            </div>
          </div>
          <div className="dotted-line"></div>
          <div className="totalAmount">
            <h3>Total Amount</h3>
            <h3>{totalDeliveryFee.toFixed()}$</h3>
          </div>
          <div className="dotted-line"></div>
          <div className="youSaved">
            <h3>You will Save {Number(saveAmount).toFixed()}$ on this order</h3>
          </div>
        </div>
      </div>
      <div className="saveForLater">
        <div className="heading">
          <h3>Saved For Later Items ({saveCart.length})</h3>
        </div>
        {saveCart.map((products) => {
          return (
            <div className="saveitems" key={products.id}>
              <div className="card_Save_Items">
                <div className="card_Img">
                  <img src={products.imageUrl} alt={products.name} />
                </div>
                <div className="card_img_detail">
                  <div className="text_details">
                    <h2>{products.name}</h2>
                    <h3>{products.description}...</h3>
                    <h3>
                      Available Stock:
                      {products.stock !== 0 ? products.stock : "Out Of Stock"}
                    </h3>
                  </div>
                  <div className="moveTocart_or_remove">
                    <button
                      className="Movetocart"
                      onClick={async () => {
                        await moveToCart(products.id);
                        await deleteFromCart(products.id);
                      }}
                    >
                      MOVE TO CART
                    </button>
                    <button
                      className="removed"
                      onClick={() => {
                        deleteFromCart(products.id);
                      }}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddToCart;
