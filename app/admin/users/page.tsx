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
import ModalDeleteUser from "./ModalDeleteUser";
import { useState } from "react";
import NavbarAdmin from "../../NavbarAdmin";
import FooterAdmin from "../../FooterAdmin";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dataUsers, setDataUsers] = useState([
    {
      id: 1,
      name: "Jeff Bez",
      email: "jeffrey@amazon.fr",
    },
    {
      id: 2,
      name: "Musky",
      email: "elmu@spacex.fr",
    },
    {
      id: 3,
      name: "Larry",
      email: "lala@google.com",
    },
    {
      id: 4,
      name: "Billy",
      email: "gagates@microsoft.fr",
    },
    {
      id: 4,
      name: "Brian",
      email: "chesky@airbnb.fr",
    },
    {
      id: 4,
      name: "Anna",
      email: "anna-step@wcs.fr",
    },
  ]);

  return (
    <>
      <NavbarAdmin />
      <Center>
        <Heading fontFamily="myFont2">{"List of all users"}</Heading>
      </Center>
      <Container maxW="1500px">
        <TableContainer mt="10">
          <Table>
            <Thead>
              <Tr>
                <Th>{"Username"}</Th>
                <Th>{"E-mail"}</Th>
                <Th>{"Actions"}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataUsers.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Button
                      value={user.name}
                      onClick={onOpen}
                      color="pink.600"
                      m="5"
                    >
                      Delete
                    </Button>
                    <Button
                      value={user.name}
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
      <ModalDeleteUser onClose={onClose} isOpen={isOpen} />
      <FooterAdmin />
    </>
  );
}
