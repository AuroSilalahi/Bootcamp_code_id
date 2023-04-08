import * as ActionType from "../Constant/ProductCategoryConstant";

export const GetProdCatRequest = () => ({
  type: ActionType.GET_PRODCAT_REQUEST,
});

export const GetProdCatSuccess = (payload) => ({
  type: ActionType.GET_PRODCAT_SUCCESS,
  payload,
});

export const GetProdCatFailed = (payload) => ({
  type: ActionType.GET_PRODCAT_FAILED,
  payload,
});

export const AddProdCatRequest = (payload) => ({
  type: ActionType.ADD_PRODCAT_REQUEST,
  payload,
});

export const AddProdCatSuccess = (payload) => ({
  type: ActionType.ADD_PRODCAT_SUCCESS,
  payload,
});

export const AddProdCatFailed = (payload) => ({
  type: ActionType.ADD_PRODCAT_FAILED,
  payload,
});

export const EditProdCatRequest = (payload) => ({
  type: ActionType.EDIT_PRODCAT_REQUEST,
  payload,
});

export const EditProdCatSuccess = (payload) => ({
  type: ActionType.EDIT_PRODCAT_SUCCESS,
  payload,
});

export const EditProdCatFailed = (payload) => ({
  type: ActionType.EDIT_PRODCAT_FAILED,
  payload,
});

export const DelProdCatRequest = (payload) => ({
  type: ActionType.DEL_PRODCAT_REQUEST,
  payload,
});

export const DelProdCatSuccess = (payload) => ({
  type: ActionType.DEL_PRODCAT_SUCCESS,
  payload,
});

export const DelProdCatFailed = (payload) => ({
  type: ActionType.DEL_PRODCAT_FAILED,
  payload,
});

export const FindProdCatRequest = (payload) => ({
  type: ActionType.FIND_PRODCAT_REQUEST,
  payload,
});

export const FindProdCatSuccess = (payload) => ({
  type: ActionType.FIND_PRODCAT_SUCCESS,
  payload,
});

export const FindProdCatFailed = (payload) => ({
  type: ActionType.FIND_PRODCAT_FAILED,
  payload,
});
