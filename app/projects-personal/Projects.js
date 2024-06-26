"use client"
import { Flex, Card, CardBody, Text,
         Heading, Image, HStack } from "@chakra-ui/react";
import { useState } from 'react';
import clsx from 'clsx';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Header from "../Header";

export default function Projects() {
    const [index, setIndex] = useState(0);
    return (
      <>
        <Header />

        <Flex align="center" direction='column' bg='gray.700'>
            <Heading p={2} size={['xs','sm', 'md', 'lg', 'xl']} color='white'>Personal Projects</Heading>
            <div className='flex flex-col w-3/5'>
                <div className='flex flex-row justify-center'>
                    <div className={clsx('cursor-pointer rounded-t-md mr-0.5 w-1/2 md:pl-4 pl-2 md:text-2xl font-bold text-sm', { 'bg-r160g174b192' : index === 0, 'bg-white text-black text-opacity-40' : index=== 1 })}
                         onClick={() => setIndex(0)} >Six Questions</div>
                    <div className={clsx('cursor-pointer rounded-t-md w-1/2 md:pl-4 pl-2 md:text-2xl font-bold text-sm', { 'bg-white text-black text-opacity-40' : index === 0, 'bg-r160g174b192' : index=== 1 })}
                         onClick={() => setIndex(1)} >Chess</div>
                </div>
                <div className={clsx('flex flex-row justify-center', { 'visible' : index === 0, 'hidden' : index=== 1})}>
                    <Card bg='gray.400' borderTopRadius={0} p={0}>
                        <CardBody p={[0, 0, 2]}>
                            <Text fontSize={['xs','sm', 'md', 'lg', 'xl']} p={2}>This app is inspired by the famous six questions that one should ask 
                                of one's self before writing about an event.&nbsp;&nbsp;
                                <a className='underline underline-offset-2' href='https://sixquestions.gp-web-dev.com:8443' target="_blank" >
                                    <i>Go to the web-site </i><ExternalLinkIcon mb='5px'/>
                                </a>
                            </Text>
                            <Text fontSize={['xs','sm', 'md', 'lg', 'xl']} p={2}>Anyone using this app is free to add content; 
                                it is only meant to demonstrate my passion for creating front end React applications;
                                with backend React Server Components (RSCs), CRUD capability, 
                                this one with a backend PostgreSQL database, deployed on a Linux web server, 
                                secured by an SSL certificate (https), and protected by state-of-the 
                                art User Authentication and Session Management (JWT).</Text>
                            <HStack justify="center" spacing="5%">
                                <Image h="80%" w="80%" src={`/images/six1.png`} alt='six1' />
                            </HStack>
                        </CardBody>
                    </Card>
                </div>
                <div className={clsx('flex flex-row justify-center', { 'hidden' : index === 0, 'visible' : index=== 1})}>
                    <Card bg='gray.400' borderTopRadius={0} p={0}>
                        <CardBody p={[0, 0, 2]}>
                            <Text fontSize={['xs','sm', 'md', 'lg', 'xl']} p={2}>
                                My Chess game designed and built on React. Play against the machine or against yourself.
                                This app utilizes and demonstrates the amazing speed with which React works with
                                complex, high-density DOM configurations typical of board games. &nbsp;
                                <a className='underline underline-offset-2' href='https://chess.gp-web-dev.com:8444/dnd' target="_blank" >
                                    <i>Go to the web-site </i><ExternalLinkIcon mb='5px'/>
                                </a>
                            </Text>
                            <Text fontSize={['xs','sm', 'md', 'lg', 'xl']} p={2}>
                                Drag-and-drop component design credit goes to &nbsp;
                                <a className='underline underline-offset-2' href='https://docs.dndkit.com' target="_blank" >
                                    <i>NPM Dnd-Kit </i><ExternalLinkIcon mb='5px'/>
                                </a>
                            </Text>
                            <Text fontSize={['xs','sm', 'md', 'lg', 'xl']} p={2}>
                                Driven an algebraic notation chess engine that validates board position,
                                producing a list of viable moves (notated), regulating the moves of both sides. Credit goes to &nbsp;
                                <a className='underline underline-offset-2' href='https://www.npmjs.com/package/chess' target="_blank" >
                                    <i>NPM node-chess </i><ExternalLinkIcon mb='5px'/>
                                </a>
                            </Text>
                            <HStack justify="center" spacing="5%">
                                <Image h="80%" w="80%" src={`/images/chess.png`} alt='six1' />
                            </HStack>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Flex>

    </>
    )
}
