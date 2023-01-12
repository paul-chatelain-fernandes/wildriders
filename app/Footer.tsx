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
  Spacer,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="lightsalmon" w="100%" p={4} color="white">
      <Flex justifyContent="center">
          <Link href="/mentions-legales">
            <Text>Mentions légales</Text>
          </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
