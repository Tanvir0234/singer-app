import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign } from '@fortawesome/free-solid-svg-icons'


const moneyIcon = <FontAwesomeIcon icon={faLiraSign} />

const Header = () => {
    return (
        <div className="col-md-12 col-sm-12">
             <div className="header-title pb-3">
                 <h1><span className="cut-title">Concert</span> Festival <span className="cut-title">In</span> Chittagong</h1>
                 <h5>Location : M A Aziz Stadium</h5>
                 <h3 >Total Budget : {moneyIcon} <span className="cut-title">1.5 Crore</span> </h3>
                 <input type="text" placeholder="type to search..." className="w-50 border-0 rounded"  />
                 <button className="btn search fw-bold">Search</button>
             </div>
        </div>
    );
};

export default Header;