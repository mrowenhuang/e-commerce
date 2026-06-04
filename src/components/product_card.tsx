import { HeartIcon, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types/product";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Toggle } from "./ui/toggle";
import { useCartStore } from "../stores/cart_store";

function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setProducts([]);
        console.error("error", error);
      });
  }, []);

  const onAddToCart = (product: Product) => {
    console.log(product);

    addItem(product);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center mt-5">
        {products.map((data, index) => {
          return (
            <Card className="w-60 max-w-md" key={index}>
              <img
                // height={50}
                // width={100}
                className="p-6 h-75"
                src={data.image}
                alt={data.title}
              />
              <CardHeader>
                <CardTitle className="line-clamp-2">{data.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {data.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-between">
                <Toggle size="lg">
                  <HeartIcon className="group-data-[state=on]/toggle:fill-red-400 group-data-[state=on]/toggle:stroke-red-400" />
                </Toggle>
                <Button
                  type={"submit"}
                  onClick={() => {
                    onAddToCart(data);
                  }}
                >
                  <ShoppingCart /> Add To Cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
