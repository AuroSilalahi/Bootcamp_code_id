import * as ActionType from "../Constant/ProductCategoryConstant";

const INIT_STATE = {
  prodCats: [],
  prodCat: [],
};

const ProdCatReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_PRODCAT_REQUEST:
      return { ...state };
    case ActionType.GET_PRODCAT_SUCCESS:
      return GetProdCatSuccessfully(state, action);
    case ActionType.ADD_PRODCAT_REQUEST:
      return { ...state };
    case ActionType.ADD_PRODCAT_SUCCESS:
      return AddProdCatSuccessfully(state, action);
    case ActionType.FIND_PRODCAT_REQUEST:
      return { ...state };
    case ActionType.FIND_PRODCAT_SUCCESS:
      return FindProdCatSuccessfully(state, action);
    case ActionType.EDIT_PRODCAT_REQUEST:
      return { ...state };
    case ActionType.EDIT_PRODCAT_SUCCESS:
      return EditProdCatSuccessfully(state, action);
    case ActionType.DEL_PRODCAT_REQUEST:
      return { ...state };
    case ActionType.DEL_PRODCAT_SUCCESS:
      return DelProdCatSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetProdCatSuccessfully = (state, action) => {
  console.log(state);
  return {
    ...state,
    prodCats: action.payload,
  };
};

const AddProdCatSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    prodCats: [...state.prodCats, payload],
  };
};

const FindProdCatSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    prodCat: payload,
  };
};

const EditProdCatSuccessfully = (state, action) => {
  return {
    ...state,
  };
};

const DelProdCatSuccessfully = (state, action) => {
  return {
    ...state,
  };
};
export default ProdCatReduce;
