import React from 'react';
import './Singer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faLiraSign } from '@fortawesome/free-solid-svg-icons'

const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
const moneyIcon = <FontAwesomeIcon icon={faLiraSign} />
//--------------------load singer by props and destructuring all items from singer-----------
const Singer = (props) => {
    const {img,Name,role,salary,age,homeTown}=props.singer;
    
    return (
    
    <div className="card col-md-4 col-sm-10 mb-4 mt-5 single-card">
         <img src={img} className="card-img-top mt-3 product-img" alt="..."/>
    <div className="card-body">
        <h5 className="card-title fw-bold">Name: {Name}</h5>
         <p className="card-text fw-bold">Age : {age}</p>
         <p className="fw-bold">Home Town : {homeTown}</p>
        <p className="fw-bold">Role : {role}</p> 
        <p className="fw-bold"> Salary : {moneyIcon} {salary}</p> 
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