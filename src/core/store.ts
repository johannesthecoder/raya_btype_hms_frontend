import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./root_slice";
import authReducer from "../features/auth/slice/auth_slice";

export const store = configureStore({
  reducer: {
    root: rootReducer,
    auth: authReducer,
  },
});

//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
