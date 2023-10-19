import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../core/store";
import { EmployeeReadModel } from "../models/employee_model";

interface Auth {
  loggedInEmployee?: EmployeeReadModel;
  loggedInAt: number;
}

const initialState: Auth = { loggedInAt: 0 };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAnEmployee: (state, action: PayloadAction<EmployeeReadModel>) => {
      state.loggedInEmployee = action.payload;
      state.loggedInAt = Date.now();
    },
    logoutAnEmployee: (state) => {
      state.loggedInEmployee = undefined;
    },
  },
  extraReducers: (builder) => {},
});

export const { loginAnEmployee, logoutAnEmployee } = authSlice.actions;

export const selectLoggedInEmployee = (state: RootState) => state.auth.loggedInEmployee;
export const selectLoggedInAt = (state: RootState) => state.auth.loggedInAt;

export default authSlice.reducer;
