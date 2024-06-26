'use client'
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from "./context/alertContext";
import { LightingModeProvider } from "./context/lightingModeContext";

export function Providers({ children }) {
  return <ChakraProvider>
            <LightingModeProvider>
            <AlertProvider>
              {children}
            </AlertProvider>
            </LightingModeProvider>
         </ChakraProvider>
}