import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  clientLoginReducer,
  clientRegisterReducer,
  clientUpdateReducer,
} from "./reducers/clientReducers";

const reducer = combineReducers({
  noteList: noteListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  clientLogin: clientLoginReducer,
  clientRegister: clientRegisterReducer,
  clientUpdate: clientUpdateReducer,
  noteCreate: noteCreateReducer,
  noteDelete: noteDeleteReducer,
  noteUpdate: noteUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const clientInfoFromStorage = localStorage.getItem("clientInfo")
  ? JSON.parse(localStorage.getItem("clientInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  clientLogin: { clientInfo: clientInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
