import React from 'react';

const FeedbackTableHeader = () => {
  return (
    <div className="breadcrumb-site-header flex justify-between items-center  ml-4 mr-4 ">
      <div className="flex flex-col justify-between items-start">
        <nav aria-label="breadcrumb">
          <ol>
            <li className="">Feedback</li>
          </ol>
        </nav>
        <div>
          <h2 className="font-medium text-4xl mb-12">My Feedback</h2>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTableHeader;
