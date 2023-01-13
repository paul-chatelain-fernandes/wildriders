"use client";
import NavbarUser from "../../NavbarCompany";
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

function ResourcesPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <NavbarUser />
      <Stack minH={"85vh"}>
        <Flex justifyContent={"center"}>
          <Heading p={4}>Modify your Company</Heading>
        </Flex>
        <Flex justifyContent={"center"}>
          <Box p={4}>
            <FormControl>
              <FormLabel>Company Name</FormLabel>
              <Input
                width={"20rem"}
                placeholder="Amazon"
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
            <Button
              backgroundColor={"pink.600"}
              mt={4}
              onClick={() => alert("Saved Changes!")}
            >
              Save Changes
            </Button>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}

export default ResourcesPage;
