import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Heading,
  Highlight,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Button,
} from '@chakra-ui/react';
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
      <Text fontSize="md">
        {' '}
        이 페이지는
        <Highlight query="왓챠피디아" styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
          왓챠피디아
        </Highlight>
        의 UI 디자인을 참조하여 페이지를 제작하였습니다. <br /> <br />
      </Text>
      <img src="/logo.png" alt="logo" width="200" height="auto" /> <br />
      <Heading> 안녕하세요 읏챠~는... </Heading>
      <Text fontSize="3xl">
        <br />
        소박한 영화컨텐츠와 더불어 터무니없는 혜택들!
        <br />
        그냥 영화 정보만 즐겨봐~!
        <br />
        사용자의 자기주도성을 불러일으킬 수 있는 읏챠만의 서비스!
        <br /> <br />
        <Text color="tomato"> 개인의 취향? </Text>
        너가 알아서 찾아봐!
        <br />
        서비스가 없는 우리만의 특별한 매력!
        <br /> <br />
        나중에 여유가 되면 만들어볼게!
        <br /> 하지만 우리가 좀 바빠서~! 사용자의 불편함은 유감으로 생각해!
        <br /> <br />
        개발자팀도 소개할게요!
      </Text>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                귀여운 희정이
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            앞으로의 무궁무진한 성장가능성을 가진 귀여운 개발자! <br />
            취미는 독서 ! 전반적인 프로젝트의 분위기와 완성도에 90%를 기여하였습니당~! ㅎㅎ
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                준현이
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>준현이는 그냥 준현이.</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
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
