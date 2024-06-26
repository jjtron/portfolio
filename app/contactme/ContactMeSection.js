import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Center,
  useBreakpointValue
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "../FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import Alert from "../Alert";
import Header from "../Header";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: (values) => {
      submit('/api/contactme', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"), 
      email: Yup.string().email("Invalid email address").required("Required"), 
      comment: Yup.string() 
          .min(25, "Please verbalize with at least 25 characters") 
          .required("Required"),
    }),
  });

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]);

  const breakPoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl'})

  return (
    <>
    <Alert />
    <Header />
    <FullScreenSection
      isDarkBackground
      width="100%"
    >
      <VStack w="100%">
        <Heading id="contactme-section">Contact me</Heading>
        <Box rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <Center>
            <VStack spacing={4} w='90%'>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" type="email" {...formik.getFieldProps('email')} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" 
                  {...formik.getFieldProps('type')}
                  >
                  <option value="hireMe">Job Interview</option>
                  <option value="freelance">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={150}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                
              </FormControl>
              <Button isLoading={isLoading} loadingText='Submitting' type="submit" colorScheme="blue" width="full">
                Submit 
              </Button>
            </VStack>
            </Center>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
    </>
  );
};

export default LandingSection;
