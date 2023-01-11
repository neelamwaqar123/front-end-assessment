import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
function ProductSize() {
  return (
    <Box
      w="41px"
      h="41px"
      bg="white"
      border="1px solid #000000"
      m="0 10px 0 0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      M
    </Box>
  );
}
export default ProductSize;
