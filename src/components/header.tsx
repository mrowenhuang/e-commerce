import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import model1 from "@/assets/model1.jpg";
import model2 from "@/assets/model2.jpg";
import model3 from "@/assets/model3.jpg";
import model4 from "@/assets/model4.jpg";
import { Button } from "./ui/button";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [model1, model2, model3, model4];

function Header() {
  // const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <>
      <div className="h-screen relative flex">
        <div className="flex flex-col flex-1 p-10 items-start justify-center relative">
          <img
            src={images[2]}
            className="max-w-85 max-h-85 w-auto h-auto absolute z-0 "
          />
          <h1 className="font-bold text-4xl z-10 ">
            Make Your Style Stand <br />
            Out with Our Unique Fashion Collection
          </h1>
          <p className="my-4 z-10 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-4 text-primary">
            Discover the latest trends and timeless classics in our fashion
            collection. From chic streetwear to elegant evening wear, we have
            something for every style and occasion. Shop now and elevate your
            wardrobe with our unique pieces.
          </p>{" "}
          <Button className=" z-10">Shop Now</Button>
        </div>
        <div className="flex flex-1 items-center justify-center relative">
          <img
            src={images[1]}
            className="max-w-85 max-h-85 w-auto h-auto absolute translate-x-35 -translate-y-50 z-10 shadow-lg rounded"
          />
          <img
            src={images[0]}
            className="max-w-145 max-h-145 w-auto h-auto absolute -translate-x-1/3 shadow-2xl rounded"
          />
          <h1 className="absolute font-bold text-4xl translate-x-40 translate-y-25 underline">
            B&W
          </h1>
          <h1 className="absolute font-bold text-4xl translate-x-65 translate-y-40 underline">
            CODAI
          </h1>
          <h1 className="absolute font-bold text-4xl -translate-x-55 -translate-y-83 underline">
            FASHION
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
