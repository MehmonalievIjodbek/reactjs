import React from 'react';
import FurnikingLogo from '../../img/Furniking.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faBell, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import './furniking.scss'


const Furniking = () => {
    return (
        <div>

            <div className="container">
                <div className="furniking">
                    <div className="furniking-logo">
                        <img src={FurnikingLogo} alt="" className="furniking-logo-img"/>
                        <p>Furniking</p>
                    </div>
                    <div className="furniking-search">
                        <div className="furniking-search-container">
                            <input type="search" placeholder="Search here"/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                        </div>
                    </div>
                    <div className="furniking-icons">
                        <a href="/"> <FontAwesomeIcon icon={faBagShopping}/>
                        </a>
                        <a href="/"> <FontAwesomeIcon icon={faBell}/>
                        </a>
                        <a href="/"> <FontAwesomeIcon icon={faUser}/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Furniking;