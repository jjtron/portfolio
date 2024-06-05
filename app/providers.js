'use client'
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from "./context/alertContext";

export function Providers({ children }) {
  return <ChakraProvider>
            <AlertProvider>
              {children}
            </AlertProvider>
         </ChakraProvider>
}