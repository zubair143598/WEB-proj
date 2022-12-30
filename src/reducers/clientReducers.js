import {
  CLIENT_LOGIN_FAIL,
  CLIENT_LOGIN_REQUEST,
  CLIENT_LOGIN_SUCCESS,
  CLIENT_LOGOUT,
  CLIENT_REGISTER_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
  CLIENT_UPDATE_FAIL,
  CLIENT_UPDATE_REQUEST,
  CLIENT_UPDATE_SUCCESS,
} from "../constants/clientConstants";

export const clientLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_LOGIN_REQUEST:
      return { loading: true };
    case CLIENT_LOGIN_SUCCESS:
      return { loading: false, clientInfo: action.payload };
    case CLIENT_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case CLIENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const clientRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_REGISTER_REQUEST:
      return { loading: true };
    case CLIENT_REGISTER_SUCCESS:
      return { loading: false, clientInfo: action.payload };
    case CLIENT_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const clientUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_UPDATE_REQUEST:
      return { loading: true };
    case CLIENT_UPDATE_SUCCESS:
      return { loading: false, clientInfo: action.payload, success: true };
    case CLIENT_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
