import React, { useContext } from "react";
import AdminNav from "./subComponents/AdminNav";
import pro from "../images/products.webp";
import cat from "../images/adminCart.jpeg";
import users from "../images/users.jpg";
import { DataContext } from "../../components/context/DataContext";

function Admin() {
  const { cart } = useContext(DataContext);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://159.65.21.42:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://159.65.21.42:9000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  var tenProducts = products.slice(0, 10);

  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>DashBoard</i>
        </header>

        <div className="admin-card">
          <div className="admin-product">
            <img src={pro} alt="" /> <br />
            <span
              style={{
                paddingBottom: "200px",
                fontSize: "32px",
                color: "orangered",
                fontWeight: "bolder",
              }}
            >
              {
                products.filter(
                  (result) => result.category === "EnglishCoinCompany"
                ).length
              }{" "}
            </span>{" "}
            <br />
            <i>Products in Total</i>
          </div>

          <div className="admin-cart">
            <img src={cat} alt="" /> <br />
            <span
              style={{
                paddingBottom: "200px",
                fontSize: "32px",
                color: "orangered",
                fontWeight: "bolder",
              }}
            >
              {cart.length}{" "}
            </span>{" "}
            <br />
            <i>Totals in Cart</i>
          </div>

          <div className="admin-users">
            <img src={users} alt="" /> <br />
            <span
              style={{
                paddingBottom: "200px",
                fontSize: "32px",
                color: "orangered",
                fontWeight: "bolder",
              }}
            >
              {data.length}{" "}
            </span>{" "}
            <br />
            <i>Users in Total</i>
          </div>
        </div>

        <header className="admin-head">
          <i>10 Products Table</i>
        </header>

        <div className="admin_my_table">
          <table className="admin-table" id="data_table">
            <tr>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Price</th>
            </tr>

            {tenProducts.map((product, key) => {
              return (
                <tr key={key}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
