import iconCart from "../../assets/image/Icon_cart.svg";

import './Cart.css';
const Cart = () => {
  return (
    <div id="Cart">
      <img src={iconCart} alt="" />
      <span>Cart (0)</span>
    </div>
  );
};

export default Cart;
