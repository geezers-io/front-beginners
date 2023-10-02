import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, ChakraProvider, extendTheme } from '@chakra-ui/react';

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

const Trailer = ({ title, trailerCode }) => {
  const src = `https://www.youtube.com/embed/${trailerCode}?autoplay=1`;
  const isTrailer = Boolean(trailerCode);

  return (
    <ChakraProvider theme={theme}>
      <Box
        className={isTrailer ? 'trailer' : 'trailer trailer--none'}
        w="100%"
        h={isTrailer ? '90%' : '100%'}
        animation={isTrailer ? 'fade-in 0.5s ease-in-out forwards' : 'none'}
        borderColor="black"
        borderWidth="1px"
        borderRadius="5px"
        overflow="hidden"
      >
        {isTrailer ? (
          <iframe
            title={title}
            src={src}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        ) : (
          <Text
            className="trailer--none"
            position="relative"
            backgroundColor="rgba(255, 255, 255, 0.5)"
            color="white"
            fontWeight="400"
            fontSize="1.1rem"
            textAlign="center"
          >
            No Trailer
          </Text>
        )}
      </Box>
    </ChakraProvider>
  );
};

Trailer.propTypes = {
  title: PropTypes.string.isRequired,
  trailerCode: PropTypes.string.isRequired,
};

export default Trailer;
