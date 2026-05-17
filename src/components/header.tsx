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
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <>
      <div className="h-screen relative">
        <Carousel className="h-full" plugins={[plugin.current]}>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselContent className="h-screen">
            {images.map((data, index) => (
              <CarouselItem key={index} className="h-full relative">
                {/* 🔥 gambar full */}
                <img src={data} className="w-full h-full object-cover" />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* text */}
                {index === 0 && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-20 z-10">
                    <h1 className="text-5xl font-bold text-primary-foreground">
                      Elevate Your Style
                    </h1>
                    <p className="text-xl line-clamp-2 max-w-xl py-3 text-primary-foreground">
                      Discover fashion that reflects your individuality,
                      enhances your confidence, and defines your presence in
                      every moment.
                    </p>
                    <Button variant="outline">Shop Now</Button>
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </>
  );
}

export default Header;
