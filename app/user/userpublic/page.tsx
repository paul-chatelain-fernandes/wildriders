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
} from "@chakra-ui/react";
import ModalResources from "./ModalReserveVehicle";

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
    brand: "Nissan 004",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "150,97$ per day",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    brand: "BMW 400",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "198,97$ per day",
    image:
      "https://images.unsplash.com/photo-1510903117032-f1596c327647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    brand: "Mini 400",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "300,97$ per day",
    image:
      "https://images.unsplash.com/photo-1617624085810-3df2165bd11b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    brand: "Audi 10",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "1108,97$ per day",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    brand: "BMW 200",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "98,97$ per day",
    image:
      "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    brand: "Mclaren",
    address: "45 de Gaulle",
    date: "10/02/2023",
    price: "1198,97$ per day",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      <Flex justifyContent={"center"}>
        <Heading>Users List of cars to reserve</Heading>
      </Flex>
      <Wrap justifyContent="space-evenly" justify={"start"}>
        {dataVehicle.map((item) => (
          <WrapItem key={item.id}>
            <Card marginLeft={"1.5m"} maxW="md" onClick={() => onOpen(item)}>
              <CardBody>
                <Image
                  minH={"15rem"}
                  src={item.image}
                  alt={item.brand}
                  borderRadius="lg"
                />
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
