//      import React from 'react'

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // For Existing Product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );
    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newData = curElem.amount + amount;

          if (newData >= curElem.max) {
            newData = curElem.max;
          }
          return {
            ...curElem,
            amount: newData,
          };
        } else {
          return curElem;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // For Increment & Decrement  Data
  if (action.type === "SET_DECREMENT") {
    let UpdatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: UpdatedProduct,
    };
  }

  if (action.type === "SET_iNCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // For ClearItem
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "CART_ITEM_PRICE_TOTAL") {
  //   let { total_item, total_price } = state.cart.reduce(
  //     (accum, curElem) => {
  //       let { price, amount } = curElem;

  //       accum.total_item += amount;
  //       accum.total_price += price * amount;

  //       return accum;
  //     },
  //     {
  //       total_item: 0,
  //       total_price: 0,
  //     }
  //   );
  //   return {
  //     ...state,
  //     total_item,
  //     total_price,
  //   };
  // }


  // For Total Cart counter
  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemValue = state.cart.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;
  //     initialVal = initialVal + amount;
  //     return initialVal;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_item: updatedItemValue,
  //   };
  // }

  // For Total Amount

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let TotalAmount = state.cart.reduce((initialVal,curElem) => {
  //     let { price, amount } = curElem;
  //     initialVal = initialVal + price * amount;
  //     return initialVal;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_amount: TotalAmount,
  //   };
  // }

  return state;
};

export default cartReducer;
