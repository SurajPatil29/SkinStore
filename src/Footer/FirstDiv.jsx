import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FirstDiv1 } from './FirstDiv1';
import { FirstDiv2 } from './FirstDiv2';

function FirstDiv() {
  return (
    <Box display="flex" justifyContent="space-around" gap="50px">
      <FirstDiv1 />
      <FirstDiv2 />
    </Box>
  );
}

export { FirstDiv };
