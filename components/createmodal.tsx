"use client";

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

import { useState } from "react";

const LoginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Button radius="none" onPress={onOpen}>
        Create Contact
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="none">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Create Contact</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="FirstName"
                  placeholder="Enter firstname"
                  variant="bordered"
                  radius="none"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  label="LastName"
                  placeholder="Enter lastname"
                  variant="bordered"
                  radius="none"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <Input
                  label="Phone NO"
                  placeholder="Enter phone number"
                  variant="bordered"
                  radius="none"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  label="Email"
                  placeholder="Enter email"
                  variant="bordered"
                  radius="none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button size="sm" radius="none" onPress={onClose}>
                  ADD
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
