import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AdminLogin() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "admin1",
      password: "pass123",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">Grant Access</button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="app">
        <div className="login-form">
          <div className="title">Admin Access</div>
          {isSubmitted ? (
            <Link
              style={{
                textDecoration: "none",
                fontSize: "24px",
                color: "orangered",
              }}
              to="/Admin"
            >
              Successfully logged in.... Click Open
            </Link>
          ) : (
            renderForm
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLogin;
