import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Heading, Stack, Text, CardFooter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import VoteAverage from '@/components/VoteAverage';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`} /* TODO: detail 라우트 정해지면 삽입 */>
      <Card bg="black" boxShadow="0 0 10px rgba(255, 255, 255, 0.5)">
        <CardBody>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="영화 포스터" />
          <Stack>
            <Heading size="md">{movie.title}</Heading>
            <Text> {movie.overview} </Text>
            <VoteAverage average10={movie.vote_average} starSize="1rem" />
          </Stack>
        </CardBody>
      </Card>
    </Link>
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
