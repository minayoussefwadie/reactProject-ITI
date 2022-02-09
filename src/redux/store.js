import { applyMiddleware,createStore } from "redux";
import reducers from "./reducers/index";
import promiseMW from "redux-promise"
const createMiddleWare=applyMiddleware(promiseMW)(createStore)
const store = createMiddleWare(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
