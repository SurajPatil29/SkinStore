import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Componants/LoginAuth';
import { useNavigate, Link as RouterLink} from 'react-router-dom';

import { Box, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon, CloseButton, Text, Link as ChakraLink } from '@chakra-ui/react';


function LogIn() {
  const [lEmail, setlEmail] = useState('');
  const [lPassword, setlPassWord] = useState('');
  const { setEff, eff, authDetails } = useContext(AuthContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const userDetail = {
      email: lEmail,
      password: lPassword,
    };
    const saveDetails = JSON.parse(localStorage.getItem('userDetail')) || {};

    if (userDetail.email === saveDetails.email && userDetail.password === saveDetails.password) {
      localStorage.setItem('isAutho', 'Authenticated');
      setEff(!eff);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000); // Redirect to home page after 3 seconds
    } else {
      setShowError(true);
    }
  }

  useEffect(() => {
    const userDetail = JSON.parse(localStorage.getItem('userDetail'));
    if (!userDetail) {
      navigate('/signup');
    }
  }, [navigate]);

  useEffect(() => {
    if (authDetails?.isLoggedIn) {
      navigate('/');
    }
  }, [authDetails, navigate]);

  return (
    <Box maxW="400px" mx="auto" mt="20">
      <Heading as="h3" mb="4" textAlign="center">
        Log In
      </Heading>
      {showSuccess && (
        <Alert status="success" mb="4">
          <AlertIcon />
          Login successful! Redirecting to home page...
          <CloseButton
            onClick={() => setShowSuccess(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      {showError && (
        <Alert status="error" mb="4">
          <AlertIcon />
          Login credentials are incorrect. Please try again.
          <CloseButton
            onClick={() => setShowError(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      <form onSubmit={handleLogin}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            value={lEmail}
            onChange={(e) => setlEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            value={lPassword}
            onChange={(e) => setlPassWord(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" mt="4" color="black" bg="gray.300" _hover={{ bg: 'gray.400' }}>Log In</Button>

      </form>
      <Text mt="4" textAlign="center">
                Don't have an account? <ChakraLink as={RouterLink} to="/signup" color="blue.500">Sign Up</ChakraLink>
            </Text>
    </Box>
  );
}

export { LogIn };
