import React from 'react';
import './index.css';

const CartItem = (props) => {
    return (
        <div className="cartItem">
            <div className="cartItemName first">
                <span>
                    {/*<img src={props.img_url} className="cartItemImage"/>*/}
                    <span className="centerVertically">
                        {props.name}
                    </span>
                </span>
                <span className="centerVertically crossButton" onClick={() => props.removeItem(props.id)}>X</span>
            </div>
            <div className="cartItemQty second">
                {props.quantity}
            </div>
            <div className="cartItemNamePrice third">
                ${props.quantity*props.price}
            </div>
        </div>
    )
};

export default CartItem;