import React from "react";
import { Link } from "react-router-dom";
export default function TopHeader() {
  return (
    <div className=" bg-background-2 ">
      <div className="container mx-auto hidden sm:flex sm:flex-col md:flex-row items-center justify-between gap-10 py-4 ">
        <div></div>
        <div className="">
          <p className=" text-text-1 font-normal text-sm font-poppins">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link
              className="ml-1 text-text-1 text-sm font-semibold decoration-white underline font-poppins"
              to="/products"
            >
              ShopNow
            </Link>
          </p>
        </div>
        <div className="grid place-items-center relative w-[100px]">
          <select className=" row-start-1 col-start-1 bg-background-2 text-text-1 ">
            <option value="EN">English</option>
            <option value="AR">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
}
