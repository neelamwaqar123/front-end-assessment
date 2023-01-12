import { ChakraProvider } from "@chakra-ui/react";
import ContentModal from "./components/modal";

function App() {
  return (
    <ChakraProvider>
      <ContentModal />
    </ChakraProvider>
  );
}

export default App;
