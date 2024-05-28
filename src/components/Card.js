import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { React } from "react";
import clsx from 'clsx';

const Card = ({ isEnlarged, onEnlarge, title, description, imageSrc }) => {

  return (

      //<div className={clsx({'text-indigo-900' : isEnlarged, 'text-white' : !isEnlarged })} onClick={onEnlarge}>{isEnlarged} hello</div>
      <Box boxSize='xs' borderRadius="10px" onClick={onEnlarge}>
        <div className={clsx({'hidden' : !isEnlarged, 'block' : isEnlarged })}>
        <VStack alignItems="left" spacing='6px' >
          <Image id={description} src={imageSrc} alt='Dan Abramov' borderTopRadius="10px" />
          <Heading as='h4' size='md' color="black" px="10px">{title}</Heading>
          <Text fontSize='md' color="gray" px="10px">{description}</Text>
          <Text fontSize='sm' color="black" px="10px">see more<FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </VStack>
        </div>
      </Box>
  );
};

export default Card;
