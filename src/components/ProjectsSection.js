import { React, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description: 0,
    getImageSrc: () => require("../images/onMimicSplash.png"),
  },
  {
    title: "React Infinite Scroll",
    description: 1,
    getImageSrc: () => require("../images/avatar.png"),
  },
  {
    title: "Photo Gallery",
    description: 2,
    getImageSrc: () => require("../images/registration.png"),
  },
  {
    title: "Event planner",
    description: 3,
    getImageSrc: () => require("../images/profileManagement.png"),
  },
];

const ProjectsSection = () => {
  const [isLarge, setIsLarge] = useState(-1);

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
        {projects.map((project) => (
          <Card
            isEnlarged={isLarge === project.description}
            onEnlarge={() => setIsLarge(project.description)}
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
