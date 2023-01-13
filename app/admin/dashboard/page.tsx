"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import FooterAdmin from "../../FooterAdmin";
import NavbarAdmin from "../../NavbarAdmin";

export default function Page() {
  return (
    <>
      <NavbarAdmin />
      <Grid
        p="3rem 4rem"
        h="40rem"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      <FooterAdmin />
    </>
  );
}
