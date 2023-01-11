import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import ProductImage from "./productImage";
import ProductInfo from "./productInfo";
import ProductSize from "./productSize";
function ContentModal() {
  const { onOpen, onClose, isOpen } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent maxW="1000px" bg="black" h="500px">
          <ModalBody
            p="20px"
            display="flex"
            flexDirection={{
              lg: "row",
            }}
            bg="red"
            h="inherit"
          >
            <Box
              className="left"
              bg="blue"
              display="flex"
              w="650px"
              h="100%"
              flexDirection={{
                lg: "row",
              }}
            >
              <Box
                bg="pink"
                flexDirection={{
                  lg: "column",
                }}
                maxH="500px"
                w="150px"
                overflow="auto"
              >
                <ProductImage />
                <ProductImage /> <ProductImage />
                <ProductImage /> <ProductImage />
                <ProductImage /> <ProductImage />
                <ProductImage /> <ProductImage />
                <ProductImage /> <ProductImage />
                <ProductImage /> <ProductImage />
                <ProductImage />
              </Box>
              <Box
                className="product-img"
                w="550px"
                bg="yellow"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  alt="Dan Abramov"
                  w="480px"
                  h="100%"
                />
              </Box>
            </Box>
            <Box className="right" h="100%" bg="tomato" w="350px">
              <Box
                className="content"
                display="flex"
                flexDirection={{
                  lg: "column",
                }}
                bg="orange"
                mx="10px"
              >
                <ProductInfo text="ULTRA" headingType="main" isBold={true} />
                <ProductInfo
                  text="Super Soft"
                  headingType="sub"
                  isBold={true}
                />
                <ProductInfo text="Boxer Brief/Multi Havana" />
                <ProductInfo text="$36.00" headingType="price" isBold={true} />
              </Box>
              <Box
                className="actions"
                bg="purple"
                mx="10px"
                pt="20px"
                display="flex"
                justifyContent="flex-start"
                h="320px"
                flexDirection={{
                  lg: "column",
                }}
              >
                <Text fontSize="18px" as="b">
                  Size
                </Text>
                <Box className="sizes" display="flex">
                  <ProductSize />
                  <ProductSize />
                  <ProductSize />
                  <ProductSize />
                  <ProductSize />
                  <ProductSize />
                </Box>
                <Box mt="auto" display="flex" justifyContent="center">
                  <Button
                    as="button"
                    h="50px"
                    w="100%"
                    color="#ffffff"
                    background="red"
                    borderRadius="0px"
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContentModal;
