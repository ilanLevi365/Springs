import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Home_Regular.css';
import Currency from '../../images/home/Currency.png';
import Horse from '../../images/home/Horse.png';
import url from '../../files/Video_Home_Regular.mp4';
import { func_current_location } from './Home_Start';

export default () => {
    func_current_location('/Home_Regular');
    return (
        <React.Fragment>
            <div className="Home_Regular" >
                <img id="Home_Regular-Img_Currency" src={Currency} />
                <div className="Home_Regular-Options">
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
                <div className="player-wrapper">
                    <ReactPlayer width="100%" height="100%" id="Home_Regular-Clip" url={url} playing={true} loop={true} volume={false} />
                </div>
                <div className="Home_Regular-Img_Horse">
                    <img id="ImgHorse" src={Horse} />
                </div>
                <div className="Home_Regular-Ground" />
            </div>
        </React.Fragment >
    )
}
