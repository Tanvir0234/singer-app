import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign } from '@fortawesome/free-solid-svg-icons'


const moneyIcon = <FontAwesomeIcon icon={faLiraSign} />

const Header = () => {
    return (
        <div>
             <div className="header-title pb-3">
                 <h1>Music Concert In Chittagong</h1>
                 <h5>Location : M A Aziz Stadium</h5>
                 <h3>Total Budget : {moneyIcon}  1.5 Crore</h3>
             </div>
        </div>
    );
};

export default Header;