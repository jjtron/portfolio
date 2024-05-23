import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
 faGithub,
 faLinkedin,
 faMedium,
 faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack } from "@chakra-ui/react";

const socials = [
 {
   icon: faEnvelope,
   url: "mailto: hello@example.com",
 },
 { 
   icon: faGithub, 
   url: "https://www.github.com/sureskills", 
 }, 
 { 
   icon: faLinkedin, 
   url: "https://www.linkedin.com/in/sureskills/", 
 }, 
 { 
   icon: faMedium, 
   url: "https://medium.com/@sureskills", 
 }, 
 { 
   icon: faStackOverflow, 
   url: "https://stackoverflow.com/users/sureskills", 
 }, 
]; 

const Header = () => { 
 
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
 return ( 
   <Box 
     position="fixed" 
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
             <a href="#aboutme" onClick={handleClick("aboutme")}> 
               About Me 
             </a> 
             <a href="#projects" onClick={handleClick("projects")}> 
               Projects 
             </a> 
             <a href="#contactme" onClick={handleClick("contactme")}> 
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
