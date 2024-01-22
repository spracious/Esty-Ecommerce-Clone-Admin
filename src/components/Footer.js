import React from "react";
import wrld from "./images/globe hand.png";
import ig from "./images/instagram.png";
import fb from "./images/facebook.png";
import pin from "./images/pintrest.png";
import twit from "./images/twitter.png";
import utube from "./images/youtube.png";
import www from "./images/www.png";

function Footer() {
  return (
    <div>
      <div className="layer1">
        <h3 className="layer1-text">
          Yes! Send me exclusive offers, unique gift ideas, and Personalized
          tips for shopping and selling on Esty.
        </h3>

        <div className="layer1-input-text" data-required="Subscribe">
          <input
            className="layer1-input"
            type="text"
            readOnly
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="layer2">
        <img className="layer2-image" src={wrld} alt="" />
        <p className="layer2-text">
          Esty is powered by 100% renewable electricity.
        </p>
      </div>

      <div className="layer3">
        <div className="layer3-link1">
          <h4>Shop</h4>
          <ul>
            <li>
              <a href="">Gift cards</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
            <li>
              <a href="">Etsy blog</a>
            </li>
            <li>
              <a href="">Etsy United Kingdom</a>
            </li>
            <li>
              <a href="">Etsy Germany</a>
            </li>
            <li>
              <a href="">Etsy Canada</a>
            </li>
          </ul>
        </div>

        <div className="layer3-link2">
          <h4>Sell</h4>
          <ul>
            <li>
              <a href="">Sell on Etsy</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Forums</a>
            </li>
            <li>
              <a href="">Affiliates</a>
            </li>
          </ul>
        </div>

        <div className="layer3-link3">
          <h4>About</h4>
          <ul>
            <li>
              <a href="">Etsy, Inc.</a>
            </li>
            <li>
              <a href="">Policies</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Impact</a>
            </li>
            <li>
              <a href="">Legal imprint</a>
            </li>
          </ul>
        </div>

        <div className="layer3-link4">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Privacy settings</a>
            </li>
          </ul>

          <input
            className="layer3-link4-input"
            type="text"
            readOnly
            placeholder="Download the Etsy App"
          />

          <ul className="footer-images">
            <li>
              <a href="">
                <img src={ig} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={fb} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={pin} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twit} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={utube} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="layer4">
        <div className="layer4-left-wing">
          <img src={www} alt="" />
          <p>Nigeria</p>
          <p>|</p>
          <p>English(US)</p>
          <p>|</p>
          <p>$</p>
          <p>(USD)</p>
        </div>
        <div className="layer4-right-wing">
          <p>© 2023 Etsy, Inc.</p>
          <a href="">Terms of Use</a>
          <a href="">Privacy</a>
          <a href="">Intrest-based ads</a>
          <a href="">Regions</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
