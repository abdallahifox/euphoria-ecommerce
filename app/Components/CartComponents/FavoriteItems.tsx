"use client";
import React from "react";
import { AiOutlineArrowRight,AiTwotoneDelete } from "react-icons/ai";
import { favoriteType } from "@/app/shared/types";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { favoriteActions } from "@/app/store/FavoriteSlice/Favorite";

function FavoriteItem({favoriteItem}:{favoriteItem:favoriteType}) {

  const dispatch = useDispatch()

  const onDeleteFavoriteHandler = ()=>{
    dispatch(favoriteActions.deleteFavorite(favoriteItem.id))
  }
  return (
    <div className="flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
      <div className="flex items-center">
        <img
          src={favoriteItem.image}
          alt="Image"
          className="h-64 w-44 object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-y-3">
        <p className="text-2xl text-dark-gray">{favoriteItem.title}</p>
        <p className="text-xl text-dark-gray">Price: {favoriteItem.price} EGP</p>
      </div>
      <div className="flex items-center gap-x-4">
        <Link href={`/product/${favoriteItem.id}`} className="flex  items-center rounded bg-primary px-6 py-2 text-white">
          Show More
          <AiOutlineArrowRight />
        </Link>
        <button onClick={onDeleteFavoriteHandler}><AiTwotoneDelete size={20}/></button>
      </div>
    </div>
  );
}

export default FavoriteItem;
