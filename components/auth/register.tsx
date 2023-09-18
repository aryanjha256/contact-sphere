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

import { registerUser } from "@/utils/auth";
import { useState } from "react";

const RegisterModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    registerUser(email, password);
  };

  return (
    <>
      <Button radius="none" onPress={onOpen}>
        REGISTER
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="none">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>REGISTER</ModalHeader>
              <ModalBody>
                <Input
                  // autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  radius="none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  variant="bordered"
                  radius="none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  size="sm"
                  radius="none"
                  onPress={onClose}
                  onClick={handleLogin}
                >
                  REGISTER
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
