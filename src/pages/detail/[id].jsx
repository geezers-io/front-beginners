import { useNavigate, useParams } from 'react-router-dom';
import Trailer from '@/components/Trailer';
import React, { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { getMovie, getMovieVideoInfo } from '@/api/client';
import Loading from '@/components/Loading';
import VoteAverage from '@/components/VoteAverage';
import { ArrowBackIcon, ArrowLeftIcon } from '@chakra-ui/icons';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <Center w="100%" h="100%">
        <Loading />
      </Center>
    );
  }
  return (
    <Box>
      <IconButton
        aria-label="Back"
        icon={<ArrowBackIcon fontSize={50} />}
        onClick={() => navigate(-1)}
        bgColor="transparent !important"
        mb={4}
      />

      <Flex gap={10} flexDirection={{ base: 'column', lg: 'row' }}>
        <Image src={`https://image.tmdb.org/t/p/w300/${info.poster_path}`} alt="영화 포스터" width={300} />

        <Flex flexDirection="column" gap={2}>
          <UnorderedList display="flex" gap={2} listStyleType="none" ml={0}>
            {info.genres.map((genre, idx) => (
              <ListItem key={idx}>
                <Badge color="pink.primary" bgColor="gray" borderRadius="2px">
                  {genre.name}
                </Badge>
              </ListItem>
            ))}
          </UnorderedList>

          <Heading as="h1" fontSize="3rem">
            {info.title}
          </Heading>

          <VoteAverage average10={info.vote_average} starSize="1.66rem" />

          <Flex gap="2px" whiteSpace="noWrap" color="gray3" fontSize="lg">
            <Text>{info.release_date}</Text>
            <Text px={1}>·</Text>
            <Text>{info.runtime}m</Text>
          </Flex>

          <Text fontSize="1.2rem">{info.overview}</Text>
        </Flex>
      </Flex>

      <Divider borderColor="gray2" my={{ base: 10, lg: 15 }} />

      <Box maxW={1024} margin="0 auto">
        <Trailer title={info.title} trailerCode={trailerKey} />
      </Box>
    </Box>
  );
};

export default Detail;
