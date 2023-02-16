import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import vocabulariesReducer from "./vocabularies/slice";

export default configureStore({
  reducer: {
    user: userReducer,
    vocabularies: vocabulariesReducer,
  },
});
