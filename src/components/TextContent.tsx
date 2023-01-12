import { Box, Text } from "@chakra-ui/react";
import { TextContentProps } from "../interface";

function TextContent({
  name,
  description,
  type,
  price,
  isMobile,
}: TextContentProps) {
  return (
    <Box
      className="content"
      display={
        isMobile
          ? ["flex", "flex", "none", "none", "none"]
          : ["none", "none", "flex", "flex", "flex"]
      }
      flexDirection="column"
      h={["auto", "auto", "auto", "130px", "130px"]}
      mb={["10px", "10px", "10px", "10px", "10px"]}
    >
      <Text
        fontWeight={800}
        fontSize={["25px", "25px", "25px", "25px", "25px"]}
      >
        {name}
      </Text>
      <Text
        fontWeight={600}
        fontSize={["18px", "18px", "20px", "20px", "20px"]}
      >
        {description}
      </Text>
      <Text fontSize={["15px", "15px", "15px", "15px", "15px"]}>{type}</Text>
      <Text
        fontWeight={600}
        fontSize={["20px", "20px", "20px", "20px", "20px"]}
      >
        {`$${price}`}
      </Text>
    </Box>
  );
}

export default TextContent;
