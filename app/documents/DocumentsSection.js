import React from "react";
import { Image, Box, useBreakpointValue } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import FullScreenSection from "../FullScreenSection";
import Header from "../Header";
import clsx from 'clsx';

const DocumentsSection = () => {
  const breakPoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl'})
  const isNarrow = (breakPoint === 'base');
  const server = 'https://portfolio.gp-web-dev.com:8443/';
  return (
    <>
    <Header />
    <FullScreenSection isDarkBackground width="100%" >
      <Box w="300px" mt="150px" border='1px' borderColor='white' >
        <TableContainer>
          <Table variant='simple' size="sm">
            <TableCaption fontSize="lg" placement='top' color="gray.200">My Documents</TableCaption>
            <Thead>
              <Tr>
                <Th color="gray.400" pl="5px" >Document</Th>
                <Th color="gray.400" px="2px" >Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td pl="5px" >Resume</Td>
                <Td px="2px"><a href='/Gerald_Petron_Resume.pdf' target="_blank" ><Image rounded="sm" boxSize="32px" src={`/images/resume.png`} /></a></Td>
              </Tr>
              <Tr>
                <Td pl="5px" >Diploma</Td>
                <Td px="2px"><a href='/fit-diploma.png' target="_blank" ><Image rounded="sm" boxSize="32px" src={`/images/diploma.png`} /></a></Td>
              </Tr>
              <Tr>
                <Td pl="5px" >Meta Certificate (React)</Td>
                <Td px="2px"><a href='/Coursera_TP9R6DGDBPLQ.pdf' target="_blank" ><Image rounded="sm" boxSize="32px" src={`/images/certificate.png`} /></a></Td>
              </Tr>
              <Tr>
                <Td pl="5px" >Meta Certificate (Node/Express)</Td>
                <Td px="2px"><a href='/Coursera_DRKZLABBTF4R.pdf' target="_blank" ><Image rounded="sm" boxSize="32px" src={`/images/certificate.png`} /></a></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer> 
      </Box>
    </FullScreenSection>
    </>
  )
};

export default DocumentsSection;
