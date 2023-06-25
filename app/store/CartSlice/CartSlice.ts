import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { cartItemType } from "@/app/shared/types";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartList: [] as cartItemType[],
    total:0
  },
  reducers: {
    addProductToCart(state, action: PayloadAction<cartItemType>) {
      const findId = state.cartList.findIndex(
        (prod) => prod.id === action.payload.id
      );

      if (findId === -1) {
        state.cartList.push({
          ...action.payload,
        });
        toast("Your Item has been Added", {
          icon: "👍",
          theme: "dark",
          type: "success",
        });
      } else {
        state.cartList[findId].qty++;
        toast("Your Quantity incress by 1", {
          icon: "👍",
          theme: "dark",
          autoClose: 2000,
          type: "success",
        });
      }

    },

    //Decrease
    descreaseCartItem(state, action: PayloadAction<number>) {
      const findId = state.cartList.findIndex(
        (prod) => prod.id === action.payload
      );
      state.cartList[findId].qty--;
      if (state.cartList[findId].qty < 1) {
        state.cartList.splice(findId, 1);
      }
    },

    //incrase
    increaseCartItem(state, action: PayloadAction<number>) {
      const findId = state.cartList.findIndex(
        (prod) => prod.id === action.payload
      );

      state.cartList[findId].qty++;
    },

    //delete
    deleteCartItem(state, action: PayloadAction<number>) {
      const findId = state.cartList.findIndex(
        (prod) => prod.id === action.payload
      );

      state.cartList.splice(findId, 1);

      toast("Your Item Has Been Deleted", {
        icon: "👍",
        type: "success",
        autoClose: 2000,
        theme: "dark",
      });
    },

    //total
    totalPrice(state){
        const toatal = state.cartList.reduce((acc,prevItem)=>{
            if(prevItem.price){
                acc += prevItem.price * prevItem.qty  
            }
              return acc
        },0)

        state.total = toatal
    }
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
