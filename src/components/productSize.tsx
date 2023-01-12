import { Box } from "@chakra-ui/react";
import { ProductSizeProps } from "../interface";

function ProductSize({
  size,
  setSelectedSize,
  active,
  setPrice,
  price,
}: ProductSizeProps) {
  return (
    <Box
      onClick={() => {
        setSelectedSize(size);
        setPrice(price);
      }}
      w={["40px", "40px", "40px", "41px", "41px"]}
      h={["40px", "40px", "40px", "41px", "41px"]}
      border="1px solid #000000"
      m="5px 5px 0px 0px"
      display="flex"
      justifyContent="center"
      fontSize={["12px", "15px", "15px", "15px", "15px"]}
      alignItems="center"
      bg={active ? "black" : "white"}
      color={active ? "white" : "black"}
    >
      {size}
    </Box>
  );
}
export default ProductSize;
