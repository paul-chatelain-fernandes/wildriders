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
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import NavbarLogin from "../NavbarLogin";

export default function Page() {
  const [data, setData] = useState([
    {
      id: 1,
      lien: "https://www.flaticon.com/fr/icones-gratuites/location",
      title: "location_icons",
      image: "/rent_car.png",
      text: "Rent icon created by Freepik - Flaticon",
    },
    {
      id: 2,
      lien: "https://www.flaticon.com/free-icons/signup",
      title: "signup_icons",
      image: "/signup.png",
      text: "Signup icons created by Freepik - Flaticon",
    },
    {
      id: 3,
      lien: "https://www.flaticon.com/fr/icones-gratuites/sidentifier",
      title: "icon_id",
      image: "/login.png",
      text: "Login icon created by Freepik - Flaticon",
    },
    {
      id: 4,
      lien: "https://www.flaticon.com/fr/icones-gratuites/editer",
      title: "editer_icons",
      image: "/crayon.png",
      text: "Edit icon created by Freepik - Flaticon",
    },
    {
      id: 5,
      lien: "https://pixabay.com/fr/users/makamuki0-1102736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2170961",
      title: "fiat_500",
      image: "/fiat_500.png",
      text: "Picture by Marc Pascual - Pixabay",
    },
    {
      id: 6,
      lien: "https://pixabay.com/fr/users/autophotography-5777245/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3051031",
      title: "peugeot_407",
      image: "/peugeot_407.jpg",
      text: "Picture by Mike - Pixabay",
    },
    {
      id: 7,
      lien: "https://pixabay.com/fr/users/mikenr1-13305880/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4803538",
      title: "peugeot_e2008",
      image: "/peugeot_e2008.jpg",
      text: "Picture by Michael Schmitt - Pixabay",
    },
  ]);

  return (
    <Box>
      <NavbarLogin />
      <Heading fontFamily="myFont2" mb="20px">
        Copyright
      </Heading>
      <Wrap justifyContent="space-between">
        {data.map((data) => (
          <WrapItem>
            <Card maxW="sm" key={data.id}>
              <CardBody>
                <Center>
                  <Image src={data.image} borderRadius="lg" height="200px" />
                </Center>
                <Stack mt="6" spacing="3">
                  <Link
                    key={data.id}
                    href={data.lien}
                    title={data.title}
                    isExternal
                  >
                    <Text fontSize="2xl" fontFamily="myFont2" color="pink.600">
                      {data.text}
                    </Text>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
