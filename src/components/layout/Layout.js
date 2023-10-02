import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '@/components/layout/Nav';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
