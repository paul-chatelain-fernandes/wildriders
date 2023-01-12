"use client";
import { Box } from "@chakra-ui/react";
import Footer from "../../Footer";
import NavbarUser from "../../NavbarUser";

export default function Page() {
  return (
    <>
      <NavbarUser />
      <Box minH="80vh">Settings</Box>
      <Footer />
    </>
  );
}
