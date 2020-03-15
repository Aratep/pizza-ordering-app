import {SET_PIZZA_DETAILS} from '../constants/action-types';

export const setPizzaDetails = (payload) => {
    return dispatch => {
        dispatch({type: SET_PIZZA_DETAILS, payload});
    };
}

