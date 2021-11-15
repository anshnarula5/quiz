import {combineReducers} from "redux";

import alert from "./alert";
import popup from "./popup";
import auth from "./auth";

const rootReducer = combineReducers({alert, popup, auth})

export default rootReducer