"use client";
import React, { useEffect } from "react";
import { CartItem, NoCart } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { cartActions } from "../store/CartSlice/CartSlice";
function Cart() {
  const { cartList, total } = useSelector(
    (state: RootState) => state.cartSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.totalPrice());
  }, [total, cartList]);
  return (
    <div className="appContainer h-full">
      <h1 className="relative mx-4 mb-4 text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        Cart - Items
      </h1>

      {cartList.length === 0 && <NoCart />}
      {cartList.length > 0 &&
        cartList.map((prod) => {
          return (
            <div key={prod.id}>
              <CartItem prodDetails={prod} />
            </div>
          );
        })}
      {total > 0 && (
        <div className="mt-4 flex justify-center sm:justify-end">
          <div className="mx-8 flex flex-col gap-y-4">
            <span>Total: {total} EGP</span>
            <hr className="w-[85%]" />
            <button className="mt-8 bg-primary px-4 py-2 text-white hover:bg-dark-gray">
              Process To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
