import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const onAddItem = (item) => {
    console.log(item);
    ctx.addItem({
      ...item,
      amount: 1,
    });
  };
  const onRemoveItem = (id) => {
    ctx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={onAddItem.bind(null, item)}
          onRemove={onRemoveItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {ctx.items.length > 0 && <button className={classes.buton}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
