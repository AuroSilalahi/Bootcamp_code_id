import { takeEvery, all } from "redux-saga/effects";
import * as ActionProdCat from "../Constant/ProductCategoryConstant";
import * as ActionUser from "../Constant/UserConstant";
import {
  createProdCat,
  deleteProdCat,
  editProdCat,
  findProdCat,
  handleProdCat,
} from "./ProductCategorySaga";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionProdCat.GET_PRODCAT_REQUEST, handleProdCat),
    takeEvery(ActionProdCat.ADD_PRODCAT_REQUEST, createProdCat),
    takeEvery(ActionProdCat.FIND_PRODCAT_REQUEST, findProdCat),
    takeEvery(ActionProdCat.EDIT_PRODCAT_REQUEST, editProdCat),
    takeEvery(ActionProdCat.DEL_PRODCAT_REQUEST, deleteProdCat),
    takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;
