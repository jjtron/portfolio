import React from "react";
import DropdownList from './dropdown';
import { Box, HStack, Stack, Image } from "@chakra-ui/react";
import { redirect } from 'next/navigation';

const socials = [
 {
   icon: 'email',
   url: "mailto: webmaster@gp-web-dev.com",
 },
 { 
   icon: 'github', 
   url: "https://www.github.com/jjtron", 
 }, 
 { 
   icon: 'linkedin',
   url: "https://www.linkedin.com/in/gerald-petron-74a0242a9?trk=people-guest_people_search-card",
 },
]; 

const Header = () => { 

 const handleClick = (anchor) => () => { redirect(`/${anchor}`); };

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
                 <Image src={`/images/${icon}.png`} alt={icon} key={url} />
                 {/* <FontAwesomeIcon icon={icon} size="2x" key={url} /> */}
               </a> 
             ))} 
           </HStack> 
         </nav> 
         <nav> 
           <HStack spacing={8}> 
             <a href="aboutme" onClick={handleClick("aboutme")} className="extra-small-font md:text-base"> 
               About Me 
             </a> 
             <DropdownList />
             <a href="contactme" onClick={handleClick("contactme")} className="extra-small-font md:text-base"> 
               Contact Me 
             </a> 
             <a href="documents" onClick={handleClick("documents")} className="extra-small-font md:text-base"> 
               Docs
             </a>
           </HStack> 
         </nav> 
       </Stack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header;
