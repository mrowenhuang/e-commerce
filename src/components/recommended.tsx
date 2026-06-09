import model5 from "@/assets/model5.jpg";
import { Button } from "./ui/button";
import ProductCardRecomended from "./product_card_recommended";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../stores/cart_store";
import type { Product } from "../types/product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const data: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
    qty: 1,
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: {
      rate: 3.8,
      count: 679,
    },
    qty: 1,
  },

  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: {
      rate: 3.6,
      count: 145,
    },
    qty: 1,
  },
];

function Recommended() {
  const addItem = useCartStore((state) => state.addItem);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const addAllToCart = () => {
    const acc = localStorage.getItem("acc");

    if (!acc) {
      setOpenAlert(true);
      return;
    }
    data.forEach((element) => {
      addItem(element);
    });
  };

  return (
    <>
      <section className="mt-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          [THE RECOMMENDED]
        </h2>

        <div className="relative min-h-screen">
          {/* Background */}
          <img
            src={model5}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 px-4 md:px-8 lg:px-10 py-10 min-h-screen">
            {/* Kiri */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white max-w-xl mx-auto lg:mx-0">
                All you need for doing your activity.
              </h1>

              <Button
                variant="outline"
                size="lg"
                className="mt-8"
                onClick={addAllToCart}
              >
                Add all to cart
                <ShoppingCart />
              </Button>
            </div>

            {/* Kanan */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <ProductCardRecomended data={data} />
            </div>
          </div>
        </div>
      </section>

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
              size={undefined}
            >
              Sign In
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Recommended;
