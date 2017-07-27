import React from 'react';
import './index.css';

const ListedItem = (props) => {
    let discount = props.discount || 0;
    let discountedPrice;
    if(props.type === 'fiction') {
        discount += 15
    }
    if(discount !== 0)
    {
        discountedPrice = (props.price * (100 - discount))/100;
    }
    return (
        <div className='listing'>
            <div className='listingTop'>
                <img src={props.img_url} alt=""/>
            </div>
            <div className="listingDetails">
                <span>
                    {props.name}
                </span>
                <div className="listingAlign">
                    <div  className='listingPricing'>
                        <span className={discountedPrice ? "lineThrough": "" }>
                          ${props.price}
                        </span>
                        {discountedPrice? <span className="discountedPrice">
                                    ${discountedPrice}
                                </span>:
                            <span/>
                        }
                    </div>
                    <button className='blueButton' onClick = {() => props.addItem(props.id)}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ListedItem;