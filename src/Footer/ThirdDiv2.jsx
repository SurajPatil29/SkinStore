import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';

function ThirdDiv2() {
    return (
        
            <Box >
                <Text>Pay securely with</Text>
                <Flex gap="20px">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mozH3yK32lx52UEIoL3CWLQgWJyVP69Chw&s" alt="visa"  boxSize="50px"/>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT569fkloFhLOT4ZuYq4mUlfP64rQ4HHKjCA&s" alt="mastercard" boxSize="50px"/>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Do74H4P16o0g_sPGFrQ_mE5TCIjLe53baw&s" alt="american express" boxSize="50px"/>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkSBuEVrhb2u-SOqDO0ZcJL0OOWGjF9ImAA&s" alt="Diners club" boxSize="50px"/>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5M2Lea6KOvcrjIrCx9cleGjV4yZExyE8z2Q&s" alt="Disc ver" boxSize="50px"/>
                    <Image src="https://1000logos.net/wp-content/uploads/2021/05/Maestro-logo.png" alt="maestro" boxSize="50px"/>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="paypal" boxSize="50px" />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaTxMH_HBv4LybyRmszxeoKIYz_vxkGXSyg&s" alt="alipay" boxSize="50px"/>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshVAdqXh0qO4FoCZG3jD0nyzl1mSly8-k_w&s" alt="wechatpay" boxSize="50px"/>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Wtc790g2q9msQA2XhJw6xbd7EEWcYJyFRA&s" alt="afterpay" boxSize="50px" />
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Zip_Logo.svg/1200px-Zip_Logo.svg.png" alt="zip" boxSize="50px"/>
                </Flex>
            </Box>
        
    );
}

export { ThirdDiv2 };
