import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Header = (props) => {
    return (
        <div className="header">
            <h1>
                All Items
            </h1>
            <button className="headerButton">
                <Link to="/cart">Go To Cart</Link>
            </button>
        </div>
    );
};

export default Header;