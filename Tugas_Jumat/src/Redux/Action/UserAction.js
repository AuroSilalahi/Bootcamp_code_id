import * as ActionType from "../Constant/UserConstant";

export const doSignupRequest = (payload) => ({
  type: ActionType.SIGNUP_REQUEST,
  payload,
});

export const doSignupSuccess = (payload) => ({
  type: ActionType.SIGNUP_SUCCESS,
  payload,
});

export const doSigninRequest = (payload) => ({
  type: ActionType.SIGNIN_REQUEST,
  payload,
});

export const doSigninSuccess = (payload) => ({
  type: ActionType.SIGNIN_SUCCESS,
  payload,
});

export const doSignoutRequest = (payload) => ({
  type: ActionType.SIGNOUT_REQUEST,
  payload,
});

export const doSignoutSuccess = (payload) => ({
  type: ActionType.SIGNOUT_SUCCESS,
  payload,
});

export const doMessageNotif = (payload) => ({
  type: ActionType.MESSAGE_NOTIFICATION,
  payload,
});
