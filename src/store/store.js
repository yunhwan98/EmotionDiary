import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers";

//store 생성
//store에 reducer 넣기

const store = createStore(rootReducer);
export default store;
