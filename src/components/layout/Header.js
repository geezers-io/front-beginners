import styled from '@emotion/styled';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  const tabDefaultIndex = (() => {
    switch (pathname) {
      case '/':
        return 0;
      case 'about':
        return 1;
      default:
        return -1;
    }
  })();

  return (
    <SHeader>
      <img src="/EUTCHA.png" width={500} />

      <nav>
        <Tabs defaultIndex={tabDefaultIndex}>
          <TabList>
            <Link to="/">
              <Tab>Home</Tab>
            </Link>
            <Link to="/about">
              <Tab>About</Tab>
            </Link>
          </TabList>
        </Tabs>
      </nav>
    </SHeader>
  );
};

const SHeader = styled.header`
  padding: 10px 0;
  margin-bottom: 1.8em;
  background-color: ${({ theme }) => theme.colors.black};
`;

export default Header;
