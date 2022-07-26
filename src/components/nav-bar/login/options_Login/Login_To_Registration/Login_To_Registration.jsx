import React from 'react';
import { Link } from 'react-router-dom';
import './Login_To_Registration.css';

export default () => {
    return (
        <React.Fragment>
            <div className="Login_To_Registration">
                <div className="Login_To_Registration-Div_Word_Conecte">
                    <span>הירשמו</span>
                </div>
                <div className="Login_To_Registration-Div_Lines">
                    <span >.השתמשו באפשרות זו כדי לעבור לטופס  <b>SPRINGS.COM</b> -אם אין לכם עדיין חשבון באתר</span>
                    <br />
                    <br />
                    <span >. תיהיה מהנה ומהירה  <b>SPRINGS.COM</b>  -אם תספקו לנו את הפרטים שלכם חוויית הקניה ב</span>
                </div>
                <div className="Login_To_Registration-Div_Link">
                    <Link to="/Create_Account">
                        <button className="Div_Link-Btn">צור חשבון</button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}