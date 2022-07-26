import React, { useEffect, useState } from 'react';
import './Creating_Nav_Bar_Black.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImgLogo from '../../../images/home/logo_Black.png';
import { new_Profile } from './Creating_Nav_Bar.jsx';


const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
}

const Creating_Nav_Bar_Black = ({ cart }) => {
    const [cart_Count, set_cartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        set_cartCount(count);
    }, [cart, cart_Count]);

    class TodayTime extends React.Component {
        constructor(props) {
            super(props);
            this.interval = setInterval(() => {
                let d = new Date(); 
                let hr = d.getHours();
                let min = d.getMinutes();
                let sec = d.getSeconds();
                let hr_rotation = 30 * hr + min / 2; 
                let min_rotation = 6 * min;
                let sec_rotation = 6 * sec;
                // document.getElementById('Hour').style.transform = `rotate(${hr_rotation}deg)`;
                // document.getElementById('Minute').style.transform = `rotate(${min_rotation}deg)`;
                // document.getElementById('Second').style.transform = `rotate(${sec_rotation}deg)`;
            }, 1000);
        }
        componentWillUnmount() {
            clearInterval(this.interval); // Cleaning phase
        }
    }
    let todayTime = new TodayTime();
    todayTime.componentWillUnmount();
    {/* {clearInterval(numSetInterval)} */ }
    return (
        <React.Fragment>
            <div className="Creating_Nav_Bar_Black">
                <Link to="/Shopping_Cart" className="Creating_Nav_Bar_Black-Link">
                    <div className="Link-Options">
                        <span className="Options-Choice"><b>{`(${cart_Count})`}</b> סל </span>
                    </div>
                </Link>
                <Link to="/Help" className="Creating_Nav_Bar_Black-Link">
                    <div className="Link-Options">
                        <span className="Options-Choice">עזרה</span>
                    </div>
                </Link>
                <Link to="/Login" className="Creating_Nav_Bar_Black-Link">
                    <div className="Link-Options">
                        <span className="Options-Choice">התחבר </span>
                    </div>
                </Link>
                <Link to="/Search" className="Creating_Nav_Bar_Black-Link">
                    <div className="Link-Options">
                        <span className="Options-Search1"><pre><u>          </u></pre> </span>
                        <span className="Options-Search2">חיפוש</span>
                    </div>
                </Link>
                <Link to="/Personal_Box" className="Creating_Nav_Bar_Black-Profile">
                    <span className="navBar_profil">{new_Profile}</span>
                </Link>
                <Link to="/Home_Regular" className="Creating_Nav_Bar_Black-Link">
                    <div className="Link-Options">
                        <img className="Options-Logo" alt="logo" src={ImgLogo} />
                        <div className="hands">
                            <div id="clockContainer">
                                {/* <div id="Hour"></div>
                                <div id="Minute"></div>
                                <div id="Second"></div> */}
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"> <div></div></div>
                    <div className="menu">
                        <div >
                            <div >
                                <ul>
                                    <li><Link to="/Home_Regular" >בית</Link></li>
                                    <li><Link to="/Rings_Display" >טבעות</Link></li>
                                    <li><Link to="/Earrings_Display" >עגילים</Link></li>
                                    <li><Link to="/Shopping_Cart" >סל</Link></li>
                                    <li><Link to="/Help" >עזרה</Link></li>
                                    <li><Link to="/Login" >כניסה לחשבון</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default connect(mapStateToProps)(Creating_Nav_Bar_Black);
export let numSetInterval;