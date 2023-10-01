/* Modules */
import React from 'react';
import { Box } from '@chakra-ui/react';

/* Components */
import AboutPF from '@/components/AboutPF';

const About = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="about"
      animation="fade-in 0.5s ease-in-out forwards"
    ></Box>
  );
};

export default About;
