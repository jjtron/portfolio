"use client"
import LandingSection from "./LandingSection";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

export default function Page() {
    const [sectionLength, setSectionLength] = useState(100);
    return (
        <Box  id="aboutme-section"
            h={`calc(${sectionLength}vh)`}
            bg='gray.700'
        >
            <LandingSection
                onRequestMore={() => setSectionLength(150)}
                onRequestLess={() => setSectionLength(100)}
                requestedLength={sectionLength}
            />
        </Box>
    )
}