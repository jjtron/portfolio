"use client"
import Projects from './Projects';
import { Box } from "@chakra-ui/react";

export default function Page() {
    return (
        <Box
            h={['calc(100vh)']}
            bg='gray.700'
        >
            <Projects />
        </Box>
    )
}