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
        title="location_icons"
        isExternal
      >
        <Image src="/rent_car.png" />
        <Text>{"Location icônes créées par Freepik - Flaticon"}</Text>
      </Link>
      <Link
        href="https://www.flaticon.com/free-icons/signup"
        title="signup_icons"
      >
        <Image src="/signup.png" />
        <Text>{"Signup icons created by Freepik - Flaticon"}</Text>
      </Link>
      <Link
        href="https://www.flaticon.com/fr/icones-gratuites/sidentifier"
        title="icon_id"
      >
        <Image src="/login.png" />
        <Text>{"S'identifier icônes créées par Freepik - Flaticon"}</Text>
      </Link>
      <Link
        href="https://www.flaticon.com/fr/icones-gratuites/editer"
        title="editer_icons"
      >
        <Image src="/crayon.png" />
        <Text>{"Éditer icônes créées par Freepik - Flaticon"}</Text>
      </Link>
      <Link href="https://pixabay.com/fr/users/makamuki0-1102736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2170961">
        <Image src="/fiat_500.png" />
        <Text>{"Image par Marc Pascual sur Pixabay"}</Text>
      </Link>

      <Link href="https://pixabay.com/fr/users/autophotography-5777245/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3051031">
        <Image src="/peugeot_407.jpg" />
        <Text>{"Image par Mike sur Pixabay"}</Text>
      </Link>

      <Link href="https://pixabay.com/fr/users/mikenr1-13305880/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4803538">
        <Image src="/peugeot_e2008.jpg" />
        <Text>{"Image par Michael Schmitt sur Pixabay"}</Text>
      </Link>
    </Box>
  );
}
