import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Root {
  currentPageIsLoading: boolean;
}

const initialState: Root = {
  currentPageIsLoading: false,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    toggleCurrentPageLoading: (state) => {
      state.currentPageIsLoading = !state.currentPageIsLoading;
    },
  },
});

export const { toggleCurrentPageLoading } = rootSlice.actions;

export const selectCurrentPageLoading = (state: RootState) => state.root.currentPageIsLoading;

export default rootSlice.reducer;
