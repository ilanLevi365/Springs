import * as actions_Types from "./shopping-types";
import Rings_Products from "../../components/department-rings/Rings_Products/Rings_Products.js";
import Earrings_Products from "../../components/department-earrings/Earrings_Products/Earrings_Products.js";


const income_Process_1 = [];
const income_Process_2 = Rings_Products(income_Process_1);
const all_Products = Earrings_Products(income_Process_2);


const INITIAL_STATE = {
    products: all_Products,
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    current_item: null,
}

export default function shopping_Reducers(state = INITIAL_STATE, action) {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    console.log(localStorage.getItem("cart"));
    console.log(state.cart);
    let myCart;
    switch (action.type) {
        case actions_Types.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = (state.cart.find((item) => (item.id === action.payload.id)) ? true : false);
            console.log(inCart);
            myCart = inCart ? (state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)) : [...state.cart, { ...item, qty: 1 }];
            localStorage.setItem("cart", JSON.stringify(myCart));
            return {
                ...state,
                cart: inCart ? (state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)) : [...state.cart, { ...item, qty: 1 }],
            };
        case actions_Types.ITEM_REDUCTION:
            const item_Reduction = state.products.find((prod) => prod.id === action.payload.id);
            const item_InCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
            myCart = item_InCart ? state.cart.map((item) => item.id === action.payload.id ? (item.qty >= 2 ? { ...item, qty: item.qty - 1 } : { ...item }) : item) : [...state.cart, { ...item, qty: 0 }];
            localStorage.setItem("cart", JSON.stringify(myCart));
            return {
                ...state,
                cart: item_InCart ? state.cart.map((item) => item.id === action.payload.id ? (item.qty >= 2 ? { ...item, qty: item.qty - 1 } : { ...item }) : item) : [...state.cart, { ...item, qty: 0 }],
            };
        case actions_Types.REMOVE_FROM_CART:
            myCart = state.cart.filter((prod) => prod.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(myCart));
            return {
                ...state,
                cart: state.cart.filter((prod) => prod.id !== action.payload.id)
            };
        case actions_Types.DELETE_CART:
            myCart = [];
            localStorage.setItem("cart", JSON.stringify(myCart));
            return {
                ...state,
                cart: [],
            };
        case actions_Types.ADJUST_QTY:
            myCart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item);
            localStorage.setItem("cart", JSON.stringify(myCart));
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item),
            };
        case actions_Types.LOAD_CURRENT_ITEM:
            return {
                ...state,
                current_item: action.payload,
            };

        default:
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return state;
    }
}

