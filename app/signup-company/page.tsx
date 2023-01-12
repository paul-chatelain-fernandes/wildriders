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
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPage, setSelectedPage] = useState("signup");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("company: ", company);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("form submitted!");
  };

  return (
    <Stack>
      <Flex justifyContent="center" alignItems="center">
        <Stack>
          <Heading fontFamily="myFont2" margin={"5px"} marginBottom={"5rem"}>
            {"Sign up for an account - Company"}
          </Heading>
          <FormControl>
            <FormLabel htmlFor="company">{"Company"}</FormLabel>
            <Input
              border={"1px solid gray"}
              height={"50px"}
              maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <FormLabel marginTop={"1rem"} htmlFor="email">
              {"Email"}
            </FormLabel>
            <Input
              border={"1px solid gray"}
              height={"50px"}
              maxWidth={{ base: "22rem", md: "24rem", lg: "40rem" }}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel marginTop={"1rem"} htmlFor="password">
              Password
            </FormLabel>
            <Input
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
          margin={"5px"} marginTop={"5rem"}
            type={"submit"}
            backgroundColor={"lightsalmon"}
            textColor={"#fff"}
            alignSelf={"center"}
            boxShadow="md"
            onClick={handleSubmit}
          >
            {"Create your account"}
          </Button>

          <Link alignSelf={"center"} as={NextLink} href="/signup-user">
            {"Do you want to register as a client ?"}
          </Link>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Signup;
