import { connect } from 'react-redux'
import {changeQuantity} from "../../actions"
import Cart from "../Cart";
import {addItem, decrementItem} from "../../actions/index";

const mapStateToProps = state => {
    let cart = [];
    for(let id in state.shoppingCart)
    {
        if(state.itemListing.hasOwnProperty(id)) {
            let item = {...state.itemListing[id]};
            item.quantity = state.shoppingCart[id].quantity;
            item.typeDiscount = item.type === 'fiction' ? 15 : 0;
            cart.push(item);
        }
    }
    return {
        shoppingCart: cart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeItem: (id, quantity) => {
            if(quantity >= 0)
                dispatch(changeQuantity(id, quantity))
        },
        removeItem: id => {
            dispatch(changeQuantity(id, 0))
        },
        incrementItem: id => {
            dispatch(addItem(id))
        },
        decrementItem: id => {
            dispatch(decrementItem(id))
        }
    }
};

const VisibleCart = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default VisibleCart