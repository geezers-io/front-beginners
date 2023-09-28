import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Heading, Stack, Text, CardFooter, Button } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  const navigateToDetail = () => {
    navigate('/');
  };

  return (
    <Card>
      <CardBody>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="영화 포스터" />
        <Stack>
          <Heading size="md">{movie.title}</Heading>
          <Text> {movie.overview} </Text>
          <Text>{movie.vote_average} </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button onClick={navigateToDetail} variant="solid" colorScheme="blue">
          imfomation
        </Button>
      </CardFooter>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    media_type: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
};

export default MovieCard;
