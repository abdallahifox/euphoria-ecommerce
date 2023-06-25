"use client";
import React, { useEffect, useState } from "react";

import { Products } from "@/app/Helpers/Constant";
import { ProductType } from "@/app/shared/types";

import {
  LoadingSpinner,
  ProductGellary,
  SizeAndColors,
} from "@/app/Components";
import { notFound } from "next/navigation";

type paramsTypes = {
  params: {
    id: string;
  };
};

function ProductDetails({ params }: paramsTypes) {
  const [prod, setProd] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState(false);
  const [description,setDescription] = useState('description')

  useEffect(() => {
    setIsLoading(true);
    const productPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
        const prodId = Products.find((prod) => prod.id === parseInt(params.id));
          
          return resolve(prodId);
  
      }, 2000);
    });
    productPromise.then((data: any) => {
      if(!data) { 
        window.location.href = '/'
      }
      setProd(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="appContainer">
      {isLoading && <LoadingSpinner />}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {!isLoading && <ProductGellary mainImage={prod?.image}  images={prod?.galleryImage} />}
        {!isLoading && <SizeAndColors prod={prod} />}
        <div className="mt-8">
          <h1 className="relative text-3xl text-dark-gray">
            <span className="text-bold absolute -left-4 text-primary ">|</span>
            Product Description
          </h1>

          <div className="mt-4 flex flex-row gap-x-4">
            <button className={`${description === 'description' ? 'border-purple-500 border-b-4':''}`} onClick={()=>setDescription('description')}>Description</button>
            <button className={`${description === 'comments' ? 'border-purple-500 border-b-4':''}`} onClick={()=>setDescription('comments')}>Comments</button>
          </div>
           {description ==='description' && <p className="mt-8 text-dark-gray">{prod?.description}</p>}
           {prod?.comments.length === 0 && description === 'comments' && <p className="mt-8 text-dark-gray"> No Comment yet.</p>}
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
