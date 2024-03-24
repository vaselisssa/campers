import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdverts } from "../../services/api";

export const getAllAdverts = createAsyncThunk(
   "adverts/getAll",
   async (_, thunkAPI) => {
      try {
         const adverts = await fetchAdverts();
         return adverts;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);
