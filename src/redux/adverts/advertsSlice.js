import { createSlice } from "@reduxjs/toolkit";
import { getAdverts, getTotal } from "./operations";

const initialState = {
   adverts: [],
   total: 13,
   favorites:
      JSON.parse(localStorage.getItem("persist:favorites"))?.favorites ?? [],
   bookings: [],
   isLoading: false,
   error: null,
};

const advertsSlice = createSlice({
   name: "adverts",
   initialState,
   reducers: {
      addToFavorites: (state, { payload }) => {
         state.favorites.push(payload);
      },
      removeFromFavorites: (state, { payload }) => {
         state.favorites = state.favorites.filter((el) => el._id !== payload);
      },
      addBooking: (state, { payload }) => {
         state.bookings = [...state.bookings, payload];
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(getTotal.fulfilled, (state, { payload }) => {
            state.total = payload.length;
            state.isLoading = false;
            state.error = null;
         })
         .addCase(getAdverts.fulfilled, (state, { payload }) => {
            state.adverts = [...state.adverts, ...payload];
            state.isLoading = false;
            state.error = null;
         })
         .addMatcher(
            (action) => action.type.endsWith("/pending"),
            (state) => {
               state.isLoading = true;
            }
         )
         .addMatcher(
            (action) => action.type.endsWith("/rejected"),
            (state, { payload }) => {
               state.isLoading = false;
               state.error = payload;
            }
         );
   },
});

export const advertsReducer = advertsSlice.reducer;
export const { addToFavorites, removeFromFavorites, addBooking } =
   advertsSlice.actions;
