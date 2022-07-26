import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { delete_Cart } from '../../../../../redux/Shopping/shopping-actions.js';
import './Invoicing.css';
import Stamp from '../../../../../images/payment/stamp.png';
import Company_Logo from '../../../../../images/payment/company_Logo.png';
import My_Cart_Item from './My_Cart_Item.jsx';
import { user_Db } from '../../../login/options_Login/Login_To_Account/Login_To_Account.jsx';
import { invoice_Number } from '../Payment.jsx';
import { new_Cart } from '../../Shopping_Cart.jsx';
import { func_current_location } from '../../../../home/Home_Start.jsx';
import Pdf from 'react-to-pdf';


const mapDispatchToProps = (dispatch) => {
    return {
        delete_Cart: () => dispatch(delete_Cart())
    };
};

let Invoicing = ({ delete_Cart }) => {
    const [total_Price, set_total_Price] = useState(0);
    const [total_Count, set_total_Count] = useState(0);
    func_current_location('/Home_Regular');
    transaction = true;
    let purchase_Time = new Date().toString();
    useEffect(async () => {
        delete_Cart();
        let total_Price = 0;
        let total_Count = 0;
        new_Cart.forEach(item => {
            total_Price += item.qty * item.price;
            total_Count += item.qty;
        });
        set_total_Price(total_Price);
        set_total_Count(total_Count);
        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ new_Cart, invoice_Number, client_Id: user_Db.userData_Db.email })
        };
        let get_Staus = await fetch('https://springs-server.herokuapp.com/Shopping_Cart', options);
        console.log(get_Staus);
        let result = await get_Staus.json();
        console.log(result);
        if (result.status === 0) { console.log('Error: The database is not conectioned.') }
        else if (result.status) {
            console.log('The transaction data was recorded in the database.');
        } else {
            console.log('Error: The transaction data was not recorded in the database.');
            console.log(result);
        }
        let object_Shopping_Archive = { invoice_Number, client_Id: user_Db.userData_Db.email, purchase_Time, order_Total: total_Price, total_Items: total_Count }
        let option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object_Shopping_Archive)
        };
        let getStaus = await fetch('https://springs-server.herokuapp.com/Shopping_Archive', option);
        let new_Result = await getStaus.json();
        if (new_Result.status === 0) { console.log('Error: The database is not conectioned.') }
        else if (new_Result) {
            console.log('The transaction data was recorded in the database.');
        } else {
            console.log('Error: The transaction data was not recorded in the database.')
        }
    }, []);
    const ref = React.createRef();
    return (
        <React.Fragment>
            <div className="stick">
                <div className="download">
                    <Pdf targetRef={ref} fileName='Springs-Invoicing.pdf'>
                        {({ toPdf }) => <button className="btn_download" onClick={toPdf}>PDF - הורדה </button>}
                    </Pdf>
                    <br />
                    <br />
                    <Link id="end" to="/Home_Regular">
                        <button className="btn_end" onClick={() => { }}>סיום</button>
                    </Link>
                </div>
            </div>
            <div className="invoicing" >
                <div className="frame_Invoicing" ref={ref}>
                    <div className="div_word_Invoicing">
                        <p id="word_Invoicing">{'Invoicing'.toUpperCase()}</p>
                        <img id="img_company_Logo" src={Company_Logo} />
                    </div>
                    <div className="div_Content">
                        <div className="right_Part">
                            <p id="title">Amount Due (NIS)</p>
                            <p id="amount" className="p_Total_Price">&#8362; {total_Price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <p id="title1">Billed To</p>
                            <div className="billed_To">
                                <span className="profil"> {(user_Db.userData_Db.firstName).charAt(0).toUpperCase() + (user_Db.userData_Db.firstName).slice(1)}</span> <span className="name"> {(user_Db.userData_Db.lastName).charAt(0).toUpperCase() + (user_Db.userData_Db.lastName).slice(1)}</span>
                                <br />
                                <span className="profil"> {(user_Db.userData_Db.address)}</span>
                                <br />
                                <span className="profil"> {(user_Db.userData_Db.locality)}</span>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <p id="title2">Invoice Number</p>
                            <p id="content2">{invoice_Number}</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <p id="title3">Date of Issue</p>
                            <p id="content3">{new Date().toString()}</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p id="title4">Due Date</p>
                            <p id="content4">10 Days</p>
                        </div>
                        <div className="left_Part">
                            <div className="first">
                                <div className="titls">
                                    <p id="titls">Description</p>
                                    <p id="titls">Qty</p>
                                    <p id="titls">Line Total</p>
                                </div>
                                <div className="contents">
                                    <ul>
                                        {new_Cart.map((item) => (
                                            <div id="my_Cart_Item">  <li> <My_Cart_Item item_Data={item} /><br /></li></div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="midel">
                                <ul id="midel_title">
                                    <li id="first_line">Subtotal</li>
                                    <li>Tax</li>
                                    <div id="kav" />
                                    <li id="midel_line">Total</li>
                                    <div id="kav" />
                                    <li id="last_line">Amount Due (NIS)</li>
                                </ul>
                                <ul id="midel_contents">
                                    <li id="first_line">{(total_Price - total_Price / 100 * 17).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                                    <li>{Math.round(total_Price - (total_Price - total_Price / 100 * 17)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                                    <li id="midel_line">{total_Price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                                    <li id="last_line">&#8362; {total_Price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="div_img_stamp">
                        <img id="img_stamp" src={Stamp} />
                    </div>
                </div >

            </div >
        </React.Fragment>
    );
}
export default connect(null, mapDispatchToProps)(Invoicing);
export let transaction;
