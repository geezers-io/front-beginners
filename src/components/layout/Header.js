import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <SHeader>
      <Box py={4}>
        <img src="/EUTCHA.png" alt="logo" width="300" height="auto" />
      </Box>

      <Nav>
        <SLink to="/" active={pathname === '/'}>
          HOME
        </SLink>
        <SLink to="/about" active={pathname === '/about'}>
          ABOUT
        </SLink>
      </Nav>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 1rem;
  height: var(--header-height);
  box-shadow: 0 2px 0 0 ${({ theme }) => theme.colors.gray};

  img {
    pointer-events: none;
    user-select: none;
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const SLink = styled(Link)`
  display: block;
  padding: 1em 1.33em;
  text-decoration: none !important;
  color: ${({ theme, active }) => (active ? theme.colors.pink.primary : theme.colors.white)};
  font-weight: 500;
`;

export default Header;
