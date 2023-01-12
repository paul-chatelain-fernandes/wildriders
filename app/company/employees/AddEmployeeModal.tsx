import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function AddEmployeeModal({ onClose, isOpen }: any) {
  return (
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontFamily="myFont2">{'Add a new employee'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel mb="0.3rem">{"Name"}</FormLabel>
          <Input _placeholder={{ color: "gray.300" }} placeholder="Name..." />
          <FormLabel mt="0.5rem" mb="0.3rem">
            {"E-mail"}
          </FormLabel>
          <Input _placeholder={{ color: "gray.300" }} placeholder="E-mail..." />
        </ModalBody>
        <ModalFooter>
          <Button>{'Send'}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
