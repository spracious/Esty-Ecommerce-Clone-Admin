import { useContext, useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

// import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import coin from "../images/coin.webp";
import fav from "../images/favorite.jpg";
import gft from "../images/gift.png";
import review from "../images/review-img.png";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

function Product() {
  const { addToCart } = useContext(DataContext);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = React.useState({});
  const { id } = useParams();

  const getProduct = () => {
    fetch(`http://159.65.21.42:9000/product/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div>
      <Navbar />
      <hr />
      <div className="product1">
        <div className="product1-A">
          <img src={`http://159.65.21.42:9000${product.image}`} alt="" /> <br />
          <p className="product1-A-text">2,931 reviews ★ ★ ★ ★ ★</p> <br />
          <div className="review-header">
            <p className="review-text">Reviews for this item</p>

            <p className="review-figures">159</p>

            <p className="review-text">Reviews for this shop </p>

            <p className="review-figures">2,931</p>
          </div>
          <hr className="review-hr" />
          <div className="review-bar">
            <div className="container">
              <div className="chart">
                <div className="rate-box">
                  <span className="value">5 stars</span>
                  <div className="line star5">
                    <span className="progress"></span>
                  </div>
                  <span className="count">91%</span>
                </div>

                <div className="rate-box">
                  <span className="value">4 stars</span>
                  <div className="line star4">
                    <span className="progress"></span>
                  </div>
                  <span className="count">6%</span>
                </div>

                <div className="rate-box">
                  <span className="value">3 stars</span>
                  <div className="line star3">
                    <span className="progress"></span>
                  </div>
                  <span className="count">2%</span>
                </div>

                <div className="rate-box">
                  <span className="value2">2 stars</span>
                  <div className="line star2">
                    <span className="progress"></span>
                  </div>
                  <span className="count">0%</span>
                </div>

                <div className="rate-box">
                  <span className="value">1 star</span>
                  <div className="line star1">
                    <span className="progress"></span>
                  </div>
                  <span className="count">1%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="review-borders">
            <input
              className="border1"
              type="text"
              placeholder="sort by: Suggested "
            />
            <input className="border2" type="text" placeholder="With photos" />
            <input
              className="border1"
              type="text"
              placeholder="Fliter by rating"
            />
          </div>
          <div className="review-speech">
            <p style={{ marginBottom: "6px", textAlign: "left" }}>★ ★ ★ ★ ★</p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.9", textAlign: "left" }}
            >
              I bought this because that little bird is so cute! It is exactly
              as described and met my expectations. <br /> I got it in very good
              time coming from overseas. Very good price. I'm going to order
              more in the <br /> future and I'll get them from
              EnglishCoinCompany.
            </p>

            <div className="items">
              Purchased item:
              <p className="purchase">
                {" "}
                1947 farthing Coin With a Wren from the United kingdom,
                Perfect....
              </p>
            </div>

            <div className="reviewers">
              {/* <img style={{width:"5%", borderRadius:"40px",}} src={review} alt="" /> */}
              <p className="purchase">Rob Scholl</p>
              <p className="reviewers-date">Nov 24, 2022</p>
            </div>

            <p
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              👍 Helpful?
            </p>
          </div>
          <div className="review-speech">
            <p style={{ marginBottom: "6px", textAlign: "left" }}>★ ★ ★ ★ ★</p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.9", textAlign: "left" }}
            >
              This was the most exciting thing I've gotten lately. My first
              great granddaughter arrived <br /> recently. They named her Dani
              Wren. I happened to see this coin while looking for bird related{" "}
              <br /> items. I saw the bird, found that it was a wren, and the
              rest is history. I also, while researching.....
            </p>

            <div className="items">
              Purchased item:
              <p className="purchase">
                {" "}
                1947 farthing Coin With a Wren from the United kingdom,
                Perfect....
              </p>
            </div>

            <div className="reviewers">
              {/* <img style={{width:"5%", borderRadius:"40px",}} src={review} alt="" /> */}
              <p className="purchase">gxtrack</p>
              <p className="reviewers-date">Jan 6, 2023</p>
            </div>

            <p
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              👍 Helpful?
            </p>
          </div>
          <div className="review-speech">
            <p style={{ marginBottom: "6px", textAlign: "left" }}>★ ★ ★ ★ ★</p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.9", textAlign: "left" }}
            >
              I love the little wren farthing!! We have powerful presidents'
              faces on our U.S. coins and a <br /> great powerful eagle on one
              as well, but it's kind of a cool switch of pace to see a wren
              coin. <br /> When I pull that from my pocket it reminds me of a
              peaceful walk in the garden. Many, man.....y
            </p>

            <div className="items">
              Purchased item:
              <p className="purchase">
                {" "}
                1947 farthing Coin With a Wren from the United kingdom,
                Perfect....
              </p>
            </div>

            <div className="reviewers">
              {/* <img style={{width:"5%", borderRadius:"40px",}} src={review} alt="" /> */}
              <p className="purchase">Jane Ellen McCune</p>
              <p className="reviewers-date">Jun 13, 2019</p>
            </div>

            <p
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              👍 Helpful?
            </p>
          </div>
          <div className="review-speech">
            <p style={{ marginBottom: "6px", textAlign: "left" }}>★ ★ ★ ★ ★</p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.9", textAlign: "left" }}
            >
              My New favorite shop! Packed like it was my B-day, Super Fast
              Ship, Thank-you so so much!
            </p>

            <div className="items">
              Purchased item:
              <p className="purchase">
                {" "}
                1947 farthing Coin With a Wren from the United kingdom,
                Perfect....
              </p>
            </div>

            <div className="reviewers">
              {/* <img style={{width:"5%", borderRadius:"40px",}} src={review} alt="" /> */}
              <p className="purchase">reginasstudio</p>
              <p className="reviewers-date">Apr 30, 2019</p>
            </div>

            <p
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              👍 1 Helpful?
            </p>
          </div>
        </div>

        <div>
          <div className="product1-B-main">
            <div className="product1-B-main-1">
              <p className="product1-B-text">EnglishCoinCompany</p>
              <p className="product1-B-txtImg">
                {" "}
                <img src={fav} alt="" /> Follow{" "}
              </p>
            </div>{" "}
            <br />
            <div className="product1-B-main-2">
              <p className="product1-B-txtImg2">
                {" "}
                <img src={gft} alt="" />
                Top shop for gifts{" "}
              </p>
              <p className="product1-B-text2">18,883 sales | ★ ★ ★ ★ ★</p>
            </div>{" "}
            <br />
            <div className="product1-B-main-3">
              <p className="product1-B-text3">
                1947 farthing Coin With a Wren from the United kingdom, Perfect
                for Birthdays ,Anniversary and within Jewellery
              </p>

              <p className="product1-B-main-3-price">USD {product.price}</p>

              <p className="product1-B-main-text3">
                Local taxes included (where applicable)
              </p>

              <p style={{ textAlign: "left" }}>
                Quality <br />
                <select className="product1-B-select" name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                  <option value="">26</option>
                  <option value="">27</option>
                  <option value="">28</option>
                  <option value="">29</option>
                  <option value="">30</option>
                  <option value="">31</option>
                  <option value="">32</option>
                  <option value="">33</option>
                  <option value="">34</option>
                  <option value="">35</option>
                  <option value="">36</option>
                  <option value="">37</option>
                  <option value="">38</option>
                  <option value="">39</option>
                  <option value="">40</option>
                  <option value="">41</option>
                  <option value="">42</option>
                  <option value="">43</option>
                  <option value="">44</option>
                  <option value="">45</option>
                  <option value="">46</option>
                  <option value="">47</option>
                  <option value="">48</option>
                  <option value="">49</option>
                  <option value="">50</option>
                  <option value="">51</option>
                  <option value="">52</option>
                  <option value="">53</option>
                  <option value="">54</option>
                  <option value="">55</option>
                  <option value="">56</option>
                  <option value="">57</option>
                  <option value="">58</option>
                  <option value="">59</option>
                  <option value="">60</option>
                  <option value="">61</option>
                  <option value="">62</option>
                  <option value="">63</option>
                  <option value="">64</option>
                  <option value="">65</option>
                  <option value="">66</option>
                  <option value="">67</option>
                  <option value="">68</option>
                  <option value="">69</option>
                  <option value="">70</option>
                  <option value="">71</option>
                  <option value="">72</option>
                  <option value="">73</option>
                  <option value="">74</option>
                  <option value="">75</option>
                  <option value="">76</option>
                  <option value="">77</option>
                </select>
              </p>

              <p>
                <button
                  onClick={() => addToCart(product)}
                  className="product1-B-btn"
                >
                  Add to cart
                </button>
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  marginTop: "50px",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                Highlights
              </p>

              <p
                style={{
                  marginTop: "20px",
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                ⏰ Vintage from the 1940s
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  marginTop: "50px",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                Description
              </p>

              <p
                style={{
                  marginTop: "18px",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                1947 GENUINE COIN FROM KING GEORGE VI
              </p>

              <p
                style={{
                  marginTop: "40px",
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                PLEASE NOTE YOU WILL GET A 1947 FARTHING IT MIGHT BE THE SAME AS
                THE PHOTO BUT WILL BE DATED 1947 AND IN A CIRCULATED CONDITION
              </p>

              <p
                style={{
                  marginTop: "130px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                Learn more about this item
              </p>

              <div
                style={{
                  marginTop: "50px",
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <p>shipping and return polices</p>
              </div>

              <p
                style={{
                  marginTop: "130px",
                  textAlign: "left",
                  fontSize: "13px",
                  textDecoration: "underline",
                }}
              >
                Estimated arrival
              </p>
              <p
                style={{
                  marginTop: "20px",
                  textAlign: "left",
                  fontSize: "24px",
                }}
              >
                Feb 18-Mar 4
              </p>

              <div
                style={{
                  marginTop: "30px",
                  textAlign: "left",
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: "bold" }}>
                  ♥_________ <br />
                  Feb 12 <br />
                  <p style={{ textDecoration: "underline" }}>Order placed</p>
                </p>

                <p style={{ fontWeight: "bold" }}>
                  🚚_________ <br /> Feb 13 <br />
                  <p style={{ textDecoration: "underline" }}>Order ships</p>
                </p>

                <p style={{ fontWeight: "bold" }}>
                  🎁 <br /> Feb 18-Mar 4 <br />
                  <p style={{ textDecoration: "underline" }}>Delivered</p>
                </p>
              </div>
              <p
                style={{
                  marginTop: "30px",
                  textAlign: "left",
                  fontSize: "12px",
                }}
              >
                Cost to ship
              </p>
              <p
                style={{
                  marginTop: "10px",
                  textAlign: "left",
                  fontSize: "26px",
                }}
              >
                USD 5.05
              </p>

              <p
                style={{
                  marginTop: "30px",
                  textAlign: "left",
                  fontSize: "12px",
                  backgroundColor: "#ddebe3",
                  width: "90%",
                  height: "70px",
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                Esty offsets carbon emissions from shipping and packaging on
                this purchase
              </p>

              <div
                style={{
                  marginTop: "30px",
                  textAlign: "left",
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: "bold" }}>
                  Returns & exchanges <br />{" "}
                  <p
                    style={{
                      textDecoration: "underline",
                      fontSize: "20px",
                      marginTop: "10px",
                    }}
                  >
                    Accepted
                  </p>
                </p>

                <p style={{ fontWeight: "bold" }}>
                  {" "}
                  Retur & exchange window <br />
                  <p
                    style={{
                      textDecoration: "underline",
                      fontSize: "20px",
                      marginTop: "10px",
                    }}
                  >
                    30 days
                  </p>
                </p>
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  textAlign: "left",
                  fontSize: "16px",
                }}
              >
                🤝🏼 Etsy Purchase Protection:{" "}
                <p>
                  Shop confidently on Etsy <br /> knowing if something goes
                  wrong with an order, we've got your back for all eligible
                  purchases{" "}
                  <p style={{ textDecoration: "underline" }}>
                    -see program terms
                  </p>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
