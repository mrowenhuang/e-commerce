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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  limit?: number;
}

function ProductCard({ limit }: ProductCardProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const addItem = useCartStore((state) => state.addItem);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

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
    const acc = localStorage.getItem("acc");

    if (!acc) {
      setOpenAlert(true);
      return;
    }

    addItem(product);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center mt-5">
        {(limit ? products.slice(0, limit) : products).map((data, index) => {
          return (
            <Card className="w-60 overflow-hidden flex flex-col" key={index}>
              <img
                className="p-6 h-75 object-contain"
                src={data.image}
                alt={data.title}
              />

              <CardHeader className="flex-1">
                <CardTitle className="line-clamp-2">{data.title}</CardTitle>

                <CardDescription className="line-clamp-2">
                  {data.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className=" flex justify-between px-4 py-3 bg-input">
                <Toggle size="lg">
                  <HeartIcon className="group-data-[state=on]/toggle:fill-red-400 group-data-[state=on]/toggle:stroke-red-400" />
                </Toggle>

                <Button onClick={() => onAddToCart(data)}>
                  <ShoppingCart />
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Dialog Login */}
      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login Required</AlertDialogTitle>

            <AlertDialogDescription>
              You must sign in before adding products to your cart.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setOpenAlert(false)}>
              Cancel
            </Button>

            <AlertDialogAction
              onClick={() => navigate("/signin")}
              variant={undefined}
              size={"default"}
            >
              Sign In
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ProductCard;
