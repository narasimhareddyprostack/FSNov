import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

let store = createStore(rootReducer, composeWithDevTools());
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
