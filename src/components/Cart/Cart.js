import React from 'react';

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

    
    console.log(props)

    return (
        
    <div class="card-body border">
        <h5 class="card-title">Add Singers : {singerQunatity}</h5>
         <h5 class="card-text">Total payment : {totalPayment}Taka </h5> 
    </div>
    
    );
};

export default Cart;