"use client";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar";
// import { Rubik_Vinyl } from '@next/font/google';
import '@fontsource/rubik-vinyl/400.css';
import '@fontsource/rokkitt/400.css';
// import '@fontsource/indie-flower';
import theme from './theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
