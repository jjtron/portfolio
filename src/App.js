import { ChakraProvider, Box, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { Routes, Route, useNavigate } from "react-router-dom"

function App() {

  const [sectionLength, setSectionLength] = useState(100);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
        <Header />

        <Routes>

          <Route path='/' element={<Base/>} /> {/* automatic redirect to the '/aboutme' page */}

          <Route path="/aboutme" element={
            <Box  id="aboutme-section"
                  h={`calc(${sectionLength}vh)`}
                  bg={{ base: 'red.400', sm: 'gray.400', md: 'blue.400', lg: 'green.400' }}
            >
              <LandingSection
                onRequestMore={() => setSectionLength(150)}
                onRequestLess={() => setSectionLength(100)}
                requestedLength={sectionLength}
              />
            </Box>
          } />

          <Route path="/projects" element={
            <Box id="projects-section" h={['calc(120vh)', 'calc(100vh)']} bg={{ base: 'red.500', sm: 'gray.500', md: 'blue.500', lg: 'green.500' }} >
              <ProjectsSection />
            </Box>
          } />

          <Route path="/contactme" element={
            <Box id="contactme-section" h={['calc(120vh)', 'calc(100vh)']} bg={{ base: 'red.600', sm: 'gray.600', md: 'blue.600', lg: 'green.600' }} >
              <ContactMeSection />
            </Box>
          } />

        </Routes>
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

const Base = () => {
    const navigate = useNavigate();
    useEffect(() => { navigate(`/aboutme`); }, []);
}

export default App;
