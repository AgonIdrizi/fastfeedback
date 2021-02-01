import React from 'react';
import Card from '@/components/UI/Card/Card';
import Header from '@/components/Header';

const DashboardShell = ({ children }) => {
  return (
    <div className="bg-app-bg h-screen">
      <Header />
      <main className="max-w-1250px pl-8 pr-8 mr-auto ml-auto">
        <div className="mt-0 mb-0 ml-auto mr-auto flex flex-col max-w-1250px">
          {children}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default DashboardShell;
