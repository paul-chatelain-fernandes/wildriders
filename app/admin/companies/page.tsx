"use client";
import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Center,
  Button,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import ModalDeleteCompany from "./ModalDeleteCompany";
import { useState } from "react";
import NavbarAdmin from "../../NavbarAdmin";
import FooterAdmin from "../../FooterAdmin";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <>
      <NavbarAdmin />
      <Center>
        <Heading fontFamily="myFont2">{"List of all companies"}</Heading>
      </Center>
      <Container maxW="1500px">
        <TableContainer mt="10">
          <Table>
            <Thead>
              <Tr>
                <Th>{"Name"}</Th>
                <Th>{"E-mail"}</Th>
                <Th>{"Actions"}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataCompanies.map((company) => (
                <Tr key={company.id}>
                  <Td>{company.name}</Td>
                  <Td>{company.email}</Td>
                  <Td>
                    <Button
                      value={company.name}
                      onClick={onOpen}
                      color="pink.600"
                      m="5"
                    >
                      Delete
                    </Button>
                    <Button
                      value={company.name}
                      onClick={onOpen}
                      color="yellow.600"
                    >
                      Edit
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <ModalDeleteCompany onClose={onClose} isOpen={isOpen} companyName />
      <FooterAdmin />
    </>
  );
}
