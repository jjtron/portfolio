import { React } from "react";
import FullScreenSection from "./FullScreenSection";
import ImageModal from "./ImageModal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  AspectRatio,
  Image, HStack
} from '@chakra-ui/react'

const ProjectsSection = ({ title, description, imageSrc, size }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  let img = null;
  const x = () => {
    img = "../images/avatar.png";
    onOpen();
  }

  return (
    <FullScreenSection
      isDarkBackground
      width="100%"
    >
      <Box pt="100px" w="90%">
        <HStack>
          <Image src={(() => require("../images/onMimicSplash.png"))()} alt={title} borderRadius="xl" onClick={onOpen} />
          <HStack>

          </HStack>
        </HStack>
      </Box>
      

      </FullScreenSection>
  );
};

export default ProjectsSection;
