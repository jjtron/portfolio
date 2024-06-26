"use client"
import ProjectsSection from "./ProjectsSection";
import { Box } from "@chakra-ui/react";

export default function Page() {
    return (
        <Box id="projects-section" h={['calc(120vh)', 'calc(100vh)']} bg='gray.700' >
            <ProjectsSection />
        </Box>
    )
}