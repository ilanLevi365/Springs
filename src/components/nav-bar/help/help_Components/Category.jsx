import React from 'react';
import './Category.css';
import Exchanges_Returns from '../../../../images/help/Help_Exchanges_Returns.png';
import Shipping from '../../../../images/help/Help_Shipping.png';
import Payment from '../../../../images/help/Help_Payment.png';
import * as Details from './Details.jsx';

export default () => {
    return (
        <div className="Category">
            <div className="Category-Exchanges_Returns">
                <img src={Exchanges_Returns} />
                <br />
                <br />
                <br />
                <span >החלפות והחזרות</span>
            </div>
            <div className="Category-Details_Exchanges_Returns">
                <Details.Details_Exchanges_Returns />
            </div>
            <div className="Category-Shipping">
                <img src={Shipping} />
                <br />
                <br />
                <br />
                <span >משלוח</span>
            </div>
            <div className="Category-Details_Shipping">
                <Details.Details_Shipping />
            </div>
            <div className="Category-Payment">
                <img src={Payment} />
                <br />
                <br />
                <br />
                <span>תשלום</span>
            </div>
            <div className="Category-Details_Payment">
                <Details.Details_Payment />
            </div>
        </div>
    );
}