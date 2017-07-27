import React, { Component } from 'react';
import './App.css';
import VisibleItemList from "./VisibleItemList";
import VisibleCart from "./VisibleCart";
import {Route} from 'react-router-dom';
import Header from "./Header/index";
import VisibleNotification from "./Notification"

const MainPage = () => {
    return (
        <div className="listingContainer">
            <div>
                <Header/>
            </div>
            <div>
                <VisibleNotification/>
            </div>
            <div>
                <VisibleItemList/>
            </div>
        </div>
    );
};

class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" component={MainPage}/>
            <Route path="/cart" component={VisibleCart}/>
        </div>
    );
  }
}

export default App;
