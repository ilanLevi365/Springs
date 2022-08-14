import React from 'react';
import './Login.css';
import Card from '../../../images/login/Card.png';
import Login_To_Registration from './options_Login/Login_To_Registration/Login_To_Registration.jsx';
import Login_To_Account from './options_Login/Login_To_Account/Login_To_Account.jsx';

export default () => {
    let getShoppingArchive = async () => {
        let options_Shopping_Archive = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ client_Id: 1 })
        };
        try {
            let get_Shopping_Archive = await fetch('http://localhost:5000');
        } catch (e) {
            console.log(e);
        }
    };
    getShoppingArchive();
    return (
        <React.Fragment>
            <div className="Login">
                <div className="Login-Background" >
                    <img src={Card} alt="" />
                </div>
                <div className="Login-Login_To_Account">
                    <Login_To_Account />
                </div>
                <div className="Login-To_Registration">
                    <Login_To_Registration />
                </div>
            </div>
        </React.Fragment>
    );
}


