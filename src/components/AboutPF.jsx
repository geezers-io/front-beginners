import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const GitIcon = () => {
  return (
    <Flex alignItems="center" className="about__icon-wrap">
      <img
        className="about__icon"
        src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
        alt="Github Icon"
        w="25px"
        h="25px"
      />
    </Flex>
  );
};

const AboutPF = () => {
  return (
    <Box
      w="100%"
      maxWidth="12.5rem"
      minHeight="9.5rem"
      display="flex"
      alignItems="center"
      flexDirection="column"
      backgroundColor="#ffffff"
      borderRadius="5px"
    >
      <Flex alignItems="center" className="text-wrap">
        <GitIcon />
        <Text fontSize="1.25rem" fontWeight="500">
          Github
        </Text>
        <Link
          href="https://github.com/geezers-io/front-beginners"
          fontSize="1.25rem"
          color="#000000"
          textDecoration="none"
          isExternal
        >
          geezers-io/front-beginners
          <ExternalLinkIcon />
        </Link>
      </Flex>
    </Box>
  );
};

export default AboutPF;
