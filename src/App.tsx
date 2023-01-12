import { ChakraProvider } from "@chakra-ui/react";
import ContentModal from "./components/PDP";

function App() {
  return (
    <ChakraProvider>
      <ContentModal />
    </ChakraProvider>
  );
}

export default App;
