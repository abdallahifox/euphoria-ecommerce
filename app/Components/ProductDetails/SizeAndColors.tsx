'use client'
import { ProductType } from '@/app/shared/types'
import React,{useCallback, useState} from 'react'
import { AiOutlineComment } from "react-icons/ai";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { cartActions } from '@/app/store/CartSlice/CartSlice';

type prodType = {
    prod?:ProductType
}

function SizeAndColors({prod}: prodType) {
    const [size,setSize] =useState<string|undefined>(prod?.sizes[0])
    const [choseColor,setChoseColor] = useState<string|undefined>(prod?.colors[0])

    const dispatch = useDispatch()


    const addToCartHandler = useCallback((prod?:ProductType)=>{
      const newItem = {
        id:prod?.id,
        image:prod?.image,
        price:prod?.price,
        color:choseColor,
        size:size,
        brand:prod?.brand,
        title:prod?.title,
        qty:1
      }
      console.log(size,choseColor,newItem)
      dispatch(cartActions.addProductToCart(newItem))
    },[size,choseColor])
  return (
    <div className="p-4">
    <div className="flex flex-col items-start gap-y-4">
      <h1 className="text-2xl text-dark-gray md:text-4xl">
        {prod?.title}
      </h1>
      <div className="flex flex-row gap-x-2">
        <p>{prod?.rate}</p>

        <p className="flex items-center gap-x-2 text-sm text-gray">
          <AiOutlineComment size={20} fill="#000" />
          <span>{prod?.comments.length} Comment</span>
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-y-2 mt-4">
      <p className="text-dark-gray text-xl">Sizes &gt;</p>

        <div className="flex flex-row gap-x-4">
          {prod?.sizes.map((s,i) => {
            return (
              <p key={i} className={`p-4 border uppercase cursor-pointer hover:bg-primary hover:text-white transition rounded ${size === s ? 'bg-dark-gray text-white' : 'text-dark-gray'}`} onClick={()=>setSize(s)}>{s}</p>
            )
          })}
        </div>
    </div>

    <div className="flex flex-col gap-y-2 mt-4">
      <p className="text-dark-gray text-xl">Choose Your Color &gt;</p>

        <div className="flex flex-row gap-x-4">
          {prod?.colors.map((s,i) => {
            return (
              <p key={i} className={`w-2 h-2 p-4 border cursor-pointer rounded-full ${choseColor === s ? 'border' : 'border-none'}`} onClick={()=>setChoseColor(s)} style={{background:s}}/>
            )
          })}
        </div>
    </div>

    <div className="flex flex-row gap-x-4 mt-4">
      <button onClick={() => addToCartHandler(prod)} className='px-6  rounded py-2 bg-primary text-white flex items-center'>Add To Cart
      <AiOutlineShoppingCart/>
      </button>
      <p className='border px-5 rounded py-2 '>EGP {prod?.price}</p>
    </div>
  </div>
  )
}

export default SizeAndColors