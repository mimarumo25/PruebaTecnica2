import { typesProduct } from "../types/types";


const initialState = {
    product: [],
    search: ''
}


export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesProduct.list:
            return {
                product: [...action.payload]
            }
        
        case  typesProduct.search:
            return{
                product: action.payload
            }
        default:
            return state;
    }
}
