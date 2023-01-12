"use client";
import { Text, Flex, Link, Image } from "@chakra-ui/react";

export default function Page() {
  return (
    <Flex flexDir="row" h="100vh" w="100vw">
      <Flex
        w="60%"
        justifyContent="center"
        alignItems="center"
        bgColor="lightsalmon"
      >
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Text fontSize="1.7rem" fontFamily="myFont2">
            Welcome to
          </Text>
          <Text
            fontSize="4rem"
            fontFamily="myFont1"
            fontWeight="bold"
            color="#000"
          >
            WildRiders
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        w="40%"
        justifyContent="center"
        alignItems="center"
        boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;"
      >
        <Flex flexDir="column" alignItems="flex-start">
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="center"
            mb="1rem"
          >
            <Image boxSize="30px" src="/login.png" mr="20px" />
            <Link href="/login" fontSize="1.5rem" fontFamily="myFont2">
              Login
            </Link>
          </Flex>
          <Flex flexDir="row" alignItems="center" justifyContent="center">
            <Image boxSize="30px" src="/signup.png" mr="20px" />
            <Flex
              flexDir="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Link
                href="/signup-user"
                fontSize="1.5rem"
                fontFamily="myFont2"
                mb="-0.5rem"
              >
                Register as a user
              </Link>
              <Link
                href="/signup-company"
                fontSize="1.5rem"
                fontFamily="myFont2"
              >
                Register as a company
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
