import React from 'react';
import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  --max-w: 1600px;
  --main-padding-x: 2.4em;
`;
const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-w);
  padding: var(--main-padding-x);
`;

export default Layout;
