import {createStore,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import PostReducer from "./PostReducer"
const Store2 = createStore(PostReducer,applyMiddleware(thunk))
export default Store2