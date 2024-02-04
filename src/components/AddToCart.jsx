import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CardAmountToggle from "./CardAmountToggle";
import { NavLink } from "react-router-dom";
import  {Button} from  "../styles/button";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {

  const {AddToCart} = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    stock > amount ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p> 
          colors:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* Add to Cart */}
      <CardAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
       
       <NavLink to='/cart' onClick={() => AddToCart(id, color, amount, product)}>
        <Button className="btn">Add to Cart</Button>
       </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: felx-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  // Add to Cart

  .amount-toggle {
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
