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
   vehicleType: "",
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
