import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  let location = useLocation();
  let path = location.pathname.slice(1);
  let pathname = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="container mx-auto pt-20 pb-[140px] font-poppins">
      <p className="text-black/50 text-sm font-normal px-4 flex gap-2">
        {pathname} <span>/</span>
        <span className="text-text-3 text-opacity-100">404 Error</span>
      </p>
      {/* Not Found */}
      <div className="flex flex-col justify-center items-center gap-10 pt-[140px]">
        <h1 className="font-medium font-inter text-4xl sm:text-6xl md:text-7xl xl:text-[6.875rem] text-text-3">
          404 Not Found
        </h1>
        <p className="font-normal text-xs  sm:text-base text-text-3">
          Your visited page not found. You may go home page.
        </p>
        <button className="btn-1">
          <Link to="/">Back to home page</Link>
        </button>
      </div>
    </div>
  );
}
