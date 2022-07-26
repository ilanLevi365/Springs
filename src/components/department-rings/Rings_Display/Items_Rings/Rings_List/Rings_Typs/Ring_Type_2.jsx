import React from 'react';
import { Link } from 'react-router-dom';
import React_Player from 'react-player';
import { connect } from 'react-redux';
import './Ring_Type_2.css';
import { load_Current_Item } from '../../../../../../redux/Shopping/shopping-actions.js';


const mapDispatchToProps = (dispatch) => {
    return {
        load_Current_Item: (item) => dispatch(load_Current_Item(item)),
    };
};

const Ring_Type_2 = ({ load_Current_Item, items_Arr }) => {
    const line = items_Arr;
    return (
        <React.Fragment>
            <div className='Ring_Type_2'>
                {line.map((item) => {
                    return (
                        <div key={item.id} className="Ring_Type_2-Item_Details" onClick={() => load_Current_Item(item)}>
                            <Link to="/Ring_Singel_Item">
                                <div className="Item_Details-Words_Item_Type_2">
                                    <p id="Name">{item.title.name}</p>
                                    <p id="carat"> {item.title.carat} </p>
                                    <p id="price">{item.price.toFixed(2)} &#8362;</p>
                                </div>
                                <div className='Div_React_Player'>
                                    <React_Player width={'100%'} loop={true} volume={false} id="React_Player" url={item.img} playing='true' />
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </React.Fragment >
    );
}

export default connect(null, mapDispatchToProps)(Ring_Type_2);