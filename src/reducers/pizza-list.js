import {SET_PIZZA_LIST} from '../constants/action-types';
import {pizzas} from '../constants/pizzas'
import {ingredients} from '../constants/ingredients'

const initState = {
    pizzas,
    ingredients
}

function pizzaListReducer(state = initState, action) {
    switch (action.type) {
        case SET_PIZZA_LIST:
            return { ...state, test: 'new test message' };
        default:
            return state;
    }

}

export default pizzaListReducer