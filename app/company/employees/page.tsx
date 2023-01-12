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
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataEmployee, setDataEmployee] = useState([
    {
      id: 1,
      username: "Kylian",
      email: "kylianmoreira@gmail.com",
      password: "azerty",
    },
    {
      id: 2,
      username: "Paul",
      email: "paulfeur@gmail.com",
      password: "azerty",
    },
    {
      id: 3,
      username: "Dan",
      email: "danwilder@gmail.com",
      password: "azerty",
    },
    {
      id: 4,
      username: "Nono",
      email: "nonojose@gmail.com",
      password: "azerty",
    },
  ]);

  function push(value: any) {
    setDataEmployee((prev) => {
      const newPrev = [...prev]
      newPrev.push(value);
      return newPrev;
    });
  }

  return (
    <Box>
      <Container maxW="1500px">
        <Center mt="10">
          <Heading>Company employees</Heading>
        </Center>
        <Button onClick={onOpen} m={4} bgColor="blue.400" mt="10">
          {"Add employee"}
        </Button>
        <TableContainer mt="10">
          <Table>
            <Thead>
              <Tr>
                <Th>Username</Th>
                <Th>E-mail</Th>
                <Th>Access</Th>
              </Tr>
            </Thead>
            <Tbody >
              {dataEmployee.map((dataEmployee) => (
                <Tr key={dataEmployee.email}>
                  <Td>{dataEmployee.username}</Td>
                  <Td>{dataEmployee.email}</Td>
                  <Td>
                    <Switch></Switch>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <AddEmployeeModal onClose={onClose} isOpen={isOpen} push={push} />
      </Container>
    </Box>
  );
}
