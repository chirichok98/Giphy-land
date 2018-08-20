import { combineReducers } from "redux";

import popularReducer from "../scenes/Popular/services/reducer";
import randomReducer from "../scenes/Random/services/reducer";

const rootReducer = combineReducers({
  popular: popularReducer,
  random: randomReducer
});

export default rootReducer;
