import {ADD_ITEM_TO_CART} from '../action-types';
const initialState={
    count: 0,
    product: [
        {
            id: 1,
            name: 'Iphone',
            price: 500,
            isAddedToCart: false,
        },
        {
            id: 2,
            name: 'Tumba',
            price: 500,
            isAddedToCart: false,
        },
        {
            id: 3,
            name: 'Samsung',
            price: 500,
            isAddedToCart: false,
        },
        {
            id: 4,
            name: 'ZTE',
            price: 500,
            isAddedToCart: false,
        },
        {
            id: 5,
            name: 'Iphone',
            price: 600,
            isAddedToCart: false,
        },
    ]
}
export default (state = initialState ,action)=>{
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            const {payload} = action;
            const {product} = state;
            const productCopy = [...product];
            console.log(product,state,action)
            const indexOfCurrentItem = productCopy.findIndex((el)=>el.id === payload);
            console.log(indexOfCurrentItem);
            productCopy[indexOfCurrentItem].isAddedToCart = !productCopy[indexOfCurrentItem].isAddedToCart;
            const upDateCount = productCopy.filter(el=> el.isAddedToCart);

            return {...state, product: productCopy,count: upDateCount.length};

        default : return state;
    }
}