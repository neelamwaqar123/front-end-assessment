import { Box, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function Layout() {
  return (
    <Box
      className="product-display"
      display="flex"
      flexDirection={{
        lg: "row",
      }}
      bg="red"
    >
      <Box
        className="left"
        bg="blue"
        display="flex"
        w="750px"
        flexDirection={{
          lg: "row",
        }}
      >
        <Box
          className="img-scroller"
          bg="pink"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{
            lg: "column",
          }}
          maxH="450px"
          w="150px"
          overflow="auto"
        >
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="90px"
            h="78px"
            p="5px"
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="90px"
            h="78px"
            p="5px"
          />{" "}
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="90px"
            h="78px"
            p="5px"
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="90px"
            h="78px"
            p="5px"
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="90px"
            h="78px"
            p="5px"
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="90px"
            h="78px"
            p="5px"
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="90px"
            h="78px"
            p="5px"
          />
        </Box>
        <Box
          className="product-img"
          w="550px"
          bg="yellow"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="https://picsum.photos/200/300"
            alt="Dan Abramov"
            w="380px"
            h="380px"
          />
        </Box>
      </Box>
      <Box className="right" bg="tomato" w="350px">
        <Box
          className="content"
          display="flex"
          flexDirection={{
            lg: "column",
          }}
          bg="orange"
          m="10px"
        >
          <Text fontSize="25px" as="b">
            ULTRA
          </Text>
          <Text fontSize="15px">ULTRA</Text>
          <Text fontSize="10px" as="b">
            ULTRA
          </Text>
          <Text fontSize="10px">ULTRA</Text>
        </Box>
        <Box
          className="actions"
          bg="purple"
          display="flex"
          justifyContent="flex-start"
          h="310px"
          flexDirection={{
            lg: "column",
          }}
        >
          <Box className="sizes" display="flex">
            <Box
              w="41px"
              h="41px"
              bg="rebeccapurple"
              margin="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              M
            </Box>
            <Box
              w="41px"
              h="41px"
              bg="rebeccapurple"
              margin="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              M
            </Box>
            <Box
              w="41px"
              h="41px"
              bg="rebeccapurple"
              margin="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              M
            </Box>
            <Box
              w="41px"
              h="41px"
              bg="rebeccapurple"
              margin="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              M
            </Box>
            <Box
              w="41px"
              h="41px"
              bg="rebeccapurple"
              margin="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              M
            </Box>
            <Box
              w="41px"
              h="41px"
              bg="rebeccapurple"
              margin="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              M
            </Box>
          </Box>

          <Box mt="auto" display="flex" justifyContent="center">
            <Button
              as="button"
              h="50px"
              w="277px"
              color="#ffffff"
              background="red"
              mb="15px"
              borderRadius="0px"
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Layout;
