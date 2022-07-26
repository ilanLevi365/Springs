import * as React from 'react';
import './Personal_Box.css';
import { Link } from 'react-router-dom';
import Profile from './options_parsonal_box/profile/Profile.jsx';
import Shopping from './options_parsonal_box/shopping/Shopping.jsx';
import { user_Db } from './../options_Login/Login_To_Account/Login_To_Account.jsx'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default () => {
    const [viwe, set_Viwe] = React.useState(<Profile />);
    const [message, set_Message] = React.useState(null);
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    console.log(typeof user_Db);
    if (typeof user_Db === 'object') {
         localStorage.setItem("user_Db", JSON.stringify(user_Db)); 
        
        }
    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    let status_fethc = false;
    let getShoppingArchive = async () => {
        let options_Shopping_Archive = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ client_Id: user_Db.userData_Db.email })
        };
        try {
            let get_Shopping_Archive = await fetch('https://springs-server.herokuapp.com/Shopping_Archive/Get_Shopping_Archive', options_Shopping_Archive);
            arr_Items = await get_Shopping_Archive.json();
            if (arr_Items.status === 0) { set_Message('.ישנה תקלת תקשורת למסד הנתונים, אנא נסה במועד מאוחר יותר') }
            else (set_Message(''));
            console.log(arr_Items);
        } catch (e) {
            console.log(e);
            set_Message('.ישנה תקלת תקשורת למסד הנתונים, אנא נסה במועד מאוחר יותר');
        }
    };
    getShoppingArchive();
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#212121',
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });
    return (
        <React.Fragment>
            <div className="sticky">
                <div className="Personal_Box">
                    <Link id="profile" onClick={() => set_Viwe(<Profile />)}>
                        פרופיל
                    </Link>
                    <Link id="shopping" onClick={() => set_Viwe(<Shopping />)}>
                        קניות
                    </Link>
                </div>
            </div>
            {status_fethc === false}
            {typeof message !== 'string' ? <div id='LinearProgress'>   <ThemeProvider theme={theme}>  <Box sx={{ width: '60%' }}> <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} /></Box>  </ThemeProvider></div> : message === '' ? viwe : <p id="personalBox_Message">{message}</p>}
            <p id="personalBox_Message">{message}</p>
            <p id='note'> מתייחסים לפרטיותך ברצינות רבה ומחויבים להגנה על הנתונים הפרטיים שלך. קרא/י עוד על האופן שבו אנו מטפלים ומשתמשים בנתוניך במדיניות הפרטיות שלנו springs -ב</p>
        </React.Fragment>
    );
}
export let arr_Items;