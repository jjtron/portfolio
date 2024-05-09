import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
      <Box boxSize='md' backgroundColor="white"  borderRadius="10px">
        <VStack alignItems="left" spacing='6px'>
          <Image src={imageSrc} alt='Dan Abramov' borderTopRadius="10px"/>
          <Heading as='h4' size='md' color="black" px="10px">{title}</Heading>
          <Text fontSize='md' color="gray" px="10px">{description}</Text>
          <Text fontSize='sm' color="black" px="10px">see more<FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </VStack>
      </Box>
  );
};

export default Card;
