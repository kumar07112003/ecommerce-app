import React, { useEffect, useState } from "react";
import "./products.css";
import Nav from "./Nav";
import "./Home";
import API_BASE_URL from "../api";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = ({ search, setSearch, cartCount }) => {
  let [Product, setAllProducts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    async function allProducts() {
      try {
        let allproducts = await fetch(
          `${API_BASE_URL}/findAllCategoryProducts`
        );
        let data = await allproducts.json();
        setAllProducts(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    allProducts();
  }, []);
  return (
    <div className="based-on-product">
      <Nav search={search} setSearch={setSearch} cartCount={cartCount}></Nav>
      <div className="allproductsdetails">
        <h1>Top deals</h1>
        <div className="allcategory">
          {Product.map((Product) => {
            return (
              <div
                className="category"
                key={Product.apid}
                onClick={() => {
                  if (Product.category.toLowerCase() === "mobile phones") {
                    navigate("/phone");
                  }
                }}
              >
                <img src={Product.imageUrl} alt={Product.category} />
                <p>{Product.category}</p>
                <h4>From ₹{Product.price}</h4>
              </div>
            );
          })}
        </div>
       
        <div className="paragraph">
          <div className="top-stories">
            <h1>Top Stories: Brand Directory</h1>
            <p>
              <b>MOST SEARCHED FOR AN FLIPCART</b>: Smartphones | wireless
              earbuds | smartwatches | sarees | men’s t-shirts | women’s kurtis
              | mobile accessories | laptops | air fryers | home appliances |
              beauty & personal care products | shoes & sneakers | backpacks |
              power banks | baby care products | Bluetooth speakers | gaming
              mobiles | budget smartphones | 5G phones | laptop bags | gaming
              laptops | tablets | phone covers | screen protectors | fast
              chargers | USB cables | smart TVs | LED TVs | washing machines |
              refrigerators | microwave ovens | induction cooktops | electric
              kettles | mixer grinders | vacuum cleaners | water purifiers |
              ceiling fans | table fans | air coolers | room heaters | geysers |
              men’s jeans | women’s jeans | kids clothing | sports shoes |
              running shoes | sandals | slippers | formal shoes | handbags |
              wallets | belts | sunglasses | watches | analog watches | digital
              watches | fitness bands | earphones | neckbands | gaming headsets
              | webcams | keyboards | mouse | gaming mouse | mouse pads | laptop
              stands | external hard disks | pendrives | memory cards | printers
              | ink cartridges | routers | WiFi extenders | smart bulbs | smart
              plugs | CCTV cameras | security cameras | door locks | men’s
              shirts | casual shirts | formal shirts | hoodies | jackets |
              sweaters | raincoats | innerwear | lingerie | bras | nightwear |
              socks | caps | hats | travel bags | trolley bags | duffel bags |
              gym bags | lunch boxes | water bottles | flasks | kitchen storage
              containers | spice boxes | dinner sets | cookware sets | non-stick
              pans | pressure cookers | frying pans | gas stoves | chimneys |
              dish racks | bathroom accessories | towels | bedsheets | pillows |
              blankets | curtains | carpets | doormats | wall clocks | photo
              frames | wall stickers | study tables | office chairs | computer
              tables | bookshelves | shoe racks | plastic storage boxes |
              stationery items | notebooks | pens | school bags | art supplies |
              toys | remote control cars | soft toys | puzzles | board games |
              baby diapers | baby wipes | baby soap | baby shampoo | baby
              strollers | baby carriers | maternity products | grooming kits |
              trimmers | hair dryers | hair straighteners | face creams |
              sunscreens | perfumes | deodorants | shaving kits | beard oils |
              skincare kits | makeup kits | lipsticks | foundations | nail
              polish | yoga mats | dumbbells | resistance bands | treadmills |
              cycles | sports equipment | cricket bats | footballs | badminton
              rackets | helmets | bike covers | car accessories | car chargers |
              car vacuum cleaners | bike helmets | riding gloves | mobile
              holders | GPS trackers | festival lights | decorative lamps | home
              décor items are among the most searched items on Flipkart, as
              users mainly look for electronics, fashion, daily-use gadgets, and
              home essentials due to discounts, offers, and fast delivery.
            </p>
          </div>
          <div className="payment-options">
            <h1>Payment Options</h1>
            <p>
              Flipkart offers multiple payment options to make shopping easy and
              secure, including Credit Cards (Visa, MasterCard, AmEx) and Debit
              Cards, UPI payments, Net Banking, Cash on Delivery (COD) where you
              pay at your doorstep, Flipkart Pay Later (buy now, pay later
              credit option), EMI options with credit cards or financial
              partners like Insta EMI, e-Gift Vouchers, and Wallet/UPI wallet
              payments for quick checkout; users can also use QR-based
              pay-on-delivery UPI payment when choosing COD for a contactless
              experience, making it convenient for electronics, fashion, home
              essentials, and more
            </p>
          </div>
          <div className="why-you-choose">
            <h1>Why you want Choose Distock?</h1>

            <ul>
              <p>
                <li>
                  Wide range of products across electronics, fashion, home, and
                  daily essentials
                </li>
                <li>
                  User-friendly and simple interface for easy browsing and
                  shopping
                </li>
                <li>
                  Multiple secure payment options (UPI, cards, COD, EMI,
                  wallets)
                </li>
                <li>Fast and reliable delivery with order tracking</li>
                <li>Regular discounts, deals, and special offers</li>
                <li>Easy return, refund, and replacement policies</li>
                <li>Secure transactions and data privacy</li>
                <li>Trusted sellers and quality assurance</li>
                <li>Responsive customer support</li>
                <li>Convenient shopping anytime, anywhere</li>
              </p>
            </ul>
          </div>
        </div>
        <Footer></Footer>
        
      </div>
       
    </div>
  );
};

export default Products;
