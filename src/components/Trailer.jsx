import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Trailer = ({ title, trailerCode }) => {
  const src = 'https://www.youtube.com/embed/${trailerCode}?autoplay=1';
  const isTrailer = Boolean(trailerCode);

  return (
    <Box
      className={isTrailer ? 'trailer' : 'trailer trailer--none'}
      w="100%"
      h="100%"
      animation="fade-in 0.5s ease-in-out forwards"
    >
      {isTrailer ? (
        <iframe
          title={title}
          src={src}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <Text
          position="relative"
          backgroundColor="rgba(255, 255, 255, 0.05)"
          animation="none !important"
          color="white"
          fontWeight="400"
          fontSize="1.1rem"
          transform="translate(-50%, -50%)"
          top="50%"
          left="50%"
        >
          No Trailer
        </Text>
      )}
    </Box>
  );
};

Trailer.PropTypes = {
  title: PropTypes.string.isRequired,
  trailerCode: PropTypes.string.isRequired,
};

export default Trailer;
