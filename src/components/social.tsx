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
      <section id="social" className="scroll-mt-24">
        <div className="py-12 md:py-20 min-h-screen">
          <div className="px-4 md:px-8 lg:px-10">
            {/* Header */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between">
              <div className="flex flex-col flex-1">
                <h2 className="font-bold text-center lg:text-left">
                  ~[COMMUNITY]~
                </h2>

                <h2 className="font-light text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                  Follow our impressive Instagram for updates and promotion
                </h2>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center lg:text-right">
                [SOCIAL]
              </h2>
            </div>

            {/* Carousel */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="mt-8 md:mt-12"
              plugins={[plugin.current]}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="
                basis-[85%]
                sm:basis-1/2
                md:basis-2/3
                lg:basis-1/4
              "
                  >
                    <div
                      className={`
                  overflow-hidden
                  rounded-xl
                  ${index % 2 === 0 ? "" : "lg:mt-16"}
                `}
                    >
                      <img
                        src={image}
                        alt=""
                        className="
                    w-full
                    object-cover
                    rounded-xl
                  "
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Social;
