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
import Layout from "./layout";
function ContentModal() {
  const { onOpen, onClose, isOpen } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent maxW="1100px" bg="black">
          <ModalBody>
            <Layout />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContentModal;
