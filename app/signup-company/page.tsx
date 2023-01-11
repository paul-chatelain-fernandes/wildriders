"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Flex,
  Heading,
  Select,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPage, setSelectedPage] = useState("signup");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("username: ", username);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("form submitted!");
  };

  return (
    <Stack h="100vh">
      <Flex justifyContent="center" alignItems="center">
        <Stack>
          <Heading margin={"5px"} marginBottom={"5rem"}>
            Sign up for an account
          </Heading>
          <FormControl>
            <FormLabel  htmlFor="username">Username</FormLabel>
            <Input
              rounded={"8px"}
              border={"1px solid #000000"}
              backgroundColor={"#fff"}
              borderColor={"black"}
              height={"50px"}
              maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormLabel marginTop={'1rem'}htmlFor="email">Email</FormLabel>
            <Input
              rounded={"8px"}
              border={"1px solid #000000"}
              backgroundColor={"#fff"}
              borderColor={"black"}
              height={"50px"}
              maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel marginTop={'1rem'} htmlFor="password">Password</FormLabel>
            <Input
              rounded={"8px"}
              border={"1px solid #000000"}
              backgroundColor={"#fff"}
              borderColor={"black"}
              height={"50px"}
              maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              marginBottom={'4rem'}
            />
          </FormControl>
          <Button
            mt={4}
            type={"submit"}
            backgroundColor={"#394E61"}
            textColor={"#fff"}
            variant={"outline"}
            alignSelf={"center"}
            boxShadow={"0 4px 4px rgba(0, 0, 0, 0.25)"}
            onClick={handleSubmit}
            marginBottom={"4rem"}
          >
            Create your account
          </Button>
          
            <Link alignSelf={'center'} as={NextLink} href="/signup-user">
            Do you want to register as a client
            </Link>
          
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Signup;
