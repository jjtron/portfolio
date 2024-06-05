"use client"
import ContactMeSection from "./ContactMeSection";
import { Box } from "@chakra-ui/react";

export default function Page() {
    return (
        <Box id="contactme-section" h={['calc(100vh)']} bg='gray.800' >
            <ContactMeSection />
        </Box>
    )
}