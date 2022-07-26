import * as React from 'react';
import './Search.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Book from '../../../images/search/Book.png';
import { func_current_location } from '../../home/Home_Start.jsx';

export default () => {
    func_current_location('/Search');
    return (
        <React.Fragment>
            <div className="Search">
                <div className="Search-Background" >
                    <img src={Book} alt="" />
                </div>
                <span className="Search-Word"> :כתבו כדי לחפש</span>
                <div className="Search-Search_Filde">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiInput-root': { m: 1, },
                            '& label.Mui-focused': { color: 'black', },
                            '& .MuiInput-underline:after': { borderBottomColor: 'black', },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="Search_Filde-Text_Field">
                            <TextField
                                id="standard-password-input"
                                variant="standard"
                                InputProps={{ style: { fontSize: 25 } }}
                                fullWidth
                            />
                        </div>
                    </Box>
                </div>
            </div>
        </React.Fragment>
    );
}