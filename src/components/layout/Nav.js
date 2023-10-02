import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Nav = () => {
  return (
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
  );
};

const SNav = styled.header``;

export default Nav;
