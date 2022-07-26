import React from 'react';
import './Help.css';
import Category from './help_Components/Category.jsx';
import { func_current_location } from '../../home/Home_Start.jsx';

export default () => {
    func_current_location('Help');
    return (
        <React.Fragment>
            <div className="Help">
                <div className="Help-Word_Help">
                    <span>עזרה</span>
                </div>
                <div className="Help-Category">
                    <Category />
                </div>
            </div>
        </React.Fragment>
    );
}