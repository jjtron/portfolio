'use client'
import { useState } from "react";
import FullScreenSection from "../FullScreenSection";
import { Heading, HStack, Image, Text, Center, useBreakpointValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Card from "./Card";
import clsx from 'clsx';
import Header from "../Header";

const projects = [
  {
    title: "Main Page depiction",
    description: "Web-site description and Doctor/Patient Portal Entry page",
    getImageSrc: () => "/images/onMimicSplash.png",
  },
  {
    title: "Surgery location UI depiction",
    description: "Graphic UI depicting patient surgery sites, linking to report details",
    getImageSrc: () => "/images/avatar.png",
  },
  {
    title: "File mgmnt depiction",
    description: "File management UI",
    getImageSrc: () => "/images/fileManagementOrig.png",
  },
  {
    title: "Registration depiction",
    description: "Registration validation, step-by-step",
    getImageSrc: () => "/images/registration.png",
  },
  {
    title: "User profile mgmnt depiction",
    description: "User profile management",
    getImageSrc: () => "/images/profileManagement.png",
  },
  {
    title: "Responsive UI depiction",
    description: "Responsive User Interface",
    getImageSrc: () => "/images/responsiveUi.png",
  },
];

const ProjectsSection = () => {
  const [isLarge, setIsLarge] = useState("Web-site description and Doctor/Patient Portal Entry page");
  const breakPoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl'})

  return (
    <>
    <Header />
    <FullScreenSection
      isDarkBackground
      width="100%"
    >
      <Heading size={['sm', 'md', 'lg']} id="projects-section">My work at M2 Systems, Corp</Heading>
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
      
      {projects.map((project, i) => (
        <div key={project.title} className={clsx({'hidden' : !(isLarge === project.description), 'block' : (isLarge === project.description) })}>
          <Center>
          <div className="flex flex-col w-[85%]">
            { (() => {
                if (i === 4 && (breakPoint === "lg" || breakPoint === "md" || breakPoint === "xl" || breakPoint === "2xl")) {
                  return (<Image rounded='md' h="calc(60vh)" id={project.description} src={project.getImageSrc()} alt={project.title} />)
                } else if (i === 5 && breakPoint === "base" ) {
                  return (<Image rounded='md' h="calc(40vh)" id={project.description} src={project.getImageSrc()} alt={project.title} />)
                } else if (i === 5 && breakPoint !== "base" ) {
                  return (<Image rounded='md' h="calc(60vh)" id={project.description} src={project.getImageSrc()} alt={project.title} />)
                } else {
                  return (<Image rounded='md' id={project.description} src={project.getImageSrc()} alt={project.title} />)
                }
              })()
            }
            <Text fontSize={['xs', 'md']}>{project.description}</Text>
            { (() => {
                if (i === 1) {
                  return (
                    <a 
                      href='https://www.vecteezy.com/' 
                      target="_blank" 
                      className="extra-small-font mt-[-4px]"
                    >
                      Hand and location icons by Vecteezy, go to
                      <ExternalLinkIcon mx='1px' />
                    </a>
                  )
                }
              })()
            }
          </div>
          </Center>
        </div>
      ))}
    </FullScreenSection>
    </>
  );
};

export default ProjectsSection;
