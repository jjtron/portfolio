import { Image } from "@chakra-ui/react";
import { React } from "react";
import clsx from 'clsx';

const Card = ({ isEnlarged, onEnlarge, description, imageSrc }) => {
  return (
      <div className={clsx({'opacity-100' : !isEnlarged, 'opacity-50' : isEnlarged })}>
        <Image boxSize={["40px", "50px"]} id={description} src={imageSrc} alt='Dan Abramov' borderRadius="5px" onClick={onEnlarge} />
      </div>
  );
};

export default Card;
