import React from 'react'
import { SecoundDiv1 } from './SecoundDiv1'
import { SecoundDiv2 } from './SecoundDiv2'
import { Box } from '@chakra-ui/react'

function SecoundDiv() {
  return (
    <Box display="flex" justifyContent="space-around" gap="50px">
       <SecoundDiv1 />
       <SecoundDiv2 />
    </Box>
  )
}

export { SecoundDiv}