"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Flex,
  Heading,
  VStack,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import Footer from "../Footer";
import NavbarLogin from "../NavbarLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      window.location.href = "/user/rent";
    } else if (username === "company" && password === "password") {
      window.location.href = "/company/dashboard";
    } else if (username === "admin" && password === "password") {
      window.location.href = "/admin/dashboard";
    } else {
      alert("Incorrect username or password.");
    }
  };

  return (
    <>
      <NavbarLogin />
      <form onSubmit={handleSubmit}>
        <Stack h="100vh">
          <Center>
            <VStack>
              <Heading
                fontFamily="myFont2"
                margin={"5px"}
                marginBottom={"5rem"}
              >
                {"Log in to your account"}
              </Heading>
              <FormControl>
                <FormLabel htmlFor="username">{"Username"}</FormLabel>
                <Input
                  placeholder="jDoe"
                  border={"1px solid gray"}
                  height={"50px"}
                  maxWidth={{ base: "18rem", md: "24rem", lg: "40rem" }}
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FormLabel htmlFor="password">{"Password"}</FormLabel>
                <Input
                  placeholder="**********"
                  border={"1px solid gray"}
                  height={"50px"}
                  maxWidth={{ base: "18rem", md: "24rem", lg: "40rem" }}
                  id="password"
                  type="password"
                  marginBottom={"4rem"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                margin={"5px"}
                marginTop={"5rem"}
                rightIcon={<AiOutlineEnter size={"20px"} />}
                type={"submit"}
                backgroundColor={"pink.600"}
                textColor={"#fff"}
                alignSelf={"center"}
                boxShadow="md"
              >
                {"Login"}
              </Button>
            </VStack>
          </Center>
        </Stack>
      </form>
      <Footer />
    </>
  );
}

export default Login;
