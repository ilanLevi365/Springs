import React, { useEffect, useState } from 'react';
import './Shopping.css';
import Item_Purchased from './Item_Purchased';
import { arr_Items } from '../../Personal_Box.jsx'

export default () => {
    const [message, set_Message] = useState('');
    try {
        useEffect(() => {
            if (arr_Items.status === 0) { set_Message('.ישנה תקלת תקשורת למסד הנתונים, אנא נסה במועד מאוחר יותר') }
            else if (arr_Items.status === 1) { set_Message('- אין קניות להצגה -') }
            else if (arr_Items.status === true) {
                let count_1 = 0;
                arr_Items.arr_purchase_Time.map((e) => {
                    if (e !== null) {
                        for (let item of arr_Items.arr_Product_Details[count_1]) {
                            item.purchase_Time = e;
                        }
                        count_1++;
                    }
                });
            }
            else { set_Message('.ישנה תקלה במערכת, אנא נסה מאוחר יותר') }
        }, [arr_Items.status])
    } catch (e) {
        console.error(e);
        set_Message('.ישנה תקלה במערכת, אנא נסה מאוחר יותר')
    }
    return (
        <div className="Shopping">
            <div className="Shopping_Cart">
                <div className="shopping_cart_Contents">
                    <p id="shopping_archive_Message">{message}</p>
                    {arr_Items.status === 1 ? <p></p> :
                        <ul>
                            {arr_Items.arr_Product_Details.map((arr_items) => (
                                arr_items.map((item) => (
                                    <div id="my_Cart_Item">  <li> <Item_Purchased item_Data={item} /><br /></li></div>
                                ))))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}
