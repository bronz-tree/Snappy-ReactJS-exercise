import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './style/App.css';
import './style/Navbar.css';
import './style/shipping-list.css';
import MyNavbar from './components/navbar.js';
import ShippingList from './components/shipping-list.js';
import shippingInfo from './components/create-shipping';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route component={MyNavbar}/>
                    <Route path="/" component={ShippingList}/>
                    <Route path="/admin-view" component={ShippingList}/>
                    <Route path="/shipping-info" component={shippingInfo}/>
                </div>
            </Router>
        );
    }
}

export default App;