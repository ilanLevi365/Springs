import * as React from 'react';
import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Login_To_Account.css';
import { func_profile } from '../../../creating_nav_bar/Creating_Nav_Bar.jsx';
import { current_location } from '../../../../home/Home_Start.jsx';
import { func_current_location } from '../../../../home/Home_Start.jsx';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box >
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};


export default () => {
    const [message, set_Message] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [progress, setProgress] = React.useState(10);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    if (!current_location) { func_current_location('./Home_Regular') }
    const onSubmit = async (data) => {
        setLoading(false);
        console.log(data)
        data.email = (data.email).toUpperCase();
        console.log(data);
        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        try {
            let get_Data = await fetch('https://springs-server.herokuapp.com/Create_Account/User_Check', options);
            user_Db = await get_Data.json();
            console.log(user_Db);
            if (user_Db.status === 0) { set_Message('.ישנה תקלת תקשורת למסד הנתונים, אנא נסה במועד מאוחר יותר') }
            else if (user_Db.status === 1) { set_Message('.אין לך חשבון אצלנו, אנא פתח חשבון חדש') }
            else {
                user_Db.status ? (() => { in_Profile = true; document.getElementById("personal_Box").click(); })() : set_Message('. הסיסמא שגויה, נא הקלד שנית');
                func_profile((user_Db.userData_Db.firstName).toUpperCase());
            }
            setLoading(true);
        } catch (err) {
            console.log(err);
            set_Message('.צד השרת אינו פעיל, אנא נסה במועד מאוחר יותר')
            setLoading(true);
        }

    };
    return (
        <div className="Login_To_Account">
            <div className="Login_To_Account-Div_Word_Conecte">
                <span>התחברו</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Login_To_Account-Filds">
                    <div className="Filds-Text_Field">
                        <div className="Filds-Text_Field">
                            <TextField
                                id="standard-input"
                                name='email'
                                label='E-mail'
                                variant="standard"
                                InputProps={{ style: { fontSize: 10 } }}
                                {...register('email', { required: 'יש למלאות שדה זו' })}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                                style={{ width: '50ch' }}
                            />
                        </div>
                        <div className="Filds-Text_Field">
                            <TextField
                                id="standard-password-input"
                                type="password"
                                name='password'
                                label='Password'
                                variant="standard"
                                style={{ width: '50ch' }}
                                InputProps={{ style: { fontSize: 10 } }}
                                {...register('password', { required: 'יש למלאות שדה זו' },)}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                            />
                        </div>
                    </div>
                </div>
                {loading ? (<p id="new_message">{message}</p>) : (<div id="reactBootStrap" > <CircularProgressWithLabel value={progress} style={{ color: "black" }} /></div>)}
                <div className="Login_To_Account-Div_Conect">
                    <button variant="contained" type="submit" className="Div_Conect-Btn">
                        התחבר
                    </button>
                </div>
            </form>
            <Link id="personal_Box" to={current_location} />
        </div>
    )
}
export let in_Profile = false;
export let user_Db;
export let user_Email;
