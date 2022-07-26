import React from 'react';
import { connect } from 'react-redux';
import Earrings_List from './Earrings_List/Earrings_List.jsx';

const mapStateToProps = (state) => {
    return {
        items: state.shop.products,
    };
}

const Products = ({ items }) => {
    const items_Array = items;
    return (
        <React.Fragment>
            <div>
                <Earrings_List items_Array={items_Array} />
            </div>
        </React.Fragment >
    )
}

export default connect(mapStateToProps)(Products);