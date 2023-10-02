import React from 'react';
import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

const Main = styled.main`
  padding: 2.4em;
`;

export default Layout;
