import ProductCard from "./product_card";

function Shop() {
  return (
    <section
      id="shop"
      className="scroll-mt-24 px-4 md:px-8 lg:px-10 mt-12 lg:mt-20"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between">
        {/* Kiri */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            [THE COLLECTION]
          </h2>
        </div>

        {/* Kanan */}
        <div className="flex flex-col flex-1">
          <h2 className="font-bold text-right lg:text-right">
            ~[PHILOSOPHY]~
          </h2>

          <p className="mt-3 text-sm md:text-base text-right lg:text-right font-light leading-relaxed">
            We believe fashion is more than clothing—it is a form of
            self-expression. Our collections are designed to combine comfort,
            quality, and timeless style, empowering you to feel confident and
            authentic every day.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <ProductCard />
      </div>
    </section>
  );
}

export default Shop;
