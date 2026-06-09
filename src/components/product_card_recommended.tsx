import type { Product } from "../types/product";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProductCardRecomendedProps {
  data: Product[];
}

function ProductCardRecomended({ data }: ProductCardRecomendedProps) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center mt-5 items-center ">
        {data.map((element, index) => {
          return (
            <Card className="lg:w-60 sm:w-50 max-w-md rounded" key={index}>
              <img
                // height={50}
                // width={100}
                className="p-6 lg:h-75 sm:h-55"
                src={element.image}
                alt={element.title}
              />
              <CardHeader>
                <CardTitle className="line-clamp-2">{element.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  ${element.price}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default ProductCardRecomended;
