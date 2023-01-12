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
  Text,
} from "@chakra-ui/react";

export default function AddEmployeeModal({
  onClose,
  isOpen,
  companyName,
}: any) {
  return (
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontFamily="myFont2">
          {"Delete this user"} {companyName}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="red">
            {" "}
            {"Are you sure you want to delete this user?"} {companyName}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button color="red">{"Delete"}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
