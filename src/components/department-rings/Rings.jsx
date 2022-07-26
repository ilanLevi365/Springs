import React from 'react';
import { Link } from 'react-router-dom';
import './Rings.css';
import rings_Poster from '../../images/rings/rings_Poster.jpg';
import poster_Word_1 from '../../images/rings/poster_Word_1.png';
import poster_Word_2 from '../../images/rings/poster_Word_2.png';
import { func_current_location } from '../home/Home_Start.jsx';

export default () => {
    func_current_location('/Rings');
    return (
        <React.Fragment>
            <div className="Rings">
                <div className="Rings-Poster">
                    <Link to="/Rings_Display">
                        <div className="Poster-Div_Img">
                            <img id="Img-Poster-Ring" src={rings_Poster} alt="" />
                        </div>
                        <div className="Poster-Div_Words">
                            <img id="Words_1" src={poster_Word_1} alt="" />
                            <img id="Words_2" src={poster_Word_2} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="Rings-Option">
                    <Link to="/Earrings" className="Options-Earring">
                        <div className="Earring-Right_Arrow">
                            <h1> &#10095; </h1>
                        </div>
                        <span className="Earring-Word">עגילים</span>
                    </Link>
                    <Link to="/Home_Regular" className="Options-Home">
                        <div className="Home-Left_Arrow">
                            <h1>&#10094; </h1>
                        </div>
                        <span className="Home-Word">בית</span>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}