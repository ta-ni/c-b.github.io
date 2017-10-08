import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';



let products = [
    {
        id: 1,
        image: product1,
        name: 'Printed swimsuit copy',
        type: 'shorts',
        params: {
            new: false,
            sale: false,
        },
    },
    {
        id: 2,
        image: product2,
        name: 'Jogging bermuda shorts copy',
        type: 'shorts',
        params: {
            new: false,
            sale: true,
        },
    },
    {
        id: 3,
        image: product3,
        name: 'Basic beach flip flops copy',
        type: 'accessories',
        params: {
            new: true,
            sale: false,
        },
    },
    {
        id: 4,
        image: product4,
        name: 'Black sunglasses copy',
        type: 'accessories',
        params: {
            new: false,
            sale: false,
        },
    },
    {
        id: 5,
        image: product5,
        name: 'Long sleeved twill shirt',
        type: 'jackets',
        params: {
            new: false,
            sale: false,
        },
    },
    {
        id: 6,
        image: product6,
        name: 'Basic swimsuit',
        type: 'shorts',
        params: {
            new: false,
            sale: false,
        },
    },
    {
        id: 7,
        image: product7,
        name: 'Bleached shorts',
        type: 'shorts',
        params: {
            new: false,
            sale: false,
        },
    },
    {
        id: 8,
        image: product8,
        name: 'T-shirt with lower panel',
        type: 't-shirts',
        params: {
            new: false,
            sale: true,
        },
    },
];

let prices = [
    {
        id: 1,
        price: 23
    },
    {
        id: 2,
        activePrice: 12,
        price: 36
    },
    {
        id: 3,
        price: 9
    },
    {
        id: 4,
        price: 29
    },
    {
        id: 5,
        price: 20
    },
    {
        id: 6,
        price: 36
    },
    {
        id: 7,
        price: 12
    },
    {
        id: 8,
        activePrice: 12,
        price: 32
    }
];

let productTypes = ['t-shirts', 'sweaters', 'shorts', 'jackets', 'accessories'];

let settings = {
    languages: ['en', 'ru', 'uk'],
    currencies: ['dollars', 'grivnas'],
    sale: true,
};

// logger.debug(products.find((product) => product.id === 3));

export const getProducts = (productId) => (dispatch) => {

    if (productId) {
        dispatch({type: 'SET_PRODUCTS', products: products.find((product) => product.id === productId)});

    } else {
        dispatch({type: 'SET_PRODUCTS', products: products});
    }
};

export const getProductPrice = (id) => {
    if(id) {
        return Promise.resolve(prices.find((item) => item.id === id));
    }
    return Promise.resolve(prices);
};

export const getSettings = (dispatch) => {
    dispatch({type: 'SET_SETTINGS', settings: settings});
    return Promise.resolve();
};


export const getProductTypes = (dispatch) => {
    dispatch({type: 'SET_PRODUCT_TYPES', productTypes: productTypes});
};
