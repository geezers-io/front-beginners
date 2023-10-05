import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Center, Spinner, Text, Flex, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Info from '../components/Info';
import Trailer from '../components/Trailer';

function Detail({ location, history }) {
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMovieInfos = async id => {
    try {
      const {
        data: {
          data: { movie: info },
        },
      } = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);

      setInfo(info);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    } else {
      const { id } = location.state;
      getMovieInfos(id);
    }
  }, [location.state, history]);

  if (!!location.state) {
    return (
      <Box className="detail">
        {isLoading ? (
          <Center height="100vh">
            <Spinner size="xl" />
          </Center>
        ) : (
          <Flex>
            <Box flex="1">
              <Heading as="h1" size="xl">
                {info.title_english}
              </Heading>
              <Text fontSize="lg">Year: {info.year}</Text>
              <Text fontSize="lg">Genres: {info.genres.join(', ')}</Text>
              <Text fontSize="lg">Runtime: {info.runtime} minutes</Text>
              <Info desc={info.description_full} />
            </Box>
            <Box flex="1">
              <Trailer title={info.title_english} trailerCode={info.yt_trailer_code} />
            </Box>
          </Flex>
        )}
      </Box>
    );
  }
  return null;
}

Detail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Detail;
