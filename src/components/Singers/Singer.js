import React from 'react';
import './Singer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faLiraSign } from '@fortawesome/free-solid-svg-icons'

const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
const moneyIcon = <FontAwesomeIcon icon={faLiraSign} />

const Singer = (props) => {
    const {img,Name,role,salary,age,homeTown}=props.singer;
    
    return (
    
    <div className="card col-md-4 mt-5 single-card">
         <img src={img} className="card-img-top mt-3 product-img" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Name: {Name}</h5>
         <p className="card-text">Age : {age}</p>
         <p>Home Town : {homeTown}</p>
        <p>Role : {role}</p> 
        <p>Salary : {moneyIcon} {salary}</p> 
    </div>
    <div className="mb-3 ms-3">
      <button 
      onClick = {()=>props.handleAddToCart(props.singer)}
      className="btn cart-btn">{cartIcon} add to cart</button>
    </div>
            
   </div>
    );
};

export default Singer;