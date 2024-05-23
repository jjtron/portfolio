import React from "react";
import { Heading, Box, Stack, Image, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Gerald Petron you can call me Jerry.'";

const bio1 = "I'm a full stack developer, with practiced skills using AngularJS, React, and NodeJS.";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    isDarkBackground
    width="100%"
  >
    <Box pt="100px">
      <Image
        borderRadius='full'
        boxSize={['100px', '300px' ]}
        src={(() => require("../images/me-pic.png"))()}
        alt='Gerald Petron'
      />
    </Box>
    <Heading size='lg' noOfLines={1}>Hello, I'm Gerald Petron</Heading>
    <Heading size='md' noOfLines={1}>(you can call me Jerry)</Heading>
    <Stack spacing={3} w="80%" textAlign="left" >
      <Text fontSize={['xs', 'lg']}>I'm a full stack developer, practiced in the use of AngularJS, React, and NodeJS.</Text>
      <Text fontSize={['xs', 'lg']}>In my most recent professional experience, I worked at M2 Systems, Corp (Altamonte, Springs, FL). While there, 
        I designed a full stack web application for collecting, storing, and viewing medical imaging data. Both patients and doctors use
        the site to upload small and large volumes of data, and to register and maintain their medical history, and demographic and contact information.</Text>
      <Text fontSize={['xs', 'lg']}>While at M2 Systems, I also maintained a medical insurance tracking website that had been deployed early in the first decade 
        of this century, extensively upgrading it, troubleshooting it, and making it compliant with government accessibility requirements.</Text>
        <Text fontSize={['xs', 'lg']}>Prior to the above experience, I had been using basic web-site technology since the late 1990's to modernize factory configuration
        management systems, mainly using basic HTML, CSS, and Javascript, even before there was such a thing as a front-end Javascrip framework.</Text>
    </Stack>
  </FullScreenSection>
);

export default LandingSection;
