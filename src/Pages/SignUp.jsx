import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';

function SignUp() {
  const [sName, setsName] = useState('');
  const [sEmail, setsEmail] = useState('');
  const [sPassword, setsPassWord] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    const userDetail = {
      name: sName,
      email: sEmail,
      password: sPassword,
    };
    localStorage.setItem('userDetail', JSON.stringify(userDetail));
    setShowSuccess(true);
    setTimeout(() => {
      setRedirectToLogin(true);
    }, 3000); // Redirect to login after 3 seconds
  }

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <Box maxW="400px" mx="auto" mt="20">
      <Heading as="h3" mb="4" textAlign="center">
        Sign Up
      </Heading>
      {showSuccess && (
        <Alert status="success" mb="4">
          <AlertIcon />
          Sign up successful! Redirecting to login page...
          <CloseButton
            onClick={() => setRedirectToLogin(true)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      <form onSubmit={handleSignUp}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Name"
            value={sName}
            onChange={(e) => setsName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            value={sEmail}
            onChange={(e) => setsEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            value={sPassword}
            onChange={(e) => setsPassWord(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" mt="4" color="black" bg="gray.300" _hover={{ bg: 'gray.400' }}>Sign Up</Button>

      </form>
    </Box>
  );
}

export { SignUp };
