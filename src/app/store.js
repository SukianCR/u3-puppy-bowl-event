// Import configureStore (function to create a Redux store with good default middleware settings)
// from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the API service we defined (which includes the API endpoints and the reducer)
import { playersApi } from "./../api/playersApi";
import playersReducer from "./../api/playersApi";
//import registerReducer from "../components/Register/RegisterSlice";
// Create a Redux store
const store = configureStore({
  reducer: {
    [playersApi.reducerPath]: playersApi.reducer,
    getPlayers: playersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApi.middleware),
});

export default store;
