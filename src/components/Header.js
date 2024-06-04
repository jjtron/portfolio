import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
 faGithub,
 faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

const socials = [
 {
   icon: faEnvelope,
   url: "mailto: webmaster@gp-web-dev.com",
 },
 { 
   icon: faGithub, 
   url: "https://www.github.com/jjtron", 
 }, 
 { 
   icon: faLinkedin,
   url: "https://www.linkedin.com/in/gerald-petron-74a0242a9?trk=people-guest_people_search-card",
 },
]; 

const Header = () => { 
 
 const navigate = useNavigate();
 const handleClick = (anchor) => () => { navigate(`/${anchor}`); };

 return ( 
   <Box 
     position="fixed"
     w='100%'
     top={0} 
     left={0} 
     right={0} 
     backgroundColor="#18181b"
   > 
     <Box color="white" maxWidth="1280px" margin="0 auto"> 
       <Stack direction={[ 'column', 'column', 'row' ]}
         px={{ base: 2, sm: 4, md: 8, lg: 12 }} 
         py={2} 
         justifyContent="space-between" 
         alignItems="center" 
       > 
         <nav> 
           <HStack spacing={8}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 
         <nav> 
           <HStack spacing={8}> 
             <a href="aboutme" onClick={handleClick("aboutme")}> 
               About Me 
             </a> 
             <a href="projects" onClick={handleClick("projects")}> 
               Projects 
             </a> 
             <a href="contactme" onClick={handleClick("contactme")}> 
               Contact Me 
             </a> 
           </HStack> 
         </nav> 
       </Stack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header;
