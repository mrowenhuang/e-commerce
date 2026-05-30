import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";
import ig4 from "@/assets/ig4.jpg";
import ig5 from "@/assets/ig5.jpg";
import ig6 from "@/assets/ig6.jpg";
import ig7 from "@/assets/ig7.jpg";
import ig8 from "@/assets/ig8.jpg";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const images = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8];

function Social() {
  const plugin = React.useRef(
    Autoplay({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <>
      <div className="py-10 h-screen">
        <div className="h-full px-10">
          <h1 className="max-w-xl line-clamp-3 text-4xl font-extralight">
            Follow our impressive Instagram for updates and promotion
          </h1>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="mt-12"
            plugins={[plugin.current]}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <div className={index % 2 === 0 ? "" : "mt-16"}>
                    <img src={image} alt="" className="rounded w-full" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Social;
