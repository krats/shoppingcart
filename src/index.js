import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import data from './data'
import {saveState, loadState} from "./localstorage"
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const persistedState = loadState("shoppingCart");
const store = createStore(reducer, {shoppingCart: persistedState});
data.forEach((item) => store.dispatch({
    "type" : "ADD_LISTING",
    "item" : item
}));
store.subscribe(() => saveState("shoppingCart", store.getState()["shoppingCart"]));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App itemListing = {store.getState()["itemListing"]}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
