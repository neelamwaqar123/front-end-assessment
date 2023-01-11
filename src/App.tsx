import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ContentModal from "./components/modal";
import "./styles/global.css";

function App() {
  return (
    <ChakraProvider>
      <ContentModal />
    </ChakraProvider>
  );
}

export default App;
