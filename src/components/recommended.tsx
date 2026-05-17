import model5 from "@/assets/model5.jpg";
import { Button } from "./ui/button";
import ProductCardRecomended from "./product_card_recommended";
import { ShoppingCart } from "lucide-react";

function Recommended() {
  return (
    <>
      <div className="h-screen relative mt-10">
        <img src={model5} className="w-full h-full  absolute object-cover" />

        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex sm:flex-col lg:flex-row justify-between px-10 items-center h-full gap-10 ">
          {/* kiri */}
          <div className=" w-full sm:flex-col  sm:justify-center sm:mt-5 ">
            <h1 className="text-5xl font-extralight text-white line-clamp-5 max-w-xl sm:max-w-lg md:max-w-lg mb-10">
              All you need for doing your activity.
            </h1>
            <Button variant="outline" size="lg">
              Add all to cart
              <ShoppingCart />
            </Button>
          </div>

          {/* kanan */}
          <div className="w-full justify-center items-center h-full flex ">
            <ProductCardRecomended />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommended;
