import React from 'react';
import { Link } from 'react-router-dom';
import './Earrings.css';
import Img_Poster_Earrings from '../../images/earrings/earrings_Poster.jpg';
import poster_Word_1 from '../../images/earrings/poster_Word_1.png';
import poster_Word_2 from '../../images/earrings/poster_Word_2.png';
import { func_current_location } from '../home/Home_Start.jsx';

export default () => {
    func_current_location('/Earrings');
    return (
        <React.Fragment>
            <div className="Earrings">
                <div className="Earrings-Poster">
                    <Link to="/Earrings_Display">
                        <div className="Poster-Div_Imag">
                            <img id="Img-Poster-Earrings" src={Img_Poster_Earrings} alt="" />
                        </div>
                        <div className="Poster-Div_Word">
                            <img id="Words_1" src={poster_Word_1} alt="" />
                            <img id="Words_2" src={poster_Word_2} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="Earrings-Option">
                    <Link to="/Home_Regular" className="Option-Home">
                        <div className="Home-Right_Arrow">
                            <h1> &#10095; </h1>
                        </div>
                        <span className="Home_Word">בית</span>
                    </Link>
                    <Link to="/Rings" className="Option-Rings">
                        <div className="Rings-Left_Arrow">
                            <h1>&#10094; </h1>
                        </div>
                        <span className="Rings_Word">טבעות</span>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}