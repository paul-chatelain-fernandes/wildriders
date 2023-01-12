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
import { useState } from "react";

export default function AddEmployeeModal({ onClose, isOpen, push }: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Add a new employee</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel mb="0.3rem">{"Name"}</FormLabel>
          <Input
            _placeholder={{ color: "gray.300" }}
            placeholder="Name..."
            value={username}
            onChange={(e) => setUsername(e.target.value) }
          />
          <FormLabel mt="0.5rem" mb="0.3rem">
            {"E-mail"}
          </FormLabel>
          <Input
            _placeholder={{ color: "gray.300" }}
            placeholder="E-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => {push({ id: 5, username, email, password : 'azerty' }); onClose()}}>Send</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
