import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { useCartStore } from "../stores/cart_store";
import { useState } from "react";
import type { Product } from "../types/product";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../components/ui/empty";

function CartPage() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const items = useCartStore((state) => state.items);
  const delteItem = useCartStore((state) => state.deleteItem);
  const substractItem = useCartStore((state) => state.substractItem);
  const addItem = useCartStore((state) => state.addItem);
  const checkOutItems = items.filter((item) => checkedItems.includes(item.id));

  //   const groupedItems = Object.values(
  //     items.reduce(
  //       (acc, item) => {
  //         if (!acc[item.id]) {
  //           acc[item.id] = {
  //             ...item,
  //             qty: 1,
  //           };
  //         } else {
  //           acc[item.id].qty += 1;
  //         }
  //         return acc;
  //       },
  //       {} as Record<string, any>,
  //     ),
  //   );

  const toggleCheck = (product: Product) => {
    setCheckedItems((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id],
    );

    // setCheckOutItems((prev) =>
    //   prev.some((item) => item.id === product.id)
    //     ? prev.filter((item) => item.id !== product.id)
    //     : [...prev, product],
    // );
  };

  return (
    <>
      <div className="min-h-screen  flex">
        <div className="flex-6 py-6 px-5">
          {items.length === 0 ? (
            <div className="h-[calc(100%-40px)] flex items-center justify-center">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <ShoppingCart />
                  </EmptyMedia>
                  <EmptyTitle>No Checkout Yet</EmptyTitle>
                  <EmptyDescription>
                    You haven&apos;t checkout any product yet.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          ) : (
            items.map((value, index) => (
              <Card
                className={`mb-2 ${
                  checkedItems.includes(value.id) ? "border-primary border" : ""
                }`}
                key={index}
              >
                {" "}
                <CardHeader>
                  <CardTitle className="flex gap-2">
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      aria-label="Decrease"
                      onClick={() => {
                        delteItem(value.id);
                      }}
                    >
                      <Trash className="text-destructive" />
                    </Button>
                    {value.title}
                  </CardTitle>
                  <CardDescription className="flex pt-2 gap-4">
                    <img src={value.image} className="size-22" />
                    <div className="flex-3 line-clamp-4 ">
                      {value.description}
                    </div>

                    <div className=" flex-1 justify-items-end ">
                      <p className="font-bold text-lg text-primary ">
                        ${value.price}
                      </p>
                      <div className="flex  w-full justify-between items-center">
                        <p>QTY</p>
                        <div className="flex items-center gap-4 ">
                          <Button
                            variant={"outline"}
                            size={"icon"}
                            aria-label="Decrease"
                            onClick={() => {
                              substractItem(value);
                            }}
                          >
                            <Minus className=" text-primary " />
                          </Button>
                          <p className=" font-bold text-primary ">
                            {value.qty}
                          </p>
                          <Button
                            variant={"outline"}
                            size={"icon"}
                            aria-label="Decrease"
                            onClick={() => {
                              addItem(value);
                            }}
                          >
                            <Plus className="text-primary" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex  w-full justify-between items-center mt-2">
                        <p>Total</p>

                        <p className="font-bold text-lg text-primary">
                          ${(value.qty! * value.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardDescription>
                  <CardAction className="flex gap-2 items-center">
                    <Checkbox
                      checked={checkedItems.includes(value.id)}
                      onCheckedChange={() => toggleCheck(value)}
                      className="border-primary"
                    />
                  </CardAction>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
        <div className="flex-2 sticky top-16 h-[calc(100vh-4rem)] shadow-[-8px_0_12px_-6px_rgba(0,0,0,0.15)] px-10 py-5">
          <h2 className="font-medium mb-4">
            Checkout ({checkOutItems.length})
          </h2>

          {checkOutItems.length === 0 ? (
            <div className="h-[calc(100%-40px)] flex items-center justify-center">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <ShoppingCart />
                  </EmptyMedia>
                  <EmptyTitle>No Checkout Yet</EmptyTitle>
                  <EmptyDescription>
                    You haven&apos;t checkout any product yet.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          ) : (
            <div className="flex flex-col h-[calc(100%-40px)]">
              {/* area yang bisa scroll */}
              <div className="flex-1 overflow-y-auto pr-2">
                {checkOutItems.map((value, index) => (
                  <div
                    className="flex justify-between mb-2 items-center"
                    key={index}
                  >
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      aria-label="Remove"
                      className="mr-2"
                      onClick={() => toggleCheck(value)}
                    >
                      <Minus className="text-destructive" />
                    </Button>
                    <p className="line-clamp-2 text-sm text-muted-foreground flex-3">
                      {value.title}
                    </p>
                    <p className="flex-1 justify-end flex ">
                      ${(value.qty! * value.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* area tetap di bawah */}
              <hr />

              <div className="flex w-full justify-between items-center my-2">
                <p>Total</p>

                <p className="font-bold text-lg text-primary">
                  $
                  {checkOutItems
                    .reduce((total, item) => total + item.qty! * item.price, 0)
                    .toFixed(2)}
                </p>
              </div>

              <Button className="w-full">
                Checkout
                <ShoppingCart />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
