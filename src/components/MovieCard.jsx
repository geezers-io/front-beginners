import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import VoteAverage from '@/components/VoteAverage';
import { css } from '@emotion/react';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`} /* TODO: detail 라우트 정해지면 삽입 */>
      <Card bg="black" boxShadow="0 0 10px rgba(255, 255, 255, 0.5)">
        <CardBody>
          <Image src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="영화 포스터" aspectRatio="2 / 3" />
          <Stack mt={6}>
            <Heading size="md" css={getEllipsisStyles(1, 1.2)}>
              {movie.title}
            </Heading>
            <Text mb={2} css={getEllipsisStyles(4, 1.5)}>
              {movie.overview}
            </Text>
            <VoteAverage average10={movie.vote_average} starSize="1rem" />
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

const getEllipsisStyles = (lineClamp, lineHeight) => css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: ${lineHeight};
  height: calc(${lineClamp} * ${lineHeight} * 1em);

  @supports (display: -webkit-box) {
    display: -webkit-box;
    -webkit-line-clamp: ${lineClamp};
    -webkit-box-orient: vertical;
    white-space: initial;
    text-overflow: initial;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
`;

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
