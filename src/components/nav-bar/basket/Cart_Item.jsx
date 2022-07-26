import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React_Player from 'react-player';
import './Cart_Item.css'
import { add_To_Cart, remove_From_Cart, item_Reduction, load_Current_Item } from '../../../redux/Shopping/shopping-actions.js';
import DeleteIcon from '@mui/icons-material/Delete';

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(add_To_Cart(id)),
        remove_From_Cart: (id) => dispatch(remove_From_Cart(id)),
        itemReduction: (id) => dispatch(item_Reduction(id)),
        load_Current_Item: (item) => dispatch(load_Current_Item(item)),
    };
};



const Cart_Item = ({ item_Data, addToCart, remove_From_Cart, itemReduction, load_Current_Item }) => {
    const id = item_Data.id;
    const title = item_Data.title;
    const price = item_Data.price;
    const img = item_Data.img;
    const qty = item_Data.qty;
    return (
        <React.Fragment>
            <div className='Crt_Item'>
                <div className='Crt_Item-Description_Commands'>
                    <p id="Name">{title.name}</p>
                    <p id="Carat"> {title.carat} </p>
                    <p id="Price">{price.toFixed(2)} &#8362;</p>
                    <div className="Description_Commands-AddToCart">
                        <p onClick={() => addToCart(id)}><span id="plus_Minus">&#43;</span>  </p>
                        <p id="qty">{qty}</p>
                        <p onClick={() => itemReduction(id)}><span id="plus_Minus">&#8722; </span> </p>
                    </div>
                    <p onClick={() => remove_From_Cart(id)}><DeleteIcon id='DeleteIcon' /> </p>
                </div>
                {(() => {
                    if (id < 11) {
                        return <div className='Crt_Item-Video_Ring' onClick={() => load_Current_Item(item_Data)}>
                            <Link to="/Ring_Singel_Item" >
                                <React_Player width={'99%'} loop={true} volume={false} id="Video_Crt_Item" url={img} playing='true' />
                            </Link>
                        </div>
                    } else {
                        return <div className='Crt_Item-Video_Earring' onClick={() => load_Current_Item(item_Data)}>
                            <Link to="/Earring_Singel_Item" >
                                <React_Player width={'100%'} loop={true} volume={false} id="Video_Crt_Item" url={img} playing='true' />
                            </Link>
                        </div>
                    }
                })()}
            </div>
        </React.Fragment>
    )
}
export default connect(null, mapDispatchToProps)(Cart_Item);
