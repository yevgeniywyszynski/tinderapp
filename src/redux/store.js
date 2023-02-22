import { configureStore } from "@reduxjs/toolkit";

import userSliceReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    users: userSliceReducer,
  },
});

export default store;
