import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from "../Navbar";
import coin from "../images/coin.webp";
import logo from "../images/coin logo.jpg";
import CartNav from "./subComponents/CartNav";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

function Cart() {
  const {
    cart,
    grandTotal,
    increaseQty,
    decreaseQty,
    quantity,
    setCartQty,
    changeQty,
    deleteCartItem,
  } = useContext(DataContext);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://159.65.21.42:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let newGrandTotal = 0;

  newGrandTotal += grandTotal + 502;

  return (
    <div>
      <Navbar />
      <hr />
      <>
        {cart.length ? (
          <div style={{ width: "70%", marginLeft: "250px" }}>
            <div className="cart1">
              <p style={{ fontSize: "30px" }}>
                {cart.length} item(s) in your cart
              </p>
              <p style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                Keep shopping
              </p>
            </div>

            <p className="cart1a">
              🤝🏼 Buy confidently with Esty's Purchase Protection program for
              buyers, get a full refund i the rare case your item doesn't
              arrive, damaged, or isn't as described. See eligibility
            </p>

            <div className="cart1">
              <div style={{ width: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <>
                    <img style={{ width: "25px" }} src={logo} alt="" />{" "}
                    <p style={{ marginRight: "580px", fontSize: "20px" }}>
                      EnglishCoinCompany
                    </p>
                  </>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "18px",
                      marginRight: "10px",
                    }}
                  >
                    Contact shop
                  </p>
                </div>

                <div>
                  <div>
                    {cart.map((cartItem) => {
                      return (
                        <div key={cartItem._id}>
                          <div className="cartImg">
                            <img
                              src={`http://159.65.21.42:9000${cartItem.image}`}
                              alt=""
                            />

                            <p
                              style={{
                                marginRight: "2px",
                                paddingTop: "40px",
                                lineHeight: "1.9rem",
                                fontSize: "16px",
                                marginLeft: "10px",
                              }}
                            >
                              {cartItem.description}
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "40px",
                                  fontWeight: "bold",
                                }}
                              >
                                <p>Save for later</p>
                                <p
                                  onClick={() => deleteCartItem(cartItem)}
                                  style={{
                                    marginLeft: "50px",
                                    cursor: "pointer",
                                  }}
                                >
                                  Remove
                                </p>
                              </div>
                            </p>

                            <select
                              className="cart-select"
                              name=""
                              id=""
                              value={cartItem.quantity}
                              onClick={() => increaseQty(cartItem)}
                              onChange={(e) => {
                                setCartQty(e.target.value);
                              }}
                            >
                              {quantity.map((qty) => (
                                <option key={qty.value} value={qty.value}>
                                  {qty.qty}
                                </option>
                              ))}
                            </select>

                            <div style={{ display: "block" }}>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  margin: "45px",
                                  fontSize: "20px",
                                  marginLeft: "50px",
                                }}
                              >
                                USD {cartItem.totalPrice}{" "}
                              </p>
                              <p
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "20px",
                                }}
                              >
                                (USD {cartItem.price} each)
                              </p>
                            </div>
                          </div>

                          <div
                            style={{
                              fontFamily: "sans-serif",
                              marginTop: "40px",
                            }}
                          >
                            <p style={{ fontSize: "20px" }}>
                              {" "}
                              This order is a gift
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p style={{ margin: "5px" }}>
                                Prices will not be shown on packing slip
                              </p>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  marginRight: "70px",
                                }}
                              >
                                🔖Apply shop coupon codes
                              </p>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontFamily: "sans-serif",
                            }}
                          >
                            <textarea
                              className="cart-textarea"
                              name=""
                              id=""
                              placeholder="Add a note to EnglishCoinCompany (optional)"
                            ></textarea>

                            <p
                              style={{ marginRight: "50px", marginTop: "20px" }}
                            >
                              {" "}
                              <p style={{ fontSize: "20px" }}>
                                Shipping: USD 5.02{" "}
                              </p>{" "}
                              <br />
                              <p style={{ lineHeight: "1.4" }}>
                                EStimated delivery: Feb 25-Mar 11
                                <br /> <p>from United Kingdom</p>
                              </p>
                            </p>
                          </div>
                          <hr style={{ marginTop: "20px" }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="cart-p">
                <div className="cart-payment">
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      margin: "20px",
                      paddingTop: "20px",
                    }}
                  >
                    How you'll pay
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "20px",
                    }}
                  ></div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "20px",
                      width: "90%",
                    }}
                  >
                    <img
                      height="40"
                      src="https://shoplineimg.com/assets/footer/card_visa.png"
                    />
                    <img
                      height="40"
                      src="https://shoplineimg.com/assets/footer/card_master.png"
                    />
                    <img
                      height="40"
                      src="https://shoplineimg.com/assets/footer/card_amex.png"
                    />
                    <img
                      height="40"
                      src="https://shoplineimg.com/assets/footer/card_paypal.png"
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "20px",
                    }}
                  >
                    <span>item(s) total</span>
                    <p>USD ${grandTotal} </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "20px",
                    }}
                  >
                    <p>
                      Shipping <br /> <p>(To Nigeria)</p>
                    </p>
                    <p>USD 502</p>
                  </div>

                  <hr style={{ margin: "20px" }} />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    <span>Total ({cart.length} item)</span>
                    <p>USD{newGrandTotal}</p>
                  </div>

                  <button className="btn-sig">Proceed to checkout</button>

                  <p
                    style={{
                      margin: "18px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    🔖Apply Etsy coupon code
                  </p>
                  <p style={{ textAlign: "center", margin: "5px" }}>
                    Local taxes included (where applcable)
                  </p>
                  <p style={{ textAlign: "center", margin: "5px" }}>
                    * Additional duties and taxes may apply
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1
            style={{ color: "orangered", textAlign: "center", margin: "250px" }}
          >
            No Product(s) in Cart!!!
          </h1>
        )}
      </>

      <CartNav />
    </div>
  );
}

export default Cart;
