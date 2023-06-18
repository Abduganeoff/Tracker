import createContext from "./createContext";
import trackerApi from "../api/trackerApi";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, isSignedIn: true };
    case "signout":
      return { ...state, isSignedIn: false };
      case "add_error":
        return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      dispatch({ type: "signup", payload: response.data.token });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
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
  { isSignedIn: false, errorMessage: "" }
);
