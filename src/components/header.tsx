import model1 from "@/assets/model1.jpg";
import model2 from "@/assets/model2.jpg";
import model3 from "@/assets/model3.jpg";
import model4 from "@/assets/model4.jpg";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { container, fadeItem, item } from "../lib/animation";

const images = [model1, model2, model3, model4];

function Header() {
  // const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* LEFT */}
        <motion.div
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col flex-1 p-6 md:p-10 items-center lg:items-start justify-center relative text-center lg:text-left"
        >
          <motion.h1
            variants={item}
            className="font-bold text-3xl md:text-5xl z-10 max-w-2xl"
          >
            Make Your Style Stand
            <br />
            Out with Our Unique Fashion Collection
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 z-10 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-4 max-w-xl"
          >
            Discover the latest trends and timeless classics in our fashion
            collection. From chic streetwear to elegant evening wear, we have
            something for every style and occasion.
          </motion.p>

          <motion.div variants={item}>
            <Button
              className="mt-4 z-10"
              onClick={() => {
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Shop Now
            </Button>
          </motion.div>
          <motion.img
            variants={fadeItem}
            src={images[2]}
            className="absolute z-0 w-40 md:w-56 lg:w-80 opacity-20"
            alt=""
          />
        </motion.div>

        <div className="flex flex-1 items-center justify-center relative min-h-100 lg:min-h-screen">
          <img
            src={images[0]}
            className="w-64 md:w-80 lg:w-125 object-contain rounded shadow-2xl"
            alt=""
          />

          <img
            src={images[1]}
            className=" absolute w-32 md:w-44 lg:w-64 object-contain rounded shadow-lg right-[10%] top-[10%] "
            alt=""
          />

          <h1 className=" absolute font-bold text-xl md:text-3xl lg:text-4xl top-6 right-4 underline ">
            CODAI
          </h1>

          <h1 className=" absolute font-bold text-lg md:text-2xl lg:text-4xl bottom-10 right-10 underline">
            B&W
          </h1>

          <h1 className=" absolute font-bold text-lg md:text-2xl lg:text-4xl left-4 top-4 underline ">
            FASHION
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
