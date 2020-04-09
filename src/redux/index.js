import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  homeData:homeReducer,
  loginData:loginReducer,
});

export default rootReducer;
