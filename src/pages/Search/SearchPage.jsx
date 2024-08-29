import { useLocation } from "react-router";
import { useProductByQuery } from "../../services/api/useProductByQuery";
import PathComponent from "../../components/utilites/path";
import ProductGrid from "../../components/Product/ProductGrid";
import Loading from "../../components/Loading/Loading";
import NotFoundPage from "../NotFound/NotFoundPage";
export default function SearchPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query");
  const captlize = query[0].toUpperCase() + query.slice(1);
  const { data, isLoading } = useProductByQuery(query);
  if (isLoading) return <Loading />;
  if(data.length === 0){
    return <NotFoundPage/>
  }
  return (
    <section className="pt-[80px] container mx-auto pb-[140px]">
      <PathComponent prev={"Search"} path={captlize} />
      <div className="pt-[20px]">
        <ProductGrid data={data} isLoading={isLoading} />
      </div>
    </section>
  );
}
