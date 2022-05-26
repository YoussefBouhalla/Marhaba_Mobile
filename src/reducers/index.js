import authReducer from "./AuthReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    token : authReducer,
})

export default allReducers; 