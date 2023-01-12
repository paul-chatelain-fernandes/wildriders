"use client";
import NavbarUser from "../../NavbarUser";
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

interface RentedVehicle {
  id: number;
  brand: string;
  startDate: string;
  endDate: string;
  price: number;
  image: string;
}
interface Vehicle {
  id: number;
  brand: string;
  address: string;
  date: string;
  price: string;
  image: string;
}
const initialVehicles: RentedVehicle[] = [
  {
    id: 1,
    brand: "Fiat 500",
    startDate: "01/01/2022",
    endDate: "02/01/2022",
    price: 50,
    image:
      "http://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    brand: "Porche",
    startDate: "26/01/2022",
    endDate: "27/01/2022",
    price: 989,
    image:
      "https://images.unsplash.com/photo-1531920327645-347e96a7f31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE5fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    brand: "Porche",
    startDate: "15/02/2022",
    endDate: "22/02/2022",
    price: 1989,
    image:
      "https://images.unsplash.com/photo-1531920327645-347e96a7f31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE5fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },

  // more vehicles...
];

function ResourcesPage() {
  const [vehicles, setVehicles] = useState(initialVehicles);

  return (
    <>
      <NavbarUser />
      <Stack minH={'85vh'}>
        <Flex justifyContent={"center"}>
          <Heading p={4}>Past Rents</Heading>
        </Flex>
        <Flex flexDirection={"row"} justifyContent={"space-around"}>
          {vehicles.map((vehicle) => (
            <Box key={vehicle.id}>
              <VStack>
                <Image
                  width={"30rem"}
                  height={"20rem"}
                  src={vehicle.image}
                  alt={vehicle.brand}
                />
                <Text fontSize={"25px"} marginTop={"1rem"}>
                  {vehicle.brand}
                </Text>
                <Text fontSize={"25px"} marginTop={"1rem"}>
                  {vehicle.startDate} - {vehicle.endDate}
                </Text>
                <Text fontSize={"25px"} marginTop={"1rem"}>
                  ${vehicle.price}
                </Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Stack>
    </>
  );
}
export default ResourcesPage;
