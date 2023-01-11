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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Switch,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function ModalResources({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [value, setValue] = useState("1");

  return (
    <>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New vehicle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Box>
                <VStack>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                  <Button boxShadow='md'>Upload</Button>
                  <RadioGroup  pt="20px" onChange={setValue} value={value}>
                    <HStack>
                      <Text>{"Use :"}</Text>
                      <Stack direction="row">
                        <Radio value="1">Public</Radio>
                        <Radio value="2">Private</Radio>
                      </Stack>
                    </HStack>
                  </RadioGroup>
                </VStack>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Model</FormLabel>
                  <Input type="model" />
                  {/* <FormHelperText>We'll never share your email.</FormHelperText> */}

                  <FormLabel>Kilometers</FormLabel>
                  <Input type="kilometers" />

                  <FormLabel>Price per day</FormLabel>
                  <Input type="price_per_day" />

                  <FormLabel>Address</FormLabel>
                  <Input type="address" />
                </FormControl>
              </Box>
            </HStack>
            <Flex justifyContent="space-around" pt="20px">
              <Button boxShadow='md'>Disable</Button>
              <Button boxShadow='md'>Save</Button>
              <Button boxShadow='md'>Modify</Button>
            </Flex>
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
