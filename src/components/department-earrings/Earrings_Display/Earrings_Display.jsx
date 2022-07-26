import React from 'react';
import React_Player from 'react-player';
import './Earrings_Display.css';
import Img_Fabulous from '../../../images/earrings/word_hader.png';
import url from '../../../files/Earrings_Clip.mp4';
import Items_Earrings from './Items_Earrings/Items_Earrings.jsx';
import { func_current_location } from '../../home/Home_Start.jsx';

export default () => {
    func_current_location('/Earrings_Display');
    return (
        <React.Fragment>
            <div className="Earrings_Display">
                <div className="Earrings_Display-Title">
                    <img id="img_Fabulous" src={Img_Fabulous} alt="" />
                </div>
                <div className="Earrings_Display-Div_Video">
                    <React_Player controls={false} width={"100%"} height={"100%"} loop={true} volume={false} id="video_Player_E" url={url} playing='true' />
                </div>
                <div className="Earrings_Display-Items">
                    <Items_Earrings />
                </div>
            </div>
        </React.Fragment>
    );
}
