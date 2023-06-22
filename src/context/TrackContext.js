import createContext from "./createContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations?.length);
};

export const { Provider, Context } = createContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
