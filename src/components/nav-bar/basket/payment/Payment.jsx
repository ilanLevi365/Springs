import * as React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './Payment.css';
import { total_price } from '../Shopping_Cart.jsx';
import Visa from '../../../../images/payment/visa.png';
import Isracrad from '../../../../images/payment/isracrad.png';
import Diners from '../../../../images/payment/diners.png';
import amEx from '../../../../images/payment/amEx.png';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import { new_Profile } from '../../creating_nav_bar/Creating_Nav_Bar.jsx';
import { func_current_location } from '../../../home/Home_Start.jsx';


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(#00) 000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            isNumericString
            prefix=""
        />
    );
});

NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default () => {
    console.log(typeof total_price)
    func_current_location('/Shopping_Cart');
    const [year, setYear] = React.useState(null);
    const [month, setMonth] = React.useState(null);
    const [message, set_Message] = React.useState("");
    if (typeof total_price === "string") {
        console.log(new_Profile);
        const defaultProps_month = {
            options: date_month,
            getOptionLabel: (option) => option.month,
        };
        const defaultProps_year = {
            options: date_year,
            getOptionLabel: (option) => option.year,
        };

        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = async (data) => {
            console.log((data.creditNumber).length);
            if (new_Profile) {
                try {
                    if ((data.creditNumber).length < 16) { set_Message('.מספר הכרטיס שגוי, יש להקיש שנית'); }
                    else if ((data.promiseCode).length < 3) { set_Message('.שגוי יש להקיש שנית CVV מספר '); }
                    else if ((data.id).length < 8) { set_Message('.מספר ת.ז שגוי, יש להקיש שנית'); }
                    else if (year !== null) {
                        let new_year = Number(year.year);
                        let new_month = Number(month.month);
                        if ((new_year > 2022) && (new_month > 0 && new_month <= 12)) {
                            data.year = year;
                            data.month = month;
                            invoiceNumber_Func();
                            document.getElementById("compnent_tax_Receipt").click();
                            set_Message('');
                        } else {
                            set_Message('.יש לבחור חודש ושנה מתוך הרשימה');
                        }
                    } else {
                        set_Message('.יש לבחור חודש ושנה מתוך הרשימה');
                    }
                } catch (e) {
                    console.log(e);
                }
            } else {
                set_Message('.הינך לא מחובר, יש להתחבר קודם ביצוע הפעולה');
            }
        }
        return (
            <div className="Payment">
                <div className="imgs">
                    <img src={Diners} id='newImg' />
                    <img src={amEx} id='newImg' />
                    <img src={Isracrad} id='newImg' />
                    <img src={Visa} id='newImg' />
                </div>
                <p id="payment_words">הזינו את פרטי הכרטיס שלכם</p>
                <div className="payment-filds">
                    <p id="newMessage" >{message}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="filds-creditNumber">
                            <TextField
                                id="standard-input"
                                name='creditNumber'
                                label='Credit card number'
                                InputProps={{
                                    inputComponent: NumberFormatCustom,
                                    style: { fontSize: 10 }
                                }}
                                variant="standard"
                                inputProps={{ maxLength: 16, minLength: 7 }}
                                {...register('creditNumber', { required: 'יש למלאות מספר כרטיס אשראי' })}
                                error={Boolean(errors.creditNumber)}
                                helperText={errors.creditNumber?.message}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="filds-creditHolder">
                            <TextField
                                id="standard-input"
                                name='creditHolder'
                                label='Credit card holder'
                                type="text"
                                variant="standard"
                                InputProps={{ style: { fontSize: 10 } }}
                                {...register('creditHolder', { required: 'יש למלאות את שם בעל הכרטיס ' })}
                                error={Boolean(errors.creditHolder)}
                                helperText={errors.creditHolder?.message}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="filds-id">
                            <TextField
                                id="standard-input"
                                name='id'
                                label='ID number'
                                variant="standard"
                                inputProps={{ maxLength: 8, minLength: 8 }}
                                InputProps={{
                                    inputComponent: NumberFormatCustom,
                                    style: { fontSize: 10 }
                                }}
                                {...register('id', { required: 'יש למלאות מספר ת.ז ' })}
                                error={Boolean(errors.id)}
                                helperText={errors.id?.message}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="filds-month">
                            <Stack spacing={1} sx={{ width: '100%' }}>
                                <Autocomplete
                                    {...defaultProps_month}
                                    id="controlled-demo"
                                    value={month}
                                    onChange={(event, newValue) => {
                                        setMonth(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            {...register('month', { required: 'יש למלאות מספר חודש' })}
                                            error={Boolean(errors.month)}
                                            helperText={errors.month?.message}
                                            name='month'
                                            label="Month"
                                            variant="standard"
                                        />
                                    )}
                                />
                            </Stack>
                        </div>
                        <div className="filds-CVV">
                            <TextField
                                id="standard-input"
                                name='promiseCode'
                                label='CVV2 Promise Code'
                                variant="standard"
                                floatingLabelText="mobileNumber"
                                onChange={(event) => Number.isInteger(event.target.value)
                                    ? this.setState({ allowedValue: event.target.value })
                                    : null}
                                inputProps={{ maxLength: 3, minLength: 3 }}
                                InputProps={{
                                    inputComponent: NumberFormatCustom,
                                    style: { fontSize: 10 }
                                }}
                                {...register('promiseCode', { required: 'יש למלאות קוד בן 3 ספרות  ' })}
                                error={Boolean(errors.promiseCode)}
                                helperText={errors.promiseCode?.message}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="filds-year">
                            <Stack spacing={1} sx={{ width: '100%' }}>
                                <Autocomplete
                                    {...defaultProps_year}
                                    id="controlled-demo"
                                    value={year}
                                    onChange={(event, newValue) => {
                                        setYear(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            {...register('year', { required: 'יש למלאות מספר שנה' })}
                                            error={Boolean(errors.year)}
                                            helperText={errors.year?.message}
                                            name='year'
                                            label="Year"
                                            variant="standard"
                                        />
                                    )}
                                />
                            </Stack>
                        </div>
                        <div className="payment-btn">
                            <p className="total_price">מחיר כולל:  <b> &#8362; {total_price}</b></p>
                            <button variant="contained" type="submit" className="payment-Btn">בצע רכישה</button>
                        </div>
                    </form >
                    <Link id="compnent_tax_Receipt" to='/Invoicing' />
                </div>
            </div >
        );
    } else {
        return <p id="noConect" >.הינך לא מחובר, יש להתחבר קודם ביצוע הפעולה</p>
    }
}

const date_month = [
    { month: '01' },
    { month: '02' },
    { month: '03' },
    { month: '04' },
    { month: '05' },
    { month: "06" },
    { month: '07' },
    { month: '08' },
    { month: '09' },
    { month: "10" },
    { month: '11' },
    { month: '12' }
];
const date_year = [
    { year: '2022' },
    { year: '2023' },
    { year: '2024' },
    { year: '2025' },
    { year: '2026' },
    { year: '2027' },
    { year: '2028' },
    { year: '2029' },
    { year: '2030' },
    { year: '2031' },
    { year: '2032' },
    { year: '2033' }
];

let invoiceNumber_Func = () => {
    let invoiceNumber = Math.random();
    invoiceNumber *= 100000;
    invoice_Number = Math.round(invoiceNumber).toString();
}
export let invoice_Number;
