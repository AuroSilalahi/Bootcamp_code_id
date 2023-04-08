import { combineReducers } from "@reduxjs/toolkit";
import ProdCatReduce from "./ProductCategoryReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  prodCatState: ProdCatReduce,
  userState: UserReducer,
});

export default rootReducer;
