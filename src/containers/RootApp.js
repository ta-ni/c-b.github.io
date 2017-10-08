import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Catalog from '../components/Catalog';
import Home from '../components/Home';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

const RootApp = () =>
    <Router>
        <div>
            <Header/>
            <NavMenu/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/catalog" component={Catalog}/>
            </Switch>
            <Footer/>
            <NavMenu bottomNavMenu={true}/>
        </div>
    </Router>;

export default RootApp;