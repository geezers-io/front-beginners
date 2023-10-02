import styled from '@emotion/styled';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

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
      <Box>
        <img src="/EUTCHA.png" alt="logo" width="300" height="auto" />
      </Box>

      <nav>
        <Tabs variant="unstyled" defaultIndex={tabDefaultIndex}>
          <TabList>
            <Link to="/">
              <Tab _selected={{ color: 'pink.primary' }}>HOME</Tab>
            </Link>
            <Link to="/about">
              <Tab _selected={{ color: 'pink.primary' }}>ABOUT</Tab>
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
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  padding-bottom: 1.33rem;
  height: var(--header-height);
  box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.colors.gray};
`;
export default Header;
