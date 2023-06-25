"use client";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
function LoadingSpinner() {
  return (
    <div className="grid place-items-center h-[100vh] bg-slate-300/20">
      <div className="flex h-full w-full items-center justify-center">
        <HashLoader color="#8A33FD" loading speedMultiplier={2} />
      </div>
    </div>
  );
}

export default LoadingSpinner;
