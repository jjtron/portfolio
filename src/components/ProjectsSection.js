import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Image, Box, Heading } from "@chakra-ui/react";
import Thumbnail from "./OnMimic";

const projects = [
  {
    title: "Avatar",
    description: "Avatar",
    getImageSrc: () => require("../images/me-pic.png"),
  }
];

const mainPic = require("../images/Splash.png");

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        <Image src={require("../images/Splash.png")} alt='splash page'/>
        {projects.map((project) => (
          <Thumbnail
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
