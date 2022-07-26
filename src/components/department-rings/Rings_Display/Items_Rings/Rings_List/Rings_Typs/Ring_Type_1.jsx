import React from 'react';
import { Link } from 'react-router-dom';
import React_Player from 'react-player';
import { connect } from 'react-redux';
import './Ring_Type_1.css';
import { load_Current_Item } from '../../../../../../redux/Shopping/shopping-actions.js';

const mapDispatchToProps = (dispatch) => {
    return {
        load_Current_Item: (item) => dispatch(load_Current_Item(item)),
    };
};

const Ring_Type_1 = ({ load_Current_Item, items_Arr }) => {
    const line = items_Arr;
    return (
        <React.Fragment>
            <div className='Ring_Type_1'>
                {line.map((item) => (
                    <div key={item.id} className="Ring_Type_1-Ring_Details" onClick={() => load_Current_Item(item)}>
                        <Link to="/Ring_Singel_Item" >
                            <div className="Ring_Details-Words">
                                <p id="Name">{item.title.name}</p>
                                <p id="carat"> {item.title.carat} </p>
                                <p id="price">{item.price.toFixed(2)} &#8362;</p>
                            </div>
                            <div className="div_Ring_Details-Player"> <React_Player width={'100%'} loop={true} volume={false} id="Ring_Details-Player" url={item.img} playing='true' /></div>
                        </Link>
                    </div>
                ))}
            </div>
        </React.Fragment >
    );
}

export default connect(null, mapDispatchToProps)(Ring_Type_1);
