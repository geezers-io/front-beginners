import React from 'react';
import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  ${({ theme: { breakpoints } }) => {
    return css`
      --main-padding-x: 1.2em;

      @media screen and (min-width: ${breakpoints.lg}) {
        --main-padding-x: 2.4em;
      }
    `;
  }};
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-w);
  padding: var(--main-padding-x);
`;

export default Layout;
