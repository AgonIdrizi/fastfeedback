import React from 'react';
import Card from '@/components/UI/Card/Card';
import Header from '@/components/Header';
import { NextSeo } from 'next-seo';

const DashboardShell = ({ children }) => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const name = path.charAt(1).toUpperCase() + path.slice(2);
  const title = `Fast Feedback - ${name}`;
  const url = `https://fastfeedback.agonidrizi.vercel.app${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <div className="bg-app-bg h-screen">
        <Header />
        <main className="max-w-1250px pl-8 pr-8 mr-auto ml-auto">
          <div className="mt-0 mb-0 ml-auto mr-auto flex flex-col max-w-1250px">
            {children}
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default DashboardShell;
