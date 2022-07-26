import React from 'react';
import { connect } from 'react-redux';
import React_Player from 'react-player';
import './Earring_Singel_Item.css';
import { add_To_Cart } from '../../../../../../redux/Shopping/shopping-actions.js';
import Creating_Nav_Bar_Black from '../../../../../nav-bar/creating_nav_bar/Creating_Nav_Bar_Black.jsx';


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

const Earring_Singel_Item = ({ current_item, addToCart }) => {
    const { id, title, discr, material, price, img } = current_item;
    return (
        <React.Fragment>
            <div className="Earring_Singel_Item">
                <div className="Earring_Singel_Item-Nav_Bar">
                    <Creating_Nav_Bar_Black />
                </div>
                <div className="Earring_Singel_Item-Details">
                    <div className="Details-Description_And_Commands_Earring">
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
                        <button className="Btn_Add_To_Cart" onClick={() => addToCart(id)}>הוספה לסל </button>
                    </div>
                    <div className="Details-Video_Earrings">
                        <div className="player">
                            <React_Player width={'100%'} loop={true} volume={false} url={img} playing='true' />
                        </div>
                    </div>
                    <div className="Details-Material_Earrings">
                        <h3>מידע על העגילים</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Earring_Singel_Item);
