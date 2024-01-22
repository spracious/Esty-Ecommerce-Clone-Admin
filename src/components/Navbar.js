import { Link } from "react-router-dom";
import "../App.css";
import logo from "./images/home logo.png";
import search from "./images/search-icon.png";
import fav from "./images/favorite.jpg";
import cart from "./images/cart.png";
import { IoCartSharp } from "react-icons/io5";
import { DataContext } from "./context/DataContext";
import { useContext } from "react";

function Navbar() {
  const { cart } = useContext(DataContext);
  return (
    <div>
      <nav className="nav">
        <div className="top-nav">
          <h3 className="logo">
            <Link to="/">
              <img className="logo-img" src={logo} alt="" />
            </Link>

            <div className="nav-inputs">
              <input
                className="nav-input"
                type="text"
                readOnly
                placeholder="Search for anything"
              />
            </div>
            <img className="nav-search" src={search} alt="" />
          </h3>

          <div className="nav-sign">
            <Link
              style={{ color: "grey", textDecoration: "none" }}
              to="/SignIn"
            >
              <h3>Sign in</h3>
            </Link>
          </div>

          <img className="fav-img" src={fav} alt="" />

          <Link className="cart-icon" to="/cart">
            <IoCartSharp
              style={{ marginLeft: "20px", marginTop: "12px", color: "gray" }}
            />
          </Link>
          <div className="cartIcon">{cart.length}</div>

          <Link
            className="nav-sign"
            style={{ color: "orangered", fontWeight:"bold", textDecoration: "none" }}
            to="/adminLogin"
          >
            Admin Access
          </Link>
        </div>

        {/* <div className="bottom-nav">
          <ul className="links">
            <li>Jewelry & Accessories</li>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>Art & Collectibles</li>
            <li>Craft Supplies & Tools</li>
            <Link to="/vintage">Vintage</Link>
          </ul>

          
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
