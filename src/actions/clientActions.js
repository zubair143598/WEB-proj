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
import axios from "axios";

export const loginClient = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: CLIENT_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/client/login",
      { email, password },
      config
    );

    dispatch({ type: CLIENT_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("clientInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CLIENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutClient = () => async (dispatch) => {
  localStorage.removeItem("clientInfo");
  dispatch({ type: CLIENT_LOGOUT });
};

export const registerClient =
  (name, email, password, pic) => async (dispatch) => {
    try {
      dispatch({ type: CLIENT_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/client",
        { name, pic, email, password },
        config
      );

      dispatch({ type: CLIENT_REGISTER_SUCCESS, payload: data });

      dispatch({ type: CLIENT_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("clientInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: CLIENT_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateClientProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: CLIENT_UPDATE_REQUEST });

    const {
      userLogin: { clientInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${clientInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/client/profile", user, config);

    dispatch({ type: CLIENT_UPDATE_SUCCESS, payload: data });

    dispatch({ type: CLIENT_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("clientInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CLIENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
