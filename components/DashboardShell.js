import React from 'react';
import Card from '@/components/UI/Card/Card';
import Header from '@/components/Header';
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children }) => {
  return (
    <div className="bg-app-bg h-screen">
      <Header />
      <main className="max-w-1250px pl-8 pr-8 mr-auto ml-auto">
        <div className="breadcrumb-site-header flex justify-between items-center  ml-4 mr-4 ">
          <div className="flex flex-col justify-between items-start">
            <nav aria-label="breadcrumb">
              <ol>
                <li className="">Sites</li>
              </ol>
            </nav>
            <div>
              <h2 className="font-medium text-4xl mb-12">My Sites</h2>
            </div>
          </div>

          <AddSiteModal>+ Add Site</AddSiteModal>
        </div>
        <div className="mt-0 mb-0 ml-auto mr-auto flex flex-col max-w-1250px">
          {children}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default DashboardShell;
