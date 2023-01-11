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
      w={["35px", "40px", "41px", "41px"]}
      h={["35px", "40px", "41px", "41px"]}
      border="1px solid #000000"
      m={["5px", "5px", "5px", "5px"]}
      display="flex"
      justifyContent="center"
      fontSize={["12px", "15px", "18px", "18px"]}
      alignItems="center"
      bg={active ? "black" : "white"}
      color={active ? "white" : "black"}
    >
      {size}
    </Box>
  );
}
export default ProductSize;
