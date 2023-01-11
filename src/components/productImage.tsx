import React from "react";
import { Image } from "@chakra-ui/react";

interface ProductImageProps {
  selectedImage?: boolean;
}

function ProductImage(props: ProductImageProps) {
  const { selectedImage } = props;
  return (
    <Image
      //   className="img-scroller"
      m="0 auto"
      src="https://picsum.photos/200/300"
      alt="Dan Abramov"
      w={selectedImage ? "400px" : "79px"}
      h={selectedImage ? "400px" : "79px"}
      py="5px"
    />
  );
}
export default ProductImage;
