import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pg from "./images/personalised gift.avif";
import dc from "./images/diy & craft.avif";
import kb from "./images/kids & babies.avif";
import jewel from "./images/jewery.avif";
import we from "./images/wedding & engagement.avif";
import os from "./images/onsale.avif";
import ag from "./images/annivesary gift.avif";
import ghm from "./images/gift for him.avif";
import ghr from "./images/gift for her.avif";
import pgi from "./images/personalised gift ideas.avif";
import wg from "./images/wedding gifts.avif";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="sectionA">
        <div className="section1">
          <h1 className="section1-text">
            Find things you'll love. Support independent sellers. Only on Etsy.
          </h1>
        </div>
        <div className="section1-images">
          <div className="section1-images-title">
            <img src={pg} alt="" />
            <p className="tit">
              Personalized <br /> Gifts
            </p>
          </div>

          <div className="section1-images-title">
            <img src={dc} alt="" />
            <p className="tit">DIY & Crafts</p>
          </div>

          <div className="section1-images-title">
            <img src={kb} alt="" />
            <p className="tit">
              For Kids & <br /> Babies
            </p>
          </div>

          <div className="section1-images-title">
            <img src={jewel} alt="" />
            <p className="tit">Jewelry</p>
          </div>

          <div className="section1-images-title">
            <img src={we} alt="" />
            <p className="tit">
              Wedding & <br />
              Engagement
            </p>
          </div>

          <div className="section1-images-title">
            <img src={os} alt="" />
            <p className="tit">On Sale</p>
          </div>
        </div>
      </div>

      <div className="sectionB">
        <div className="section2">
          <h1 className="section2-text"> Shop our popular gift categories</h1>
        </div>

        <div className="section2-images">
          <div className="section2-image-title">
            <img src={ag} alt="" />
            <p>
              <br /> Anniversary gifts
            </p>
          </div>

          <div className="section2-image-title">
            <img src={ghm} alt="" />
            <p>
              <br /> Gifts for him
            </p>
          </div>

          <div className="section2-image-title">
            <img src={ghr} alt="" />
            <p>
              <br /> Gifts for her
            </p>
          </div>

          <div className="section2-image-title">
            <img src={pgi} alt="" />
            <p>
              <br /> Personlized gift ideas
            </p>
          </div>

          <div className="section2-image-title">
            <img src={wg} alt="" />
            <p>
              <br /> Wedding gifts
            </p>
          </div>
        </div>
      </div>

      <div className="sectionC">
        <h1 className="sectionC-title">What is Etsy?</h1>
        <p className="sectionC-p1">Read our wonderfully weird story.</p>

        <div className="section3">
          <div className="section3-text1">
            <h2>A community doing good</h2>
            <p className="sectionC-p2">
              Etsy is a global online marketplace, where people <br /> come
              together to make, sell, buy, and collect unique <br /> items.
              We’re also a community pushing for positive <br /> change for
              small businesses, people, and the planet. <br />{" "}
              <a href="">
                Here are some of the ways we’re making a positive impact,
                together.
              </a>
            </p>
          </div>

          <div className="section3-text2">
            <h2>
              Support independent <br /> creators
            </h2>
            <p className="sectionC-p2">
              There’s no Etsy warehouse – just millions of people <br /> selling
              the things they love. We make the whole <br /> process easy,
              helping you connect directly with <br /> makers to find something
              extraordinary.
            </p>
          </div>

          <div className="section3-text3">
            <h2>Peace of mind</h2>
            <p className="sectionC-p2">
              Your privacy is the highest priority of our dedicated <br /> team.
              And if you ever need assistance, we are always <br /> ready to
              step in for support.
            </p>
          </div>
        </div>

        <h3 className="qstn">Have a question? Well, we've got some answers.</h3>

        <input
          className="section3-input"
          type="text"
          readOnly
          placeholder="Go to Help Center"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
