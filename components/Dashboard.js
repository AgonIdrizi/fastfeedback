import React from 'react';
import Card from '@/components/UI/Card/Card';
import Header from '@/components/Header';

const Dashboard = ({ children }) => {
  return (
    <div className="bg-app-bg h-screen">
      <Header />
      <main className="max-w-1250px pl-8 pr-8 mr-auto ml-auto">
        <div className="breadcrumb-site-header flex flex-col justify-between items-start  ml-4 mr-4 ">
          <nav aria-label="breadcrumb">
            <ol>
              <li className="">Sites</li>
            </ol>
          </nav>
          <div>
            <h2 className="font-medium text-4xl mb-12">My Sites</h2>
          </div>
        </div>
        <div className="mt-0 mb-0 ml-auto mr-auto flex flex-col max-w-1250px">
          {children}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
