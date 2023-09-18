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

import { loginUser, registerUser } from "@/utils/auth";
import { useState } from "react";

const LoginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginUser(email, password);
  };

  return (
    <>
      <Button radius="none" onPress={onOpen}>
        LOGIN
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="none">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>LOGIN</ModalHeader>
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
                  LOGIN
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
