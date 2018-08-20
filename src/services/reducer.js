import { combineReducers } from "redux";

import homeReducer from "../scenes/Home/services/reducer";
import randomReducer from "../scenes/Random/services/reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  random: randomReducer
});

export default rootReducer;
