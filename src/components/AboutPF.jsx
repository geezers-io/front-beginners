import React from 'react';
import { Box, Flex, Text, Link, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    pink: {
      primary: '#fe0559',
      secondary: '#ff7471',
    },
    black: '#000000',
    white: '#ffffff',
  },
});

const GitIcon = () => {
  return (
    <Flex flexDirection="column" alignItems="center" className="about__icon-wrap">
      <img
        className="about__icon"
        src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
        alt="Github Icon"
        width="25px"
        height="25px"
      />
    </Flex>
  );
};

const AboutPF = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100%"
        maxWidth="25rem"
        minHeight="8rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        backgroundColor="white"
        borderRadius="5px"
        padding="1.33rem"
      >
        <Flex alignItems="center" className="text-wrap">
          <GitIcon />
          <Text fontSize="1.25rem" fontWeight="500">
            Github
          </Text>
          <Link
            href="https://github.com/geezers-io/front-beginners"
            fontSize="1.25rem"
            fontWeight="bold"
            color="black"
            textDecoration="none"
            isExternal
          >
            geezers-io/front-beginners
            <ExternalLinkIcon />
          </Link>
        </Flex>

        <Flex alignItems="center" className="text-wrap">
          <GitIcon />
          <Text fontSize="1.25rem" fontWeight="500">
            Github
          </Text>
          <Link href="https://github.com/Ellsy23" fontSize="1.25rem" color="black" textDecoration="none" isExternal>
            Ellsy23
            <ExternalLinkIcon />
          </Link>
        </Flex>

        <Flex alignItems="center" className="text-wrap">
          <GitIcon />
          <Text fontSize="1.25rem" fontWeight="500">
            Github
          </Text>
          <Link href="https://github.com/heejung0413" fontSize="1.25rem" color="black" textDecoration="none" isExternal>
            Heejung0413
            <ExternalLinkIcon />
          </Link>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default AboutPF;
