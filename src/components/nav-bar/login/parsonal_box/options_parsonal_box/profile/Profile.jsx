import React from 'react';
import './Profile.css';
import { user_Db } from '../../../options_Login/Login_To_Account/Login_To_Account.jsx'

export default () => {
    console.log(user_Db);
    return (
        <React.Fragment>
            <div className="Profile">
                <span id="name"> {(user_Db.userData_Db.firstName).toUpperCase()}</span> <span id="name"> {(user_Db.userData_Db.lastName).toUpperCase()}</span>
                <br />
                <span id="email"> {(user_Db.userData_Db.email)}</span>
                <br />
                <br />
                <br />
                <span id="password">PASSWORD</span>
                <br />
                <span id="password_user"> {(user_Db.userData_Db.password).toUpperCase()}</span>
                <br />
                <br />
                <br />
                <span id="password">ADDRESS</span>
                <br />
                <span id="address"> {(user_Db.userData_Db.address)}</span> <span id="address"> {(user_Db.userData_Db.locality)}</span>
            </div>
        </React.Fragment>
    );
}


