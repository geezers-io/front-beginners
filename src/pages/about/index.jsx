import React from 'react';
import { Box } from '@chakra-ui/react';
import AboutPF from '@/components/AboutPF';

const AboutPage = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="about"
      animation="fade-in 0.5s ease-in-out forwards"
    >
      <AboutPF />
    </Box>
  );
};

export default AboutPage;
