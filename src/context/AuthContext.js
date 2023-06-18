import AsyncStorage from "@react-native-async-storage/async-storage";
import createContext from "./createContext";
import trackerApi from "../api/trackerApi";
import * as rootNavigation from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, token: action.payload, errorMessage: "" };
    case "signin":
      return { ...state, isSignedIn: true, errorMessage: "" };
    case "signout":
      return { isSignedIn: false, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
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

const signIn = (dispatch) => {
  return ({ email, password }) => {
    dispatch({ type: "signin" });
  };
};

const signOut = (dispatch) => {
  return () => {
    dispatch({ type: "signout" });
  };
};

export const { Context, Provider } = createContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null, errorMessage: "" }
);
