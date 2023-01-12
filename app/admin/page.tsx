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
} from "@chakra-ui/react";
import ModalDeleteCompany from "./ModalDeleteCompany";
import { useState } from "react";
import NavbarAdmin from "../NavbarAdmin";

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
      <Heading fontFamily="myFont2">{"Company list"}</Heading>
      <TableContainer mt="10">
        <Table>
          <Thead>
            <Tr>
              <Th>{"Username"}</Th>
              <Th>{"Email"}</Th>
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
      <ModalDeleteCompany onClose={onClose} isOpen={isOpen} companyName />
    </>
  );
}
