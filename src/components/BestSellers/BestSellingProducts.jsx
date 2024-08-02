import ProductGrid from "../Product/ProductGrid";
import Button from "../utilites/Button";
import SubTitle from "../utilites/SubTitle";

export default function BestSellingProducts() {
  return (
    <section className="container mx-auto  pb-[140px] px-2">
      <div className="flex justify-between items-end">
        <SubTitle sectionTitle={"This Month"} title={"Best Selling Products"} />
        <Button text={"View All"} />
      </div>
      <ProductGrid/>
    </section>
  );
}
