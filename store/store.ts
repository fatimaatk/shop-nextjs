import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composedEnhancer);

//redux devtools -> devtools

// typeof window !== "undefined" &&
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()
