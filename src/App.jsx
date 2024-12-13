import { Route, BrowserRouter as Routers, Routes } from "react-router-dom";

import "./App.css"

import Home from "./Components/Home"

import CartDetails from "./Components/CartDetails"

import MyContext from "./Context/MyContext";

import { useState } from "react";

function App() {

  const [AddCartData, setAddCartData] = useState([]);

  const addCartItems = (data) => {
    if (AddCartData.some((items) => items.id === data.id)){
      return alert("Product is already added in your Cart");
    }
    setAddCartData([...AddCartData, data]);
}

return (
  <MyContext.Provider value={{ AddCartData, addCartItems, setAddCartData }}>
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </Routers>
  </MyContext.Provider>
)
}

export default App;