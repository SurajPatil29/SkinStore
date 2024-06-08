import React from 'react';
import { Box, Flex, Divider } from '@chakra-ui/react';
import { FirstDiv } from "./FirstDiv";
import { SecoundDiv } from "./SecoundDiv";
import { ThirdDiv } from "./ThirdDiv";

function Footer() {
  return (
    <Box bg="gray.100" py="6" px="4">
      <Divider borderColor="black" my="2" />
      
      
      
        <FirstDiv />
        <Divider  my="2" />
        <SecoundDiv />
        <Divider borderColor="black" my="2" />
        <ThirdDiv />
      
    </Box>
  );
}

export { Footer };
