import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

function SecoundDiv1() {
  return (
    <Box>
      <Divider borderColor="black" />
      <Text fontSize="lg" mb="4">Help & Information</Text>
      <Box display="flex" alignItems="center" mb="4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5Tq8cAAKvIhjJpXABrFDTM7ysNvOz5fqcA&s" alt="phone" width="20" height="20" />
        <Text ml="2">Customer Service</Text>
      </Box>
      <Box display="flex" alignItems="center" mb="4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1RooddUREFX-3aSurz0ojlyXsGS5WdH01g&s" alt="Pickup" width="20" height="20" />
        <Text ml="2">Delivery Information</Text>
      </Box>
      <Box display="flex" alignItems="center" mb="4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3jfsq-o4cTJmwUj3Ebc7sVBvVarnl0BqPA&s" alt="return log" width="20" height="20" />
        <Text ml="2">Return & Refund</Text>
      </Box>
      <Box display="flex" alignItems="center" mb="4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQKRctHROV1URMeBBewXtd7FIBmxbMXrROw&s" alt="question" width="20" height="20" />
        <Text ml="2">Help Center</Text>
      </Box>
      <Box display="flex" alignItems="center" mb="4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zqshhj3PqHpYW9_8cujSvOTiF520Xo58Mw&s" alt="target logo" width="20" height="20" />
        <Text ml="2">Track my order Accessibility</Text>
      </Box>
      <Box display="flex" alignItems="center" mb="4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQiCXMEvyDOR9Xz2WgmZB8lXwRjw9BkS7A&s" alt="Cookie logo" width="20" height="20" />
        <Text ml="2">Cookie Setting</Text>
      </Box>
    </Box>
  );
}

export { SecoundDiv1}