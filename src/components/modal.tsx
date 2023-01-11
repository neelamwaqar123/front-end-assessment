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
import ProductSize, { ProductProperty } from "./productSize";
import productDetails from "../productDetails.json";
import { useEffect, useState } from "react";

export interface Size {
  price: string;
  status: string;
  variant_id: string;
}

interface SizeObject {
  [key: string]: Size | undefined;
}

export interface SolidChild {
  size: SizeObject[];
  images: string[];
}
export type Solid = [SolidChild];

function ContentModal() {
  const [selectedSize, setSelectedSize] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    productDetails?.solid[0].images[0]
  );
  const { onOpen, onClose, isOpen } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    let firstActive =
      productDetails &&
      productDetails.solid.map((solid: SolidChild) => {
        return solid.size.find((size) =>
          Object.keys(size).filter((key) => size[key]!.status === "Active")
        );
      });

    console.log("first activee", firstActive);
    const active = firstActive[0] as SizeObject;
    let size = Object.keys(active)[0];
    let price = active && active[size]?.price;
    setSelectedSize(size);
    price && setPrice(price);
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent maxW="1000px" h="500px">
          <ModalBody
            p="20px"
            display="flex"
            flexDirection={{
              lg: "row",
            }}
            border="1px solid black"
            h="inherit"
          >
            <Box
              className="left"
              display="flex"
              w="650px"
              h="100%"
              flexDirection={{
                lg: "row",
              }}
            >
              <Box
                flexDirection={{
                  lg: "column",
                }}
                maxH="500px"
                w="150px"
                overflow="auto"
              >
                {productDetails &&
                  productDetails?.solid.map((solid: SolidChild) =>
                    solid.images.map((img: string, index: number) => (
                      <ProductImage
                        src={img}
                        index={index}
                        setSelectedImage={setSelectedImage}
                      />
                    ))
                  )}
              </Box>
              <Box
                className="product-img"
                w="550px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={selectedImage}
                  alt="Dan Abramov"
                  w="480px"
                  h="100%"
                />
              </Box>
            </Box>
            <Box className="right" h="100%" w="350px">
              <Box
                className="content"
                display="flex"
                flexDirection={{
                  lg: "column",
                }}
                mx="10px"
              >
                <ProductInfo text="ULTRA" headingType="main" isBold={true} />
                <ProductInfo
                  text="Super Soft"
                  headingType="sub"
                  isBold={true}
                />
                <ProductInfo text="Boxer Brief/Multi Havana" />
                <ProductInfo text={price} headingType="price" isBold={true} />
              </Box>
              <Box
                className="actions"
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
                  {productDetails &&
                    productDetails?.solid.map((solid: any) =>
                      solid.size?.map(
                        (size: ProductProperty, index: number) => (
                          <ProductSize
                            size={Object.keys(size)[0]}
                            price={Object.values(size)[0]?.price}
                            index={index}
                            setSelectedSize={setSelectedSize}
                            setPrice={setPrice}
                            active={Object.keys(size)[0] === selectedSize}
                          />
                        )
                      )
                    )}
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
