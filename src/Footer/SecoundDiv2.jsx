import React from 'react';
import { Flex, Box, Text, Divider } from '@chakra-ui/react';

function SecoundDiv2() {
    return (
        <Flex>
            <Box>
                <Divider borderColor="black" />
                <Text fontSize="lg" mb="4">About SkinStore</Text>
                <Text mb="2">Key Workers Discount</Text>
                <Text mb="2">About Us</Text>
                <Text mb="2">Affiliate Program</Text>
                <Text mb="2">Brand Directory</Text>
                <Text mb="2">Coupon Codes</Text>
                <Text mb="2">Refer A Friend</Text>
                <Text mb="2">Student Discount</Text>
                <Text mb="2">Join SkinStore Experts</Text>
            </Box>

            <Box ml="8">
                <Divider borderColor="black" />
                <Text fontSize="lg" mb="4">Useful Links</Text>
                <Text mb="2">Cookie Information</Text>
                <Text mb="2">Privacy Policy</Text>
                <Text mb="2">Terms & Conditions</Text>
                <Text mb="2">Modern Slavery Statement</Text>
            </Box>

            <Box ml="8">
                <Divider borderColor="black" />
                <Text fontSize="lg" mb="4">Contact Us</Text>
                <Text mb="2">Message Us</Text>
                <Text mb="2">Free Beauty Consultations</Text>
            </Box>
        </Flex>
    );
}

export { SecoundDiv2 };
