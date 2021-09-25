import React from 'react';
import './Singer.css'


const Singer = (props) => {
    const {img,Name,role,salary,age,homeTown}=props.singer;
    return (
    
    <div class="card col-md-4 single-card">
         <img src={img} class="card-img-top product-img" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Name: {Name}</h5>
         <p class="card-text">Age : {age}</p>
         <p>Home Town : {homeTown}</p>
        <p>Role : {role}</p> 
        <p>Salary : {salary}</p> 
    </div>
    <div class="card-footer">
      <button 
      onClick = {()=>props.handleAddToCart(props.singer)}
      className="btn btn-primary">add to cart</button>
    </div>
            
   </div>
    );
};

export default Singer;