import AsyncStorage from "@react-native-async-storage/async-storage";
import createContext from "./createContext";
import trackerApi from "../api/trackerApi";
import * as rootNavigation from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
    case "signin":
      return { token: action.payload, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    rootNavigation.navigate("MainFlow");
  } else {
    rootNavigation.navigate("SignUp");
  }
};

const signUp =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      rootNavigation.navigate("MainFlow");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      rootNavigation.navigate("MainFlow");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signOut = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    rootNavigation.navigate("SignUp");
  };
};

export const { Context, Provider } = createContext(
  authReducer,
  { signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: "" }
);
