import ProductGrid from "../Product/ProductGrid";
import Button from "../utilites/Button";
import SubTitle from "../utilites/SubTitle";
import Loading from "../Loading/Loading";
export default function BestSellingProducts({ data, isLoading }) {
  if (isLoading) {
    return (
      <section className="container mx-auto  pb-[140px] px-2">
        <Loading />
      </section>
    );
  }
  return (
    <section className="container mx-auto  pb-[140px] px-2">
      <div className="flex justify-between items-end">
        <SubTitle sectionTitle={"This Month"} title={"Best Selling Products"} />
        <Button text={"View All"} />
      </div>
      <ProductGrid data={data}  startIndex={17} EndIndex={21}/>
    </section>
  );
}
