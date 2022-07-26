import React from 'react';
import React_Player from 'react-player';
import './Rings_Display.css';
import Img_Fabulous from '../../../images/rings/word_hader.png';
import Items_Rings from './Items_Rings/Items_Rings.jsx';
import { func_current_location } from '../../home/Home_Start.jsx';

export default () => {
    func_current_location('/Rings_Display');
    return (
        <React.Fragment>
            <div className="Rings_Display">
                <div className="Rings_Display-Title">
                    <img id="img_Fabulous" src={Img_Fabulous} alt="" />
                </div>
                <div className="Rings_Display-Div_Video">
                    <React_Player controls={false} width={"100%"} height={"100%"} loop={true} volume={false} id="video_Player" url={`https://www.youtube.com/watch?v=KH3PmN0Jf4s`} playing='true' />
                </div>
                <div className="Rings_Display-Items">
                    <Items_Rings />
                </div>
            </div>
        </React.Fragment>
    );
}
