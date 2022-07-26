import './Shopping_Cart.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart_Item from './Cart_Item.jsx';
import { in_Profile } from '../login/options_Login/Login_To_Account/Login_To_Account.jsx';
import { func_current_location } from '../../home/Home_Start.jsx';

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
}

const Shopping_Cart = ({ cart }) => {
    new_Cart = [...cart];
    const [total_Price, set_total_Price] = useState(0);
    const [total_Count, set_total_Count] = useState(0);
    useEffect(() => {
        let total_Price = 0;
        let total_Count = 0;
        cart.forEach(item => {
            total_Price += item.qty * item.price;
            total_Count += item.qty;
        });
        set_total_Price(total_Price);
        set_total_Count(total_Count);
    }, [cart]);
    total_price = total_Price.toFixed(2).toString();
    func_current_location('/Shopping_Cart');
    console.log(new_Cart);
    return (
        <React.Fragment>
            <div className="Shopping_Crt">
                {(() => {
                    if (total_Count < 1) {
                        return <div className="Shopping_Crt-Empty">
                            <p>— הסל שלכם ריק —</p>
                        </div>
                    } else {
                        return <div>
                            <div className="Shopping_Crt-Words">
                                <p id='words-Shopping_Crt'>סל קניות</p>
                                <p id='words-Items'>פריטים  {total_Count} </p>
                            </div>
                            <div className="Shopping_Crt-Items">
                                <ul>
                                    {cart.map((item) => (
                                        <li> <Cart_Item item_Data={item} /></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Pament_total_Pric">
                                {in_Profile === false ?
                                    <Link to="/Login" > <button className="Div_Link-Btn">ביצוע רכישה</button>   </Link> :
                                    <Link to="/Payment" > <button className="Div_Link-Btn">ביצוע רכישה</button>   </Link>}
                                <p className="p_Total_Price">מחיר כולל:  &#8362; {total_Price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </div>
                        </div>
                    }
                })()}
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(Shopping_Cart);
export let new_Cart;
export let total_price;
export let delet_total_price;

