import { call, put } from "redux-saga/effects";
import ProductCategoryApi from "../../Api/ProductCategoryApi";
import {
  GetProdCatSuccess,
  GetProdCatFailed,
  AddProdCatSuccess,
  AddProdCatFailed,
  FindProdCatSuccess,
  FindProdCatFailed,
  EditProdCatSuccess,
  EditProdCatFailed,
} from "../Action/ProductCategoryAction";

function* handleProdCat() {
  try {
    const result = yield call(ProductCategoryApi.list);
    yield put(GetProdCatSuccess(result));
  } catch (error) {
    yield put(GetProdCatFailed(error));
  }
}

function* createProdCat(action) {
  const { payload } = action;
  try {
    console.log(payload);
    const result = yield call(ProductCategoryApi.create, payload);
    yield put(AddProdCatSuccess(result.data));
  } catch (error) {
    yield put(AddProdCatFailed(error));
  }
}

function* findProdCat(action) {
  const { payload } = action;
  try {
    const result = yield call(ProductCategoryApi.findOne, payload);
    yield put(FindProdCatSuccess(result));
  } catch (error) {
    yield put(FindProdCatFailed(error));
  }
}

function* editProdCat(action) {
  const { payload } = action;
  try {
    const result = yield call(ProductCategoryApi.update, payload);
    yield put(EditProdCatSuccess(result.data));
  } catch (error) {
    yield put(EditProdCatFailed(error));
  }
}

function* deleteProdCat(action) {
  const { payload } = action;
  try {
    const result = yield call(ProductCategoryApi.deleted, payload);
    yield put(EditProdCatSuccess(result.data));
  } catch (error) {
    yield put(EditProdCatFailed(error));
  }
}

export {
  handleProdCat,
  createProdCat,
  findProdCat,
  editProdCat,
  deleteProdCat,
};
