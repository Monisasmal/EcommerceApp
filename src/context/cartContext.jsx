import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("EcommCart"); 
    if (localCartData.length === 0) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  }; 

const initialState = {
    // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // To Increment And Decrement the item
  const setDecrement = (id) =>{
    dispatch({type: "SET_DECREMENT", payload:id})
  }

 
  const setIncrement = (id) =>{
    dispatch({type: "SET_iNCREMENT", payload:id})
  }

 
  // For Remove item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //  For localStorage
  useEffect(() => {
    dispatch({type: "CART_TOTAL_ITEM"});
    dispatch({type: "CART_TOTAL_PRICE"});
    // dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("EcommCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
  }
  return (
    <CartContext.Provider value={{ ...state, AddToCart, removeItem,clearCart,setDecrement, setIncrement }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
