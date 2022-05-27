import { ActionTypes } from "../contants/action-type";
 
const initialstate ={
    product:[]
}

export const productReducer = (state = initialstate, {type ,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;

    }
};