import React from 'react';
import { connect } from 'react-redux';
import Rings_List from './Rings_List/Rings_List.jsx';

const mapStateToProps = (state) => {
    return {
        items: state.shop.products,
    };
}

const Products = ({ items }) => {
    const items_Array = items;
    return (
        <React.Fragment>
            <div >
                <Rings_List items_Array={items_Array} />
            </div>
        </React.Fragment >
    )
}

export default connect(mapStateToProps)(Products);