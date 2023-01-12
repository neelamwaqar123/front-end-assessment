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
import ProductSize, { ProductProperty } from "./productSize";
import { productDummyData } from "../content";
import { useEffect, useState } from "react";
import { SolidChild, SizeObject } from "../interface";
import TextContent from "./TextContent";

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
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent
          maxW={["75vw", "380px", "580px", "985px", "990px"]}
          h={["auto", "auto", "auto", "500px", "500px"]}
          borderRadius="0px"
        >
          <ModalBody
            p={["20px", "20px", "20px", "20px", "20px"]}
            display="flex"
            flexDirection={["column", "column", "column", "row", "row"]}
            h="inherit"
          >
            <TextContent
              name={productDummyData.name}
              description={productDummyData.description}
              type={productDummyData.type}
              price={price}
              isMobile
            />
            <Box
              className="left"
              display="flex"
              w={["100%", "100%", "100%", "650px", "650px"]}
              h={["auto", "390px", "610px", "inherit", "inherit"]}
              justifyContent={[
                "space-between",
                "space-between",
                "space-between",
                "unset",
                "unset",
              ]}
              flexDirection={[
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row",
                "row",
              ]}
            >
              <Box
                display="flex"
                flexDirection={["row", "row", "row", "column", "column"]}
                maxH={["70px", "90px", "115px", "450px", "450px"]}
                h={["70px", "90px", "115px", "unset", "unset"]}
                w={["100%", "100%", "100%", "150px", "150px"]}
                maxW={["100%", "100%", "100%", "150px", "150px"]}
                overflow="auto"
                flexWrap="nowrap"
                justifyContent="start"
                alignItems="center"
              >
                {productDummyData &&
                  productDummyData?.solid.map((solid: SolidChild) =>
                    solid.images.map((img: string, index: number) => (
                      <Image
                        cursor="pointer"
                        w={["52px", "58px", "98px", "80px", "80px"]}
                        h={["52px", "58px", "98px", "80px", "80px"]}
                        m={["0 5px", "0 5px", "0 5px", "5px", "5px"]}
                        src={img}
                        key={index}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))
                  )}
              </Box>
              <Box
                className="product-img"
                w="100%"
                h={["100%", "100%", "100%", "460px", "460px"]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  m="0 auto"
                  src={selectedImage}
                  w={["90%", "90%", "90%", "100%", "100%"]}
                  h={["100%", "100%", "unset", "100%", "100%"]}
                />
              </Box>
            </Box>
            <Box
              className="right"
              ml={["unset", "unset", "unset", "20px", "20px"]}
              h={[
                "fit-content",
                "fit-content",
                "fit-content",
                "inherit",
                "inherit",
              ]}
              w={["100%", "100%", "100%", "350px", "350px"]}
            >
              <TextContent
                name={productDummyData.name}
                description={productDummyData.description}
                type={productDummyData.type}
                price={price}
                isMobile
              />
              <Box
                className="actions"
                pt={["20px", "20px", "10px", "20px", "20px"]}
                display="flex"
                justifyContent={[
                  "flex-start",
                  "flex-start",
                  "space-between",
                  "flex-start",
                  "flex-start",
                ]}
                h={["inherit", "inherit", "inherit", "320px", "320px"]}
                w={["100%", "100%", "100%", "100%", "100%"]}
                flexDirection={["column", "column", "row", "column", "column"]}
              >
                <Box display="flex" flexDirection="column">
                  <Text
                    fontWeight={600}
                    fontSize={["18px", "18px", "18px", "20px", "20px"]}
                  >
                    Size
                  </Text>
                  <Box
                    flexWrap="wrap"
                    className="sizes"
                    display="flex"
                    justifyContent="space-between"
                  >
                    {productDummyData &&
                      productDummyData?.solid.map((solid: any) =>
                        solid.size?.map(
                          (size: ProductProperty, index: number) => (
                            <ProductSize
                              key={index}
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
                </Box>
                <Box
                  mt={["10px", "10px", "auto", "auto", "auto"]}
                  h={["40px", "40px", "40px", "50px", "50px"]}
                  w={["100%", "100%", "50%", "100%", "100%"]}
                >
                  <Button
                    h="inherit"
                    w="100%"
                    color="#ffffff"
                    background="#DF1E1C"
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
