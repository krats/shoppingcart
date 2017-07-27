import { combineReducers } from 'redux';
import shoppingCart from './cart';
import itemListing from './listing';

const showNotification = (state=false, action) => {
    if(action.type === "SHOW_NOTIFICATION")
        state = true;
    else if(action.type === "REMOVE_NOTIFICATION")
        state = false;
    return state;
};

const shoppingCartApp = combineReducers({
    shoppingCart,
    itemListing,
    showNotification
});

export default shoppingCartApp;