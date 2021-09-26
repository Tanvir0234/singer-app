import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign } from '@fortawesome/free-solid-svg-icons'


const moneyIcon = <FontAwesomeIcon icon={faLiraSign} />

const Cart = (props) => {


const {cart}=props;
let totalPayment = 0;
let singerQunatity = 0;
for(let singer of cart){
    if(!singer.quantity){
        singer.quantity =1;
    }
    totalPayment = totalPayment + singer.salary * singer.quantity;
    singerQunatity = singerQunatity + singer.quantity;
}

    
  
    return (
        
    <div className="card-body mt-3 border cart">
        <h5 className="fw-bold text-center">Order Summary</h5>
        <br />
        <h5 className="card-title">Add Singers : {singerQunatity}</h5>
        <h5 className="card-text">Total payment : {moneyIcon}  {totalPayment} </h5>
        <button className="btn btn place-btn p-1 fw-bold mt-2">Place Order</button> 
    </div>
    
    );
};

export default Cart;