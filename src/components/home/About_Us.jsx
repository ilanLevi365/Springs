import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './About_Us.css';
import Horse from '../../images/home/Horse.png';
import Fasebook from '../../images/about_Us/fasebook.jpg';
import Instagram from '../../images/about_Us/instagram.png';
import YouTube from '../../images/about_Us/youTube.png';
import About_us from '../../images/about_Us/about_Us.png';
import url from '../../files/Video_Home_Regular.mp4';
import Creating_Nav_Bar_Black from '../nav-bar/creating_nav_bar/Creating_Nav_Bar_Black';

const About_Us = () => {

    const Turn_On = () => {
        return (
            <div className="About_Us">
                <Creating_Nav_Bar_Black />
                <div className="subtitles">
                    <br />
                    <h2>מי אנחנו - SPRINGS</h2>
                    <br />
                    Inditex  היא אחת מחברות האופנה ביהלומים הבין-לאומיות הגדולות בעולם. היא שייכת לאחת מחברות ההפצה הגדולות בעולם.

                    הלקוח הוא במרכז המודל העסקי הייחודי שלנו, הכולל עיצוב, ייצור, הכל בעבודת יד בדגמים המרהיבים ביותר בעולם, הפצה ומכירות באמצעות רשת קמעונאית נרחבת.

                    למידע   Inditex: www.inditex.com בקרו באתר של קבוצת
                </div>
                <div className="player-wraper">
                    <img id="img_About_us" src={About_us} />
                    <ReactPlayer width="100%" height="100%" id="Home_Regular-Clip" url={url} playing={true} loop={true} volume={false} />
                </div>
                <div className="Home_Start-Img_Horse">
                    <img id="img_Horse" src={Horse} />
                </div>
                <div id="btn_Close" onClick={() => switch_Btn(1)} >
                    <p >סגור</p>
                </div >
                <div>
                    <div className="Icons">
                        <a href="https://www.facebook.com/HarryWinston" target="blank"> <img id="fasebook" src={Fasebook} /> </a>
                        <a href="https://www.instagram.com/harrywinston/" target="blank"> <img id="instagram" src={Instagram} /> </a>
                        <a href="https://www.youtube.com/user/harrywinston" target="blank"> <img id="youTube" src={YouTube} /> </a>
                    </div>
                </div>
                <div id="C">
                    Springs Company - 2022 &copy;
                </div>
            </div >
        )
    }

    const Turn_Off = () => {
        return (
            <div className="turn_Off">
                <Creating_Nav_Bar_Black />
                <div className="Home_Start-Img_Horse">
                    <img id="img_Horse" src={Horse} />
                </div>
            </div >
        )
    }

    const [AboutUs, set_AboutUs] = useState(<Turn_On />);

    function switch_Btn(f = 0) {
        switch (f) {
            case 0:
                set_AboutUs(<Turn_On />);
                break;
            case 1:
                set_AboutUs(<Turn_Off />);
                break;
            default:
                set_AboutUs(<Turn_On />);
        }

    }
    return (
        <React.Fragment>
            <div id="btn_About_Us" onClick={() => switch_Btn(0)} >
                <p id="word_About_Us">עלינו</p>
            </div >
            {AboutUs}
        </React.Fragment>
    )
}

export default About_Us;
