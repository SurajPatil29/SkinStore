import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Symbol() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <Box onClick={handleClick} cursor="pointer">
            <Text fontSize='5xl' marginBottom="0" lineHeight="1" >SkinStore</Text>
            <Text fontSize="xs" marginTop="0" lineHeight="1">part of the <strong>LOOKFANTASTIC</strong> group </Text>
        </Box>

    )
}

export { Symbol }