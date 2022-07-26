import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Earring_Type_1.css';
import React_Player from 'react-player';
import { load_Current_Item } from '../../../../../../redux/Shopping/shopping-actions.js';

const mapDispatchToProps = (dispatch) => {
    return {
        load_Current_Item: (item) => dispatch(load_Current_Item(item)),
    };
};

const Earring_Type_1 = ({ load_Current_Item, items_Arr }) => {
    const line = items_Arr;
    return (
        <React.Fragment>
            <div className='Earring_Type_1'>
                {line.map((item) => (
                    <div key={item.id} className="Earring_Type_1-Details" onClick={() => load_Current_Item(item)}>
                        <Link to="/Earring_Singel_Item" >
                            <div className="Details-Earrings_Words">
                                <p id=" Name">{item.title.name}</p>
                                <p id="carat"> {item.title.carat} </p>
                                <p id="price">{item.price.toFixed(2)} &#8362;</p>
                            </div>
                            <div className="Earrings_Video_Player-Type_1">
                                <React_Player width={'100%'} loop={true} volume={false} url={item.img} playing='true' />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </React.Fragment >
    );
}

export default connect(null, mapDispatchToProps)(Earring_Type_1);