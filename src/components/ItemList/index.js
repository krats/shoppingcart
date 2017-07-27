import React from 'react';
import './index.css';
import ListedItem from "../ListedItem";

const ItemList = (props) => {
    let itemList = [];
    for(let id in props.itemListing ) {
        let item = props.itemListing[id];
        itemList.push(<ListedItem {...item} addItem={props.addItem} key={item.id}/>);
    }

    return (
        <div className="itemListing">
            {itemList}
        </div>
    );
};

export default ItemList;