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
  Center,
} from "@chakra-ui/react";
import ModalResources from "./ModalAddVehicle";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataCars, setDataCars] = useState([
    {
      id: 1,
      image: "/fiat_500.png",
      make: "Fiat",
      model: "500",
      fueltype: "gazole",
      pricePerDay: "9",
      kilometers: "25615",
      use: "",
    },
    {
      id: 2,
      image: "/fiat_500.png",
      make: "Fiat",
      model: "500",
      fueltype: "gazole",
      pricePerDay: "9",
      kilometers: "45988",
      use: "",
    },
    {
      id: 3,
      image: "/peugeot_e2008.jpg",
      make: "Peugeot",
      model: "E2008",
      fueltype: "electric",
      pricePerDay: "20",
      kilometers: "12659",
      use: "",
    },
    {
      id: 4,
      image: "/peugeot_407.jpg",
      make: "Peugeot",
      model: "407",
      fueltype: "gazole",
      pricePerDay: "15",
      kilometers: "164674",
      use: "",
    },
    {
      id: 5,
      image: "/peugeot_e2008.jpg",
      make: "Peugeot",
      model: "E2008",
      fueltype: "electric",
      pricePerDay: "20",
      kilometers: "12659",
      use: "",
    },
    {
      id: 6,
      image: "/peugeot_407.jpg",
      make: "Peugeot",
      model: "407",
      fueltype: "gazole",
      pricePerDay: "15",
      kilometers: "15648",
      use: "",
    },
  ]);
  return (
    <>
      <Heading fontFamily="myFont2">{'Company fleet manager'}</Heading>
      <Flex justifyContent="right" pr="20px">
        <Button
          rightIcon={<AddIcon />}
          backgroundColor="pink.600"
          color="white"
          variant="outline"
          onClick={onOpen}
          boxShadow="md"
        >
          {'Add vehicles'}
        </Button>
      </Flex>

      <Wrap justifyContent="space-evenly">
        {dataCars.map((car)=>(
          <WrapItem>
          <Card maxW="sm" key={car.id}>
            <CardBody>
              <Center>
              <Image
                src={car.image}
                borderRadius="lg"
                height="200px"
              />
              </Center>
              <Stack mt="6" spacing="3">
                <Text fontSize="2xl" fontFamily="myFont2" color="pink.600">{car.make} {car.model}</Text>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text>{car.kilometers} {'km'}</Text>
                    <Text>{car.pricePerDay} {'€/day'}</Text>
                  </Box>
                  <Button boxShadow="md" color="pink.600">Buy</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>
        ))}
        

    
      </Wrap>
      <ModalResources isOpen={isOpen} onClose={onClose} />
    </>
  );
}
