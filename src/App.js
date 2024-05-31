import { ChakraProvider, Box, Divider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
        <Header />
        <Box id="aboutme-section" h={['calc(120vh)', 'calc(100vh)']} bg={{ base: 'red.400', sm: 'gray.400', md: 'blue.400', lg: 'green.400' }} >
          <LandingSection />
        </Box>

        <Box id="projects-section" h={['calc(120vh)', 'calc(100vh)']} bg={{ base: 'red.500', sm: 'gray.500', md: 'blue.500', lg: 'green.500' }} >
          <ProjectsSection />
        </Box>

        <Box id="contactme-section" h={['calc(120vh)', 'calc(100vh)']} bg={{ base: 'red.600', sm: 'gray.600', md: 'blue.600', lg: 'green.600' }} >
          <ContactMeSection />
        </Box>
        {/*
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        */}

        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
