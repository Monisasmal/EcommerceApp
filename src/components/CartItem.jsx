import { useCartContext } from "../context/cartContext";
import FormatPrice from "../helpers/FormatPrice";
import CardAmountToggle from "./CardAmountToggle";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, name, color, image, price, amount}) => {
    const {removeItem, setIncrement, setDecrement} = useCartContext();
  // const setDecrease = (id) => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = (id) => { 
    // stock > amount ? setAmount(amount + 1) : setAmount(stock);
  // };

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* For Price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* For Quantity */}
      <CardAmountToggle
        amount={amount}
        setIncrease={ () =>setIncrement(id)}
        setDecrease={ () =>setDecrement(id)}
      />

      {/* For Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove-icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
