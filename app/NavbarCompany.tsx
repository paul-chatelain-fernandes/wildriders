"use client";
import {
  Box,
  Button,
  Image,
  Heading,
  HStack,
  Flex,
  Spacer,
  Link,
  Center,
} from "@chakra-ui/react";

const NavbarCompany = () => {
  return (
    <Box bg="lightsalmon" w="100%" p={4} color="white" mb="20px">
      <Flex justifyContent="space-between">
        <Box>
          <Link href="/company/dashboard">
            <HStack>
              <Box boxSize="60px">
                <Image src="/rent_car.png" alt="logo" />
              </Box>
              <Heading fontFamily="myFont1">{"WildRiders"}</Heading>
            </HStack>
          </Link>
        </Box>
        <Spacer />
        <Center>
          <Link href="/company/dashboard" mr="20px">
            Dashboard
          </Link>
          <Link href="/company/employees" mr="20px">
            Employees
          </Link>
          <Link href="/company/fleet" mr="20px">
            Fleet
          </Link>
          <Link href="/company/settings">Settings</Link>
        </Center>
        <Spacer />
        <Box>
          <Link href="/login">
            <Button boxShadow="md" bg="white" color="lightsalmon" mr="30px">
              {"Logout"}
              <Image boxSize="30px" ml="10px" src="/login.png" alt="Log out" />
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavbarCompany;
