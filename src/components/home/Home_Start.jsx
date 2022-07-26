import React from 'react';
import './Home_Start.css';
import { Link } from 'react-router-dom';
import Diamonds from '../../images/home/Diamonds.webp';
import FoolDiamond from '../../images/home/FoolDiamond.webp';
import Currency from '../../images/home/Currency.png';
import Horse from '../../images/home/Horse.png';
import React_Player from 'react-player';
import Img_Diamonds from './Img_Diamonds.jsx';


export default () => {
    current_location = `/Home_Regular`;
    return (
        <React.Fragment>
            <div className="imgDiamonds2" ><Img_Diamonds /></div>
            <div className="Home_Start" >
                <img id="Home_Start-Img_Currency" src={Currency} />
                <div className="Home_Start-Options">
                    <Link to="/Rings" className="Options-Rings">
                        <div className="Rings-Right_Arrow">
                            <h1> &#10095; </h1>
                        </div>
                        <span className="Rings-Word">טבעות</span>
                    </Link>
                    <Link to="/Earrings" className="Options-Earrings">
                        <div className="Earrings-Left_Arrow">
                            <h1>&#10094; </h1>
                        </div>
                        <span className="Earrings-Word">עגילים</span>
                    </Link>
                </div>
                <div className="div_Sale">
                    <div id="sale_Right">
                        <br />
                        <div className="Rings_Video">
                            <React_Player width={'100%'} height={'50%'} loop={true} volume={false} url={'https://bgjewelers.com/wp-content/uploads/2021/08/BG-R1-V2.mp4?_=1 '} playing='true' />
                        </div>
                        <br />
                        <div className="Rings_Video">
                            <React_Player width={'100%'} height={'50%'} loop={true} volume={false} url={'https://bgjewelers.com/wp-content/uploads/2021/06/BG-R4-V1.mp4?_=1 '} playing='true' />
                        </div>
                    </div>
                    <div id='background_Earrings'></div>
                    <div id="sale_Left">
                        <div className="Earrings_Vi">
                            <React_Player width={'100%'} height={'100%'} loop={true} volume={false} url={'https://bgjewelers.com/wp-content/uploads/2016/07/bge2.mp4?_=2'} playing='true' />
                        </div>
                        <div className="Earrings_Vi">
                            <React_Player width={'100%'} height={'100%'} loop={true} volume={false} url={'https://bgjewelers.com/wp-content/uploads/2016/07/BGE11.mp4?_=2'} playing='true' />
                        </div>
                        <div className="Earrings_Vi">
                            <React_Player width={'100%'} height={'100%'} loop={true} volume={false} url={'https://bgjewelers.com/wp-content/uploads/2016/07/BGE5.mp4?_=2'} playing='true' />
                        </div>
                    </div>
                </div>
                <div className="Home_Start-Img_Diamonds">
                    <img id="Img_Diamonds1" src={FoolDiamond} />
                    <img id="Img_Diamonds2" src={Diamonds} />
                </div>
                <span className="Home_Start-Company_Sescription">The luxury diamond design company.</span>
                <div className="Home_Start-Img_Horse">
                    <img id="Img_Horse" src={Horse} />
                </div>

                <div className="Home_Start-Ground" />
            </div>
        </React.Fragment >
    )
}
export let current_location;
export let func_current_location = (newName) => { current_location = newName };
