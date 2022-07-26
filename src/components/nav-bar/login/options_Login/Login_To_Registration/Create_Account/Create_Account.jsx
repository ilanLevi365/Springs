import React from 'react';
import './Create_Account.css';
import Text_Field from './Text_Field.jsx';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <React.Fragment>
            <div className="Create_Account">
                <div className="Create_Account-Personal_Information">
                    <div className="Personal_Information-Word_Personal_Information">
                        <span >פרטים אישיים</span>
                    </div>
                    <div className="Create_Account-Text_Field">
                        <Text_Field />
                    </div>
                </div>
            </div>
            <Link id="login" to='./Login' />
        </React.Fragment >
    )
}


