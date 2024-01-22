import React, { useState } from "react";
import AdminNav from "./subComponents/AdminNav";

function AdminNewUsers() {
  const [post, setPost] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPost({ ...post, [name]: value });
  };

  let newUser = {
    name: post.name,
    phone: post.phone,
    email: post.email,
    password: post.password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://159.65.21.42:9000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("User Created");
        console.log(data);
      });
  };

  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>Users Registration</i>
        </header>

        <div class="wrapper">
          <form id="form" name="form" onSubmit={handleSubmit}>
            <div class="title">
              <h2>Create User</h2>
            </div>

            <div class="input-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                onChange={handleInput}
                required
              />
            </div>

            <div class="input-group">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                name="phone"
                onChange={handleInput}
                required
              />
            </div>

            <div class="input-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange={handleInput}
                required
              />
            </div>

            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={handleInput}
                required
              />
            </div>

            <button class="bts" id="bts" name="bts">
              Create user
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminNewUsers;
