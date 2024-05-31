import { React, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, HStack, VStack, Divider, Image, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Card from "./Card";
import clsx from 'clsx';

const projects = [
  {
    title: "Main Page depiction",
    description: "Web-site description and Doctor/Patient Portal Entry page",
    getImageSrc: () => require("../images/onMimicSplash.png"),
  },
  {
    title: "Surgery location UI depiction",
    description: "Graphic UI depicting patient surgery sites, linking to report details",
    getImageSrc: () => require("../images/avatar.png"),
  },
  {
    title: "File mgmnt depiction",
    description: "File management UI",
    getImageSrc: () => require("../images/fileManagement.png"),
  },
  {
    title: "Registration depiction",
    description: "Registration validation, step-by-step",
    getImageSrc: () => require("../images/registration.png"),
  },
  {
    title: "User profile mgmnt depiction",
    description: "User profile management",
    getImageSrc: () => require("../images/profileManagement.png"),
  },
  {
    title: "Responsive UI depiction",
    description: "Responsive User Interface",
    getImageSrc: () => require("../images/responsiveUi.png"),
  },
];

const ProjectsSection = () => {
  const [isLarge, setIsLarge] = useState(-1);

  return (
    <FullScreenSection
      isDarkBackground
      width="100%"
    >
      <Heading pt="50px" as="h1" id="projects-section">My work at M2 Systems, Corp</Heading>

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
      
      {projects.map((project) => (
        <div key={project.title} className={clsx({'hidden' : !(isLarge === project.description), 'block' : (isLarge === project.description) })}>
          <VStack>
            <Image h="calc(60vh)" id={project.description} src={project.getImageSrc()} alt={project.title} />
            <Text fontSize={['xs', 'md']}>{project.description}</Text>
          </VStack>
        </div>
      ))}
      <Divider orientation='horizontal' />
      <footer>
      <Link href='https://gp-web-dev.com' isExternal>
        For another sample of my work (my own personal React project), go to<ExternalLinkIcon mx='2px' />
      </Link>
      </footer>
      
    </FullScreenSection>
  );
};

export default ProjectsSection;
