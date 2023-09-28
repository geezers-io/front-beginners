import React from 'react';
import './layout.css';
import MovieListPage from '@/pages';
import Header from './header';
import Footer from './footer';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <MovieListPage />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
