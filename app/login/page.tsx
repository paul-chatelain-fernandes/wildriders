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
import { useEffect, useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = "/home";
    }
  }, [isLoggedIn]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Incorrect username or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack h="100vh">
        <Center>
          <VStack>
            <Heading margin={"5px"} marginTop={"12rem"} marginBottom={"5rem"}>
              Log in to your account
            </Heading>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                rounded={"8px"}
                border={"1px solid #000000"}
                backgroundColor={"#fff"}
                borderColor={"black"}
                height={"50px"}
                maxWidth={{ base: "18rem", md: "24rem", lg: "40rem" }}
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                rounded={"8px"}
                border={"1px solid #000000"}
                backgroundColor={"#fff"}
                borderColor={"black"}
                height={"50px"}
                maxWidth={{ base: "18rem", md: "24rem", lg: "40rem" }}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              mt={4}
              rightIcon={<AiOutlineEnter size={"20px"} />}
              marginTop={"2rem"}
              type={"submit"}
              backgroundColor={"#394E61"}
              textColor={"#fff"}
              variant={"outline"}
              alignSelf={"center"}
              boxShadow={"0 4px 4px rgba(0, 0, 0, 0.25)"}
            >
              Login
            </Button>
          </VStack>
        </Center>
      </Stack>
    </form>
  );
}

export default Login;
