import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../core/store";

interface Accommodation {
  searchString: string;
}

const initialState: Accommodation = {
  searchString: "",
};

export const accommodationSlice = createSlice({
  name: "accommodation",
  initialState,
  reducers: {
    updateSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  /**changeAccommodationCurrentResource*/
} = accommodationSlice.actions;

export const selectLoggedInEmployee = (state: RootState) => state.auth.loggedInEmployee;

export default accommodationSlice.reducer;
