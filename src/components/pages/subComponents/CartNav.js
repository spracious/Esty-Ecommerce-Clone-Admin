import www from "../../images/www.png";
import React from "react";

function CartNav() {
  return (
    <>
      <div style={{ marginTop: "70px" }}>
        <p
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            marginBottom: "20px",
          }}
        >
          🌿 Etsy offsets carbon emissions from every delivery
        </p>

        <hr />

        <div className="layer">
          <div className="layer-left-wing">
            <img src={www} alt="" />
            <p>Nigeria</p>
            <p>|</p>
            <p>English(US)</p>
            <p>|</p>
            <p>$</p>
            <p>(USD)</p>
          </div>
          <div className="layer-right-wing">
            <p>© 2023 Etsy, Inc.</p>
            <a href="">Terms of Use</a>
            <a href="">Privacy</a>
            <a href="">Intrest-based ads</a>
            <a href="">Regions</a>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            margin: "20px",
          }}
        >
          Merchant is Etsy, Inc. (USA) or Etsy Ireland UC(Ireland), depending on
          the currency in which the transacts. See Etsy Payments Terms of Use{" "}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "sans-serif",
            marginLeft: "590px",
            marginBottom: "50px",
          }}
        >
          <p>Etsy, Inc., USA 117 Adams Street Brooklyn, NY 11201</p>
          <p style={{ marginLeft: "60px" }}>
            Etsy Ireland UC 66/67 Great Strand Street Dublin 1
          </p>
        </div>
      </div>
    </>
  );
}

export default CartNav;
