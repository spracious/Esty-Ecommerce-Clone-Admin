import React, { useEffect, useState } from "react";
import AdminNav from "./subComponents/AdminNav";

function AdminProduct() {
  const [products, setProducts] = React.useState([]);
  const [update, setUpdate] = React.useState(false);

  React.useEffect(() => {
    fetch("http://159.65.21.42:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const getProducts = async () => {
    const resp = await fetch("http://159.65.21.42:9000/products");
    const data = await resp.json();
    const CoinCompany = data.filter(
      (product) => product.category === "EnglishCoinCompany"
    );
    setProducts(CoinCompany);
  };

  useEffect(() => {
    if (update) {
      getProducts();
    }
  }, [update]);

  useEffect(() => {
    getProducts();
  }, []);

  //  Delete Produts
  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this Product?"))
      fetch(`http://159.65.21.42:9000/product/${id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then((data) => {
          alert("Product Delete");
          getProducts();
        })
        .catch((error) => {
          console.error(error);
        });
  };

  return (
    <div style={{ width: "100%" }}>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>PRODUCT IMAGES</i>
        </header>

        <div>
          {products.length ? (
            <div className="api-products">
              {products
                .filter((result) => result.category === "EnglishCoinCompany")
                .map((product) => (
                  <div
                    to={`/products/${product.category}`}
                    key={product.category}
                  >
                    <div
                      style={{
                        boxShadow:
                          "rgba(17, 17, 16, 0.1) 0px 4px 16px, rgba(17, 17, 16, 0.1) 0px 8px 14px, rgba(17, 17, 26, 0.1) 0px 16px 16px",
                        backgroundColor: "#f1f1f1",
                        borderRadius: "10px",
                        padding: "15px",
                        height: "80%",
                      }}
                    >
                      <img
                        src={`http://159.65.21.42:9000${product.image}`}
                        alt=""
                      />
                      <p className="vintage3-title">{product.name}</p>
                      <p className="vintage3-star">
                        ★ ★ ★ ★ ★ ({product.quantity}){" "}
                      </p>
                      <p className="vintage3-price">USD {product.price}</p>
                      <p className="vintage3-title-line">{product.category}</p>
                      <p style={{ height: "120px" }}>{product.description}</p>

                      <div style={{ display: "flex", marginTop: "50px" }}>
                        <button className="api-edit">Edit</button>
                        <button
                          onClick={() => deleteProduct(product._id)}
                          className="api-del"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p style={{ fontSize: "30px", fontWeight: "bold", color: "blue" }}>
              Loading......
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
