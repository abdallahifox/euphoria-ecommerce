"use client";
import { FilterComponent, LoadingSpinner, SingleBox } from "@/app/Components";
import React, { useCallback, useEffect, useState } from "react";
import { Products } from "@/app/Helpers/Constant";
import { ProductType } from "@/app/shared/types";

function WomensPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [newProducts, setNewProducts] = useState("new");
  const [WomensProducts, setWomensProducts] = useState<ProductType[]>([]);

  const getNewProducts = useCallback((text: string) => {
    setNewProducts(text);
    setIsLoading(true);
    const promiseAllWomens = new Promise((resolve) => {
      setTimeout(() => {
        const AllNewWomensProducts = Products.filter((prod) => prod.category === 'womens');
        return resolve(AllNewWomensProducts);
      }, 2000);
    });

    promiseAllWomens.then((prod: any) => {
      setWomensProducts(prod);
      setIsLoading(false);
    });
  }, []);


  const getRecomendation = useCallback((text:string) => {
    setIsLoading(true)
    setNewProducts(text)
    const promiseAllRecomendation = new Promise((resolve) => {
      setTimeout(() => {
        const AllRecomendation = Products.filter((prod) => prod.recomendation);
        return resolve(AllRecomendation);
      }, 2000);
    });

    promiseAllRecomendation.then((prod: any) => {
      setWomensProducts(prod);
      setIsLoading(false);
    });
  },[])

  useEffect(() => {
    setIsLoading(true)
    const prods = new Promise((resolve) => {
      setTimeout(() => {
        const newProds = Products.filter((prod) => prod.category === "womens");
        return resolve(newProds);
      }, 2000);
    });

    prods.then((value: any) => {
      setWomensProducts(value);
      setIsLoading(false)
    });
  }, []);
  return (
    <div className="appContainer">
      <div className="sm:grid.cols-3 grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1  md:col-span-1">
          <FilterComponent />
        </div>
        <div className="col-span-2 p-4 md:col-span-3">
          <div className="flex items-center justify-between">
            <h1>Womens Clothing</h1>
            <div className="itmes-center flex gap-x-3">
              <button
                className={`${newProducts === "new" ? "text-primary" : ""}`}
                onClick={() => getNewProducts("new")}
              >
                New
              </button>
              <button
                className={`${
                  newProducts === "recomendation" ? "text-primary" : ""
                }`}
                onClick={()=>getRecomendation('recomendation')}
              >
                Recommendation
              </button>
            </div>
          </div>
          {isLoading && <LoadingSpinner />}
          {!isLoading && WomensProducts.length > 0 && (
            <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2 md:grid-cols-3">
              {WomensProducts?.map((prod) => {
                return (
                  <SingleBox
                    key={prod.id}
                    imgURL={prod.image}
                    explore={false}
                    icon={false}
                    title={prod.title}
                    heart={true}
                    price="EGP 210"
                    id={prod.id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WomensPage;
