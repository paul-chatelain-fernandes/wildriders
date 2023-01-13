"use client";
import NavbarUser from "../../NavbarUser";
import {
  Stack,
  Box,
  Text,
  Flex,
  Heading,
  Image,
  HStack,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../../Footer";

function ResourcesPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <NavbarUser />
      <Stack minH={"83vh"}>
        <Flex justifyContent={"center"}>
          <Heading p={4}>Modify your account</Heading>
        </Flex>
        <Flex justifyContent={"center"}>
          <Box p={4}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                width={"20rem"}
                placeholder="John"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="John@gmail.com"
                width={"20rem"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="********"
                width={"20rem"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button mt={4} onClick={() => alert("Saved Changes!")}>
              Save Changes
            </Button>
          </Box>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
}

export default ResourcesPage;
