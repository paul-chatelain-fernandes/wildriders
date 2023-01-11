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
  Link,
} from "@chakra-ui/react";
export default function Page() {
  return (
    <Box>
      <Link
        href="https://www.flaticon.com/fr/icones-gratuites/location"
        title="location icônes"
        isExternal
      >
        <Image src="/rent_car.png" />
        <Text>{"Location icônes créées par Freepik - Flaticon"}</Text>
      </Link>

      <Link
        href="https://www.flaticon.com/free-icons/signup"
        title="signup icons"
      >
        <Image src="/signup.png" />
        <Text>{"Signup icons created by Freepik - Flaticon"}</Text>
      </Link>

      <Link
        href="https://www.flaticon.com/fr/icones-gratuites/sidentifier"
        title="s'identifier icônes"
      >
        <Image src="/login.png" />
        <Text>{"S'identifier icônes créées par Freepik - Flaticon"}</Text>
      </Link>
    </Box>
  );
}
