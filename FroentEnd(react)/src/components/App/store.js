import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userAuthapi } from '../Serve/userAuthapi';
import authReducer from "../Features/authSlice";
import userReducer from "../Features/userSlice"


export const store = configureStore({
  reducer: {
    [userAuthapi.reducerPath]: userAuthapi.reducer,
    auth: authReducer,
    user: userReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthapi.middleware),
})


setupListeners(store.dispatch)