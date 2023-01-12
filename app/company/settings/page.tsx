"use client";
import { Box } from "@chakra-ui/react";
import Footer from "../../Footer";
import NavbarCompany from "../../NavbarCompany";

export default function Page() {
  return (
    <>
      <NavbarCompany />
      <Box minH="80vh">Settings</Box>
      <Footer />
    </>
  );
}
