import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdverts, fetchTotal } from "../../services/api";

const getAllSearchParams = (params, obj) => {
   const combinedParams = { ...obj, ...params };
   return combinedParams;
};

export const getAdverts = createAsyncThunk(
   "adverts/getAll",
   async ({ page, limit, searchParams }, thunkAPI) => {
      const axiosParams = {
         page,
         limit,
      };

      console.log("searchParams:", searchParams);
      const combinedParams = getAllSearchParams(searchParams, axiosParams);
      console.log("combinedParams:", combinedParams);

      try {
         const adverts = await fetchAdverts(combinedParams);
         return adverts;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);

export const getTotal = createAsyncThunk(
   "adverts/getTotal",
   async (searchParams, thunkAPI) => {
      const axiosParams = {};

      const params = getAllSearchParams(searchParams, axiosParams);

      try {
         const totalAdverts = await fetchTotal(params);
         return totalAdverts;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);
