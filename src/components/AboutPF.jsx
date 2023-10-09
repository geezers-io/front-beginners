import {
  Box,
  Text,
  Heading,
  Highlight,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from '@chakra-ui/react';
import GithubLink from '@/components/GithubLink';

const AboutPF = () => {
  return (
    <Box color="white" width="2xl">
      <Text fontSize="md" color="white">
        이 서비스는
        <Highlight query="왓챠피디아" styles={{ px: 2, py: 1, mx: 1, rounded: 'full', bg: 'pink' }}>
          왓챠피디아
        </Highlight>
        의 UI 디자인을 참조하여 페이지를 제작하였습니다. <br /> <br />
      </Text>
      <img src="/logo.png" alt="logo" width="200" height="auto" /> <br />
      <Heading>
        안녕하세요
        <Link
          href="https://github.com/geezers-io/EUTCHA"
          isExternal
          textDecoration="underline"
          textUnderlineOffset={6}
          mx={2}
        >
          읏챠~
        </Link>
        는...
      </Heading>
      <Text fontSize="xl" color="white">
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
      <Accordion mt={8} allowToggle allowMultiple>
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
            <GithubLink endpoint="heejung0413" />
            <br />
            앞으로의 무궁무진한 성장가능성을 가진 귀여운 개발자! <br />
            저는 주로 about 페이지 디자인, home페이지 API 연결과 css 디자인, header, nav제작을 주로 하였습니다.
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
          <AccordionPanel pb={4}>
            <GithubLink endpoint="Ellsy23" />
            <br />
            준현이는 그냥 준현이. 는 아니고! <br /> <br />
            전반적으로 맡은 역할
            <br /> Header - CSS, Home - CSS, About - CSS, Paged Style Detail - CSS, Paged Style Router
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AboutPF;
