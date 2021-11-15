import {combineReducers} from "redux";

import alert from "./alert";
import popup from "./popup";

const rootReducer = combineReducers({alert, popup})

export default rootReducer