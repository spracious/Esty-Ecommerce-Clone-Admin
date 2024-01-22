import React, { useState } from "react";
import AdminNav from "./subComponents/AdminNav";

function AdminNewProducts() {
  const [post, setPost] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    image: null,
    description: "",
  });

  const [files, setFiles] = useState({
    image: null,
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "image") {
      let file = e.target.files[0];
      setFiles({ image: file });
    }
    setPost({ ...post, [name]: value });
  };

  let file = files.image;
  let name = post.name;
  let category = post.category;
  let price = post.price;
  let quantity = post.quantity;
  let description = post.description;
  let formData = new FormData();

  formData.append("name", name);
  formData.append("category", category);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("description", description);
  formData.append("image", file);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://159.65.21.42:9000/create/product", {
      method: "POST",
      enctype: "multipart/form-data",
      body: formData,
      processData: false,
      contentType: false,
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Product Created");
        console.log(data);
      });
  };

  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>Product Posting</i>
        </header>

        <form action="" className="post-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="">Category:</label>
            <input type="text" name="category" onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="">Price:</label>
            <input type="text" name="price" onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="">Quantity:</label>
            <input type="text" name="quantity" onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="">Image:</label>
            <input type="file" name="image" onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="">Description:</label>
            <input type="text" name="description" onChange={handleInput} />
          </div>

          <div>
            <button style={{ fontSize: "24px" }}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminNewProducts;
