"use client";
import React, { useCallback } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { cartItemType } from "@/app/shared/types";
import { useDispatch } from "react-redux";
import { cartActions } from "@/app/store/CartSlice/CartSlice";
function CartItem({ prodDetails }: { prodDetails: cartItemType }) {
  const dispatch = useDispatch()

  const decreaseHandler = useCallback((id?:number) => {
      if(id){
        dispatch(cartActions.descreaseCartItem(id))
      }
  },[])

  const increaseHandler = useCallback((id?:number)=>{
    if(id){
      dispatch(cartActions.increaseCartItem(id))

    }
  },[])

  const deleteHandler = useCallback((id?:number)=>{
    if(id){
      dispatch(cartActions.deleteCartItem(id))
    }
  },[])
  return (
    <div className="flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
      <div className="flex items-center">
        <img
          src={prodDetails?.image}
          alt="Image"
          className="h-64 w-44 object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-y-3">
        <p className="text-2xl text-dark-gray">{prodDetails?.title}</p>
        <p className="text-sm text-gray">
          Color: <div className= "rounded-full w-2 h-2 inline-block" style={{background:prodDetails.color}}></div> <br /> Size:{" "}
          {prodDetails?.size}
        </p>
        <p className="text-xl text-dark-gray">Price:{prodDetails?.price} EGP</p>
      </div>
      <div className="flex items-center gap-x-4">
        <button onClick={()=>decreaseHandler(prodDetails.id)} className="rouned border px-4 py-2 hover:bg-slate-900 hover:text-white">
          -
        </button>
        <span>{prodDetails?.qty}</span>
        <button onClick={()=>increaseHandler(prodDetails.id)} className="rouned border px-4 py-2 hover:bg-slate-900 hover:text-white">
          +
        </button>
        <button onClick={()=>deleteHandler(prodDetails.id)}>
          <AiTwotoneDelete size={20} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
