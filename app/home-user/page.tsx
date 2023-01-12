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
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ModalResources from "./ModalReserveVehicle";
import NavbarUser from "../NavbarUser";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <NavbarUser />
    <Flex justifyContent={'center'}>
      <Heading>Users List of cars to reserve</Heading></Flex>
      <Wrap justifyContent="space-evenly" justify={'start'}>
        <WrapItem>
          <Card marginLeft={'1.5m'}maxW="md">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                onClick={onOpen}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Fiat 500</Heading>
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
                  
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card marginLeft={'1.5rem'}maxW="md">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                onClick={onOpen}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Fiat 500</Heading>
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
                  
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card marginLeft={'1.5rem'}maxW="md">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                onClick={onOpen}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Fiat 500</Heading>
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
                  
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card marginLeft={'1.5rem'}maxW="md">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                onClick={onOpen}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Fiat 500</Heading>
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
                  
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card marginLeft={'1.5rem'}maxW="md">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                onClick={onOpen}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Fiat 500</Heading>
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
                  
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card marginLeft={'1.5rem'}maxW="md">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                onClick={onOpen}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Fiat 500</Heading>
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
