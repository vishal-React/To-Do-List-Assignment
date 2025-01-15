import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.error("Could not load state from localStorage", e);
  }
  return undefined;
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
