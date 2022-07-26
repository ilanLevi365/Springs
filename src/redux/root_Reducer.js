import { combineReducers } from 'redux';
import shop_Reducer from './Shopping/shopping-reducers';

const root_Reducer = combineReducers({
    shop: shop_Reducer,
});

export default root_Reducer;