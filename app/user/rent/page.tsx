"use client";
import React, { useState } from "react";
import {
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import ModalResources from "./ModalReserveVehicle";
import NavbarUser from "../../NavbarUser";

interface Item {
  id: number;
  brand: string;
  address: string;
  date: string;
  price: string;
  image: string;
}

const dataVehicle: Item[] = [
  {
    id: 1,
    brand: "Fiat 500",
    address: "Place Martoi 13 Orleans 45000",
    date: "10/02/2023",
    price: "98,97$ per day",
    image:
      "http://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    brand: "Nissan 200",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "98,97$ per day",
    image:
      "https://images.unsplash.com/photo-1510903117032-f1596c327647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    brand: "BMW 400",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "98,97$ per day",
    image:
      "https://images.unsplash.com/photo-1588623259724-71e3e35834c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    brand: "Porche",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "98,97$ per day",
    image:
      "https://images.unsplash.com/photo-1531920327645-347e96a7f31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE5fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    brand: "Ford X02",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "98,97$ per day",
    image:
      "https://images.unsplash.com/photo-1595391907681-b0f42ebcdafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgwfHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    brand: "Audi 900",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "98,97$ per day",
    image:
      "https://images.unsplash.com/photo-1588086272079-8b1556abdb53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const YourComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>({
    id: 0,
    brand: "",
    address: "",
    date: "",
    price: "",
    image: "",
  });

  const onOpen = (item: Item) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const onClose = () => setIsOpen(false);

  return (
    <>
      <NavbarUser />
      <Flex justifyContent={"center"}>
        <Heading>Rent a car</Heading>
      </Flex>
      <Wrap justifyContent="space-evenly" justify={"start"}>
        {dataVehicle.map((item) => (
          <WrapItem key={item.id}>
            <Card marginLeft={"1.5m"} maxW="md" onClick={() => onOpen(item)}>
              <CardBody>
                <Image src={item.image} alt={item.brand} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.brand}</Heading>
                  <Text>
                    This car is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                  <Flex justifyContent="space-between">
                    <Box>
                      <Text>{item.address}</Text>
                      <Text>{item.price}</Text>
                    </Box>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </WrapItem>
        ))}
      </Wrap>
      <ModalResources
        isOpen={isOpen}
        onClose={onClose}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default YourComponent;
