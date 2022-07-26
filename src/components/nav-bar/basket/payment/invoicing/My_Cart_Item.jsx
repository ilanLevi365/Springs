import React from 'react';
import './My_Cart_Item.css';

export default ({ item_Data }) => {
    const id = item_Data.id;
    const title = item_Data.title;
    const price = item_Data.price;
    const img = item_Data.img;
    const qty = item_Data.qty;
    console.log(item_Data);
    return (
        <div className="itms">
            <span id="contents">{title.name}</span>
            <span id="contents_qty">{qty}</span>
            <span id="contents">&#8362; {price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
    )
}