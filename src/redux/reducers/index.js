import {combineReducers} from "redux";

import alert from "./alert";
import popup from "./popup";
import auth from "./auth";
import toggle from "./toggle";

const rootReducer = combineReducers({alert, popup, auth, toggle})

export default rootReducer