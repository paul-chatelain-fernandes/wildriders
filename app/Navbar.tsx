"use client";
import {
  Box,
  Button,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  HStack,
  Flex,
  Wrap,
  WrapItem,
  Spacer,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="lightsalmon" w="100%" p={4} color="white" mb="20px">
      <Flex justifyContent="space-between">
        <Box>
            <Link href="/home">
          <HStack>
              <Box boxSize="60px">
                <Image src="/rent_car.png" />
              </Box>
              <Heading fontFamily="myFont1">{"WildRiders"}</Heading>
          </HStack>
            </Link>
        </Box>
        <Spacer />
        <Box>
          <Link href="/login">
            <Button boxShadow="md" bg="white" color="lightsalmon" mr="30px">
              {"Log in"}
              <Image boxSize="30px" ml="10px" src="/login.png" />
            </Button>
          </Link>
          <Link href="/signup-user">
            <Button boxShadow="md" bg="white" color="lightsalmon">
              {"Sign up"}
              <Image boxSize="30px" ml="10px" src="/signup.png" />
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
