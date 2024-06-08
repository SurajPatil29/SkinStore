import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [obj, setObj] = useState({});
    const [count, setCount] = useState(1); // Default quantity to 1
    const navigate = useNavigate();

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("cart"));
        if (getData) {
            setObj(getData);
        }
    }, []);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 1 ? count - 1 : 1); // Prevent quantity from going below 1

    return (
        <Flex>
            <Box m={6} textAlign="center" width="350px">
                {obj.img && <Image src={obj.img} alt={obj.category} width="300px" height="300px" />}
                <Box whiteSpace="wrap">
                    <Text fontSize='lg' maxWidth="300px">{obj.title}</Text>
                    <Box border="1px solid red">{obj.offer}</Box>
                    <Text fontSize='lg' noOfLines={2} maxWidth="300px" mb={4}>{obj.rating} {obj.reviews}</Text>
                    <Text>${(obj.price * count).toFixed(2)}</Text>
                    <Button bg="RGBA(0, 0, 0, 0.80)" color="white" _hover={{ bg: "skyblue" }} onClick={() => {
                        const updatedObj = { ...obj, quantity: count, totalPrice: (obj.price * count).toFixed(2) };
                        localStorage.setItem("payment", JSON.stringify(updatedObj));
                        navigate("/payment");
                    }}>
                        Payment
                    </Button>
                </Box>
            </Box>
            <Box width="350px">
                <Text fontSize="lg">{obj.discription}</Text>
                <Text fontSize="xl" textAlign="center">Add Quantity</Text>
                <Box display="flex" alignItems="center" justifyContent="center" gap="20px" padding="20px">
                    <Button onClick={decrement} bg="gray.200" _hover={{ bg: "gray.300" }}>{"<"}</Button>
                    <Text fontSize="2xl" minWidth="50px" textAlign="center">{count}</Text>
                    <Button onClick={increment} bg="gray.200" _hover={{ bg: "gray.300" }}>{">"}</Button>
                </Box>
            </Box>
        </Flex>
    );
}

export { Cart };
