import { combineReducers } from "redux";
import settings from "./settings/reducer";

const rootReducer = combineReducers({
   settings
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
