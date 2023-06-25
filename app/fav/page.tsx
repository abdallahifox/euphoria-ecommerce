'use client'
import React from "react";
import { FavoriteItem, NoCart } from "../Components";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../store/store";

function FavoritPage() {
  const {favoriteList} = useSelector((state:RootState)=>state.favoriteSlice)
  const favoriteKeys = Object.keys(favoriteList)
  console.log(favoriteKeys)
  return (
    <div className="appContainer h-full ">
      <h1 className="relative mx-4 mb-4 text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        Favorite - Products
      </h1>
      {favoriteKeys.length === 0 && <NoCart/>}
      {favoriteKeys.length > 0 && favoriteKeys.map(item => {
        return (
          <FavoriteItem key={item} favoriteItem={favoriteList[item]}/>
        )
      }) }
    </div>
  );
}

export default FavoritPage;
