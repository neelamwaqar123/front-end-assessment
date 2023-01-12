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
import { productDummyData } from "../content";
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
    productDummyData?.solid[0].images[0]
  );
  const { onOpen, onClose, isOpen } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    let firstActive =
      productDummyData &&
      productDummyData.solid.map((solid: SolidChild) => {
        return solid.size.find((size) =>
          Object.keys(size).filter((key) => size[key]!.status === "Active")
        );
      });

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
        <ModalContent
          maxW={["75vw", "740px", "1000px", "1000px"]}
          h={["auto", "auto", "500px", "500px", "500px"]}
        >
          <ModalBody
            p={["20px", "20px", "20px", "20px"]}
            display="flex"
            flexDirection={["column", "column", "row", "row"]}
            border="1px solid black"
            h={["inherit", "inherit", "inherit", "inherit", "inherit"]}
          >
            <Box
              className="content"
              display={["flex", "none", "none", "none"]}
              flexDirection={["column", "column", "column", "column", "column"]}
              mx="10px"
              h={["150px", "150px", "320px", "320px", "320px"]}
            >
              <Text
                fontWeight={800}
                fontSize={["30px", "32px", "35px", "35px"]}
                lineHeight={10}
                as="b"
              >
                ULTRA
              </Text>
              <Text
                fontWeight={600}
                fontSize={["20px", "32px", "35px", "35px"]}
                lineHeight={5}
              >
                Super Soft
              </Text>
              <Text fontSize={["12px", "12px", "15px", "15px"]} lineHeight={5}>
                Boxer Brief/Multi Havana
              </Text>
              <Text
                fontWeight={200}
                fontSize={["30px", "32px", "35px", "35px"]}
              >
                {`$${price}`}
              </Text>
            </Box>
            <Box
              className="left"
              display="flex"
              // bg="red"
              w={["100%", "inherit", "650px", "1000px"]}
              h={["250px", "560px", "100%", "1000px", "500px"]}
              justifyContent={["space-between", "", "", ""]}
              flexDirection={[
                "column-reverse",
                "column-reverse",
                "row",
                "row",
                "row",
              ]}
            >
              <Box
                display="flex"
                flexDirection={["row", "row", "column", "row"]}
                maxH={["0px", "500px", "500px"]}
                w={["100%", "100%", "150px", "150px"]}
                maxW={["100%", "720px", "150px", "150px"]}
                overflowY={["auto", "hidden", "auto", "auto"]}
                overflowX={["hidden", "auto", "hidden", "hidden"]}
                flexWrap="nowrap"
              >
                {productDummyData &&
                  productDummyData?.solid.map((solid: SolidChild) =>
                    solid.images.map((img: string, index: number) => (
                      <Image
                        w={["50px", "110px", "40px"]}
                        h={["50px", "110px", "40px"]}
                        m={["0 5px", "0 auto", "0", "0"]}
                        src={img}
                        key={index}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))
                  )}
              </Box>
              <Box
                className="product-img"
                w={["100%", "100%", "550px", "150px"]}
                // flexDirection={{
                //   sm: "column",
                //   md: "column",
                //   lg: "row",
                //   xl: "row",
                //   xxl: "row",
                // }}
                // bg="pink"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  m={["0 auto", "0 auto", "0", "0"]}
                  src={selectedImage}
                  alt="Dan Abramov"
                  w={["180px", "441px", "480px", "550px"]}
                  h="100%"
                />
              </Box>
            </Box>
            <Box
              className="right"
              h={["fit-content", "200px", "100%", "100%"]}
              w={["100%", "776px", "350", "350", "350"]}
            >
              <Box
                className="content"
                display={["none", "flex", "flex", "flex"]}
                flexDirection={["column", "column", "column", "column"]}
                mx="10px"
              >
                {/* <Text
                  fontWeight={800}
                  fontSize={["30px", "32px", "35px", "35px"]}
                  lineHeight={10}
                  as="b"
                >
                  ULTRA
                </Text>
                <Text
                  fontWeight={800}
                  fontSize={["30px", "32px", "35px", "35px"]}
                  lineHeight={10}
                  as="b"
                >
                  ULTRA
                </Text>
                <Text
                  fontWeight={800}
                  fontSize={["30px", "32px", "35px", "35px"]}
                  lineHeight={10}
                  as="b"
                >
                  ULTRA
                </Text>
                <Text
                  fontWeight={800}
                  fontSize={["30px", "32px", "35px", "35px"]}
                  lineHeight={10}
                  as="b"
                >
                  Size
                </Text> */}
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
                // w={["720px"]}
                justifyContent={["flex-start", "space-between", "flex-start"]}
                h={["inherit", "200px", "320px", "320px", "320px"]}
                flexDirection={["column", "row", "column", "column"]}
              >
                <Text
                  fontSize="18px"
                  as="b"
                  display={["block", "none", "block", "block"]}
                >
                  Size
                </Text>
                <Box flexWrap="wrap" className="sizes" display="flex">
                  {productDummyData &&
                    productDummyData?.solid.map((solid: any) =>
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
                <Box
                  mt={["10px", "0px", "0px", "auto"]}
                  display="flex"
                  justifyContent="center"
                  // bg="red"
                >
                  <Button
                    as="button"
                    h={["50px", "50px", "50px", "50px"]}
                    w={["100%", "100%", "100%", "100%"]}
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
