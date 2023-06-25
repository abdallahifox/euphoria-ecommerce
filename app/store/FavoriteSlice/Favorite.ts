import { favoriteType } from "@/app/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState: {
    favoriteList: {} as any,
  },
  reducers: {
    onFavoriteHandler(state, action: PayloadAction<favoriteType>) {
      if (!state.favoriteList[action.payload.id]) {
        state.favoriteList[action.payload.id] = action.payload;
        toast("your item has been added", {
          icon: "👍",
          theme: "dark",
          autoClose: 2000,
          type: "success",
        });
      } else {
        delete state.favoriteList[action.payload.id];
        toast("your item has been removed", {
          icon: "👍",
          theme: "dark",
          autoClose: 2000,
          type: "success",
        });
      }
    },

    //delete
    deleteFavorite(state, action: PayloadAction<string>) {
      delete state.favoriteList[action.payload];
      toast("your item has been removed", {
        icon: "👍",
        theme: "dark",
        type: "success",
        autoClose: 2000,
      });
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
