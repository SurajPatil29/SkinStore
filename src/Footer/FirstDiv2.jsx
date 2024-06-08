import React from 'react';
import { Box, Button } from '@chakra-ui/react';

function FirstDiv2() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box w="50px" h="50px" borderRadius="full" overflow="hidden" mr="4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZciT-jBhm_IwDdkxOsxX5mcrk5jeXXo11Q&s" alt="instagram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box w="50px" h="50px" borderRadius="full" overflow="hidden" mr="4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8OsdU71mtoH8ol19eL0mZVO7YDdhpccPSA&s" alt="TickTok" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box w="50px" h="50px" borderRadius="full" overflow="hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJDnGgxjeqHTGS7n-kwqIytrPzdjC-k6RjQ&s" alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box w="50px" h="50px" borderRadius="full" overflow="hidden" mr="4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARCmdyzRBXoLBRObioIxJtG5RqtoN1TAcAQ&s" alt="X" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box w="50px" h="50px" borderRadius="full" overflow="hidden" mr="4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhYXJEsqPEscpE30APrKz_ZUYR38IAcgcqA&s" alt="pinterest" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box w="50px" h="50px" borderRadius="full" overflow="hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNKND3lgN3EwPYrjkWH09KLQxbnYghUzM2g&s" alt="Snapchat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Box>
    </Box>
  );
}

export { FirstDiv2 };
