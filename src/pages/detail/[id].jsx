import { useParams } from 'react-router-dom';
import Trailer from '@/components/Trailer';
import React, { useEffect, useState } from 'react';
import { Badge, Box, Center, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { getMovie, getMovieVideoInfo } from '@/api/client';
import Loading from '@/components/Loading';
import VoteAverage from '@/components/VoteAverage';

const Detail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const [trailerKey, setTrailerKey] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieInfo = async id => {
    const info = await getMovie(id);

    setInfo(info);
  };

  const fetchMovieTrailer = async id => {
    const { results } = await getMovieVideoInfo(id);

    const youtubeVideo = results.find(video => video.site === 'YouTube' && video.type === 'Trailer');
    setTrailerKey(youtubeVideo?.key);
  };

  const initialize = async movieId => {
    try {
      setIsLoading(true);

      await Promise.all([fetchMovieInfo(movieId), fetchMovieTrailer(movieId)]);
      console.log('done');
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initialize(Number(id));
  }, []);

  if (isLoading) {
    return (
      <Box className="detail">
        <Center height="100vh">
          <Loading />
        </Center>
      </Box>
    );
  }
  return (
    <Box className="detail">
      <Flex>
        <Box flex="1">
          <Heading as="h1" size="xl">
            {info.title}
          </Heading>
          <VoteAverage average10={info.vote_average} starSize="2rem" />
          <Text fontSize="lg">Genres: {info.genres.map(genre => genre.name).join(', ')}</Text>
          <Text fontSize="lg">Runtime: {info.runtime} minutes</Text>

          <Box className="movie-info">
            <Flex className="movie-info__summary">
              <Box className="movie-info__summary__text-wrap">
                <Text className="movie-info__title">{info.title}</Text>
                <Text className="movie-info__year">{info.release_date}</Text>
                {info.runtime !== 0 && <Text className="movie-info__runtime">runtime: {info.runtime}</Text>}

                <UnorderedList className="genre-list" listStyleType="none">
                  {info.genres.map((genre, idx) => (
                    <ListItem key={idx} className="genre-list__item">
                      <Badge variant="outline" color="white" bgColor="gray">
                        {genre.name}
                      </Badge>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Flex>

            <Box className="description">
              <Text>{info.overview && `Official Trailer Video: ${info.overview}`}</Text>
            </Box>
          </Box>
        </Box>

        <Box flex="1">
          <Trailer title={info.title} trailerCode={trailerKey} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Detail;
