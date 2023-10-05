/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, ListItem, Badge, Flex, UnorderedList } from '@chakra-ui/react';

const GenreList = ({ genres }) => {
  return (
    <UnorderedList className="genre-list" listStyleType="none">
      {genres.map((genre, idx) => (
        <ListItem key={idx} className="genre-list__item">
          <Badge variant="outline">{genre}</Badge>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

const Description = ({ desc }) => {
  return (
    <Box className="description">
      <Text>{desc && `Official Trailer Video: ${desc}`}</Text>
    </Box>
  );
};

const MovieInfo = ({ title, year, genres, desc, runtime }) => {
  return (
    <Box className="movie-info">
      <Flex className="movie-info__summary">
        <Box className="movie-info__summary__text-wrap">
          <Text className="movie-info__title">{title}</Text>
          <Text className="movie-info__year">{year}</Text>
          {runtime !== 0 && <Text className="movie-info__runtime">{runtime}</Text>}
          <GenreList genres={genres} />
        </Box>
      </Flex>
      <Description desc={desc} />
    </Box>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  desc: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default MovieInfo;
