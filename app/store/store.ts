import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./CartSlice/CartSlice";
import favoriteSlice from "./FavoriteSlice/Favorite";
export const store = configureStore({
    reducer:{
     cartSlice,
     favoriteSlice
     
    }
})

export type RootState = ReturnType<typeof store.getState>