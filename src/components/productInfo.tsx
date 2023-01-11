import React from "react";
import { Text } from "@chakra-ui/react";

interface ProductInfoProps {
  text: string;
  headingType?: string;
  isBold?: boolean;
}
function ProductInfo(props: ProductInfoProps) {
  const { text, headingType, isBold } = props;

  return (
    <Text
      mt={text === "price" ? "10px" : "2px"}
      fontSize={
        headingType === "main"
          ? "35px"
          : headingType === "sub"
          ? "18px"
          : headingType === "price"
          ? "22px"
          : "14px"
      }
      as={isBold ? "b" : "samp"}
    >
      {headingType === "price" ? `$${text}` : text}
    </Text>
  );
}
export default ProductInfo;
