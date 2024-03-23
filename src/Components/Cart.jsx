import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "../Style/Cart.css"
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
    const dispatch=useDispatch();
  const { CartItem } = useSelector((state) => state.cart);
  const { Subtotal } = useSelector((state) => state.cart);
  const { Tax } = useSelector((state) => state.cart);
  const { Shipping } = useSelector((state) => state.cart);
  const { TotalAmount } = useSelector((state) => state.cart);
  const increment=(id)=>{
    console.log(id);
    dispatch({
        type:"AddtoCart",
        payload:{Id:id},
    })
    dispatch({
        type:"Calculate",
    })
  }
  const decrement=(id)=>{
    console.log(id);
    dispatch({
        type:"decrement",
        payload:{Id:id},
    })
    dispatch({
        type:"Calculate",
    })
  }
  const deleteItem=(id)=>{
    console.log(id);
    dispatch({
        type:"deleteItem",
        payload:{Id:id},
    })
    dispatch({
        type:"Calculate",
    })
  }
  return (
    <div className="Cart-main">
        {
            CartItem.length==0?<div className="CartEmpty"><h1>NO ITEM IN CART</h1></div>:
      <div className="showCart-Item">
        {CartItem.map((i) => {
          return (
            <div className="Cart-box">
              <img src={i.Img} alt="i.Name" />
              <div className="name-price">
                <h4>{i.Name}</h4>
                <h4>₹{i.Price}</h4>
              </div>
              <div className="qty-counter">
                <button onClick={()=>{return(increment(i.Id))}}>+</button>
                <h3>{i.Qty}</h3>
                <button onClick={()=>{decrement(i.Id)}} className="minu-btn">-</button>
              </div>
              <div  className="deletediv">
              <DeleteIcon onClick={()=>{return(deleteItem(i.Id))}} className="DeleteIcon"/>
              </div>
            </div>
          );
        })}
      </div>
        }
      <div className="showCart-bill">
        <div className="billBox">
            <h3>Subtotal:- ₹{Subtotal}</h3>
            <h3>Shipping:- ₹{Shipping}</h3>
            <h3>Tax:- ₹{Tax}</h3>
            <h3>Total Amount:- ₹{TotalAmount}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
