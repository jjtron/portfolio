import { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, HStack, Divider, Image, Text, Center, useBreakpointValue } from "@chakra-ui/react";
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
    getImageSrc: () => require("../images/fileManagementOrig.png"),
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
  const breakPoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl'})

  return (
    <FullScreenSection
      isDarkBackground
      width="100%"
    >
      <Heading pt={["90px", "85px", "40px"]} size={['sm', 'md', 'lg']} id="projects-section">My work at M2 Systems, Corp</Heading>
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
                if (i === 4 && (breakPoint === "lg" || breakPoint === "md")) {
                  return (<Image h="calc(50vh)" id={project.description} src={project.getImageSrc()} alt={project.title} />)
                } else if (breakPoint === "base" && i === 5) {
                  return (<Image h="calc(40vh)" id={project.description} src={project.getImageSrc()} alt={project.title} />)
                } else {
                  return (<Image id={project.description} src={project.getImageSrc()} alt={project.title} />)
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
            <Divider orientation='horizontal' />
            <a 
              href='https://www.gp-web-dev.com/' 
              target="_blank" 
            >
              {(() => {
                if (breakPoint === "base" && i === 5) {
                  return (
                    <>
                      <p className="super-small-font">For another sample of my work,</p>
                      <p className="super-small-font">(a personal React project), go to<ExternalLinkIcon mx='1px'/></p>
                    </>
                  )
                } else {
                  return (
                    <p className="extra-small-font mt-2">For another sample of my work,
                     (a personal React project), go to<ExternalLinkIcon mx='1px'/></p>
                  )
                }
              })()}
            </a>
          </div>
          </Center>
        </div>
      ))}
    </FullScreenSection>
  );
};

export default ProjectsSection;
