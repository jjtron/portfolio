import { ChakraProvider, Box } from "@chakra-ui/react";
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
                  bg='gray.800'
            >
              <LandingSection
                onRequestMore={() => setSectionLength(150)}
                onRequestLess={() => setSectionLength(100)}
                requestedLength={sectionLength}
              />
            </Box>
          } />

          <Route path="/projects" element={
            <Box id="projects-section" h={['calc(120vh)', 'calc(100vh)']} bg='gray.800' >
              <ProjectsSection />
            </Box>
          } />

          <Route path="/contactme" element={
            <Box id="contactme-section" h={['calc(120vh)', 'calc(100vh)']} bg='gray.800' >
              <ContactMeSection />
            </Box>
          } />

        </Routes>

        <Alert />

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
