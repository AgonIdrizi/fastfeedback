import React from 'react';
import AddSiteModal from './AddSiteModal';

const SiteTableHeader = () => {
  return (
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
  );
};

export default SiteTableHeader;
