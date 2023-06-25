'use client'
import React,{useEffect,useState} from 'react'
import { FilterComponent ,LoadingSpinner, SingleBox  } from '@/app/Components';
import { Products } from "@/app/Helpers/Constant";
import { ProductType } from "@/app/shared/types";
import { useSearchParams } from 'next/navigation'

function ShopPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [mensProducts, setMensProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    setIsLoading(true)
    const prods = new Promise((resolve) => {
      setTimeout(() => {
        const newProds = Products.filter((prod) => prod);
        return resolve(newProds);
      }, 2000);
    });

    prods.then((value: any) => {
      setMensProducts(value);
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
          <h1>Euphoria-Shop</h1>
        </div>
        {isLoading && <LoadingSpinner />}
        {!isLoading && mensProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2 md:grid-cols-3">
            {mensProducts?.map((prod) => {
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
  )
}

export default ShopPage