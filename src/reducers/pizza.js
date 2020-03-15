import {SET_PIZZA_DETAILS} from '../constants/action-types';

const initState = {
    pizza: {}
}

function pizzaReducer(state = initState, action) {
    switch (action.type) {
        case SET_PIZZA_DETAILS:
            return { ...state, pizza: action.payload };
        default:
            return state;
    }

}

export default pizzaReducer