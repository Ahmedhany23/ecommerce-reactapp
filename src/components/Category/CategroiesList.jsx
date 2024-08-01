import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
export default function CategroiesList() {
  return (
    <div className="max-w-[217px] w-full">
      <ul className="flex flex-col gap-4">
        <li>
          <Link to='/categories/woman' className="flex justify-between items-center">
          <p> Woman’s Fashion</p>
          <span><IoIosArrowForward /></span>
         </Link>
        </li>
        <li>
          <Link to='/categories/men' className="flex justify-between items-center">
          <p> Men’s Fashion</p>
          <span><IoIosArrowForward /></span>
          </Link>
        </li>
        <li>
          <Link to='/categories/electronics'>Electronics</Link>
        </li>
        <li>
          <Link to='/categories/home'>Home & Lifestyle</Link>
        </li>
        <li>
          <Link to='/categories/medicine'>Medicine</Link>
        </li>
        <li>
          <Link to='/categories/sports'>Sports & Outdoor</Link>
        </li>
        <li>
          <Link to='/categories/groceries'>Groceries & Pets</Link>
        </li>
        <li>
          <Link to='/categories/health'>Health & Beauty</Link>
        </li>
      </ul>
    </div>
  );
}
