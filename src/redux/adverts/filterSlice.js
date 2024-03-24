import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   location: "",
   details: {
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
   },
   vehicleType: { van: false, fullyIntegrated: false, alcove: false },
};

const filterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setSearchParams(_, { payload }) {
         return payload;
      },
   },
});

export const { setSearchParams } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
