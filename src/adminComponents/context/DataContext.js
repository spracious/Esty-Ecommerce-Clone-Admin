import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const dataCart = localStorage.getItem("foodiesCart");

  const grandTotal = [...cart]
    .map(({ totalPrice }) => totalPrice)
    .reduce((total, initial) => {
      return total + initial;
    }, 0);

  const getUsers = () => {
    fetch("http://159.65.21.42:9000/users")
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  };

  const getProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
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
    let checkItem = initialCartData.find((cart_item) => cart_item.id === item.id);
    if (checkItem) {
      alert("Item already in cart");
    } else {
      let newCartItem = { ...item, quantity: 1, totalPrice: item.price };
      initialCartData.push(newCartItem);
      setCart(initialCartData);
      localStorage.setItem("foodiesCart", JSON.stringify(initialCartData));
      alert("Item added to cart");
    }
  };

  const increaseQty = (item) => {
    let initialCartData = [...cart];
    initialCartData.map((cart_item) => {
      if (cart_item.id === item.id) {
        cart_item.quantity += 1;
        cart_item.totalPrice = cart_item.price * cart_item.quantity;
      }
      return cart_item;
    });


    setCart(initialCartData);
    localStorage.setItem("foodiesCart", JSON.stringify(initialCartData));
  };

  const decreaseQty = (item) => {
    let initialCartData = [...cart];
    initialCartData.map((cart_item) => {
      if (cart_item.id === item.id) {
        if (cart_item.quantity > 1) {
          cart_item.quantity -= 1;
          cart_item.totalPrice = cart_item.price * cart_item.quantity;
        }
      }
      return cart_item;
    });

    setCart(initialCartData);
    localStorage.setItem("foodiesCart", JSON.stringify(initialCartData));
  };
  const deleteCartItem = (item) => {
    let initialCartData = [...cart];
    let cartItems = initialCartData.filter((cart_item) => cart_item.id !== item.id);
    setCart(cartItems);
    localStorage.setItem("foodiesCart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    getProduct();
    activateCart();
  }, []);

  return (
    <DataContext.Provider
      value={{
        posts,
        cart,
        setCart,
        getUsers,
        setPosts,
        products,
        addToCart,
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
