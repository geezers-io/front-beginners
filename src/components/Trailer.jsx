import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Trailer = ({ title, trailerCode }) => {
  const src = 'https://www.youtube.com/embed/${trailerCode}?autoplay=1';
  const isTrailer = Boolean(trailerCode);

  return isTrailer ? (
    <Box
      className="trailer"
      title={title}
      src={src}
      width="100%"
      height="100%"
      animation="fade-in 0.5s ease-in-out forwards"
      as="iframe"
      frameBorder="0"
    ></Box>
  ) : (
    <Box className="no-trailer">No Trailer available.</Box>
  );
};

Trailer.PropTypes = {
  title: PropTypes.string.isRequired,
  trailerCode: PropTypes.string.isRequired,
};

export default Trailer;
