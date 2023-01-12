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
import NavbarLogin from "../NavbarLogin";

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
    <>
      <NavbarLogin />
      <Stack h="100vh">
        <Flex justifyContent="center" alignItems="center">
          <Stack>
            <Heading fontFamily="myFont2" margin={"5px"} marginBottom={"5rem"}>
              {"Sign up for an account"}
            </Heading>
            <FormControl>
              <FormLabel htmlFor="username">{"Username"}</FormLabel>
              <Input
                placeholder="jDoe"
                border={"1px solid gray"}
                height={"50px"}
                maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel marginTop={"1rem"} htmlFor="email">
                {"Email"}
              </FormLabel>
              <Input
                placeholder="john.doe@email.com"
                border={"1px solid gray"}
                height={"50px"}
                maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel marginTop={"1rem"} htmlFor="password">
                {"Password"}
              </FormLabel>
              <Input
                placeholder="**********"
                border={"1px solid gray"}
                height={"50px"}
                maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                marginBottom={"4rem"}
              />
            </FormControl>
            <Button
              margin={"5px"}
              marginTop={"5rem"}
              type={"submit"}
              backgroundColor={"pink.600"}
              textColor={"#fff"}
              alignSelf={"center"}
              boxShadow="md"
              onClick={handleSubmit}
            >
              {"Create your account"}
            </Button>
            <Link alignSelf={"center"} as={NextLink} href="/signup-company">
              {"Do you want to register as a company?"}
            </Link>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}

export default Signup;
