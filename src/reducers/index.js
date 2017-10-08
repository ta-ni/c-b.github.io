import { combineReducers } from 'redux';

const settings = (state = false, action) => {
    switch (action.type) {
        case 'SET_SETTINGS':
            return action.settings;
        default:
            return state;
    }
};

const products = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return action.products;
        default:
            return state;
    }
};

const productTypes = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCT_TYPES':
            return action.productTypes;
        default:
            return state;
    }
};

const reducers = combineReducers({
    settings,
    products,
    productTypes,
});

export default reducers;