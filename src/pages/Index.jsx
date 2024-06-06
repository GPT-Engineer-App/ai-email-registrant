import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([]);

  const handleAddAccount = () => {
    if (email && password) {
      setAccounts([...accounts, { email, password }]);
      setEmail("");
      setPassword("");
    }
  };

  const handleRemoveAccount = (index) => {
    const newAccounts = accounts.filter((_, i) => i !== index);
    setAccounts(newAccounts);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Email and Password Registration</Text>
        <HStack width="100%">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <IconButton aria-label="Add Account" icon={<FaPlus />} onClick={handleAddAccount} />
        </HStack>
        <VStack spacing={2} width="100%">
          {accounts.map((account, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Text>{account.email}</Text>
              <Text>{account.password}</Text>
              <IconButton aria-label="Remove Account" icon={<FaTrash />} onClick={() => handleRemoveAccount(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
