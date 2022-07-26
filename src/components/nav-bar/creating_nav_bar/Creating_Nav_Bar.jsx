import React, { useEffect, useState } from 'react';
import './Creating_Nav_Bar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImgLogo from '../../../images/home/logo_White.png';
import About_Us from '../../home/About_Us.jsx';


const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
}
const Creating_Nav_Bar = ({ cart }) => {
    const [about_Us, set_About_Us] = useState("");
    const [cart_Count, set_cartCount] = useState(0);
    const [profile, set_Profile] = useState("");
    new_Profile = profile;
    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        set_cartCount(count);
    }, [cart, cart_Count]);
    setInterval(() => {
        let d = new Date();
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let hr_rotation = 30 * hr + min / 2;
        let min_rotation = 6 * min;
        let sec_rotation = 6 * sec;

        document.getElementById('hour').style.transform = `rotate(${hr_rotation}deg)`;
        document.getElementById('minute').style.transform = `rotate(${min_rotation}deg)`;
        document.getElementById('second').style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
    func_profile = (profil_name) => { set_Profile(<pre className="navBar_profile" >   {profil_name}   </pre>) };
    let getShoppingArchive = async () => {
        let options_Shopping_Archive = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ client_Id: 1 })
        };
        try {
            // let get_Shopping_Archive = await fetch('http://localhost:5000/', options_Shopping_Archive);
            console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');
        } catch (e) {
            console.log(e);
        }
    };
    getShoppingArchive();
    return (
        <React.Fragment>
            <div className="Creating_Nav_Bar">
                <Link to="/Shopping_Cart" className="Creating_Nav_Bar-Link">
                    <div className="Link-Options">
                        <span className="Options-Choice"><b>{`(${cart_Count})`}</b> סל </span>
                    </div>
                </Link>
                <Link to="/Help" className="Creating_Nav_Bar-Link">
                    <div className="Link-Options">
                        <span className="Options-Choice">עזרה</span>
                    </div>
                </Link>
                <Link to="/Login" className="Creating_Nav_Bar-Link">
                    <div className="Link-Options">
                        <span className="Options-Choice">התחבר </span>
                    </div>
                </Link>
                <Link to="/Search" className="Creating_Nav_Bar-Link">
                    <div className="Link-Options">
                        <span className="Options-Search1"><pre><u>          </u></pre> </span>
                        <span className="Options-Search2">חיפוש</span>
                    </div>
                </Link>
                <Link to="/Personal_Box" className="Creating_Nav_Bar-Profile">
                    <span className="navBar_profile">{profile}</span>
                </Link>
                <Link to="/Home_Regular" className="Creating_Nav_Bar-Link">
                    <div className="Link-Options">
                        <img className="Options-Logo" alt="logo" src={ImgLogo} />
                        <div className="Hands">
                            <div id="clockContainer">
                                <div id="hour"></div>
                                <div id="minute"></div>
                                <div id="second"></div>

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
                <div onClick={() => set_About_Us(<About_Us />)} className="about_Us">
                    <p className="word_About_Us">עלינו </p>
                </div>
                {about_Us}
            </div>

        </React.Fragment>
    );
}
export default connect(mapStateToProps)(Creating_Nav_Bar);
export let func_profile;
export let new_Profile;




