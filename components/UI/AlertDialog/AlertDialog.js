import React from 'react';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';

const AlertDialog = ({
  showModal,
  setShowModal,
  handleDeleteFeedback,
  title,
  children
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto modal-min-width max-w-1/4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 text-primary text-base font-medium flex-auto">
                  {children}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t gap-4 border-solid border-gray-300 rounded-b">
                  <Button
                    btnClassType={BUTTON_CLASS_TYPES.secondaryButton}
                    onClick={(e) => setShowModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    btnClassType={BUTTON_CLASS_TYPES.dangerButton}
                    onClick={() => handleDeleteFeedback()}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AlertDialog;
