import * as actions_Types from "./shopping-types";

export function add_To_Cart(item_ID) {
    return {
        type: actions_Types.ADD_TO_CART,
        payload: {
            id: item_ID,
        },
    };
};

export function item_Reduction(item_ID) {
    return {
        type: actions_Types.ITEM_REDUCTION,
        payload: {
            id: item_ID,
        },
    };
};

export function remove_From_Cart(item_ID) {
    return {
        type: actions_Types.REMOVE_FROM_CART,
        payload: {
            id: item_ID,
        },
    };
};
export function delete_Cart() {
    return {
        type: actions_Types.DELETE_CART,
    };
};

export function adjust_Qty(item_ID, value) {
    return {
        type: actions_Types.ADJUST_QTY,
        payload: {
            id: item_ID,
            qty: value,
        },
    };
};

export function load_Current_Item(item) {
    return {
        type: actions_Types.LOAD_CURRENT_ITEM,
        payload: item,
    };
};

