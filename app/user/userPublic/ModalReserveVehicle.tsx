"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  HStack,
  Image,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";


function ModalResources({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  

  return (
    <>
      <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fiat 500</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Box>
                <VStack>
                  <Image
                    width={"30rem"}
                    height={"20rem"}
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Dan Abramov"
                  />
                </VStack>
              </Box>
              <Flex direction={{ base: "column" }}>
                <Text fontSize={"25px"} marginTop={"1rem"}>
                  Fiat 500
                </Text>
                <Text fontSize={"25px"} marginTop={"1rem"}>
                  Place Martoi 13 orleans 45000
                </Text>
                <Text fontSize={"25px"} marginTop={"1rem"}>
                  19/02/2023 - 20/02/2023
                </Text>
                <Text fontSize={"25px"} marginTop={"1rem"}>
                  98,97$
                </Text>

                <Button marginTop={"3rem"} boxShadow="md">
                  Select
                </Button>
              </Flex>
            </HStack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalResources;
