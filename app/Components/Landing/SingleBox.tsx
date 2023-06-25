'use client'
import Link from "next/link";
import React from "react";
import { favoriteType, singleBoxPropsTypes } from "@/app/shared/types";
import { useSelector,useDispatch } from "react-redux";
import { favoriteActions } from "@/app/store/FavoriteSlice/Favorite";
import { RootState } from "@/app/store/store";
import {AiOutlineHeart} from 'react-icons/ai'
import {AiTwotoneHeart} from 'react-icons/ai'

function SingleBox({
  explore,
  icon,
  imgURL,
  title,
  price,
  heart,
  brand,
  id
}: singleBoxPropsTypes) {

  const {favoriteList} = useSelector((state:RootState)=>state.favoriteSlice)
  const dispatch = useDispatch()

  const favoriteHandler = ()=>{
      const favItem:favoriteType = {
        id:id.toString(),
        title,
        price,
        image:imgURL
      }

      dispatch(favoriteActions.onFavoriteHandler(favItem))
  }
  return (
    <div className="mt-4 flex flex-col items-start justify-start gap-y-3">
      <div className="relative flex w-full items-start justify-center">
        <Link href={`/product/${id?.toString()}`}>
          <img
            src={imgURL}
            alt="Arrival1"
            className="h-[370px] w-[282px] cursor-pointer object-contain transition hover:translate-y-1"
          />
        </Link>

        {heart && (
          <button onClick={()=>favoriteHandler()} className="absolute right-8 top-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-primary hover:bg-purple-800">
           {!favoriteList[id] && <AiOutlineHeart size={20} fill="#fff"/>}
           {favoriteList[id] && <AiTwotoneHeart size={20} fill="#fff"/>}
          </button>
        )}
      </div>
      <Link href="/" className="w-full">
        <div className="flex w-full items-center justify-between mx-0">
          <p className="text-xl text-dark-gray">{title}</p>
          {icon && (
            <img src="/icons/arrow/right.svg" alt="icon" role="button" />
          )}
          {price && <span className="text-xl text-dark-gray">{price}</span>}
        </div>
        {explore && <span className="text-sm text-gray">Explore Now</span>}
        {brand && <span className="text-sm text-gray">{brand}</span>}
      </Link>
    </div>
  );
}

export default SingleBox;
