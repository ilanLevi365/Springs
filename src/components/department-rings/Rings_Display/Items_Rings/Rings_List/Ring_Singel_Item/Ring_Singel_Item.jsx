import React from 'react';
import { connect } from 'react-redux';
import React_Player from 'react-player';
import './Ring_Singel_Item.css';
import { add_To_Cart } from '../../../../../../redux/Shopping/shopping-actions.js';

const mapStateToProps = (state) => {
    return {
        current_item: state.shop.current_item,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(add_To_Cart(id)),
    };
};

const Ring_Singel_Item = ({ current_item, addToCart }) => {
    const { id, title, discr, material, price, img } = current_item;
    return (
        <React.Fragment>
            <div className="Ring_Singel_Item">
                <div className="Ring_Singel_Item-Details">
                    <div className="Details-Description_And_Commands">
                        <p id="title">{title.name} </p>
                        <p id="title">{title.carat}</p>
                        <br />
                        <p id="discr">{discr}</p>
                        <br />
                        <br />
                        <br />
                        <p id="price">{price.toFixed(2)} &#8362;</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <button className="btn_AddToCart" onClick={() => addToCart(id)}>הוספה לסל </button>
                    </div>
                    <div className="Details-Video">
                        <div className="player">
                            <React_Player width={'100%'} loop={true} volume={false} url={img} playing='true' />
                        </div>
                    </div>
                    <div className="Details-Material">
                        <h3>מידע על הטבעת</h3>
                        <br />
                        <p>{material.tipe}</p>
                        <p>{material.material}</p>
                        <p>{material.Average_Width}</p>
                        <p>{material.weight}</p>
                        <p>{material.color}</p>
                        <p>{material.clarity}</p>
                        <br />

                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Ring_Singel_Item);