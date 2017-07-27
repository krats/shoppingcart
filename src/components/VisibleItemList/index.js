import { connect } from 'react-redux'
import ItemList from "../ItemList";
import {addItem, notify} from "../../actions"

const mapStateToProps = state => {
    return {
        itemListing: state.itemListing,
        showNotification: state.showNotification
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: id => {
            dispatch(addItem(id));
            dispatch(notify());
        }
    }
};

const VisibleItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default VisibleItemList