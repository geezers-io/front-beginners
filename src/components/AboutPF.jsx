import React from 'react';
import { Box, Flex, Text, Link, Heading, Highlight } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const GitIcon = () => {
  return (
    <Flex flexDirection="column" alignItems="center" className="about__icon-wrap">
      <img
        className="about__icon"
        src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
        alt="Github Icon"
        width="20px"
        height="25px"
      />
    </Flex>
  );
};

const AboutPF = () => {
  return (
    <div textalign="center">
      <Heading>
        {' '}
        안녕하세요 저희는... <br />{' '}
      </Heading>
      <Text fontSize="3xl">
        프론트엔드 개발자를 꿈꾸는 새싹들입니다...
        <br />
        <Highlight query="왓챠피디아" styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
          왓챠피디아
        </Highlight>
        를 기반으로 페이지를 제작하였습니다.
        <br />
        저희의 무궁무진한 가능성이 기대되시죠?
        <br />
        환상의 듀오인 제작자 임희정, 이준현의 멋진 앞날을 기대해주세요.
      </Text>
      <br />
      <Box
        w="100%"
        maxWidth="25rem"
        minHeight="8rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#ffffff"
        borderRadius="5px"
        padding="1.33rem"
      >
        <Flex alignItems="center" className="text-wrap">
          <GitIcon />
          <Text fontSize="1.25rem" fontWeight="500" color="black">
            Github{' '}
          </Text>
          <Link
            href="https://github.com/geezers-io/front-beginners"
            fontSize="1.25rem"
            color="#000000"
            textDecoration="none"
            isExternal
          >
            geezers-io/front-beginners
            <ExternalLinkIcon />
          </Link>
        </Flex>

        <Flex alignItems="center" className="text-wrap">
          <GitIcon />
          <Text fontSize="1.25rem" fontWeight="500" color="black">
            Github
          </Text>
          <Link href="https://github.com/Ellsy23" fontSize="1.25rem" color="#000000" textDecoration="none" isExternal>
            Ellsy23
            <ExternalLinkIcon />
          </Link>
        </Flex>

        <Flex alignItems="center" className="text-wrap">
          <GitIcon />
          <Text fontSize="1.25rem" fontWeight="500" color="black">
            Github
          </Text>
          <Link
            href="https://github.com/heejung0413"
            fontSize="1.25rem"
            color="#000000"
            textDecoration="none"
            isExternal
          >
            heejung0413
            <ExternalLinkIcon />
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default AboutPF;
