import styled from '@emotion/styled';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <SHeader>
      <Link to="/">
        <img src="/logo.png" alt="logo" width="120" height="auto" />
      </Link>

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
  height: 80px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 2px 0 0 ${({ theme }) => theme.colors.gray};

  img {
    pointer-events: none;
    user-select: none;
  }
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const SLink = styled(Link)`
  display: block;
  padding: 18px 24px;
  text-decoration: none !important;
  color: ${({ theme, active }) => (active ? theme.colors.pink.primary : theme.colors.white)};
  font-weight: 500;
`;

export default Header;
