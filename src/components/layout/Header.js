import styled from '@emotion/styled';
import { Tab, TabList, Tabs } from '@chakra-ui/react';

const Header = () => {
  return (
    <SHeader>
      <img src="/EUTCHA.png" width={500} />

      <nav>
        <Tabs>
          <TabList>
            <Tab Link href="/">
              Home
            </Tab>
            <Tab Link href="/">
              Detail
            </Tab>
            <Tab Link href="/">
              About
            </Tab>
          </TabList>
        </Tabs>
      </nav>
    </SHeader>
  );
};

const SHeader = styled.header`
  padding: 10px 0;
  margin-bottom: 1.8em;
  background-color: black;
`;

export default Header;
