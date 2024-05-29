import { React, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack, VStack, Image } from "@chakra-ui/react";
import Card from "./Card";
import clsx from 'clsx';

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
      isDarkBackground
      width="100%"
    >
      <Heading pt="50px" as="h1" id="projects-section">
        Featured Projects
      </Heading>

      <HStack>
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
      </HStack>
      <VStack>

        {projects.map((project) => (
          <div key={project.title} className={clsx({'hidden' : !(isLarge === project.description), 'block' : (isLarge === project.description) })}>

              <Image boxSize="calc(70vh)" id={project.description} src={project.getImageSrc()} alt='Dan Abramov' />

          </div>
        ))}
      </VStack>
      
    </FullScreenSection>
  );
};

export default ProjectsSection;
