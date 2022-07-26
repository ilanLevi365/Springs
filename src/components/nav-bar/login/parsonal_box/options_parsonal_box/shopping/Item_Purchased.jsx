import React from 'react';
import './Item_Purchased.css';
import React_Player from 'react-player';

export default ({ item_Data }) => {
    const { id, name, tipe, material, clarity, color, weight, Average_Width, price, img, qty, purchase_Time, invoice_Number } = item_Data;
    console.log(item_Data);
    return (
        <div className="item_Purchased">

            {(() => {
                if (id < 11) {
                    return <div className='item_Purchased-VideoRing'> <React_Player width={'100%'} loop={true} volume={false} id="Video_CartItem" url={img} playing='true' />  </div>
                } else {
                    return <div className='item_Purchased-VideoEarring' > <React_Player width={'100%'} loop={true} volume={false} id="Video_CartItem" url={img} playing='true' /> </div>
                }
            })()}
            <div className="details-Material">
                <br />
                <p>{tipe}</p>
                <p>{material}</p>
                <p>{Average_Width}</p>
                <p>{weight}</p>
                <p>{color}</p>
                <p>{clarity}</p>
                <p> &#8362; {price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} :מחיר</p>
                <br />
            </div>
            <div className='Kav'></div>
            <div className='Purchase_Details'>
                <p id="purchase_Time">{purchase_Time}</p>
                <p id="Nam">  {invoice_Number} :מספר הזמנה</p>
                <p id="Nam"> {name} </p>
                <p id="Nam">  {qty} :כמות</p>
                <p id="Pric">&#8362; {(price.toFixed(2) * qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  :סך התשלום </p>
            </div>
        </div>
    )
}
