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
} from "@chakra-ui/react";

export default function Page() {
  const dataEmployee = [
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
  ];

  return (
    <Box>
      <Center mt="10">
        <Heading>Company employees</Heading>
      </Center>
      <TableContainer mt="10">
        <Table>
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>E-mail</Th>
            </Tr>
          </Thead>
          {dataEmployee.map((dataEmployee) => (
            <Tbody key={dataEmployee.id}>
              <Tr>
                <Td>{dataEmployee.username}</Td>
                <Td>{dataEmployee.email}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </Box>
  );
}
