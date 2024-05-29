import React from "react";
import { Heading, Box, Stack, Image, Text, Divider, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const handleClick = (anchor) => () => { 
  const id = `${anchor}-section`; 
  const element = document.getElementById(id);
  if (element) { 
    element.scrollIntoView({ 
      behavior: "smooth", 
      block: "start", 
    }); 
  } 
}; 

const LandingSection = () => (
  <FullScreenSection
    isDarkBackground
    width="100%"
  >
    <Box pt="100px">
      <Image
        borderRadius='full'
        boxSize={['calc(10vh)', 'calc(15vh)' ]}
        src={(() => require("../images/me-pic.png"))()}
        alt='Gerald Petron'
      />
    </Box>
    <Heading size='lg' noOfLines={1}>Hello, I'm Gerald Petron</Heading>
    <Heading size='md' noOfLines={1}>(you can call me Jerry)</Heading>
    <Divider orientation='horizontal' w="80%" />
    <Stack spacing={3} w="80%" textAlign="left" >
      <Text fontSize={['xs', 'md']}>I'm a full stack developer, practiced in commercial experience with AngularJS, and NodeJS; having recently
        obtained accredited, advanced training and knowledge in React.js.</Text>
      <Text fontSize={['xs', 'md']}>In my most recent professional experience, I worked at M2 Systems, Corp (Altamonte, Springs, FL). While there, 
        I designed a full stack web application for collecting, storing, and viewing medical imaging data. Both patients and doctors use
        the site to upload small and large volumes of data, and to register and maintain their medical history, and demographic and contact information.</Text>
      <Text fontSize={['xs', 'md']}>While at M2 Systems, I also maintained a medical insurance tracking website that had been deployed early in the first decade 
        of this century, extensively upgrading it, troubleshooting it, and making it compliant with government accessibility requirements.</Text>
        <Text fontSize={['xs', 'md']}>Prior to the above experience, I had been using basic web-site technology since the late 1990's to modernize factory configuration
        management systems, mainly using basic HTML, CSS, and Javascript, even before there was such a thing as a front-end Javascrip framework.</Text>
    </Stack>
    <nav>
      <HStack spacing={8}> 
        <a href="#projects" onClick={handleClick("projects")}>Projects</a>
        <a href="#contactme" onClick={handleClick("contactme")}>Contact Me</a> 
      </HStack> 
    </nav>
  </FullScreenSection>
);

export default LandingSection;
