import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home_Start from './components/home/Home_Start';
import Home_Regular from './components/home/Home_Regular';
import Search from './components/nav-bar/search/Search.jsx';
import Login from './components/nav-bar/login/Login.jsx';
import Help from './components/nav-bar/help/Help.jsx';
import Shopping_Cart from './components/nav-bar/basket/Shopping_Cart.jsx';
import Payment from './components/nav-bar/basket/payment/Payment.jsx';
import Invoicing from './components/nav-bar/basket/payment/invoicing/Invoicing.jsx';
import Earrings from './components/department-earrings/Earrings.jsx';
import Rings from './components/department-rings/Rings.jsx';
import Nav_Bar from './components/nav-bar/creating_nav_bar/Creating_Nav_Bar.jsx';
import Rings_Display from './components/department-rings/Rings_Display/Rings_Display.jsx';
import Earrings_Display from './components/department-earrings/Earrings_Display/Earrings_Display.jsx';
import Create_Account from './components/nav-bar/login/options_Login/Login_To_Registration/Create_Account/Create_Account.jsx';
import Ring_Singel_Item from './components/department-rings/Rings_Display/Items_Rings/Rings_List/Ring_Singel_Item/Ring_Singel_Item.jsx';
import Earring_Singel_Item from './components/department-earrings/Earrings_Display/Items_Earrings/Earrings_List/Earring_Singel_Item/Earring_Singel_Item.jsx';
import Personal_Box from "./components/nav-bar/login/parsonal_box/Personal_Box.jsx";
import Profile from "./components/nav-bar/login/parsonal_box/options_parsonal_box/profile/Profile.jsx";
import Shopping from "./components/nav-bar/login/parsonal_box/options_parsonal_box/shopping/Shopping.jsx";


import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        current_item: state.shop.current_item,
    };
}

const Routes = ({ current_item }) => {

    return (
        <React.Fragment>
            <Nav_Bar />
            <Switch>
                <Route exact path="/" component={Home_Start} />
                <Route path="/Home_Regular" component={Home_Regular} />
                <Route path="/Search" component={Search} />
                <Route path="/Login" component={Login} />
                <Route path="/Personal_Box" component={Personal_Box} />
                <Route path="/Profile" component={Profile} />
                <Route path="/Shopping" component={Shopping} />
                <Route path="/Help" component={Help} />
                <Route path="/Shopping_Cart" component={Shopping_Cart} />
                <Route path="/Payment" component={Payment} />
                <Route path="/Invoicing" component={Invoicing} />
                <Route path="/Earrings" component={Earrings} />
                <Route path="/Rings" component={Rings} />
                <Route path="/Rings_Display" component={Rings_Display} />
                <Route path="/Earrings_Display" component={Earrings_Display} />
                <Route path="/Create_Account" component={Create_Account} />
                {!current_item ? (< Redirect to='/' />) : (<Route path="/Ring_Singel_Item" component={Ring_Singel_Item} />)}
                {!current_item ? (< Redirect to='/' />) : (<Route path="/Earring_Singel_Item" component={Earring_Singel_Item} />)}
            </Switch>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(Routes);