import {combineReducers} from "redux";

import pizzaList from "./pizza-list";
import pizza from "./pizza";
import modal from "./modal";

const rootReducer = combineReducers({
    pizzaList,
    pizza,
    modal
});

export default rootReducer