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
              <TextContent
                name={productDummyData.name}
                description={productDummyData.description}
                type={productDummyData.type}
                price={price}
                isMobile
              />
              <Box
                className="actions"
                mx="10px"
                pt="20px"
                display="flex"
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
