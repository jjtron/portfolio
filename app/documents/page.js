"use client"
import DocumentsSection from "./DocumentsSection";
import { Box } from "@chakra-ui/react";

export default function Page() {
    return (
        <Box id="contactme-section" h={['calc(100vh)']} bg='gray.700' >
            <DocumentsSection />
        </Box>
    )
}