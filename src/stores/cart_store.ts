import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";
import { Value } from "@radix-ui/react-select";

type cartStore = {
  items: Product[];
  addItem: (product: Product) => void;
  substractItem: (product: Product) => void;
  deleteItem: (id: number) => void;
};

export const useCartStore = create<cartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product: Product) => {
        set((state) => {
          const existing = state.items.find((items) => items.id === product.id);

          if (existing) {
            return {
              items: state.items.map((value) =>
                value.id === product.id
                  ? {
                      ...value,
                      qty: value.qty! + 1,
                    }
                  : value,
              ),
            };
          }

          return {
            items: [...state.items, { ...product, qty: 1 }],
          };
        });
      },
      substractItem: (product: Product) => {
        set((state) => {
          const existing = state.items.find((item) => item.id === product.id);

          if (!existing) {
            return state;
          }

          if ((existing.qty ?? 0) <= 1) {
            return {
              items: state.items.filter((item) => item.id !== product.id),
            };
          }

          return {
            items: state.items.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    qty: (item.qty ?? 0) - 1,
                  }
                : item,
            ),
          };
        });
      },
      deleteItem: (id: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "add-cart",
    },
  ),
);
