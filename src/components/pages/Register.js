import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sigin from "./Sigin";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("etsyEmail", JSON.stringify(email));
      localStorage.setItem("etsyPassword", JSON.stringify(password));
      console.log("Saved to Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <Navbar />
      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50%",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            boxShadow:
              "rgba(17, 17, 16, 0.1) 0px 4px 16px, rgba(17, 17, 16, 0.1) 0px 8px 14px, rgba(17, 17, 26, 0.1) 0px 16px 16px",
            backgroundColor: "whitesmoke",
            borderRadius: "15px",
            height: "100%",
            width: "25%",
            fontSize: "10px",
          }}
        >
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <div
                style={{
                  marginTop: "40px",
                  fontSize: "30px",
                  fontStyle: "italic",
                  marginLeft: "20px",
                }}
              >
                <h3 style={{ textDecoration: "none", color: "gray" }}>
                  Create your account
                </h3>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    color: "gray",
                    fontSize: "22px",
                    paddingTop: "15px",
                    margin: "15px",
                  }}
                >
                  Registration is easy.
                </p>
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  style={{
                    width: "90%",
                    border: "none",
                    height: "45px",
                    borderRadius: "5px",
                  }}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              {flag && (
                <Alert style={{color:"red", display:"flex", justifyContent:"center", fontSize:"16px"}} variant="danger">
                  I got it you are in hurry..... But every Field is important!
                </Alert>
              )}

              <button type="submit" className="btn-reg">
                Register
              </button>

              <div className="continue">
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontSize: "20px",
                  }}
                >
                  ________________ OR ________________
                </p>
                <button>Continue with Google</button> <br />
                <button>Continue with Facebook</button> <br />
                <button>Continue with Apple</button>
              </div>

              <p className="terms">
                By clicking Register or Continue with Google, <br /> Facebook,
                or Apple, you agree to Etsy's{" "}
                <p style={{ textDecoration: "underline" }}>
                  Terms of <br /> Use
                </p>{" "}
                and{" "}
                <p style={{ textDecoration: "underline" }}>Privacy Policy.</p>{" "}
                Etsy may send you <br /> communications; you may change your
                preferences <br /> in your account settings. We'll never post
                without <br /> your permission.
              </p>
            </form>
          ) : (
            <Sigin />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
