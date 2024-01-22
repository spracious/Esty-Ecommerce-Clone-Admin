import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

function Sigin() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("etsyPassword").replace(/"/g, "");
    let mail = localStorage.getItem("etsyEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div>
          <div>
            {home ? (
              <form onSubmit={handleLogin}>
                <div style={{ display: "flex", margin: "30px" }}>
                  <h3
                    style={{
                      fontSize: "30px",
                      fontFamily: "sans-serif",
                      color: "gray",
                    }}
                  >
                    Sign in
                  </h3>
                  <Link to="/register">
                    {" "}
                    <button
                      style={{
                        marginLeft: "200px",
                        height: "40px",
                        width: "40%",
                        borderRadius: "20px",
                        fontFamily: "sans-serif",
                        fontSize: "20px",
                      }}
                    >
                      Register
                    </button>
                  </Link>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(event) => setEmaillog(event.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    style={{
                      width: "90%",
                      border: "none",
                      height: "45px",
                      borderRadius: "5px",
                    }}
                    onChange={(event) => setPasswordlog(event.target.value)}
                  />

                  {flag && (
                    <Alert
                      style={{
                        color: "red",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "16px",
                      }}
                      variant="warning"
                    >
                      Fill correct Info else keep trying......
                    </Alert>
                  )}
                </div>
                <div style={{ display: "flex", margin: "30px" }}>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      color: "gray",
                    }}
                  >
                    ☑ Stay signed in
                  </p>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      textDecoration: "underline",
                      color: "purple",
                      marginTop: "5px",
                      marginLeft: "60px",
                    }}
                    onClick={handleClick}
                  >
                    Forgot your password?
                  </p>
                </div>

                <button type="submit" className="btn-sig">
                  Sign in
                </button>

                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "30px",
                    textDecoration: "underline",
                    fontFamily: "sans-serif",
                    fontSize: "20px",
                    color: "purple",
                  }}
                >
                  Trouble sigining in?
                </p>

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
              <Welcome />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sigin;
