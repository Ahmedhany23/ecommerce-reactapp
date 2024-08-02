import React from "react";
import { Link } from "react-router-dom";

export default function CategroiesCard({ CategorieImg, CategorieName }) {
  return (
    <Link
      to={`/category/${CategorieName && CategorieName.toLowerCase()}`}
      className="mx-auto w-[170px] h-[145px] py-[25px] flex flex-col items-center justify-center gap-4 border rounded border-secondary-1 group hover:border-none hover:bg-secondary-3 transtion duration-200 "
    >
      <img
        src={CategorieImg}
        alt={CategorieName}
        className="w-[56px] h-[56px]"
      />
      <p className="group-hover:text-text-1">{CategorieName}</p>
    </Link>
  );
}
