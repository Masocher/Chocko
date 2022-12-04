import { OPEN_MENU, CLOSE_MENU, SET_LIGHT_STATUS } from "./types";
import { combineReducers } from "redux";

let menuStatus = false;
let temStatus = false;

const reducer_1 = (state = menuStatus, action) => {
    switch (action.type) {
        case OPEN_MENU: return state = true
        case CLOSE_MENU: return state = false
        default: return state
    }
}

const reducer_2 = (state = temStatus, action) => {
    switch (action.type) {
        case SET_LIGHT_STATUS: return !state
        default: return state
    }
}

const rootReducer = combineReducers({
    reducer_1,
    reducer_2
})

export default rootReducer