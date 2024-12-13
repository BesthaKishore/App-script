import { createContext } from "react";

const MyContext = createContext({
    AddCartData : [],
    addCartItems : () => {}

})

export default MyContext;