import { configureStore } from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./adverts/advertsSlice";
import { filterReducer } from "./adverts/filterSlice";

const advertsPersistConfig = {
   key: "favorites",
   storage,
   whitelist: ["favorites"],
};

export const store = configureStore({
   reducer: {
      adverts: persistReducer(advertsPersistConfig, advertsReducer),
      filter: filterReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
