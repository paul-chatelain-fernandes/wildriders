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
} from "@chakra-ui/react";
import ModalResources from "./ModalAddVehicle";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Heading fontFamily="myFont2">Company fleet manager</Heading>
      <Flex justifyContent="right" pr="20px">
        <Button
          rightIcon={<AddIcon />}
          colorScheme="teal"
          variant="outline"
          onClick={onOpen}
          boxShadow="md"
        >
          Add vehicles
        </Button>
      </Flex>

      <Wrap justifyContent="space-evenly">
        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="xl">Fiat 500</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text>500km</Text>
                    <Text>$98,98/day</Text>
                  </Box>
                  <Button boxShadow="md">Buy</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="xl">Fiat 500</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text>500km</Text>
                    <Text>$98,98/day</Text>
                  </Box>
                  <Button boxShadow="md">Buy</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="xl">Fiat 500</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text>500km</Text>
                    <Text>$98,98/day</Text>
                  </Box>
                  <Button boxShadow="md">Buy</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="xl">Fiat 500</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text>500km</Text>
                    <Text>$98,98/day</Text>
                  </Box>
                  <Button boxShadow="md">Buy</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="xl">Fiat 500</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text>500km</Text>
                    <Text>$98,98/day</Text>
                  </Box>
                  <Button boxShadow="md">Buy</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="xl">Fiat 500</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text>500km</Text>
                    <Text>$98,98/day</Text>
                  </Box>
                  <Button boxShadow="md">Buy</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>
      </Wrap>
      <ModalResources isOpen={isOpen} onClose={onClose} />
    </>
  );
}
