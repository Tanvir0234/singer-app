import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign } from '@fortawesome/free-solid-svg-icons'


const moneyIcon = <FontAwesomeIcon icon={faLiraSign} />

const Cart = (props) => {

//---------cart calculation--------
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
        <h5 className="fw-bold text-center"> <span className = "cut-title">Order Summary</span> </h5>
        <br />
        <h5 className="card-title">Add Singers : {singerQunatity}</h5>
        <h5 className="card-text">Total payment : {moneyIcon}  {totalPayment} </h5>
        <br />
        <h6 className="fw-semibold text-center cut-title">Your Added Singer</h6>
        <ul>
            {cart.map(item => <li>{item.Name}</li>)}
        </ul>
        <button className="btn btn place-btn p-1 fw-bold mt-2">Place Order</button> 
        
    </div>
    
    );
};

export default Cart;