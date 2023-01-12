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
  Spacer,
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
          <ModalHeader fontFamily="myFont2">{'New vehicle'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Box>
                <VStack>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                  <Button boxShadow='md' color="pink.600">{'Upload'}</Button>
                  <RadioGroup  pt="20px" onChange={setValue} value={value}>
                    <HStack>
                      <Text>{"Use :"}</Text>
                      <Stack direction="row">
                        <Radio value="1">{'Public'}</Radio>
                        <Radio value="2">{'Private'}</Radio>
                        <Radio value="2">{'Both'}</Radio>
                      </Stack>
                    </HStack>
                  </RadioGroup>
                </VStack>
              </Box>
              <Box>
                <FormControl>
                <FormLabel>{'Make'}</FormLabel>
                  <Input type="make" placeholder="Citroën" />
                  
                  <FormLabel>{'Model'}</FormLabel>
                  <Input type="model" placeholder="C4"/>

                  <FormLabel>{'Fueltype'}</FormLabel>
                  <Input type="fueltype" placeholder="Gazole" />

                  <FormLabel>{'Price per day'}</FormLabel>
                  <Input type="price_per_day" />

                </FormControl>
              </Box>
            </HStack>
            <Flex justifyContent="space-around" pt="20px">
              <Button boxShadow='md' color="pink.600">{'Disable'}</Button>
              <Button boxShadow='md' backgroundColor="pink.600" color="white">{'Save'}</Button>
              <Button boxShadow='md'color="pink.600">{'Modify'}</Button>
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
