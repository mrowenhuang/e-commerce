import ProductCard from "./product_card";

function Shop() {
  return (
    <>
      <div className="mx-10 justify-items-center my-10">
        <hr className="border-primary border w-full" />
        <h2 className="text-2xl my-3">Collection</h2>
        <hr className="border-primary border w-full" />
      </div>
      <ProductCard />
    </>
  );
}

export default Shop;
