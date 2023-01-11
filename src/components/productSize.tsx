import { Box } from "@chakra-ui/react";
import productDetails from "../productDetails.json";

export interface ProductProperty {
  price: string;
  status: string;
  variant_id: string;
}

interface ProductSizeProps {
  size: string;
  index: number;
  setSelectedSize: (url: string) => void;
  setPrice: (url: string) => void;
  price: string;
  active: boolean;
}

function ProductSize(props: ProductSizeProps) {
  const { size, index, setSelectedSize, active, setPrice, price } = props;

  return (
    <Box
      key={index}
      onClick={() => {
        setSelectedSize(size);
        setPrice(price);
      }}
      w="41px"
      h="41px"
      border="1px solid #000000"
      m="0 10px 0 0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={active ? "green" : "white"}
    >
      {size}
    </Box>
  );
}
export default ProductSize;
