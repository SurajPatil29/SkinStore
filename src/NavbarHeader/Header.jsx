import React, { useContext } from 'react'
import { Box, Flex, Text, Link, Divider, Avatar } from "@chakra-ui/react"
import { Navbar } from '../Componants/Navbar'
import { Search } from './Search'
import { LoginSignup } from './LoginSignup'
import { Link as RouterLink } from 'react-router-dom';
import { Symbol } from "./Symbol"
import { AuthContext } from '../Componants/LoginAuth'

function Header() {
  let {authDetails} = useContext(AuthContext)
  return (

    <>
      <Box bg="rgba(0, 0, 0, 0.08)">
        <Flex justifyContent="flex-end" gap="25px" p="10px">
          <Text fontSize="sm">us-USD</Text>
          <Text fontSize="sm">Help</Text>
        </Flex>
      </Box>
      <Flex justifyContent="space-around" alignItems="center" p="10px">
        <Symbol />
        <Search />
        <LoginSignup />
        <Link as={RouterLink} to="/bucket" fontSize="sm" fontWeight="bold">Bucket</Link>
        <Text><Avatar size='sm' bg='teal.500' />  {authDetails?.name}</Text>
      </Flex>
      <Divider borderColor="black" my="2" />
      <Flex flexDirection="column" alignItems="center" justifyContent="space-between">
            <Navbar bg="RGBA(0, 0, 0, 0.06" /> 
        </Flex>


    </>

  )
}

export { Header }