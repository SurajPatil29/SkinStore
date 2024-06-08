import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoginAuth } from "./Componants/LoginAuth"

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginAuth>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </LoginAuth>

);
