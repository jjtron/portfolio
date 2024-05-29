import { Heading, HStack, Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { React } from "react";
import clsx from 'clsx';

const Card = ({ isEnlarged, onEnlarge, title, description, imageSrc }) => {

  return (
      <div className={clsx({'opacity-100' : !isEnlarged, 'opacity-50' : isEnlarged })}>
        <Image boxSize="50px" id={description} src={imageSrc} alt='Dan Abramov' borderTopRadius="10px" onClick={onEnlarge} />
      </div>
  );
};

export default Card;
