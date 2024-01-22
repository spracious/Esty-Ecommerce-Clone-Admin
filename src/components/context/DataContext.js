import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [cartQty, setCartQty] = useState(1);
  const [isQty, setIsQty] = useState(1);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const dataCart = localStorage.getItem("etsyCart");

  const quantity = [
    { qty: "1", value: "1" },
    { qty: "2", value: "2" },
    { qty: "3", value: "3" },
    { qty: "4", value: "4" },
    { qty: "5", value: "5" },
    { qty: "6", value: "6" },
    { qty: "7", value: "7" },
    { qty: "8", value: "8" },
    { qty: "9", value: "9" },
    { qty: "10", value: "10" },
    { qty: "11", value: "11" },
    { qty: "12", value: "12" },
    { qty: "13", value: "13" },
    { qty: "14", value: "14" },
    { qty: "15", value: "15" },
    { qty: "16", value: "16" },
    { qty: "17", value: "17" },
    { qty: "18", value: "18" },
    { qty: "19", value: "19" },
    { qty: "20", value: "20" },
    { qty: "21", value: "21" },
    { qty: "22", value: "22" },
    { qty: "23", value: "23" },
    { qty: "24", value: "24" },
    { qty: "25", value: "25" },
    { qty: "26", value: "26" },
    { qty: "27", value: "27" },
    { qty: "28", value: "28" },
    { qty: "29", value: "29" },
    { qty: "30", value: "30" },
    { qty: "31", value: "31" },
    { qty: "32", value: "32" },
    { qty: "33", value: "33" },
    { qty: "34", value: "34" },
    { qty: "35", value: "35" },
    { qty: "36", value: "36" },
    { qty: "37", value: "37" },
    { qty: "38", value: "38" },
    { qty: "39", value: "39" },
    { qty: "40", value: "40" },
    { qty: "41", value: "41" },
    { qty: "42", value: "42" },
    { qty: "43", value: "43" },
    { qty: "44", value: "44" },
    { qty: "45", value: "45" },
    { qty: "46", value: "46" },
    { qty: "47", value: "47" },
    { qty: "48", value: "48" },
    { qty: "49", value: "49" },
    { qty: "50", value: "50" },
  ];

  const grandTotal = [...cart]
    .map(({ totalPrice }) => totalPrice)
    .reduce((total, initial) => {
      return total + initial;
    }, 0);

  const getProduct = () => {
    fetch("http://159.65.21.42:9000/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  };
  const activateCart = () => {
    if (dataCart) {
      let cartData = JSON.parse(dataCart);
      setCart(cartData);
    }
  };
  const addToCart = (item) => {
    let initialCartData = [...cart];
    let checkItem = initialCartData.find(
      (cart_item) => cart_item._id === item._id
    );
    if (checkItem) {
      alert("This product is already in cart!!!");
    } else {
      let newCartItem = {
        ...item,
        quantity: parseInt(isQty),
        totalPrice: item.price * parseInt(isQty),
      };
      initialCartData.push(newCartItem);
      setCart(initialCartData);
      localStorage.setItem("etsyCart", JSON.stringify(initialCartData));
      alert("Product added!");
    }
  };
  const increaseQty = (item) => {
    let initialCartData = [...cart];
    initialCartData.map((cart_item) => {
      if (cart_item._id === item._id) {
        cart_item.quantity = parseInt(cartQty);
        cart_item.totalPrice = cart_item.price * parseInt(cartQty);
      }
      // return cart_item;
    });
    setCart(initialCartData);
    localStorage.setItem("etsyCart", JSON.stringify(initialCartData));
  };
  const decreaseQty = (item) => {
    let initialCartData = [...cart];
    initialCartData.map((cart_item) => {
      if (cart_item._id === item._id) {
        if (cart_item.quantity > 1) {
          cart_item.quantity -= 1;
          cart_item.totalPrice = cart_item.price * cart_item.quantity;
        }
      }
      return cart_item;
    });
    setCart(initialCartData);
    localStorage.setItem("etsyCart", JSON.stringify(initialCartData));
  };
  const deleteCartItem = (item) => {
    let initialCartData = [...cart];
    let cartItems = initialCartData.filter(
      (cart_item) => cart_item._id !== item._id
    );
    setCart(cartItems);
    localStorage.setItem("etsyCart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    getProduct();
    activateCart();
  }, []);

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        products,
        addToCart,
        quantity,
        setCartQty,
        isQty,
        cartQty,
        grandTotal,
        increaseQty,
        decreaseQty,
        deleteCartItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
