
const addItem = (state = {}, action) => {
    let quantity = 0;
    if(state[action.item.id] !== undefined)
        quantity = state[action.item.id].quantity;
    let newState = {
    };
    for(let key in state) {
        newState[key] = {...state[key]};
    }
    newState[action.item.id] = {
        quantity: quantity + 1,
        id: action.item.id,
    };
    return newState;
};

const decrementItem = (state = {}, action) => {
    let quantity = 0;
    if(state[action.item.id] !== undefined)
        quantity = state[action.item.id].quantity;
    let newState = {
    };
    for(let key in state) {
        newState[key] = {...state[key]};
    }
    newState[action.item.id] = {
        quantity: quantity - 1,
        id: action.item.id,
    };
    return newState;
};

const changeItem = (state = {}, action) => {
    let quantity = action.item.quantity;
    let newState = {
    };
    for(let key in state) {
        newState[key] = {...state[key]};
    }
    if(quantity === 0)
        delete newState[action.item.id];
    else
        newState[action.item.id].quantity = quantity;
    return newState;
};

const shoppingCart = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return addItem(state, action);
        case 'CHANGE_ITEM':
            return changeItem(state, action);
        case 'DECREMENT_ITEM':
            return decrementItem(state, action);
        default:
            return state
    }
};

export default shoppingCart