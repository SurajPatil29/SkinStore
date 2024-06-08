import React from 'react';
import { ThirdDiv1 } from './ThirdDiv1';
import { ThirdDiv2 } from './ThirdDiv2';
import { Flex, Box } from '@chakra-ui/react';

function ThirdDiv() {
  return (
    <Flex justifyContent="space-around" gap="50px">
      <Box mr="4">
        <ThirdDiv1 />
      </Box>
      <Box>
        <ThirdDiv2 />
      </Box>
    </Flex>


  );
}

export { ThirdDiv };
