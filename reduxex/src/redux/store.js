import counterReducer from "./counter/counter.reducer";
import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(counterReducer, composeWithDevTools());
export default store;

// store is ready
//store contains states
//example Store
/*

{
 user:{

 }
 product:{

 }
 counter:{
     counter:
 }

}
*/
// let x = 10;
/*
Question from Pooja: store naming - rules
*/
