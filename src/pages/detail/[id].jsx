import { useParams } from 'react-router-dom';
import Trailer from '@/components/Trailer';
import React, { useEffect, useState } from 'react';
import { Badge, Box, Center, Flex, Heading, ListItem, Spinner, Text, UnorderedList } from '@chakra-ui/react';
import { getMovie } from '@/api/client';

const Detail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMovieInfos = async id => {
    try {
      const info = await getMovie(id);

      setInfo(info);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieInfos(Number(id));
  }, []);

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
              {info.title}
            </Heading>
            <Text fontSize="lg">Year: {info.year}</Text>
            <Text fontSize="lg">Genres: {info.genres.map(genre => genre.name).join(', ')}</Text>
            <Text fontSize="lg">Runtime: {info.runtime} minutes</Text>

            <Box className="movie-info">
              <Flex className="movie-info__summary">
                <Box className="movie-info__summary__text-wrap">
                  <Text className="movie-info__title">{info.title}</Text>
                  <Text className="movie-info__year">{info.release_date}</Text>
                  {info.runtime !== 0 && <Text className="movie-info__runtime">{info.runtime}</Text>}

                  <UnorderedList className="genre-list" listStyleType="none">
                    {info.genres.map((genre, idx) => (
                      <ListItem key={idx} className="genre-list__item">
                        <Badge variant="outline">{genre.name}</Badge>
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
            <Trailer title={info.title} trailerCode={undefined} />
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Detail;
