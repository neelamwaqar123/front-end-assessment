import React from "react";
import { Image } from "@chakra-ui/react";

interface ProductImageProps {
  selectedImage?: boolean;
  src: string;
  index: number;
  setSelectedImage: (url: string) => void;
}

function ProductImage(props: ProductImageProps) {
  const { selectedImage, src, index, setSelectedImage } = props;
  return (
    <Image
      onClick={() => setSelectedImage(src)}
      m="0 auto"
      src={src}
      key={index}
      alt="Dan Abramov"
      w={selectedImage ? "400px" : "90px"}
      h={selectedImage ? "400px" : "90px"}
      py={index === 0 ? "0px" : "5px"}
    />
  );
}
export default ProductImage;
