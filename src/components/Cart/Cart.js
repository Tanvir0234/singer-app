import React from 'react';
import './Cart.css'

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
        <h5 className="card-title">Add Singers : {singerQunatity}</h5>
        
         <h5 className="card-text">Total payment : {totalPayment}Taka </h5> 
    </div>
    
    );
};

export default Cart;