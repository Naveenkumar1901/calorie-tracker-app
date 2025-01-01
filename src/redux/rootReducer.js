import { combineReducers } from "redux";
import customiseReducer from "./customise/customiseReducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  customise: customiseReducer,
  login: loginReducer,
});

export default rootReducer;