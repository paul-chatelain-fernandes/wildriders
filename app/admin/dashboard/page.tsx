"use client";
import { Center, Grid, GridItem, Image, Spinner, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import FooterAdmin from "../../FooterAdmin";
import NavbarAdmin from "../../NavbarAdmin";
import { useState } from "react";

export default function Page() {

  const [dataCompanies, setDataCompanies] = useState([
    {
      id: 1,
      name: "Amazon",
      email: "zon@amazon.fr",
    },
    {
      id: 2,
      name: "SpaceX",
      email: "must@spacex.fr",
    },
    {
      id: 3,
      name: "Google",
      email: "abc@google.com",
    },
    {
      id: 4,
      name: "Microsoft",
      email: "email@microsoft.fr",
    },
    {
      id: 4,
      name: "AirBnb",
      email: "email@airbnb.fr",
    },
    {
      id: 4,
      name: "Wild Code School",
      email: "email@wcs.fr",
    },
  ]);

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
      <NavbarAdmin />
      <Grid
        p="3rem 4rem"
        h="40rem"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        minH="85vh"
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato">
          <Table>
            <Thead>
              <Tr>
                <Th>{"Username"}</Th>
                <Th>{"Email"}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataCompanies.map((dataCompanies) => (
                <Tr key={dataCompanies.email}>
                  <Td>{dataCompanies.name}</Td>
                  <Td>{dataCompanies.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <Table>
            <Thead>
              <Tr>
                <Th>{"Brand"}</Th>
                <Th>{"Model"}</Th>
                <Th>{"Location"}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataCars.map((dataCars) => (
                <Tr key={dataCars.make}>
                  <Td>{dataCars.make}</Td>
                  <Td>{dataCars.model}</Td>
                  <Td>{"Orléans"}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <Center>
            <Spinner size="xl" />
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg="tomato">
          <Image src="/googlemaps.jpg" alt="maps" objectFit="fill" h="100%" />
        </GridItem>
      </Grid>
      <FooterAdmin />
    </>
  );
}
