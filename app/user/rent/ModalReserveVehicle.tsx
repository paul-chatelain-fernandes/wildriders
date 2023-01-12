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

interface Item {
  id: number;
  brand: string;
  address: string;
  date: string;
  price: string;
  image: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: Item;
}

const ModalResources: React.FC<Props> = ({ isOpen, onClose, selectedItem }) => {
  const { brand, address, date, price, image } = selectedItem;

  return (
    <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{brand}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
            <Box>
              <VStack>
                <Image
                  width={"30rem"}
                  height={"20rem"}
                  src={image}
                  alt={brand}
                />
              </VStack>
            </Box>
            <Flex direction={{ base: "column" }}>
              <Text fontSize={"25px"} marginTop={"1rem"}>
                {brand}
              </Text>
              <Text fontSize={"25px"} marginTop={"1rem"}>
                {address}
              </Text>
              <Text fontSize={"25px"} marginTop={"1rem"}>
                {date}
              </Text>
              <Text fontSize={"25px"} marginTop={"1rem"}>
                {price}
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
  );
};

export default ModalResources;
