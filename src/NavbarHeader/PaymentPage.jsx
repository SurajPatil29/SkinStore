import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

function PaymentPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [obj, setObj] = useState({});

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('payment'));
    if (getData) {
      setObj(getData);
    }
  }, []);

  const handlePayment = () => {
    // Handle payment logic here
    setPaymentSuccess(true);
    
    onOpen();
  };

  const Amount = (obj.price * obj.quantity).toFixed(2)

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.100">
      <Box w="400px" p="20px" bg="white" boxShadow="md" borderRadius="md">
        <Text fontSize="2xl" mb="4" textAlign="center">Payment Details</Text>
        <VStack spacing="4">
          <FormControl id="name">
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Virat Kohli" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="vk@example.com" />
          </FormControl>
          <FormControl id="card-number">
            <FormLabel>Card Number</FormLabel>
            <Input type="text" placeholder="1234 5678 9012 3456" />
          </FormControl>
          <FormControl id="amount">
            <FormLabel>Amount</FormLabel>
            <Input type="number" value={Amount} readOnly />
          </FormControl>
          <HStack spacing="4">
            <FormControl id="expiry-date">
              <FormLabel>Expiry Date</FormLabel>
              <Input type="text" placeholder="MM/YY" />
            </FormControl>
            <FormControl id="cvc">
              <FormLabel>CVC</FormLabel>
              <Input type="text" placeholder="CVC" />
            </FormControl>
          </HStack>
          <Button colorScheme="blue" width="full" mt="4" onClick={handlePayment}>
            Submit Payment
          </Button>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {paymentSuccess ? "Payment Submitted Successfully!" : "There was an issue with your payment."}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export { PaymentPage };
